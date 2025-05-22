"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCourseById, getCoursesByCategory } from "@/lib/course-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Clock,
  Star,
  ChevronLeft,
  Users,
  CheckCircle,
  Play,
  X,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import RelatedCourses from "@/components/relatedCourse";

// Define a type for lesson
interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  description: string;
}

// Define a type for module
interface Module {
  id: string;
  title: string;
  lessonsCount: number;
  lessons: Lesson[];
}

export default function CourseDetailsClient() {
  const params = useParams();
  const courseId = params.id as string;
  const { toast } = useToast();
  const course = getCourseById(courseId || "");
  const [previewLesson, setPreviewLesson] = useState<Lesson | null>(null);

  // Sample curriculum data - in a real app, this would come from your API
  const curriculumModules: Module[] = [
    {
      id: "module-1",
      title: `Module 1: Introduction to ${course?.category || "the Course"}`,
      lessonsCount: 4,
      lessons: [
        {
          id: "lesson-1-1",
          title: "Course Overview",
          duration: "15:00",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Get an overview of what you'll learn in this course and how it will help your career.",
        },
        {
          id: "lesson-1-2",
          title: "Setting Up Your Environment",
          duration: "20:45",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Learn how to set up your development environment for optimal learning and productivity.",
        },
        {
          id: "lesson-1-3",
          title: "Understanding the Basics",
          duration: "18:30",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Master the fundamental concepts that will form the foundation of your learning journey.",
        },
        {
          id: "lesson-1-4",
          title: "Your First Project",
          duration: "25:15",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Apply what you've learned in a hands-on project to solidify your understanding.",
        },
      ],
    },
    {
      id: "module-2",
      title: "Module 2: Core Concepts",
      lessonsCount: 6,
      lessons: [
        {
          id: "lesson-2-1",
          title: "Fundamental Principles",
          duration: "25:30",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Dive deeper into the core principles that drive successful implementation.",
        },
        {
          id: "lesson-2-2",
          title: "Applied Techniques",
          duration: "32:15",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Learn practical techniques that you can apply to real-world scenarios.",
        },
        {
          id: "lesson-2-3",
          title: "Problem Solving Strategies",
          duration: "28:45",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Develop effective strategies for solving complex problems in your projects.",
        },
        {
          id: "lesson-2-4",
          title: "Advanced Implementation",
          duration: "35:20",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Take your skills to the next level with advanced implementation techniques.",
        },
        {
          id: "lesson-2-5",
          title: "Practical Exercise",
          duration: "40:10",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Apply your knowledge in a comprehensive practical exercise.",
        },
        {
          id: "lesson-2-6",
          title: "Module Assessment",
          duration: "15:00",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Test your understanding with a module assessment to gauge your progress.",
        },
      ],
    },
    {
      id: "module-3",
      title: "Module 3: Intermediate Techniques",
      lessonsCount: 5,
      lessons: [
        {
          id: "lesson-3-1",
          title: "Building on Fundamentals",
          duration: "22:15",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Expand on the fundamentals you've learned to tackle more complex challenges.",
        },
        {
          id: "lesson-3-2",
          title: "Real-world Applications",
          duration: "28:40",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "See how these concepts are applied in real-world scenarios across different industries.",
        },
        {
          id: "lesson-3-3",
          title: "Case Studies",
          duration: "33:20",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Analyze detailed case studies to understand successful implementation strategies.",
        },
        {
          id: "lesson-3-4",
          title: "Hands-on Project",
          duration: "45:00",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Complete a comprehensive hands-on project to apply everything you've learned so far.",
        },
        {
          id: "lesson-3-5",
          title: "Module Review",
          duration: "18:30",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Review the key concepts from this module to ensure you've mastered the material.",
        },
      ],
    },
  ];

  // Course intro video for the enrollment card
  const courseIntroVideo = {
    id: "course-intro",
    title: `Introduction to ${course?.title || "Course"}`,
    duration: "2:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: `Get a quick overview of what you'll learn in this ${course?.title} course and how it can help advance your career.`,
  };

  const handlePreview = (lesson: Lesson) => {
    setPreviewLesson(lesson);
  };

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The course you are looking for does not exist or has been removed.
            </p>
            <Button onClick={() => router.push("/courses")}>
              Browse All Courses
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const discountedPrice = course.discount
    ? course.price - course.price * (course.discount / 100)
    : course.price;

  const handleEnroll = () => {
    toast({
      title: "Course Added",
      description: `You've been enrolled in "${course.title}"`,
    });
  };

  // Get related courses from the same category
  const relatedCourses = getCoursesByCategory(course.category).filter(
    (relatedCourse) => relatedCourse.id !== course.id
  );

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-16">
        {/* Course Header */}
        <div className="bg-card">
          <div className="container mx-auto px-4 py-8">
            <Link
              href="/courses"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4"
            >
              <ChevronLeft size={16} />
              <span>Back to Courses</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Course Image and Info */}
              <div className="lg:col-span-2">
                <div className="relative rounded-xl overflow-hidden mb-6 aspect-video">
                  {course.image ? (
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      width={800}
                      height={450}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-primary" />
                    </div>
                  )}
                  {course.popular && (
                    <Badge className="absolute top-4 right-4 bg-primary py-2 px-4">
                      Popular Course
                    </Badge>
                  )}
                </div>

                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{course.level}</Badge>
                    <Badge variant="outline">{course.category}</Badge>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    {course.title}
                  </h1>

                  <p className="text-muted-foreground mb-6">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-muted-foreground" />
                      <span>
                        By{" "}
                        <span className="font-medium">{course.instructor}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={18} className="text-primary fill-primary" />
                      <span className="font-medium">
                        {course.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enrollment Card */}
              <div>
                <div className="glass-card p-6 rounded-xl sticky top-24">
                  {/* Video Preview */}
                  <div className="mb-6">
                    <div
                      className="relative rounded-lg overflow-hidden aspect-video mb-3 cursor-pointer group"
                      onClick={() => handlePreview(courseIntroVideo)}
                    >
                      <Image
                        src={
                          course.image ||
                          "/placeholder.svg?height=180&width=320&query=course+preview" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt="Course preview"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width={320}
                        height={180}
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                          <Play className="h-6 w-6 text-white fill-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {courseIntroVideo.duration}
                      </div>
                    </div>
                    <p className="text-sm text-center text-muted-foreground">
                      Click to watch course preview
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-end gap-2 mb-1">
                      <h3 className="text-3xl font-bold">
                        ${discountedPrice.toFixed(2)}
                      </h3>
                      {course.discount && (
                        <span className="text-lg text-muted-foreground line-through mb-0.5">
                          ${course.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    {course.discount && (
                      <Badge variant="outline" className="text-primary">
                        Save {course.discount}% today!
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-4 mb-6">
                    <Button
                      size="lg"
                      className="w-full text-lg py-6"
                      onClick={handleEnroll}
                    >
                      Enroll Now
                    </Button>
                    <Button size="lg" variant="outline" className="w-full">
                      Add to Wishlist
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold mb-2">
                      This course includes:
                    </h4>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary" />
                      <span>Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary" />
                      <span>Downloadable resources</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="overview" className="w-full max-w-4xl">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  What You&apos;ll Learn
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-primary mt-1" />
                    <span>
                      In-depth understanding of {course.category} concepts
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-primary mt-1" />
                    <span>
                      Practical, hands-on experience with real-world projects
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-primary mt-1" />
                    <span>
                      Industry best practices and professional workflows
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-primary mt-1" />
                    <span>Advanced techniques used by professionals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-primary mt-1" />
                    <span>Skills to build your own portfolio of projects</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-primary mt-1" />
                    <span>
                      Certificate to showcase your skills to employers
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Course Description</h3>
                <p className="mb-4">
                  This comprehensive {course.title} course will take you from
                  beginner to advanced level. Whether you&apos;re just starting
                  out or looking to enhance your skills, this course has
                  something for everyone.
                </p>
                <p>
                  You&apos;ll learn through a combination of video lectures,
                  readings, quizzes, and hands-on projects. By the end of this{" "}
                  {course.duration} course, you&apos;ll have the confidence and
                  skills to apply your knowledge in real-world scenarios.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Basic understanding of computers</li>
                  <li>No prior {course.category} knowledge necessary</li>
                  <li>Enthusiasm and willingness to learn</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Course Curriculum</h3>
                <p className="text-muted-foreground mb-6">
                  This course includes {curriculumModules.length} modules with
                  over{" "}
                  {curriculumModules.reduce(
                    (total, module) => total + module.lessonsCount,
                    0
                  )}{" "}
                  lessons, practical exercises, and quizzes to test your
                  knowledge.
                </p>

                <Accordion type="multiple" className="space-y-4">
                  {curriculumModules.map((module) => (
                    <AccordionItem
                      key={module.id}
                      value={module.id}
                      className="border rounded-lg overflow-hidden"
                    >
                      <AccordionTrigger className="bg-accent/50 px-4 py-3 hover:no-underline">
                        <div className="flex items-center justify-between w-full pr-4">
                          <h4 className="font-semibold text-left">
                            {module.title}
                          </h4>
                          <Badge variant="outline" className="ml-2">
                            {module.lessonsCount} lessons
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-2 px-0">
                        <div className="px-4 pb-3 space-y-2">
                          {module.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between py-2 px-2 rounded-md hover:bg-accent/20"
                            >
                              <div className="flex items-center gap-2">
                                <BookOpen size={16} />
                                <span>{lesson.title}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">
                                  {lesson.duration}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center gap-1"
                                  onClick={() => handlePreview(lesson)}
                                >
                                  <Play size={14} />
                                  <span className="hidden sm:inline">
                                    Preview
                                  </span>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="instructor" className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {course.instructor.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {course.instructor}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Expert in {course.category} with over 10 years of industry
                    experience
                  </p>
                  <p className="mb-4">
                    {course.instructor} has worked with leading companies in the
                    field and has taught thousands of students worldwide. Their
                    teaching methodology focuses on practical, hands-on learning
                    that prepares students for real-world challenges.
                  </p>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">15+</p>
                      <p className="text-sm text-muted-foreground">Courses</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">50k+</p>
                      <p className="text-sm text-muted-foreground">Students</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">4.8</p>
                      <p className="text-sm text-muted-foreground">Rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div>
                    <h3 className="text-5xl font-bold">
                      {course.rating.toFixed(1)}
                    </h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < Math.floor(course.rating)
                              ? "text-primary fill-primary"
                              : "text-muted"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Course Rating
                    </p>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-8">5 ★</div>
                      <div className="h-2 bg-muted rounded-full flex-1 overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <div className="text-sm text-muted-foreground">70%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-8">4 ★</div>
                      <div className="h-2 bg-muted rounded-full flex-1 overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                      <div className="text-sm text-muted-foreground">20%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-8">3 ★</div>
                      <div className="h-2 bg-muted rounded-full flex-1 overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "7%" }}
                        ></div>
                      </div>
                      <div className="text-sm text-muted-foreground">7%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-8">2 ★</div>
                      <div className="h-2 bg-muted rounded-full flex-1 overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "2%" }}
                        ></div>
                      </div>
                      <div className="text-sm text-muted-foreground">2%</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm w-8">1 ★</div>
                      <div className="h-2 bg-muted rounded-full flex-1 overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "1%" }}
                        ></div>
                      </div>
                      <div className="text-sm text-muted-foreground">1%</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-sm font-bold">JD</span>
                      </div>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={
                                i < 5
                                  ? "text-primary fill-primary"
                                  : "text-muted"
                              }
                            />
                          ))}
                          <span className="text-xs text-muted-foreground ml-1">
                            2 months ago
                          </span>
                        </div>
                      </div>
                    </div>
                    <p>
                      This course exceeded my expectations! The instructor
                      explains complex concepts in a way that&apos;s easy to
                      understand, and the projects helped reinforce what I
                      learned.
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                        <span className="text-sm font-bold">AS</span>
                      </div>
                      <div>
                        <p className="font-medium">Amanda Smith</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={
                                i < 4
                                  ? "text-primary fill-primary"
                                  : "text-muted"
                              }
                            />
                          ))}
                          <span className="text-xs text-muted-foreground ml-1">
                            1 month ago
                          </span>
                        </div>
                      </div>
                    </div>
                    <p>
                      Great content and well-structured curriculum. The only
                      thing I would suggest is to include more practice
                      exercises.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Lesson Preview Dialog */}
        <Dialog
          open={previewLesson !== null}
          onOpenChange={(open) => !open && setPreviewLesson(null)}
        >
          <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
            <DialogHeader className="p-6 pb-2">
              <div className="flex items-center justify-between">
                <DialogTitle>{previewLesson?.title}</DialogTitle>
                <DialogClose className="h-6 w-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </div>
              <DialogDescription className="text-sm text-muted-foreground">
                Preview of this lesson • {previewLesson?.duration}
              </DialogDescription>
            </DialogHeader>
            <div className="w-full" style={{ height: "280px" }}>
              {previewLesson?.videoUrl && (
                <iframe
                  src={previewLesson.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div className="p-5 pt-3">
              <h4 className="font-medium mb-1">About this lesson</h4>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {previewLesson?.description}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-xs text-muted-foreground">
                  This is a preview. Enroll for full access.
                </p>
                <Button
                  onClick={handleEnroll}
                  className="bg-primary hover:bg-primary/90"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Related Courses */}
        <RelatedCourses courses={relatedCourses} currentCourseId={course.id} />
      </main>
    </div>
  );
}
