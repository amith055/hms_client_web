"use client";

import { useAuth } from "@/hooks/use-auth";
import { db } from "@/lib/firebase";
import { Student } from "@/lib/types";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "../ui/skeleton";

export function StudentList() {
  const { hostel, loading: authLoading } = useAuth();
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!hostel) {
        if (!authLoading) setLoading(false);
        return;
    };

    setLoading(true);
    const q = query(
      collection(db, "students"),
      where("hostelId", "==", hostel.id)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const studentData: Student[] = [];
      querySnapshot.forEach((doc) => {
        studentData.push({ id: doc.id, ...doc.data() } as Student);
      });
      setStudents(studentData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [hostel, authLoading]);

  if (loading) {
    return (
        <div className="space-y-2">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
        </div>
    );
  }

  if (students.length === 0) {
    return <p>No students have been added yet.</p>;
  }

  return (
    <div className="border rounded-md">
        <Table>
        <TableHeader>
            <TableRow>
            <TableHead>Student ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Room/Bed</TableHead>
            <TableHead className="hidden md:table-cell">Contact</TableHead>
            <TableHead className="hidden lg:table-cell">Guardian</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {students.map((student) => (
            <TableRow key={student.id}>
                <TableCell>
                <Badge variant="secondary">{student.studentId}</Badge>
                </TableCell>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{`R${student.roomNumber} / B${student.bedNumber}`}</TableCell>
                <TableCell className="hidden md:table-cell">{student.phone}</TableCell>
                <TableCell className="hidden lg:table-cell">
                    <div>{student.guardianName}</div>
                    <div className="text-muted-foreground text-sm">{student.guardianPhone}</div>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </div>
  );
}
