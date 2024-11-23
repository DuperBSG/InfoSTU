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

export default function Home() {
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
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">LeBron James</TableCell>
            <TableCell>lebron@gmail.com</TableCell>
            <TableCell>1990/05/12</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
