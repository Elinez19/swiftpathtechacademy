"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getCoursesByCategory } from "@/lib/course-data";
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
import { CourseProps } from "./courseCard";

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

interface CourseDetailsProps {
  course: CourseProps;
}

export default function CourseDetails({ course }: CourseDetailsProps) {
  const { toast } = useToast();
  const [previewLesson, setPreviewLesson] = useState<Lesson | null>(null);

  // Course curriculum modules
  const curriculumModules = [
    {
      id: "module-1",
      title: "Getting Started",
      lessonsCount: 4,
      lessons: [
        {
          id: "lesson-1-1",
          title: "Course Introduction",
          duration: "10:00",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Overview of the course and what you'll learn",
        },
        {
          id: "lesson-1-2",
          title: "Setting Up Your Environment",
          duration: "15:00",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description:
            "Installing necessary tools and configuring your workspace",
        },
      ],
    },
    {
      id: "module-2",
      title: "Core Concepts",
      lessonsCount: 6,
      lessons: [
        {
          id: "lesson-2-1",
          title: "Understanding the Basics",
          duration: "20:00",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Learn the fundamental concepts and principles",
        },
        {
          id: "lesson-2-2",
          title: "Advanced Techniques",
          duration: "25:00",
          videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          description: "Explore advanced topics and methodologies",
        },
      ],
    },
  ];

  // Course intro video for the enrollment card
  const courseIntroVideo = {
    id: "course-intro",
    title: `Introduction to ${course.title}`,
    duration: "2:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: `Get a quick overview of what you'll learn in this ${course.title} course and how it can help advance your career.`,
  };

  const handlePreview = (lesson: Lesson) => {
    setPreviewLesson(lesson);
  };

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
                      src={course.image}
                      alt={course.title}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

                <div>
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
                        src={course.image || "/placeholder.svg"}
                        alt="Course preview"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

                  {/* Price and Enrollment */}
                  <div className="text-center mb-6">
                    <div className="mb-4">
                      {course.discount ? (
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-3xl font-bold">
                            ${discountedPrice.toFixed(2)}
                          </span>
                          <span className="text-xl text-muted-foreground line-through">
                            ${course.price.toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <span className="text-3xl font-bold">
                          ${course.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <Button
                      className="w-full bg-hero-gradient hover:opacity-90 py-6 text-lg"
                      onClick={handleEnroll}
                    >
                      Enroll Now
                    </Button>
                  </div>

                  {/* Course Includes */}
                  <div>
                    <h4 className="font-semibold mb-4">
                      This course includes:
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-primary" />
                        <span>{course.duration} of on-demand video</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-primary" />
                        <span>Downloadable resources</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-primary" />
                        <span>Certificate of completion</span>
                      </li>
                      <li className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-primary" />
                        <span>Lifetime access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <section className="py-12">
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
                  </div>
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
                        <AccordionContent className="px-4 py-2">
                          <ul className="space-y-2">
                            {module.lessons.map((lesson) => (
                              <li
                                key={lesson.id}
                                className="flex items-center justify-between py-2 hover:bg-accent/20 rounded-lg px-2 cursor-pointer"
                                onClick={() => handlePreview(lesson)}
                              >
                                <div className="flex items-center gap-2">
                                  <Play size={14} />
                                  <span>{lesson.title}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  {lesson.duration}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Your Instructor</h3>
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-4xl font-bold">
                        {course.instructor[0]}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        {course.instructor}
                      </h4>
                      <p className="text-muted-foreground">
                        Expert instructor with years of industry experience in{" "}
                        {course.category}. Passionate about teaching and helping
                        students achieve their goals.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Student Reviews</h3>
                  <p className="text-muted-foreground">
                    Coming soon! Reviews will be available once students
                    complete the course.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <RelatedCourses
            courses={relatedCourses}
            currentCourseId={course.id}
          />
        )}

        {/* Video Preview Dialog */}
        <Dialog
          open={!!previewLesson}
          onOpenChange={() => setPreviewLesson(null)}
        >
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>{previewLesson?.title}</DialogTitle>
              <DialogDescription>
                {previewLesson?.description}
              </DialogDescription>
            </DialogHeader>
            <div className="aspect-video w-full">
              <iframe
                src={previewLesson?.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
            <DialogClose />
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
}
