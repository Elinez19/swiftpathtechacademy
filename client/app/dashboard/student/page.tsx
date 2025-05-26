"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/client/components/ui/card";
import { Button } from "@/client/components/ui/button";
import {
  BookOpen,
  GraduationCap,
  Clock,
  Star,
  Play,
  BarChart,
  Trophy,
  Calendar,
} from "lucide-react";
import { Progress } from "@/client/components/ui/progress";

const enrolledCourses = [
  {
    title: "Advanced React Patterns",
    instructor: "Dr. Sarah Johnson",
    progress: 65,
    nextLesson: "Custom Hooks",
    lastAccessed: "2 hours ago",
  },
  {
    title: "Node.js Masterclass",
    instructor: "Prof. Michael Chen",
    progress: 32,
    nextLesson: "REST API Design",
    lastAccessed: "1 day ago",
  },
  {
    title: "Full Stack Development",
    instructor: "Jane Smith",
    progress: 89,
    nextLesson: "Deployment Strategies",
    lastAccessed: "3 hours ago",
  },
];

const upcomingLessons = [
  {
    id: "1",
    course: "Advanced React Development",
    tutor: "Dr. Sarah Wilson",
    date: "2024-03-15",
    time: "10:00 AM",
  },
  {
    id: "2",
    course: "State Management with Redux",
    tutor: "Prof. David Miller",
    date: "2024-03-16",
    time: "2:00 PM",
  },
  {
    id: "3",
    course: "Advanced React Development",
    tutor: "Dr. Sarah Wilson",
    date: "2024-03-17",
    time: "11:00 AM",
  },
];

const achievements = [
  {
    id: "1",
    title: "First Assignment",
    description: "Completed your first assignment",
    date: "2024-03-10",
    icon: Trophy,
  },
  {
    id: "2",
    title: "Quick Learner",
    description: "Completed 5 lessons in one day",
    date: "2024-03-12",
    icon: Clock,
  },
  {
    id: "3",
    title: "Course Champion",
    description: "Achieved 100% in a course quiz",
    date: "2024-03-14",
    icon: GraduationCap,
  },
];

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Student Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Enrolled Courses
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              2 in progress, 1 completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours Studied</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5</div>
            <p className="text-xs text-muted-foreground">
              +5.5 hours this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assignments</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12/15</div>
            <p className="text-xs text-muted-foreground">
              3 pending submissions
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 new this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Enrolled Courses */}
      <Card>
        <CardHeader>
          <CardTitle>Your Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {enrolledCourses.map((course) => (
              <div key={course.title} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {course.instructor}
                    </p>
                  </div>
                  <Button size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Continue
                  </Button>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Next: {course.nextLesson}</span>
                  <span>Last accessed: {course.lastAccessed}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Lessons */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Lessons</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{lesson.course}</p>
                    <p className="text-sm text-muted-foreground">
                      with {lesson.tutor}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{lesson.date}</p>
                  <p className="text-sm text-muted-foreground">{lesson.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.date}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
