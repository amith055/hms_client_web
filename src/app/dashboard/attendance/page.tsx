import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AttendancePage() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight font-headline">Attendance</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Student Attendance</CardTitle>
                    <CardDescription>View leave requests and live student count.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Feature under development.</p>
                </CardContent>
            </Card>
        </div>
    );
}
