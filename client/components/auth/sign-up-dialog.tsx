import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
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

export function SignUpDialog() {
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
      // TODO: Implement actual signup logic here
      console.log("Signing up with:", formData);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err) {
      setError("An error occurred during sign up. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create your account</DialogTitle>
          <DialogDescription>
            Join SwiftPath Tech Academy to start your learning journey
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
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
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="graduate">Graduate</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <DialogFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
