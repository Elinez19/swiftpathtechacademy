import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const tutors = [
  {
    id: "1",
    name: "Dr. Sarah Wilson",
    course: "Advanced React Development",
    expertise: "Web Development",
    nextLesson: "2024-03-15, 10:00 AM",
    rating: 4.8,
    status: "Active",
  },
  {
    id: "2",
    name: "Prof. David Miller",
    course: "State Management with Redux",
    expertise: "React & Redux",
    nextLesson: "2024-03-16, 2:00 PM",
    rating: 4.9,
    status: "Active",
  },
  {
    id: "3",
    name: "James Anderson",
    course: "Node.js Fundamentals",
    expertise: "Backend Development",
    nextLesson: "Course Completed",
    rating: 4.7,
    status: "Past",
  },
];

export default function StudentTutorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Tutors</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Tutors</CardTitle>
          <CardDescription>
            Connect with your course tutors and track your learning sessions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Search */}
          <div className="flex items-center gap-4 mb-6">
            <Input placeholder="Search tutors..." className="max-w-sm" />
          </div>

          {/* Tutors Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Expertise</TableHead>
                <TableHead>Next Lesson</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tutors.map((tutor) => (
                <TableRow key={tutor.id}>
                  <TableCell className="font-medium">{tutor.name}</TableCell>
                  <TableCell>{tutor.course}</TableCell>
                  <TableCell>{tutor.expertise}</TableCell>
                  <TableCell>{tutor.nextLesson}</TableCell>
                  <TableCell>
                    <span className="flex items-center">
                      {tutor.rating}
                      <span className="ml-1 text-yellow-400">★</span>
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        tutor.status === "Active"
                          ? "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                          : "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400"
                      }`}
                    >
                      {tutor.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Send Message</DropdownMenuItem>
                        <DropdownMenuItem>Schedule Session</DropdownMenuItem>
                        {tutor.status === "Active" && (
                          <>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              View Course Progress
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              View Upcoming Lessons
                            </DropdownMenuItem>
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
