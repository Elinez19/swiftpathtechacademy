import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  UserCheck,
  Award,
  Badge,
  Star,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "Total Students",
              value: "5,234",
              icon: Users,
              change: "+12%",
            },
            {
              title: "Active Courses",
              value: "142",
              icon: BookOpen,
              change: "+5%",
            },
            {
              title: "Revenue",
              value: "$52,389",
              icon: DollarSign,
              change: "+8%",
            },
            {
              title: "Course Completion",
              value: "78%",
              icon: Award,
              change: "+3%",
            },
          ].map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <stat.icon className="h-6 w-6 text-orange-500" />
                </div>
                <span className="text-green-500 text-sm">{stat.change}</span>
              </div>
              <h3 className="text-sm text-gray-400 mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    {
                      user: "John Doe",
                      action: "enrolled in",
                      course: "Web Development",
                    },
                    {
                      user: "Jane Smith",
                      action: "completed",
                      course: "UI Design",
                    },
                    {
                      user: "Mike Johnson",
                      action: "started",
                      course: "Data Science",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 text-sm"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <p className="text-gray-400">
                        <span className="text-white">{activity.user}</span>{" "}
                        {activity.action}{" "}
                        <span className="text-white">{activity.course}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Performance Overview */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Performance Overview
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      metric: "Course Completion Rate",
                      value: "78%",
                      trend: "up",
                    },
                    {
                      metric: "Student Satisfaction",
                      value: "4.8/5",
                      trend: "up",
                    },
                    {
                      metric: "Average Engagement",
                      value: "85%",
                      trend: "down",
                    },
                  ].map((metric, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-400">{metric.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{metric.value}</span>
                        <TrendingUp
                          className={`h-4 w-4 ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">All Courses</h3>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Add New Course
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: "Web Development",
                    students: 234,
                    rating: 4.8,
                    status: "Active",
                  },
                  {
                    title: "UI/UX Design",
                    students: 189,
                    rating: 4.7,
                    status: "Active",
                  },
                  {
                    title: "Data Science",
                    students: 156,
                    rating: 4.9,
                    status: "Draft",
                  },
                ].map((course, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-secondary rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-sm text-gray-400">
                        {course.students} students enrolled
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span>{course.rating}</span>
                      </div>
                      <Badge
                        className={
                          course.status === "Active"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-gray-500/10 text-gray-500"
                        }
                      >
                        {course.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">User Management</h3>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Add User
                </Button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    name: "John Doe",
                    role: "Student",
                    status: "Active",
                    courses: 3,
                  },
                  {
                    name: "Sarah Johnson",
                    role: "Instructor",
                    status: "Active",
                    courses: 5,
                  },
                  {
                    name: "Mike Wilson",
                    role: "Student",
                    status: "Inactive",
                    courses: 1,
                  },
                ].map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-secondary rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
                        <UserCheck className="h-5 w-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">{user.name}</h4>
                        <p className="text-sm text-gray-400">{user.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge
                        className={
                          user.status === "Active"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-gray-500/10 text-gray-500"
                        }
                      >
                        {user.status}
                      </Badge>
                      <span className="text-sm text-gray-400">
                        {user.courses} courses
                      </span>
                      <Button variant="ghost" size="sm">
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="revenue">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Revenue Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "Total Revenue", value: "$52,389", change: "+12%" },
                  { title: "Average Order Value", value: "$89", change: "+5%" },
                  { title: "Conversion Rate", value: "3.2%", change: "+0.8%" },
                ].map((stat, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg">
                    <h4 className="text-sm text-gray-400 mb-1">{stat.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className="text-green-500 text-sm">
                        {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
