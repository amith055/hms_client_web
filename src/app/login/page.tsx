import { LoginForm } from "@/components/auth/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mountain } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
       <div className="absolute top-8 left-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Mountain className="h-6 w-6" />
          <span>Hostel Mitra</span>
        </Link>
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your hostel dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Register here
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
