import time
from transformers import pipeline, AutoTokenizer
from datasets import load_dataset
import evaluate
from pymongo import MongoClient
import dotenv
import os

dotenv.load_dotenv()

ConnectionString = os.getenv("MONGODB_URI")

connection = MongoClient(ConnectionString)
db = connection["evalAI"]

# Load the dataset
subset_size = 0.01  # Use 1% of the dataset for quick evaluation
dataset = load_dataset('wmt14', 'de-en', split=f'test[:{int(subset_size * 100)}%]')

# Define the models to compare
models = [
    "Helsinki-NLP/opus-mt-de-en",
    "facebook/wmt19-en-de"
]

results = []

for model_name in models:
    print(f"Evaluating model: {model_name}")
    
    # Load the model and tokenizer
    translator = pipeline("translation_de_to_en", model=model_name)
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    
    # Load evaluation metrics
    bleu_metric = evaluate.load("bleu")
    
    # Measure inference time and compute metrics
    predictions = []
    references = []
    inference_times = []
    
    start_time = time.time()
    
    for example in dataset:
        input_text = example['translation']['de']
        target_text = example['translation']['en']
        
        # Measure inference time
        prediction_start_time = time.time()
        translation = translator(input_text)[0]['translation_text']
        prediction_end_time = time.time()
        
        inference_time = prediction_end_time - prediction_start_time
        inference_times.append(inference_time)
        
        predictions.append(translation)
        references.append([target_text])  # BLEU expects a list of references
    
    end_time = time.time()
    total_time = end_time - start_time
    
    # Compute metrics
    bleu_score = bleu_metric.compute(predictions=predictions, references=references)
    average_inference_time = sum(inference_times) / len(inference_times)
    
    # Print evaluation results
    print(f"BLEU Score: {bleu_score['bleu']}")
    print(f"Average Inference Time: {average_inference_time} seconds")
    print(f"Total Time for {int(subset_size * 100)}% of the dataset: {total_time} seconds")
    
    # Estimate total time for 100% of the dataset
    estimated_total_time = total_time / subset_size * 1.0
    print(f"Estimated Total Time for 100% of the dataset: {estimated_total_time} seconds")
    
    # Estimate cost (example, assuming $0.0001 per inference)
    cost_per_inference = 0.0001
    total_cost = cost_per_inference * len(dataset)
    print(f"Estimated Cost: ${total_cost}")
    
    # Store results
    results.append({
        "model": model_name,
        "bleu_score": bleu_score['bleu'],
        "average_inference_time": average_inference_time,
        "total_time": total_time,
        "estimated_total_time": estimated_total_time,
        "total_cost": total_cost,
        "category": "machine-translation",
        "dataset": "wmt14"
    })

# Insert results into MongoDB
collection = db['model']
collection.insert_many(results)

print("Evaluation completed!")