import mongoose, { Schema, Document } from "mongoose";

export interface MachineTranslation extends Document {
    name: string;
    bleu_score: number;
    average_inference_time: number;
    total_time: number;
    estimated_cost: number;
    total_cost: number;
    category: string;
    dataset: string;
}

const machineTranslationSchema: Schema<MachineTranslation> = new Schema({
    name: { type: String, required: true },
    bleu_score: { type: Number, required: true },
    average_inference_time: { type: Number, required: true },
    total_time: { type: Number, required: true },
    estimated_cost: { type: Number, required: true },
    total_cost: { type: Number, required: true },
    category: { type: String, required: true },
    dataset: { type: String, required: true },
});

const machineTranslationModel = (mongoose.models.MachineTranslation as mongoose.Model<MachineTranslation>) || mongoose.model<MachineTranslation>("MachineTranslation", machineTranslationSchema);

export default machineTranslationModel;
