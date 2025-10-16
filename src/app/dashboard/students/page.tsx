import { StudentList } from "@/components/dashboard/student-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function StudentsPage() {
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight font-headline">Student List</h1>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>All Students</CardTitle>
                    <CardDescription>A list of all students currently residing in the hostel.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Suspense fallback={<Skeleton className="h-64 w-full" />}>
                        <StudentList />
                    </Suspense>
                </CardContent>
            </Card>
        </div>
    );
}
