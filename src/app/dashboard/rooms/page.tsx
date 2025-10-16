import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function RoomsPage() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Room & Bed Allocation</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Hostel Occupancy</CardTitle>
                    <CardDescription>View allocation analytics and room structure.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Feature under development.</p>
                </CardContent>
            </Card>
        </div>
    );
}
