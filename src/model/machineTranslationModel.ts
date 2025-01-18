import mongoose, { Schema, Document } from "mongoose";

export interface machineTranslation extends Document {
    name: string;
    bleu_score: number;
    average_inference_time: number;
    total_time: number;
    estimited_cost: number;
    total_cost: number;
    category: string;
    dataset: string;
}


const machineTranslationSchema: Schema<machineTranslation> = new Schema({
    name: { type: String, required: true },
    bleu_score: { type: Number, required: true },
    average_inference_time: { type: Number, required: true },
    total_time: { type: Number, required: true },
    estimited_cost: { type: Number, required: true },
    total_cost: { type: Number, required: true },
    category: { type: String, required: true },
    dataset: { type: String, required: true },
});

const machineTranslationModel = (mongoose.models.machineTranslation as mongoose.Model<machineTranslation>) || mongoose.model<machineTranslation>("machineTranslation", machineTranslationSchema);

export default machineTranslationModel;