import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function StudentsPage() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Student List</h1>
            <Card>
                <CardHeader>
                    <CardTitle>All Students</CardTitle>
                    <CardDescription>A list of all students in the hostel.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Feature under development.</p>
                </CardContent>
            </Card>
        </div>
    );
}
