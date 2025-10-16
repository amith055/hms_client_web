"use server";

import { predictDailyFoodDemand, PredictDailyFoodDemandOutput } from "@/ai/flows/predict-daily-food-demand";
import { z } from "zod";

const actionSchema = z.object({
    date: z.string(),
    hostelId: z.string()
});

export async function getFoodPrediction(input: {date: string, hostelId: string}): Promise<{success: boolean; data?: PredictDailyFoodDemandOutput, error?: string}> {
    const parsedInput = actionSchema.safeParse(input);

    if (!parsedInput.success) {
        return { success: false, error: 'Invalid input.' };
    }

    try {
        const prediction = await predictDailyFoodDemand({
            date: parsedInput.data.date,
            hostelId: parsedInput.data.hostelId
        });
        return { success: true, data: prediction };
    } catch (error) {
        console.error("Food prediction error:", error);
        return { success: false, error: "Failed to get prediction from AI. Please try again." };
    }
}
