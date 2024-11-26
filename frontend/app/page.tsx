"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StudentData } from "@/lib/types";

import StudentForm from "@/components/StudentForm";
import StudentDel from "@/components/StudentDel";

export default function Home() {
  const [studentData, setStudentData] = useState<StudentData[]>([]);
  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SPRING_URL}/api/v1/student`
      );
      const data = await response.json();
      setStudentData(data);
    };
    fetchStudents();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20">
      <h1 className="text-3xl">Student Dashboard</h1>
      <div className="flex w-full justify-end">
        <ThemeToggle />
      </div>
      <Table>
        <TableCaption>A list of students broski dowski</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Date of Birth</TableHead>
            <TableHead>Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {studentData?.map((student, index) => (
            <TableRow key={`${student}-${index}`}>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.dob}</TableCell>
              <TableCell>{student.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div class > */}
        <div className="w-full flex justify-end">
          <StudentDel 
            studentData={studentData}
            setStudentData={setStudentData}/>
          <StudentForm setStudentData={setStudentData} />
        </div>
        {/* <div className="w-full flex justify-end">
        </div> */}
      {/* </div> */}
    </div>
  );
}
