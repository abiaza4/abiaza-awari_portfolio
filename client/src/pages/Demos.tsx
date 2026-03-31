import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  School,
  CheckCircle,
  XCircle,
  Users,
  BookOpen,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  Lock,
  User,
} from "lucide-react";

interface DemoSystem {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  adminCredentials: { username: string; password: string };
  userCredentials: { username: string; password: string };
}

const demoSystems: DemoSystem[] = [
  {
    id: "school",
    name: "School Management System",
    description:
      "Complete school administration platform with student records, attendance, grading, and parent portal.",
    icon: School,
    adminCredentials: { username: "admin", password: "school" },
    userCredentials: { username: "teacher", password: "school" },
  },
  {
    id: "task",
    name: "Task Management System",
    description:
      "Collaborative task management with Kanban boards, team workspaces, and real-time updates.",
    icon: CheckCircle,
    adminCredentials: { username: "admin", password: "task" },
    userCredentials: { username: "user", password: "task" },
  },
  {
    id: "course",
    name: "Course Platform",
    description:
      "Online learning management system with video courses, progress tracking, and certification.",
    icon: BookOpen,
    adminCredentials: { username: "admin", password: "course" },
    userCredentials: { username: "student", password: "course" },
  },
  {
    id: "job",
    name: "Job Portal",
    description:
      "Job listing and applicant tracking system with resume uploads and company profiles.",
    icon: Briefcase,
    adminCredentials: { username: "admin", password: "job" },
    userCredentials: { username: "applicant", password: "job" },
  },
];

function LoginForm({
  system,
  onBack,
}: {
  system: DemoSystem;
  onBack: () => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "user">("admin");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const credentials =
    role === "admin" ? system.adminCredentials : system.userCredentials;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  const quickLogin = (selectedRole: "admin" | "user") => {
    const creds =
      selectedRole === "admin"
        ? system.adminCredentials
        : system.userCredentials;
    setUsername(creds.username);
    setPassword(creds.password);
    setRole(selectedRole);
  };

  if (isLoggedIn) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="border-primary/30">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto p-4 rounded-full bg-primary/20 w-fit mb-4">
              <system.icon className="text-primary" size={48} />
            </div>
            <CardTitle className="text-2xl">{system.name}</CardTitle>
            <p className="text-muted-foreground">Demo Mode</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center gap-2 p-4 rounded-lg bg-primary/10 text-primary">
              <CheckCircle size={24} />
              <span className="font-semibold">Successfully Logged In!</span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary/20 text-primary">
                    {role === "admin" ? "Administrator" : "User"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Logged in as{" "}
                  <span className="text-foreground font-medium">
                    {username}
                  </span>
                </p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-sm text-muted-foreground mb-2">
                  Demo Access Level:
                </p>
                <p className="font-medium">
                  {role === "admin"
                    ? "Full administrative access"
                    : "Standard user access"}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 text-center">
              <p className="text-muted-foreground text-sm">
                This is a demo environment. In a production environment, you
                would have access to the full {system.name} interface.
              </p>
            </div>

            <div className="flex justify-center">
              <Button onClick={onBack} variant="outline">
                <ArrowLeft className="mr-2" size={18} />
                Back to Demos
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <Card>
        <CardHeader className="text-center pb-2">
          <Button
            variant="ghost"
            onClick={onBack}
            className="absolute left-4 top-4"
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="mx-auto p-3 rounded-full bg-primary/20 w-fit mb-2">
            <system.icon className="text-primary" size={32} />
          </div>
          <CardTitle>{system.name}</CardTitle>
          <p className="text-sm text-muted-foreground">Demo Login</p>
        </CardHeader>
        <CardContent>
          {/* Quick Login Buttons */}
          <div className="flex gap-2 mb-6">
            <Button
              variant={role === "admin" ? "default" : "outline"}
              onClick={() => quickLogin("admin")}
              className="flex-1"
              size="sm"
            >
              <Lock className="mr-1" size={14} />
              Admin Demo
            </Button>
            <Button
              variant={role === "user" ? "default" : "outline"}
              onClick={() => quickLogin("user")}
              className="flex-1"
              size="sm"
            >
              <User className="mr-1" size={14} />
              User Demo
            </Button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="bg-background"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="bg-background"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                <XCircle size={16} />
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Login
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </form>

          {/* Credentials Info */}
          <div className="mt-6 p-4 rounded-lg bg-muted/50">
            <p className="text-sm font-medium mb-2">Demo Credentials:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-muted-foreground">Admin:</span>
                <p className="font-mono">
                  {system.adminCredentials.username} /{" "}
                  {system.adminCredentials.password}
                </p>
              </div>
              <div>
                <span className="text-muted-foreground">User:</span>
                <p className="font-mono">
                  {system.userCredentials.username} /{" "}
                  {system.userCredentials.password}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Demos() {
  const [selectedSystem, setSelectedSystem] = useState<DemoSystem | null>(null);

  if (selectedSystem) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <LoginForm
            system={selectedSystem}
            onBack={() => setSelectedSystem(null)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Live <span className="text-primary">Demos</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test out my software systems with demo accounts. Click on any system
            below to try it out. No registration required!
          </p>
        </div>

        {/* Demo Systems Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {demoSystems.map(system => (
            <Card
              key={system.id}
              className="group cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              onClick={() => setSelectedSystem(system)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <system.icon className="text-primary" size={28} />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {system.name}
                      </CardTitle>
                      <Badge variant="outline" className="mt-1">
                        Live Demo
                      </Badge>
                    </div>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {system.description}
                </p>
                <div className="flex gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Lock size={14} className="text-primary" />
                    <span>Admin: {system.adminCredentials.username}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User size={14} className="text-secondary" />
                    <span>User: {system.userCredentials.username}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 rounded-xl bg-card border border-border">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <CheckCircle className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-2">About the Demos</h3>
              <p className="text-muted-foreground text-sm">
                These are fully functional demo versions of systems I've built.
                Feel free to explore using the provided credentials. Each demo
                showcases different features and functionality. For a custom
                solution tailored to your needs, please get in touch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
