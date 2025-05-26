"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Settings,
  BarChart,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  User,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { cn } from "@/client/lib/utils";
import { Button } from "@/client/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/client/components/ui/dropdown-menu";
import { Input } from "@/client/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/client/components/ui/tooltip";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardFooter } from "./components/DashboardFooter";
import { getCurrentUser, signOut } from "@/client/lib/auth";

interface SidebarLink {
  icon: React.ElementType;
  label: string;
  href: string;
  role: "admin" | "tutor" | "student";
}

const sidebarLinks: SidebarLink[] = [
  {
    icon: LayoutDashboard,
    label: "Overview",
    href: "/dashboard",
    role: "admin",
  },
  {
    icon: Users,
    label: "Users",
    href: "/dashboard/users",
    role: "admin",
  },
  {
    icon: GraduationCap,
    label: "Tutors",
    href: "/dashboard/tutors",
    role: "admin",
  },
  {
    icon: BookOpen,
    label: "Courses",
    href: "/dashboard/courses",
    role: "admin",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/dashboard/analytics",
    role: "admin",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/settings",
    role: "admin",
  },
  // Tutor links
  {
    icon: LayoutDashboard,
    label: "Overview",
    href: "/dashboard/tutor",
    role: "tutor",
  },
  {
    icon: BookOpen,
    label: "My Courses",
    href: "/dashboard/tutor/courses",
    role: "tutor",
  },
  {
    icon: Users,
    label: "Students",
    href: "/dashboard/tutor/students",
    role: "tutor",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/tutor/settings",
    role: "tutor",
  },
  // Student links
  {
    icon: LayoutDashboard,
    label: "Overview",
    href: "/dashboard/student",
    role: "student",
  },
  {
    icon: BookOpen,
    label: "My Courses",
    href: "/dashboard/student/courses",
    role: "student",
  },
  {
    icon: GraduationCap,
    label: "My Tutors",
    href: "/dashboard/student/tutors",
    role: "student",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/dashboard/student/settings",
    role: "student",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Get current user and their role
  const user = getCurrentUser();
  const userRole = user?.role || "admin"; // Fallback to admin for demo

  // Check authentication
  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);

  const filteredLinks = sidebarLinks.filter((link) => link.role === userRole);

  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/sign-in");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (!user) {
    return null; // Don't render anything while checking auth
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen border-r bg-card transition-all duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          isSidebarCollapsed ? "w-20" : "w-64"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="flex h-16 items-center justify-between border-b px-4">
            {!isSidebarCollapsed && (
              <Link href="/dashboard" className="flex items-center gap-2">
                <span className="font-semibold">SwiftPath</span>
                <span className="text-xs text-muted-foreground">Dashboard</span>
              </Link>
            )}
          </div>

          {/* User Info */}
          <div className="border-b p-4">
            {isSidebarCollapsed ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex justify-center">
                      <User className="h-6 w-6" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{user.name}</p>
                    <p className="text-xs text-muted-foreground capitalize">
                      {user.role}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <div className="space-y-1">
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-muted-foreground capitalize">
                  {user.role}
                </p>
              </div>
            )}
          </div>

          {/* Collapse Button */}
          <div className="p-2 border-b">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                    className={cn(
                      "w-full justify-start",
                      isSidebarCollapsed && "justify-center"
                    )}
                  >
                    {isSidebarCollapsed ? (
                      <PanelLeftOpen className="h-4 w-4" />
                    ) : (
                      <>
                        <PanelLeftClose className="h-4 w-4 mr-2" />
                        <span>Collapse Sidebar</span>
                      </>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  {isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {/* Sidebar Links */}
          <nav className="flex-1 space-y-1 px-2 py-4">
            {filteredLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <TooltipProvider key={link.href} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {!isSidebarCollapsed && <span>{link.label}</span>}
                      </Link>
                    </TooltipTrigger>
                    {isSidebarCollapsed && (
                      <TooltipContent side="right">{link.label}</TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </nav>

          {/* Sidebar Footer */}
          <div className="border-t p-4">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full",
                      isSidebarCollapsed
                        ? "justify-center"
                        : "justify-start gap-2"
                    )}
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    {!isSidebarCollapsed && "Logout"}
                  </Button>
                </TooltipTrigger>
                {isSidebarCollapsed && (
                  <TooltipContent side="right">Logout</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div
        className={cn(
          "min-h-screen transition-all duration-300 ease-in-out",
          isSidebarCollapsed ? "lg:pl-20" : "lg:pl-64"
        )}
      >
        {/* Dashboard Header */}
        <DashboardHeader
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Main Content */}
        <main className="min-h-[calc(100vh-8rem)]">
          <div className="container py-8">{children}</div>
        </main>

        {/* Dashboard Footer */}
        <DashboardFooter />
      </div>
    </div>
  );
}
