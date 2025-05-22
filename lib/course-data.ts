import { CourseProps } from "@/components/courseCard";

export const allCourses: CourseProps[] = [
  {
    id: "1",
    title: "Data Science Fundamentals",
    description:
      "Learn the core concepts of data science, Python programming, and data analysis techniques. This course covers everything from basic statistics to advanced machine learning algorithms.",
    instructor: "Dr. Sarah Johnson",
    level: "Beginner",
    duration: "10 weeks",
    rating: 4.8,
    price: 99.99,
    category: "Data Science",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "2",
    title: "Advanced Machine Learning",
    description:
      "Master machine learning algorithms and build real-world AI applications. Dive deep into neural networks, deep learning, and natural language processing with hands-on projects.",
    instructor: "Prof. Michael Chen",
    level: "Advanced",
    duration: "12 weeks",
    rating: 4.7,
    price: 129.99,
    discount: 15,
    category: "Machine Learning",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "3",
    title: "Full-Stack Web Development",
    description:
      "Build modern web applications with React, Node.js, and MongoDB. Create responsive UIs, RESTful APIs, and integrate with databases in this comprehensive full-stack course.",
    instructor: "Jessica Miller",
    level: "Intermediate",
    duration: "14 weeks",
    rating: 4.9,
    price: 149.99,
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "4",
    title: "Financial Analysis & Modeling",
    description:
      "Learn financial modeling techniques used by investment banking professionals. Master Excel, financial statement analysis, and build powerful valuation models for businesses.",
    instructor: "Robert Williams",
    level: "Intermediate",
    duration: "8 weeks",
    rating: 4.6,
    price: 119.99,
    discount: 10,
    category: "Finance",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "5",
    title: "UI/UX Design Principles",
    description:
      "Master the art of creating beautiful and functional user interfaces. Learn design thinking, wireframing, prototyping, and user testing methodologies.",
    instructor: "Emily Rodriguez",
    level: "Beginner",
    duration: "8 weeks",
    rating: 4.7,
    price: 89.99,
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "6",
    title: "Cybersecurity Fundamentals",
    description:
      "Learn to protect systems and networks from digital attacks. Covers threat detection, encryption, security policies, and ethical hacking techniques.",
    instructor: "David Lewis",
    level: "Intermediate",
    duration: "10 weeks",
    rating: 4.9,
    price: 129.99,
    category: "Cybersecurity",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "7",
    title: "Mobile App Development with React Native",
    description:
      "Build cross-platform mobile applications using React Native. Create iOS and Android apps with a single codebase and deploy to app stores.",
    instructor: "Alex Turner",
    level: "Intermediate",
    duration: "12 weeks",
    rating: 4.8,
    price: 119.99,
    discount: 20,
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "8",
    title: "Cloud Computing with AWS",
    description:
      "Master Amazon Web Services and build scalable cloud infrastructure. Learn EC2, S3, Lambda, and best practices for cloud architecture.",
    instructor: "Marcus Johnson",
    level: "Advanced",
    duration: "10 weeks",
    rating: 4.6,
    price: 139.99,
    category: "Cloud Computing",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

export const getCourseById = (id: string): CourseProps | undefined => {
  return allCourses.find((course) => course.id === id);
};

export const getCoursesByCategory = (category: string): CourseProps[] => {
  return allCourses.filter((course) => course.category === category);
};

export const getPopularCourses = (): CourseProps[] => {
  return allCourses.filter((course) => course.popular === true);
};

export const getDiscountedCourses = (): CourseProps[] => {
  return allCourses.filter((course) => course.discount !== undefined);
};

export const getAllCategories = (): string[] => {
  const categories = allCourses.map((course) => course.category);
  return [...new Set(categories)];
};
