import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Users, Star, TrendingUp, Play, FileText } from 'lucide-react';

export default function TutorDashboard() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Tutor Dashboard</h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Students", value: "1,234", icon: Users, change: "+8%" },
            { title: "Active Courses", value: "5", icon: BookOpen, change: "+1" },
            { title: "Average Rating", value: "4.8", icon: Star, change: "+0.2" },
            { title: "Total Revenue", value: "$12,389", icon: TrendingUp, change: "+15%" }
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

        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Active Courses */}
              <Card className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Active Courses</h3>
                  <Button className="bg-orange-500 hover:bg-orange-600">Create Course</Button>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Web Development Masterclass", students: 234, lessons: 24, progress: 100 },
                    { title: "Advanced JavaScript", students: 189, lessons: 18, progress: 80 },
                    { title: "React Fundamentals", students: 156, lessons: 16, progress: 60 }
                  ].map((course, index) => (
                    <div key={index} className="p-4 bg-secondary rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{course.title}</h4>
                        <Badge className="bg-green-500/10 text-green-500">Live</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{course.students} students</span>
                        <span>{course.lessons} lessons</span>
                        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-orange-500"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Course Analytics */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-6">Course Analytics</h3>
                <div className="space-y-6">
                  {[
                    { metric: "Completion Rate", value: "78%", trend: "up" },
                    { metric: "Student Satisfaction", value: "4.8/5", trend: "up" },
                    { metric: "Average Watch Time", value: "85%", trend: "down" }
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-400">{metric.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{metric.value}</span>
                        <TrendingUp className={`h-4 w-4 ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Student Management</h3>
              <div className="space-y-4">
                {[
                  { name: "John Doe", course: "Web Development", progress: 75, lastActive: "2 days ago" },
                  { name: "Jane Smith", course: "Advanced JavaScript", progress: 90, lastActive: "1 day ago" },
                  { name: "Mike Wilson", course: "React Fundamentals", progress: 45, lastActive: "5 hours ago" }
                ].map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                    <div>
                      <h4 className="font-medium">{student.name}</h4>
                      <p className="text-sm text-gray-400">{student.course}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="w-32">
                        <div className="text-sm text-gray-400 mb-1">Progress</div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-orange-500"
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">
                        Last active: {student.lastActive}
                      </div>
                      <Button variant="ghost" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="earnings">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Earnings Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "Total Earnings", value: "$12,389", change: "+15%" },
                  { title: "This Month", value: "$2,847", change: "+8%" },
                  { title: "Average Per Course", value: "$2,478", change: "+12%" }
                ].map((stat, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg">
                    <h4 className="text-sm text-gray-400 mb-1">{stat.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{stat.value}</span>
                      <span className="text-green-500 text-sm">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Course Reviews</h3>
              <div className="space-y-6">
                {[
                  { student: "John Doe", course: "Web Development", rating: 5, comment: "Excellent course content and delivery!" },
                  { student: "Jane Smith", course: "Advanced JavaScript", rating: 4, comment: "Very informative and well-structured." },
                  { student: "Mike Wilson", course: "React Fundamentals", rating: 5, comment: "Great explanations and examples." }
                ].map((review, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{review.student}</h4>
                        <p className="text-sm text-gray-400">{review.course}</p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400">{review.comment}</p>
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