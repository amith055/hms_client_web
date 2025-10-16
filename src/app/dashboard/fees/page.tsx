import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeesPage() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Fees and Dues</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Student Fee Status</CardTitle>
                    <CardDescription>A list of all students and their fee payment status.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Feature under development.</p>
                </CardContent>
            </Card>
        </div>
    );
}
