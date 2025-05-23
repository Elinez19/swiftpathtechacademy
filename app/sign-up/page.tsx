"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DEMO_CREDENTIALS, signUp } from "@/lib/auth";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  role: "student" | "tutor" | "admin";
  // Additional fields for tutors
  expertise?: string;
  bio?: string;
  qualifications?: string;
  // Additional fields for students
  interests?: string;
  educationLevel?: string;
}

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<SignUpFormData>({
    name: "",
    email: "",
    password: "",
    role: "student",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: keyof SignUpFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all required fields");
      return false;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await signUp(formData);
      router.push("/sign-in");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An error occurred during sign up"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoCredentials = (role: "admin" | "tutor" | "student") => {
    const demoUser = DEMO_CREDENTIALS[role];
    setFormData({
      ...formData,
      email: demoUser.email,
      password: demoUser.password,
      role: demoUser.role,
      name: demoUser.name,
    });
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center mt-60 mb-60">
      <Card className="w-full max-w-[600px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            Create an account
          </CardTitle>
          <CardDescription>
            Join SwiftPath Tech Academy to start your learning journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 space-y-2">
            <p className="text-sm text-muted-foreground">Demo Accounts:</p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => fillDemoCredentials("student")}
              >
                Demo Student
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => fillDemoCredentials("tutor")}
              >
                Demo Tutor
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => fillDemoCredentials("admin")}
              >
                Demo Admin
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password (min. 8 characters)"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">I want to join as *</Label>
              <Select
                value={formData.role}
                onValueChange={(value: "student" | "tutor" | "admin") =>
                  handleChange("role", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="tutor">Tutor</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {formData.role === "tutor" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="expertise">Areas of Expertise *</Label>
                  <Input
                    id="expertise"
                    placeholder="e.g., Web Development, Data Science"
                    value={formData.expertise}
                    onChange={(e) => handleChange("expertise", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Bio *</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about your teaching experience and expertise"
                    value={formData.bio}
                    onChange={(e) => handleChange("bio", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="qualifications">Qualifications *</Label>
                  <Input
                    id="qualifications"
                    placeholder="e.g., MSc Computer Science, Industry Certifications"
                    value={formData.qualifications}
                    onChange={(e) =>
                      handleChange("qualifications", e.target.value)
                    }
                    required
                  />
                </div>
              </>
            )}

            {formData.role === "student" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="interests">Learning Interests</Label>
                  <Input
                    id="interests"
                    placeholder="e.g., Web Development, AI, Data Science"
                    value={formData.interests}
                    onChange={(e) => handleChange("interests", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="educationLevel">Education Level</Label>
                  <Select
                    value={formData.educationLevel}
                    onValueChange={(value) =>
                      handleChange("educationLevel", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="undergraduate">
                        Undergraduate
                      </SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
