import time
from transformers import pipeline, AutoTokenizer
from datasets import load_dataset
from collections import Counter
import evaluate
from pymongo import MongoClient
import dotenv
import os

dotenv.load_dotenv()

ConnectionString = os.getenv("MONGODB_URI")

connection = MongoClient(ConnectionString)
db = connection["evalAI"]


subset_size = 0.01 
dataset = load_dataset('imdb', split=f'test[:{int(subset_size * 100)}%]')

model_name = "roberta-base"
classifier = pipeline("sentiment-analysis", model=model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)

accuracy_metric = evaluate.load("accuracy")
precision_metric = evaluate.load("precision")
recall_metric = evaluate.load("recall")
f1_metric = evaluate.load("f1")

predictions = []
references = []
inference_times = []

start_time = time.time()

for example in dataset:
    input_text = example['text']
    target_label = example['label']
    
    inputs = tokenizer(input_text, truncation=True, max_length=512, return_tensors="pt")
    truncated_text = tokenizer.decode(inputs['input_ids'][0], skip_special_tokens=True)
    
    prediction_start_time = time.time()
    prediction = classifier(truncated_text)[0]['label']
    prediction_end_time = time.time()
    
    inference_time = prediction_end_time - prediction_start_time
    inference_times.append(inference_time)
    
    predicted_label = 1 if prediction == 'POSITIVE' else 0
    
    predictions.append(predicted_label)
    references.append(target_label)

end_time = time.time()
total_time = end_time - start_time

print("Don't disturb, machine is learning...")
print("Reference Distribution:", Counter(references))

accuracy = accuracy_metric.compute(predictions=predictions, references=references)
precision = precision_metric.compute(predictions=predictions, references=references, zero_division=1)
recall = recall_metric.compute(predictions=predictions, references=references, zero_division=1)
f1 = f1_metric.compute(predictions=predictions, references=references)
average_inference_time = sum(inference_times) / len(inference_times)


print(f"Accuracy: {accuracy['accuracy']}")
print(f"Precision: {precision['precision']}")
print(f"Recall: {recall['recall']}")
print(f"F1 Score: {f1['f1']}")
print(f"Average Inference Time: {average_inference_time} seconds")
print(f"Total Time for {int(subset_size * 100)}% of the dataset: {total_time} seconds")

estimated_total_time = total_time / subset_size * 1.0
print(f"Estimated Total Time for 100% of the dataset: {estimated_total_time} seconds")

cost_per_inference = 0.0001
total_cost = cost_per_inference * len(dataset)
print(f"Estimated Cost: ${total_cost}")

collection = db['model']
collection.insert_one({
    "model": model_name,
    "precision": precision['precision'],
    "accuracy": accuracy['accuracy'],
    "recall": recall['recall'],
    "f1": f1['f1'],
    "average_inference_time": average_inference_time,
    "total_time": total_time,
    "estimated_total_time": estimated_total_time,
    "total_cost": total_cost
})

print("Evaluation completed!")