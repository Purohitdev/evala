import { z } from "zod";

export const machineTranslationSchema = z.object({
    name: z.string(),
    bleu_score: z.number(),
    average_inference_time: z.number(),
    total_time: z.number(),
    estimated_cost: z.number(),
    total_cost: z.number(),
    category: z.string(),
    dataset: z.string(),
});