"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useToast } from "@/hooks/use-toast";
import { getFoodPrediction } from "@/app/dashboard/food-prediction/actions";
import type { PredictDailyFoodDemandOutput } from "@/ai/flows/predict-daily-food-demand";
import { useAuth } from "@/hooks/use-auth";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";


export function FoodPredictionClient() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [prediction, setPrediction] = useState<PredictDailyFoodDemandOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { hostel } = useAuth();
  
  const chartData = prediction ? [
    { name: 'Breakfast', quantity: prediction.predictedBreakfastQuantity },
    { name: 'Lunch', quantity: prediction.predictedLunchQuantity },
    { name: 'Dinner', quantity: prediction.predictedDinnerQuantity },
  ] : [];

  const handlePredict = async () => {
    if (!date) {
      toast({
        variant: "destructive",
        title: "No Date Selected",
        description: "Please select a date to get a prediction.",
      });
      return;
    }
    if (!hostel) {
        toast({
          variant: "destructive",
          title: "Hostel Not Found",
          description: "Could not find your hostel information. Please try again.",
        });
        return;
    }

    setLoading(true);
    setPrediction(null);
    const formattedDate = format(date, "yyyy-MM-dd");
    const result = await getFoodPrediction({ date: formattedDate, hostelId: hostel.id });
    setLoading(false);

    if (result.success && result.data) {
      setPrediction(result.data);
    } else {
      toast({
        variant: "destructive",
        title: "Prediction Failed",
        description: result.error,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full sm:w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button onClick={handlePredict} disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Predict Demand
        </Button>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-64">
             <Loader2 className="h-16 w-16 animate-spin text-primary" />
        </div>
      )}

      {prediction && (
        <Card>
            <CardHeader>
                <CardTitle>Prediction for {date ? format(date, "PPP") : ""}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">Breakfast</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">{prediction.predictedBreakfastQuantity} units</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">Lunch</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">{prediction.predictedLunchQuantity} units</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base">Dinner</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">{prediction.predictedDinnerQuantity} units</p>
                            </CardContent>
                        </Card>
                    </div>
                     {prediction.notes && (
                        <div>
                            <h4 className="font-semibold">AI Notes:</h4>
                            <p className="text-sm text-muted-foreground">{prediction.notes}</p>
                        </div>
                    )}
                </div>
                 <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <XAxis dataKey="name" stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="hsl(var(--foreground))" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'hsl(var(--background))',
                                    borderColor: 'hsl(var(--border))'
                                }}
                            />
                            <Legend />
                            <Bar dataKey="quantity" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
      )}
    </div>
  );
}
