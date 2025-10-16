import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BrainCircuit,
  Building,
  DollarSign,
  Megaphone,
  Users,
  UtensilsCrossed,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { LandingNav } from '@/components/landing-nav';
import placeholderImages from '@/lib/placeholder-images.json';

const heroImage = placeholderImages.placeholderImages.find(
  (img) => img.id === 'hero'
);

const featureCards = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Student Management',
    description: 'Easily manage student records, from admission to checkout.',
  },
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-primary" />,
    title: 'Mess Menu Planning',
    description: 'Plan and display weekly mess menus with calorie tracking.',
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: 'Fees Management',
    description: 'Track student fees and highlight outstanding dues effortlessly.',
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: 'Announcements',
    description: 'Broadcast important messages and updates to all students.',
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: 'Room Allocation',
    description: 'Manage room and bed allocations with a clear visual overview.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'AI Food Prediction',
    description:
      'Minimize waste and optimize inventory with AI-powered food demand forecasts.',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNav />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Modernize Your Hostel Management with Hostel Mitra
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    An all-in-one AI-powered platform to streamline operations,
                    reduce waste, and enhance the student living experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/register">Register Your Hostel</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/login">Admin Login</Link>
                  </Button>
                </div>
              </div>
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={400}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Everything You Need in One Place
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From student management to AI-powered predictions, Hostel
                  Mitra provides the tools to run your hostel efficiently.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {featureCards.map((feature) => (
                <Card
                  key={feature.title}
                  className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <CardHeader className="flex flex-col items-center text-center">
                    {feature.icon}
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground">
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Hostel Mitra. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
