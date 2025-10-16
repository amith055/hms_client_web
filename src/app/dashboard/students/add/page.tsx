import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AddStudentPage() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Add New Student</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Student Admission Form</CardTitle>
                    <CardDescription>Fill in the details to add a new student.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Feature under development.</p>
                </CardContent>
            </Card>
        </div>
    );
}
