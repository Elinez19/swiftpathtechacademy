import { Button } from "@/client/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/client/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/client/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/client/components/ui/dropdown-menu";
import { Input } from "@/client/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/client/components/ui/select";
import { MoreHorizontal, Plus } from "lucide-react";

const tutors = [
  {
    id: "1",
    name: "Dr. Sarah Wilson",
    expertise: "Web Development",
    students: 45,
    rating: 4.8,
    courses: 3,
    status: "Active",
  },
  {
    id: "2",
    name: "Prof. David Miller",
    expertise: "Data Science",
    students: 62,
    rating: 4.9,
    courses: 4,
    status: "Active",
  },
  {
    id: "3",
    name: "James Anderson",
    expertise: "Mobile Development",
    students: 28,
    rating: 4.7,
    courses: 2,
    status: "On Leave",
  },
  {
    id: "4",
    name: "Dr. Emma Thompson",
    expertise: "UI/UX Design",
    students: 51,
    rating: 4.9,
    courses: 3,
    status: "Active",
  },
  {
    id: "5",
    name: "Robert Chen",
    expertise: "Cloud Computing",
    students: 35,
    rating: 4.6,
    courses: 2,
    status: "Active",
  },
];

export default function TutorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tutors Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Tutor
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tutors</CardTitle>
          <CardDescription>
            Manage and monitor all tutors in the platform.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <Input placeholder="Search tutors..." className="max-w-sm" />
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Expertise</SelectItem>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="data">Data Science</SelectItem>
                <SelectItem value="mobile">Mobile Development</SelectItem>
                <SelectItem value="design">UI/UX Design</SelectItem>
                <SelectItem value="cloud">Cloud Computing</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="on-leave">On Leave</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tutors Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Expertise</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tutors.map((tutor) => (
                <TableRow key={tutor.id}>
                  <TableCell className="font-medium">{tutor.name}</TableCell>
                  <TableCell>{tutor.expertise}</TableCell>
                  <TableCell>{tutor.students}</TableCell>
                  <TableCell>
                    <span className="flex items-center">
                      {tutor.rating}
                      <span className="ml-1 text-yellow-400">★</span>
                    </span>
                  </TableCell>
                  <TableCell>{tutor.courses}</TableCell>
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
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuItem>View Courses</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          Deactivate Tutor
                        </DropdownMenuItem>
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
