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
import { StudentData, NewStudentData } from "@/lib/types";

export default function StudentForm({
  setStudentData,
}: {
  setStudentData: Dispatch<SetStateAction<StudentData[]>>;
}) {
  const [newStudentData, setNewStudentData] = useState<NewStudentData>({
    name: "",
    email: "",
    dob: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SPRING_URL}/api/v1/student`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(newStudentData),
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
        <Button variant="outline">Add Student</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Student</DialogTitle>
          <DialogDescription>
            {
              "Fill in the fields to add a new student to the table. Don't add the same student again!"
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
                value={newStudentData.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewStudentData({ ...newStudentData, name: e.target.value })
                }
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                defaultValue=""
                value={newStudentData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewStudentData({
                    ...newStudentData,
                    email: e.target.value,
                  })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dob" className="text-right">
                Date of Birth
              </Label>
              <Input
                id="dob"
                defaultValue=""
                value={newStudentData.dob}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewStudentData({
                    ...newStudentData,
                    dob: e.target.value,
                  })
                }
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
