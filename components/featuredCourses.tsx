import CourseCard, { CourseProps } from "./courseCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featuredCourses: CourseProps[] = [
  {
    id: "1",
    title: "Data Science Fundamentals",
    description:
      "Learn the core concepts of data science, Python programming, and data analysis techniques.",
    instructor: "Dr. Sarah Johnson",
    level: "Beginner",
    duration: "10 weeks",
    rating: 4.8,
    price: 99.99,
    category: "Data Science",
    popular: true,
  },
  {
    id: "2",
    title: "Advanced Machine Learning",
    description:
      "Master machine learning algorithms and build real-world AI applications.",
    instructor: "Prof. Michael Chen",
    level: "Advanced",
    duration: "12 weeks",
    rating: 4.7,
    price: 129.99,
    discount: 15,
    category: "Machine Learning",
  },
  {
    id: "3",
    title: "Full-Stack Web Development",
    description:
      "Build modern web applications with React, Node.js, and MongoDB.",
    instructor: "Jessica Miller",
    level: "Intermediate",
    duration: "14 weeks",
    rating: 4.9,
    price: 149.99,
    category: "Web Development",
  },
  {
    id: "4",
    title: "Financial Analysis & Modeling",
    description:
      "Learn financial modeling techniques used by investment banking professionals.",
    instructor: "Robert Williams",
    level: "Intermediate",
    duration: "8 weeks",
    rating: 4.6,
    price: 119.99,
    discount: 10,
    category: "Finance",
    popular: true,
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
            <p className="text-muted-foreground">
              Expand your knowledge with our top-rated courses
            </p>
          </div>
          <Link href="/courses" className="mt-4 md:mt-0">
            <Button variant="outline">View All Courses</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
