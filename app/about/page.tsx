"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import {
  CheckCircle,
  Users,
  BookOpen,
  Award,
  GraduationCap,
  Globe,
} from "lucide-react";

// ====== Static Data ======
const heroSection = {
  title: "About SwiftPathTech",
  subtitle:
    "Transforming education through technology and making quality learning accessible to everyone around the world.",
  buttons: [
    {
      label: "Explore Our Courses",
      href: "/courses",
      variant: "default",
    },
    {
      label: "Contact Us",
      href: "/contact",
      variant: "outline",
    },
  ],
};

const missionSection = {
  heading: "Our Mission",
  paragraphs: [
    "At SwiftPathTech, we believe that education is a fundamental right, not a privilege. Our mission is to create a world where anyone, anywhere can transform their life through learning. We're committed to providing high-quality educational content that is accessible, affordable, and effective.",
    "Founded in 2020, SwiftPathTech has grown from a small startup to a global learning platform with over 10,000 students and 500+ courses. Our team of dedicated educators and technology experts work tirelessly to create an engaging learning experience that adapts to the needs of each student.",
  ],
  highlights: [
    "Accessible education for everyone",
    "Expert instructors with real-world experience",
    "Practical, hands-on learning approach",
    "Continuous innovation in educational technology",
  ],
  image: {
    src: "/team-three.jpg",
    alt: "Students learning together",
  },
  card: {
    title: "Global Community",
    subtitle: "Students from 150+ countries",
  },
};

const statsSection = {
  heading: "Our Impact",
  stats: [
    {
      icon: Users,
      value: "10K+",
      label: "Active Students",
    },
    {
      icon: BookOpen,
      value: "500+",
      label: "Courses Available",
    },
    {
      icon: Award,
      value: "150+",
      label: "Expert Instructors",
    },
    {
      icon: GraduationCap,
      value: "95%",
      label: "Completion Rate",
    },
  ],
};

const teamSection = {
  heading: "Meet Our Team",
  description:
    "Our diverse team of educators, technologists, and lifelong learners are passionate about transforming education.",
  members: [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      image: "/team-four.jpg",
      bio: "Former professor with 15+ years in educational technology",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/team-two.jpg",
      bio: "Tech innovator with expertise in AI-powered learning systems",
    },
    {
      name: "Priya Sharma",
      role: "Head of Curriculum",
      image: "/team-three.jpg",
      bio: "Curriculum design expert with focus on interactive learning",
    },
    {
      name: "James Wilson",
      role: "Head of Student Success",
      image: "/team-one.jpg",
      bio: "Dedicated to ensuring positive learning outcomes for all students",
    },
  ],
};
// ====== End Static Data ======

export default function AboutPage() {
  return (
    <section className="space-y-16 px-4 sm:px-6 lg:px-12 py-24">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">{heroSection.title}</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          {heroSection.subtitle}
        </p>
        <div className="flex justify-center gap-4">
          {heroSection.buttons.map((button) => (
            <Button key={button.label} variant={button.variant as any} asChild>
              <a href={button.href}>{button.label}</a>
            </Button>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Image
          src={missionSection.image.src}
          alt={missionSection.image.alt}
          width={600}
          height={400}
          className="rounded-xl object-cover w-full h-full"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{missionSection.heading}</h2>
          {missionSection.paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground">
              {p}
            </p>
          ))}
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            {missionSection.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" /> {highlight}
              </li>
            ))}
          </ul>
          <Card className="mt-4">
            <CardContent className="flex items-center gap-4 py-6">
              <Globe className="text-primary w-6 h-6" />
              <div>
                <h3 className="text-xl font-bold">
                  {missionSection.card.title}
                </h3>
                <p className="text-muted-foreground">
                  {missionSection.card.subtitle}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Stats Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">{statsSection.heading}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {statsSection.stats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <stat.icon className="mx-auto text-primary w-8 h-8" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-center">
          {teamSection.heading}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          {teamSection.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {teamSection.members.map((member) => (
            <Card key={member.name}>
              <CardContent className="p-4 space-y-2">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
