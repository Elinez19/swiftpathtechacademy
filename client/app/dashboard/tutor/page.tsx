"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/client/components/ui/card";
import { Button } from "@/client/components/ui/button";
import { Users, BookOpen, TrendingUp, Star, Plus, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/client/components/ui/table";

const stats = [
  {
    title: "Total Students",
    value: "156",
    icon: Users,
    description: "Enrolled in your courses",
  },
  {
    title: "Active Courses",
    value: "8",
    icon: BookOpen,
    description: "Currently teaching",
  },
  {
    title: "Average Rating",
    value: "4.8",
    icon: Star,
    description: "From student reviews",
  },
  {
    title: "Total Earnings",
    value: "$3,456",
    icon: TrendingUp,
    description: "Last 30 days",
  },
];

const recentStudents = [
  {
    name: "Alice Johnson",
    course: "Advanced React Patterns",
    progress: 65,
    lastActive: "2 hours ago",
  },
  {
    name: "Bob Smith",
    course: "Node.js Masterclass",
    progress: 32,
    lastActive: "5 hours ago",
  },
  {
    name: "Carol Williams",
    course: "Full Stack Development",
    progress: 89,
    lastActive: "1 day ago",
  },
];

const upcomingLessons = [
  {
    id: "1",
    course: "Advanced React Development",
    student: "John Doe",
    date: "2024-03-15",
    time: "10:00 AM",
    duration: "1 hour",
  },
  {
    id: "2",
    course: "Advanced React Development",
    student: "Sarah Wilson",
    date: "2024-03-15",
    time: "2:00 PM",
    duration: "1 hour",
  },
  {
    id: "3",
    course: "Advanced React Development",
    student: "Michael Brown",
    date: "2024-03-16",
    time: "11:00 AM",
    duration: "1 hour",
  },
];

const recentActivities = [
  {
    id: "1",
    type: "Course Update",
    description: "Updated module 3 content in Advanced React Development",
    time: "2 hours ago",
  },
  {
    id: "2",
    type: "Student Progress",
    description: "Emily Davis completed module 2 assessment",
    time: "4 hours ago",
  },
  {
    id: "3",
    type: "New Enrollment",
    description: "David Miller enrolled in Advanced React Development",
    time: "1 day ago",
  },
];

export default function TutorDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Tutor Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your teaching activities.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create New Course
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Students and Upcoming Lessons */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Student Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentStudents.map((student) => (
                <div
                  key={student.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{student.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {student.course}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{student.progress}%</p>
                    <p className="text-xs text-muted-foreground">
                      {student.lastActive}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Lessons</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Student</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Duration</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingLessons.map((lesson) => (
                  <TableRow key={lesson.id}>
                    <TableCell className="font-medium">
                      {lesson.course}
                    </TableCell>
                    <TableCell>{lesson.student}</TableCell>
                    <TableCell>{lesson.date}</TableCell>
                    <TableCell>{lesson.time}</TableCell>
                    <TableCell>{lesson.duration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Course Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Course Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Add course performance metrics and charts here */}
            <p className="text-muted-foreground">
              Detailed analytics and performance metrics for your courses will
              be displayed here.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div>
                  <p className="font-medium">{activity.type}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
