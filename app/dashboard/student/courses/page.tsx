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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const courses = [
  {
    id: "1",
    title: "Advanced React Development",
    tutor: "Dr. Sarah Wilson",
    progress: 75,
    nextLesson: "2024-03-15, 10:00 AM",
    status: "In Progress",
    rating: 4.8,
  },
  {
    id: "2",
    title: "State Management with Redux",
    tutor: "Prof. David Miller",
    progress: 30,
    nextLesson: "2024-03-16, 2:00 PM",
    status: "In Progress",
    rating: 4.9,
  },
  {
    id: "3",
    title: "Node.js Fundamentals",
    tutor: "James Anderson",
    progress: 100,
    nextLesson: "Completed",
    status: "Completed",
    rating: 4.7,
  },
];

export default function StudentCoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <Button>Browse All Courses</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enrolled Courses</CardTitle>
          <CardDescription>
            Track your progress in enrolled courses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <Input placeholder="Search courses..." className="max-w-sm" />
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Courses Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Tutor</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Next Lesson</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>{course.tutor}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground w-9">
                        {course.progress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{course.nextLesson}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        course.status === "Completed"
                          ? "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                          : "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400"
                      }`}
                    >
                      {course.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="flex items-center">
                      {course.rating}
                      <span className="ml-1 text-yellow-400">★</span>
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
                        <DropdownMenuItem>Continue Learning</DropdownMenuItem>
                        <DropdownMenuItem>View Course Details</DropdownMenuItem>
                        <DropdownMenuItem>View Materials</DropdownMenuItem>
                        <DropdownMenuItem>Contact Tutor</DropdownMenuItem>
                        {course.status === "Completed" && (
                          <DropdownMenuItem>View Certificate</DropdownMenuItem>
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
