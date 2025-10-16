'use server';

/**
 * @fileOverview Predicts the amount of food needed each day in the hostel, considering student attendance,
 * leave requests, and historical consumption data to minimize waste and ensure adequate supplies.
 *
 * - predictDailyFoodDemand - A function that predicts daily food demand.
 * - PredictDailyFoodDemandInput - The input type for the predictDailyFoodDemand function.
 * - PredictDailyFoodDemandOutput - The return type for the predictDailyFoodDemand function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictDailyFoodDemandInputSchema = z.object({
  date: z.string().describe('The date for which to predict food demand (YYYY-MM-DD).'),
  hostelId: z.string().describe('The unique identifier for the hostel.'),
});

export type PredictDailyFoodDemandInput = z.infer<typeof PredictDailyFoodDemandInputSchema>;

const PredictDailyFoodDemandOutputSchema = z.object({
  predictedBreakfastQuantity: z.number().describe('The predicted quantity of breakfast needed (e.g., in kilograms or number of servings).'),
  predictedLunchQuantity: z.number().describe('The predicted quantity of lunch needed (e.g., in kilograms or number of servings).'),
  predictedDinnerQuantity: z.number().describe('The predicted quantity of dinner needed (e.g., in kilograms or number of servings).'),
  notes: z.string().optional().describe('Any notes or justifications for the prediction.'),
});

export type PredictDailyFoodDemandOutput = z.infer<typeof PredictDailyFoodDemandOutputSchema>;

export async function predictDailyFoodDemand(input: PredictDailyFoodDemandInput): Promise<PredictDailyFoodDemandOutput> {
  return predictDailyFoodDemandFlow(input);
}

const predictDailyFoodDemandPrompt = ai.definePrompt({
  name: 'predictDailyFoodDemandPrompt',
  input: {schema: PredictDailyFoodDemandInputSchema},
  output: {schema: PredictDailyFoodDemandOutputSchema},
  prompt: `You are an AI assistant helping hostel admins predict the daily food demand.

  Consider the following factors when predicting the quantity of food needed for the date {{date}} in hostel {{hostelId}}:

  - Student attendance (estimate based on historical data).
  - Leave requests (if available, adjust demand accordingly).
  - Historical consumption data (use past data to inform the prediction).

  Provide the predicted quantities for breakfast, lunch, and dinner. The output should be a JSON object containing the predicted quantities and any relevant notes or justifications.
  The output must conform to the PredictDailyFoodDemandOutputSchema.

  Ensure that quantities are in reasonable units (e.g., kilograms or number of servings).
  `,
});

const predictDailyFoodDemandFlow = ai.defineFlow(
  {
    name: 'predictDailyFoodDemandFlow',
    inputSchema: PredictDailyFoodDemandInputSchema,
    outputSchema: PredictDailyFoodDemandOutputSchema,
  },
  async input => {
    const {output} = await predictDailyFoodDemandPrompt(input);
    return output!;
  }
);
