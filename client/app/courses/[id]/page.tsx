import { Suspense } from "react";
import {
  allCourses,
  getCourseById,
  getCoursesByCategory,
} from "@/lib/course-data";
import CourseDetails from "@/components/CourseDetails";

export function generateStaticParams() {
  return allCourses.map((course) => ({
    id: course.id,
  }));
}

export default function CourseDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const course = getCourseById(params.id);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The course you are looking for does not exist or has been removed.
            </p>
            <a href="/courses" className="inline-block">
              <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
                Browse All Courses
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CourseDetails course={course} />
    </Suspense>
  );
}
