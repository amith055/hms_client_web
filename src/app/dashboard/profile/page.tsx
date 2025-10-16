import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Hostel Profile</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Hostel Details</CardTitle>
                    <CardDescription>View and edit your hostel information.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Feature under development.</p>
                </CardContent>
            </Card>
        </div>
    );
}
