import { MenuForm } from "@/components/dashboard/menu-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MenuPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight font-headline">Weekly Mess Menu</CardTitle>
          <CardDescription>
            View and edit the hostel&apos;s weekly meal plan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MenuForm />
        </CardContent>
      </Card>
    </div>
  );
}
