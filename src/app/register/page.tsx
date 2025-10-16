import { RegisterForm } from "@/components/auth/register-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mountain } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="absolute top-8 left-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Mountain className="h-6 w-6" />
          <span>Hostel Mitra</span>
        </Link>
      </div>
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Register Your Hostel</CardTitle>
          <CardDescription>
            Fill in the details below to get started with Hostel Mitra.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login here
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
