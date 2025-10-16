"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import type { WeeklyMenu } from "@/lib/types";

const menuItemSchema = z.object({
  items: z.string().min(1, "Item list cannot be empty"),
  calories: z.coerce.number().min(0, "Calories must be a positive number"),
});

const dayMenuSchema = z.object({
  breakfast: menuItemSchema,
  lunch: menuItemSchema,
  dinner: menuItemSchema,
});

const weeklyMenuSchema = z.object({
  monday: dayMenuSchema,
  tuesday: dayMenuSchema,
  wednesday: dayMenuSchema,
  thursday: dayMenuSchema,
  friday: dayMenuSchema,
  saturday: dayMenuSchema,
  sunday: dayMenuSchema,
});

type WeeklyMenuFormValues = z.infer<typeof weeklyMenuSchema>;

const days: (keyof WeeklyMenu)[] = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

export function MenuForm() {
  const { hostel } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<WeeklyMenuFormValues>({
    resolver: zodResolver(weeklyMenuSchema),
    defaultValues: hostel?.menu || {
        monday: { breakfast: { items: "", calories: 0 }, lunch: { items: "", calories: 0 }, dinner: { items: "", calories: 0 } },
        tuesday: { breakfast: { items: "", calories: 0 }, lunch: { items: "", calories: 0 }, dinner: { items: "", calories: 0 } },
        wednesday: { breakfast: { items: "", calories: 0 }, lunch: { items: "", calories: 0 }, dinner: { items: "", calories: 0 } },
        thursday: { breakfast: { items: "", calories: 0 }, lunch: { items: "", calories: 0 }, dinner: { items: "", calories: 0 } },
        friday: { breakfast: { items: "", calories: 0 }, lunch: { items: "", calories: 0 }, dinner: { items: "", calories: 0 } },
        saturday: { breakfast: { items: "", calories: 0 }, lunch: { items: "", calories: 0 }, dinner: { items: "", calories: 0 } },
        sunday: { breakfast: { items: "", calories: 0 }, lunch: { items: "", calories:0 }, dinner: { items: "", calories: 0 } },
    }
  });

  const onSubmit = async (values: WeeklyMenuFormValues) => {
    if (!hostel) {
      toast({ variant: "destructive", title: "Error", description: "Hostel data not found." });
      return;
    }
    setLoading(true);
    
    // Transform comma-separated strings to arrays
    const formattedValues = Object.fromEntries(
        Object.entries(values).map(([day, meals]) => [
            day,
            Object.fromEntries(
                Object.entries(meals).map(([mealType, meal]) => [
                    mealType,
                    {
                        ...meal,
                        items: meal.items.split(',').map(item => item.trim()).filter(Boolean)
                    }
                ])
            )
        ])
    );

    try {
      await setDoc(doc(db, "hostels", hostel.id), { menu: formattedValues }, { merge: true });
      toast({ title: "Success", description: "Menu saved successfully." });
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      toast({ variant: "destructive", title: "Error", description: "Failed to save menu." });
    } finally {
        setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {days.map((day) => (
            <Card key={day}>
              <CardHeader>
                <CardTitle className="capitalize">{day}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {(["breakfast", "lunch", "dinner"] as const).map((meal) => (
                  <div key={meal} className="space-y-2 rounded-md border p-4">
                     <h4 className="font-semibold capitalize">{meal}</h4>
                     <FormField
                        control={form.control}
                        name={`${day}.${meal}.items`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Items (comma-separated)</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Idli, Sambar, Chutney" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`${day}.${meal}.calories`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Calories</FormLabel>
                                <FormControl>
                                    <Input type="number" placeholder="e.g. 450" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <Button type="submit" size="lg" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Menu
        </Button>
      </form>
    </Form>
  );
}
