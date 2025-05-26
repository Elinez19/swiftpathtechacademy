interface UserData {
  email: string;
  password: string;
  role: "admin" | "tutor" | "student";
  name: string;
}

// Demo credentials for testing
export const DEMO_CREDENTIALS = {
  admin: {
    email: "admin@swiftpath.tech",
    password: "admin123",
    role: "admin" as const,
    name: "Admin User",
  },
  tutor: {
    email: "tutor@swiftpath.tech",
    password: "tutor123",
    role: "tutor" as const,
    name: "Demo Tutor",
  },
  student: {
    email: "student@swiftpath.tech",
    password: "student123",
    role: "student" as const,
    name: "Demo Student",
  },
};

// Simple in-memory storage for demo users
let registeredUsers = new Map<string, UserData>();

// Initialize with demo users
registeredUsers.set(DEMO_CREDENTIALS.admin.email, DEMO_CREDENTIALS.admin);
registeredUsers.set(DEMO_CREDENTIALS.tutor.email, DEMO_CREDENTIALS.tutor);
registeredUsers.set(DEMO_CREDENTIALS.student.email, DEMO_CREDENTIALS.student);

export interface AuthUser {
  email: string;
  name: string;
  role: "admin" | "tutor" | "student";
}

// Current user session
let currentUser: AuthUser | null = null;

export async function signUp(userData: UserData) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (registeredUsers.has(userData.email)) {
    throw new Error("User already exists");
  }

  registeredUsers.set(userData.email, userData);
  return { success: true };
}

export async function signIn(credentials: {
  email: string;
  password: string;
  role: "admin" | "tutor" | "student";
}) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const user = registeredUsers.get(credentials.email);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  if (user.role !== credentials.role) {
    throw new Error("Invalid role for this user");
  }

  // For demo purposes, we're not doing actual password comparison
  // In a real app, you would hash and compare passwords

  currentUser = {
    email: user.email,
    name: user.name,
    role: user.role,
  };

  return { user: currentUser };
}

export async function signOut() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  currentUser = null;
}

export function getCurrentUser() {
  return currentUser;
}

export function getDashboardPath(role: "admin" | "tutor" | "student") {
  switch (role) {
    case "admin":
      return "/dashboard";
    case "tutor":
      return "/dashboard/tutor";
    case "student":
      return "/dashboard/student";
    default:
      return "/";
  }
}
