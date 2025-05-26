import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, BookOpen } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  discount?: number;
  rating: number;
  duration: string;
  level: string;
  category: string;
  image?: string;
  popular?: boolean;
}

interface RelatedCoursesProps {
  courses: Course[];
  currentCourseId: string;
}

export default function RelatedCourses({
  courses,
  currentCourseId,
}: RelatedCoursesProps) {
  // Only show up to 4 related courses
  const displayCourses = courses.slice(0, 4);

  if (displayCourses.length === 0) {
    return null;
  }

  return (
    <section className="bg-accent/30 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Related Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCourses.map((course) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-video overflow-hidden">
                  {course.image ? (
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="object-cover"
                      fill
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <BookOpen className="w-10 h-10 text-primary" />
                    </div>
                  )}
                  {course.popular && (
                    <Badge className="absolute top-2 right-2 bg-primary">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{course.level}</Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span className="text-sm ml-1">
                        {course.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="font-bold">
                      {course.discount ? (
                        <div className="flex items-center gap-1">
                          <span className="text-muted-foreground line-through text-xs">
                            ${course.price}
                          </span>
                          <span>
                            $
                            {(
                              course.price -
                              course.price * (course.discount / 100)
                            ).toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <span>${course.price.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
