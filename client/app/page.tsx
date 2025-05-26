import Hero from "@/components/hero";
import FeaturedCourses from "../components/featuredCourses";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Globe, BookOpen, Users } from "lucide-react";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="glass-card border-border/50">
    <CardContent className="p-6">
      <div className="w-12 h-12 mb-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-16">
        <Hero />

        {/* Features Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose SwiftPathTech?
              </h2>
              <p className="text-muted-foreground">
                Our platform combines expert-led courses with cutting-edge
                technology to provide you with the best learning experience
                possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<BookOpen size={24} />}
                title="Expert Instructors"
                description="Learn from industry professionals with real-world experience and proven expertise."
              />
              <FeatureCard
                icon={<Globe size={24} />}
                title="Global Community"
                description="Join a worldwide network of learners and expand your professional connections."
              />
              <FeatureCard
                icon={<BarChart size={24} />}
                title="Progress Tracking"
                description="Monitor your advancement with detailed analytics and personalized insights."
              />
              <FeatureCard
                icon={<Users size={24} />}
                title="Interactive Learning"
                description="Engage with interactive content, projects, and collaborate with fellow students."
              />
            </div>
          </div>
        </section>

        <FeaturedCourses />

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-card-gradient opacity-90"></div>
            <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of students already learning on our platform and
                take the next step in your career.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="hero-button bg-hero-gradient hover:opacity-90">
                  Get Started
                </Button>
                <Button variant="outline" className="hero-button">
                  Browse Courses
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
