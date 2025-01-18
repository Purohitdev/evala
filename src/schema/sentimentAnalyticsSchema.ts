import { z } from "zod";

export const sentimentAnalyticsSchema = z.object({
    name: z.string(),
    precision: z.number(),
    accuracy: z.number(),
    recall: z.number(),
    f1: z.number(),
    average_inference_time: z.number(),
    total_time: z.number(),
    estimated_cost: z.number(),
    total_cost: z.number(),
    category: z.string(),
    dataset: z.string(),
});