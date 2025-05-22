"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  instructor: string;
  level: string;
  duration: string;
  rating: number;
  price: number;
  discount?: number;
  category: string;
  popular?: boolean;
}

const CourseCard = ({ course }: { course: CourseProps }) => {
  const discountedPrice = course.discount
    ? course.price - course.price * (course.discount / 100)
    : course.price;

  return (
    <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full transition-transform duration-300 hover:translate-y-[-4px]">
      <Link href={`/courses/${course.id}`} className="block">
        <div className="relative">
          {course.image ? (
            <img
              src={course.image}
              alt={course.title}
              className="w-full aspect-video object-cover"
            />
          ) : (
            <div className="w-full aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {course.title.charAt(0)}
              </span>
            </div>
          )}

          {course.popular && (
            <Badge className="absolute top-2 right-2 bg-primary">Popular</Badge>
          )}

          <Badge
            variant="outline"
            className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm"
          >
            {course.category}
          </Badge>
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{course.level}</Badge>
          <div className="text-xs text-muted-foreground">{course.duration}</div>
        </div>

        <Link href={`/courses/${course.id}`} className="group">
          <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center mb-4 mt-auto">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(course.rating) ? "text-primary" : "text-muted"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-sm font-medium">
              {course.rating.toFixed(1)}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            by {course.instructor}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            {course.discount ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  ${course.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold">
                ${course.price.toFixed(2)}
              </span>
            )}
          </div>

          <Link href={`/courses/${course.id}`}>
            <Button size="sm">View Course</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
