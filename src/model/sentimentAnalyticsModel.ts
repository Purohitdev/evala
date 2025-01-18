import mongoose, { Schema, Document } from "mongoose";

export interface sentimentAnalytics extends Document {
    name: string;
    precision: number;
    accuracy: number;
    recall: number;
    f1: number;
    average_inference_time: number;
    total_time: number;
    estimited_cost: number;
    total_cost: number;
    category: string;
    dataset: string;
}


const sentimentAnalyticsSchema: Schema<sentimentAnalytics> = new Schema({
    name: { type: String, required: true },
    precision: { type: Number, required: true },
    accuracy: { type: Number, required: true },
    recall: { type: Number, required: true },
    f1: { type: Number, required: true },
    average_inference_time: { type: Number, required: true },
    total_time: { type: Number, required: true },
    estimited_cost: { type: Number, required: true },
    total_cost: { type: Number, required: true },
    category: { type: String, required: true },
    dataset: { type: String, required: true },
});

const sentimentAnalyticsModel = (mongoose.models.sentimentAnalytics as mongoose.Model<sentimentAnalytics>) || mongoose.model<sentimentAnalytics>("sentimentAnalytics", sentimentAnalyticsSchema);

export default sentimentAnalyticsModel;