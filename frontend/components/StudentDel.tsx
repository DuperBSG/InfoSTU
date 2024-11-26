"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { StudentData } from "@/lib/types";

import React from 'react'

export default function StudentDel({
  studentData,
  setStudentData,
}: {
  studentData : StudentData[];
  setStudentData: Dispatch<SetStateAction<StudentData[]>>;
}) {
  const [delStudent, setDelStudent] = useState({
    name: "",
  })

    const handleSubmit = async () => {
      try {
        const studentToDel =  studentData.find((student) => 
        student.name === delStudent.name);

        if (!studentToDel) {
          alert("Student not found.");
          return;
        }
        alert(`Deleting student with ID: ${studentToDel.id}`);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SPRING_URL}/api/v1/student/${studentToDel.id}`,
          {
            method: "delete",
            headers: { "Content-type": "application/json" },
            // body: JSON.stringify(newStudentData),
          }
        );

        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Delete Student</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Student</DialogTitle>
            <DialogDescription>
              {
                "Enter the name of the student you would like to delete."
              }
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue=""
                  className="col-span-3"
                  value={delStudent.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setDelStudent({ name: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Delete</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
}
