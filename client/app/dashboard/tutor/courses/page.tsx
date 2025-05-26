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
import { MoreHorizontal, Plus } from "lucide-react";

const courses = [
  {
    id: "1",
    title: "Advanced React Development",
    status: "Active",
    students: 145,
    lessons: 24,
    progress: 18,
    rating: 4.8,
    lastUpdated: "2024-03-10",
  },
  {
    id: "2",
    title: "React Native Fundamentals",
    status: "Draft",
    students: 0,
    lessons: 16,
    progress: 12,
    rating: 0,
    lastUpdated: "2024-03-12",
  },
  {
    id: "3",
    title: "State Management with Redux",
    status: "Active",
    students: 89,
    lessons: 18,
    progress: 18,
    rating: 4.6,
    lastUpdated: "2024-03-08",
  },
];

export default function TutorCoursesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Course
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Management</CardTitle>
          <CardDescription>
            Create and manage your course content.
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
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Courses Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Lessons</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        course.status === "Active"
                          ? "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                          : "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400"
                      }`}
                    >
                      {course.status}
                    </span>
                  </TableCell>
                  <TableCell>{course.students}</TableCell>
                  <TableCell>
                    {course.progress}/{course.lessons}
                  </TableCell>
                  <TableCell>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2"
                        style={{
                          width: `${(course.progress / course.lessons) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {course.rating > 0 ? (
                      <span className="flex items-center">
                        {course.rating}
                        <span className="ml-1 text-yellow-400">★</span>
                      </span>
                    ) : (
                      "N/A"
                    )}
                  </TableCell>
                  <TableCell>{course.lastUpdated}</TableCell>
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
                        <DropdownMenuItem>Edit Course</DropdownMenuItem>
                        <DropdownMenuItem>View Content</DropdownMenuItem>
                        <DropdownMenuItem>View Students</DropdownMenuItem>
                        <DropdownMenuItem>View Analytics</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {course.status === "Draft" ? (
                          <DropdownMenuItem className="text-green-600">
                            Publish Course
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-red-600">
                            Unpublish Course
                          </DropdownMenuItem>
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
