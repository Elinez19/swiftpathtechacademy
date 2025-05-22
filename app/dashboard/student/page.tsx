import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Clock, Award, Star, Play, FileText } from 'lucide-react';

export default function StudentDashboard() {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <Button className="bg-orange-500 hover:bg-orange-600">Browse Courses</Button>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Enrolled Courses", value: "4", icon: BookOpen },
            { title: "Hours Learned", value: "26", icon: Clock },
            { title: "Certificates", value: "2", icon: Award },
            { title: "Avg. Rating", value: "4.8", icon: Star }
          ].map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <stat.icon className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Active Courses */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-6">Active Courses</h3>
                <div className="space-y-6">
                  {[
                    { title: "Web Development", progress: 75, lessons: 24, completed: 18 },
                    { title: "UI/UX Design", progress: 45, lessons: 18, completed: 8 },
                    { title: "Data Science", progress: 90, lessons: 30, completed: 27 }
                  ].map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{course.title}</h4>
                        <Badge variant="secondary">{course.progress}%</Badge>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>{course.completed}/{course.lessons} lessons completed</span>
                        <Button variant="ghost" size="sm" className="text-orange-500">
                          Continue Learning
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Lessons */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-6">Recent Lessons</h3>
                <div className="space-y-4">
                  {[
                    { title: "JavaScript Fundamentals", course: "Web Development", duration: "45 min" },
                    { title: "Color Theory", course: "UI/UX Design", duration: "30 min" },
                    { title: "Data Visualization", course: "Data Science", duration: "60 min" }
                  ].map((lesson, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                      <div className="p-2 bg-orange-500/10 rounded-lg">
                        <Play className="h-5 w-5 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{lesson.title}</h4>
                        <p className="text-sm text-gray-400">{lesson.course}</p>
                      </div>
                      <div className="text-sm text-gray-400">{lesson.duration}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Your Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Quick Learner", description: "Completed 5 lessons in one day", icon: Clock },
                  { title: "Course Master", description: "Completed first course with 90%+ score", icon: Award },
                  { title: "Active Learner", description: "Logged in for 7 consecutive days", icon: Star }
                ].map((achievement, index) => (
                  <div key={index} className="p-6 bg-secondary rounded-lg text-center">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <h4 className="font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-gray-400">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="certificates">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Your Certificates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { course: "Web Development Fundamentals", date: "March 15, 2024", grade: "A" },
                  { course: "UI/UX Design Principles", date: "February 28, 2024", grade: "A+" }
                ].map((certificate, index) => (
                  <div key={index} className="p-6 bg-secondary rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold mb-2">{certificate.course}</h4>
                        <p className="text-sm text-gray-400">Completed: {certificate.date}</p>
                        <Badge className="mt-2 bg-green-500/10 text-green-500">Grade: {certificate.grade}</Badge>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        View
                      </Button>
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