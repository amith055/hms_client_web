import { MenuForm } from "@/components/dashboard/menu-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MenuSetupPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight font-headline">Welcome to Hostel Mitra!</CardTitle>
          <CardDescription>
            Let&apos;s set up your weekly mess menu. This will be visible to students and can be updated later.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MenuForm />
        </CardContent>
      </Card>
    </div>
  );
}
