export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: {
    id: string;
    name: string;
    avatar: string;
    title: string;
  };
  coverImage: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  enrolledStudents: number;
  price: number;
  tags: string[];
  lessons: Lesson[];
  reviews: Review[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'quiz' | 'reading';
  completed: boolean;
}

export interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}

// Mock courses data
export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced React Patterns',
    description: 'Learn advanced React patterns to build scalable and maintainable applications. This course covers context, hooks, render props, and more.',
    instructor: {
      id: '101',
      name: 'Jane Smith',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      title: 'Senior Frontend Developer'
    },
    coverImage: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
    category: 'Programming',
    level: 'Advanced',
    duration: '6 hours',
    rating: 4.8,
    enrolledStudents: 1245,
    price: 89.99,
    tags: ['React', 'JavaScript', 'Web Development'],
    lessons: [
      { id: '1-1', title: 'Introduction to Advanced Patterns', duration: '15 min', type: 'video', completed: true },
      { id: '1-2', title: 'Context API Deep Dive', duration: '45 min', type: 'video', completed: true },
      { id: '1-3', title: 'Advanced Hooks', duration: '1 hour', type: 'video', completed: false },
      { id: '1-4', title: 'Render Props Pattern', duration: '30 min', type: 'video', completed: false },
      { id: '1-5', title: 'Higher Order Components', duration: '45 min', type: 'video', completed: false },
      { id: '1-6', title: 'Performance Optimization', duration: '1 hour', type: 'video', completed: false },
      { id: '1-7', title: 'State Management Patterns', duration: '1 hour', type: 'video', completed: false },
      { id: '1-8', title: 'Final Project', duration: '1 hour', type: 'quiz', completed: false }
    ],
    reviews: [
      {
        id: 'r1-1',
        user: { name: 'Michael Johnson', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' },
        rating: 5,
        comment: 'Excellent course! The advanced patterns have really improved my React applications.',
        date: '2023-03-15'
      },
      {
        id: 'r1-2',
        user: { name: 'Sarah Wilson', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
        rating: 4,
        comment: 'Great content but some concepts could use more examples.',
        date: '2023-02-20'
      }
    ]
  },
  {
    id: '2',
    title: 'UX Design Fundamentals',
    description: 'Master the fundamentals of UX design with practical projects and real-world examples. Learn how to create user-centered designs that delight your users.',
    instructor: {
      id: '102',
      name: 'David Brown',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      title: 'Senior UX Designer'
    },
    coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    category: 'Design',
    level: 'Beginner',
    duration: '8 hours',
    rating: 4.6,
    enrolledStudents: 2380,
    price: 79.99,
    tags: ['UX', 'UI', 'Design', 'Wireframing'],
    lessons: [
      { id: '2-1', title: 'Introduction to UX Design', duration: '30 min', type: 'video', completed: true },
      { id: '2-2', title: 'User Research Methods', duration: '1 hour', type: 'video', completed: false },
      { id: '2-3', title: 'Personas and User Journeys', duration: '45 min', type: 'video', completed: false },
      { id: '2-4', title: 'Wireframing Basics', duration: '1 hour', type: 'video', completed: false },
      { id: '2-5', title: 'Prototyping', duration: '1 hour', type: 'video', completed: false },
      { id: '2-6', title: 'Usability Testing', duration: '45 min', type: 'video', completed: false },
      { id: '2-7', title: 'Design Systems', duration: '1 hour', type: 'video', completed: false },
      { id: '2-8', title: 'Final Project', duration: '2 hours', type: 'quiz', completed: false }
    ],
    reviews: [
      {
        id: 'r2-1',
        user: { name: 'Emily Clark', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
        rating: 5,
        comment: 'This course helped me transition into UX design. Highly recommend!',
        date: '2023-04-10'
      },
      {
        id: 'r2-2',
        user: { name: 'Robert Taylor', avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg' },
        rating: 4,
        comment: 'Great introduction to UX. Would like more advanced content.',
        date: '2023-03-22'
      }
    ]
  },
  {
    id: '3',
    title: 'Machine Learning Fundamentals',
    description: 'Get started with machine learning concepts and algorithms. This course covers supervised and unsupervised learning, neural networks, and practical applications.',
    instructor: {
      id: '103',
      name: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      title: 'ML Engineer'
    },
    coverImage: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    category: 'Programming',
    level: 'Intermediate',
    duration: '10 hours',
    rating: 4.9,
    enrolledStudents: 1876,
    price: 99.99,
    tags: ['Machine Learning', 'Python', 'Data Science', 'AI'],
    lessons: [
      { id: '3-1', title: 'Introduction to Machine Learning', duration: '45 min', type: 'video', completed: true },
      { id: '3-2', title: 'Python for ML', duration: '1 hour', type: 'video', completed: true },
      { id: '3-3', title: 'Data Preprocessing', duration: '1 hour', type: 'video', completed: true },
      { id: '3-4', title: 'Supervised Learning', duration: '1.5 hours', type: 'video', completed: false },
      { id: '3-5', title: 'Unsupervised Learning', duration: '1.5 hours', type: 'video', completed: false },
      { id: '3-6', title: 'Neural Networks', duration: '2 hours', type: 'video', completed: false },
      { id: '3-7', title: 'Model Evaluation', duration: '1 hour', type: 'video', completed: false },
      { id: '3-8', title: 'Final Project', duration: '1.5 hours', type: 'quiz', completed: false }
    ],
    reviews: [
      {
        id: 'r3-1',
        user: { name: 'Jennifer Adams', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg' },
        rating: 5,
        comment: 'The best ML course I\'ve taken! Excellent explanations and practical examples.',
        date: '2023-05-05'
      },
      {
        id: 'r3-2',
        user: { name: 'Daniel Lee', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg' },
        rating: 5,
        comment: 'This course demystified neural networks for me. Great content!',
        date: '2023-04-15'
      }
    ]
  },
  {
    id: '4',
    title: 'Digital Marketing Masterclass',
    description: 'Learn effective digital marketing strategies across multiple channels. Master SEO, social media, email marketing, and paid advertising to grow your business.',
    instructor: {
      id: '104',
      name: 'Sophia Williams',
      avatar: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg',
      title: 'Marketing Director'
    },
    coverImage: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg',
    category: 'Marketing',
    level: 'Beginner',
    duration: '12 hours',
    rating: 4.7,
    enrolledStudents: 3150,
    price: 69.99,
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Email Marketing'],
    lessons: [
      { id: '4-1', title: 'Introduction to Digital Marketing', duration: '30 min', type: 'video', completed: false },
      { id: '4-2', title: 'Building a Marketing Strategy', duration: '1 hour', type: 'video', completed: false },
      { id: '4-3', title: 'SEO Fundamentals', duration: '2 hours', type: 'video', completed: false },
      { id: '4-4', title: 'Content Marketing', duration: '1.5 hours', type: 'video', completed: false },
      { id: '4-5', title: 'Social Media Marketing', duration: '2 hours', type: 'video', completed: false },
      { id: '4-6', title: 'Email Marketing', duration: '1.5 hours', type: 'video', completed: false },
      { id: '4-7', title: 'Paid Advertising', duration: '2 hours', type: 'video', completed: false },
      { id: '4-8', title: 'Analytics and Optimization', duration: '1.5 hours', type: 'video', completed: false }
    ],
    reviews: [
      {
        id: 'r4-1',
        user: { name: 'Christopher Wilson', avatar: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg' },
        rating: 5,
        comment: 'This course helped me create a successful marketing strategy for my business.',
        date: '2023-05-20'
      },
      {
        id: 'r4-2',
        user: { name: 'Michelle Garcia', avatar: 'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg' },
        rating: 4,
        comment: 'Great overview of digital marketing channels. Would like more case studies.',
        date: '2023-05-10'
      }
    ]
  },
  {
    id: '5',
    title: 'Full-Stack Web Development',
    description: 'Become a full-stack web developer with this comprehensive course. Learn front-end and back-end technologies, databases, and deployment.',
    instructor: {
      id: '105',
      name: 'Mark Johnson',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      title: 'Lead Developer'
    },
    coverImage: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    category: 'Programming',
    level: 'Intermediate',
    duration: '20 hours',
    rating: 4.8,
    enrolledStudents: 2750,
    price: 129.99,
    tags: ['Web Development', 'JavaScript', 'Node.js', 'React', 'MongoDB'],
    lessons: [
      { id: '5-1', title: 'Introduction to Web Development', duration: '45 min', type: 'video', completed: false },
      { id: '5-2', title: 'HTML & CSS Fundamentals', duration: '3 hours', type: 'video', completed: false },
      { id: '5-3', title: 'JavaScript Essentials', duration: '4 hours', type: 'video', completed: false },
      { id: '5-4', title: 'Frontend with React', duration: '5 hours', type: 'video', completed: false },
      { id: '5-5', title: 'Backend with Node.js', duration: '3 hours', type: 'video', completed: false },
      { id: '5-6', title: 'Databases with MongoDB', duration: '2 hours', type: 'video', completed: false },
      { id: '5-7', title: 'Authentication & Authorization', duration: '1.5 hours', type: 'video', completed: false },
      { id: '5-8', title: 'Deployment & DevOps', duration: '1 hour', type: 'video', completed: false }
    ],
    reviews: [
      {
        id: 'r5-1',
        user: { name: 'James Miller', avatar: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg' },
        rating: 5,
        comment: 'This course took me from beginner to confident full-stack developer. Amazing resource!',
        date: '2023-06-05'
      },
      {
        id: 'r5-2',
        user: { name: 'Elizabeth Turner', avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg' },
        rating: 4,
        comment: 'Very comprehensive. Challenging but rewarding.',
        date: '2023-05-30'
      }
    ]
  },
  {
    id: '6',
    title: 'Business Strategy and Leadership',
    description: 'Develop essential business strategy and leadership skills. Learn how to create effective strategies, lead teams, and drive organizational growth.',
    instructor: {
      id: '106',
      name: 'Robert Anderson',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      title: 'Business Consultant'
    },
    coverImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    category: 'Business',
    level: 'Advanced',
    duration: '15 hours',
    rating: 4.7,
    enrolledStudents: 1850,
    price: 109.99,
    tags: ['Business', 'Leadership', 'Strategy', 'Management'],
    lessons: [
      { id: '6-1', title: 'Introduction to Business Strategy', duration: '1 hour', type: 'video', completed: false },
      { id: '6-2', title: 'Strategic Analysis Tools', duration: '2 hours', type: 'video', completed: false },
      { id: '6-3', title: 'Developing a Strategic Plan', duration: '2.5 hours', type: 'video', completed: false },
      { id: '6-4', title: 'Leadership Fundamentals', duration: '2 hours', type: 'video', completed: false },
      { id: '6-5', title: 'Team Management', duration: '2 hours', type: 'video', completed: false },
      { id: '6-6', title: 'Change Management', duration: '1.5 hours', type: 'video', completed: false },
      { id: '6-7', title: 'Performance Measurement', duration: '2 hours', type: 'video', completed: false },
      { id: '6-8', title: 'Case Studies', duration: '2 hours', type: 'video', completed: false }
    ],
    reviews: [
      {
        id: 'r6-1',
        user: { name: 'Thomas Baker', avatar: 'https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg' },
        rating: 5,
        comment: 'Invaluable insights for any business leader. Transformed my approach to strategy.',
        date: '2023-06-15'
      },
      {
        id: 'r6-2',
        user: { name: 'Patricia Martin', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg' },
        rating: 4,
        comment: 'Excellent content, though some sections could be more practical.',
        date: '2023-06-10'
      }
    ]
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return mockCourses.find(course => course.id === id);
};

export const getLessonById = (courseId: string, lessonId: string): Lesson | undefined => {
  const course = getCourseById(courseId);
  return course?.lessons.find(lesson => lesson.id === lessonId);
};