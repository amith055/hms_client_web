import { FoodPredictionClient } from "@/components/dashboard/food-prediction-client";

export default function FoodPredictionPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight font-headline">
        AI Food Demand Prediction
      </h1>
      <p className="text-muted-foreground">
        Select a date to predict the food demand for breakfast, lunch, and dinner. The AI considers historical data and student attendance patterns.
      </p>
      <FoodPredictionClient />
    </div>
  );
}
