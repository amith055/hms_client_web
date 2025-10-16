import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mountain } from 'lucide-react';

export function LandingNav() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-card border-b">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Mountain className="h-6 w-6 text-primary" />
        <span className="ml-2 text-lg font-semibold font-headline">Hostel Mitra</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Button variant="ghost" asChild>
          <Link
            href="/login"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Login
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="/register"
            className="text-sm font-medium"
            prefetch={false}
          >
            Register
          </Link>
        </Button>
      </nav>
    </header>
  );
}
