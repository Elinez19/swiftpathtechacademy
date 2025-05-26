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
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DEMO_CREDENTIALS, signIn, getDashboardPath } from "@/lib/auth";

interface SignInFormData {
  email: string;
  password: string;
  role: "student" | "tutor" | "admin";
}

export default function SignInPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
    role: "student",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: keyof SignInFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("Please fill in all required fields");
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
      const { user } = await signIn(formData);
      const dashboardPath = getDashboardPath(user.role);
      router.push(dashboardPath);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoCredentials = (role: "admin" | "tutor" | "student") => {
    const demoUser = DEMO_CREDENTIALS[role];
    setFormData({
      email: demoUser.email,
      password: demoUser.password,
      role: demoUser.role,
    });
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center mt-60 mb-60">
      <Card className="w-full max-w-[400px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
          <CardDescription>
            Sign in to your SwiftPath Tech Academy account
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
              <Label htmlFor="role">Sign in as</Label>
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

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
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
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
          <Button
            variant="link"
            className="px-0 text-sm text-muted-foreground hover:text-primary"
            onClick={() => {
              // TODO: Implement forgot password
              console.log("Forgot password");
            }}
          >
            Forgot your password?
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
