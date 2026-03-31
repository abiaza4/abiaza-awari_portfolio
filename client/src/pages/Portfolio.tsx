import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  Code2,
  Database,
  Palette,
  Shield,
} from "lucide-react";
import { Link } from "wouter";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart management, payment integration, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    category: "Web Application",
    github: "https://github.com/abiaza4",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "School Management System",
    description:
      "Comprehensive school management software with student records, attendance tracking, grading, and parent portal.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    technologies: ["React", "Express", "MongoDB", "JWT", "Tailwind"],
    category: "Management System",
    github: "https://github.com/abiaza4",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team workspaces, and Kanban boards.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "WebSocket",
    ],
    category: "Productivity",
    github: "https://github.com/abiaza4",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Job Portal",
    description:
      "Job listing platform with applicant tracking, resume upload, company profiles, and job alerts.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "REST API", "AWS S3"],
    category: "Web Application",
    github: "https://github.com/abiaza4",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Course Platform",
    description:
      "Online learning platform with video streaming, progress tracking, quizzes, and certification generation.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Video Streaming",
      "Stripe",
    ],
    category: "E-Learning",
    github: "https://github.com/abiaza4",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Church Management System",
    description:
      "Digital platform for church administration including membership, events, donations, and group management.",
    image:
      "https://images.unsplash.com/photo-1499363536502-87642509e31b?w=600&h=400&fit=crop",
    technologies: ["React", "Python", "PostgreSQL", "Payment Gateway"],
    category: "Management System",
    github: "https://github.com/abiaza4",
    live: "https://example.com",
    featured: false,
  },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Web Application":
      return <Code2 size={16} />;
    case "Management System":
      return <Database size={16} />;
    case "E-Learning":
      return <Palette size={16} />;
    default:
      return <Shield size={16} />;
  }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Portfolio</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in
            full-stack development and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">▹</span> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/80 backdrop-blur-sm border-none">
                        {getCategoryIcon(project.category)}
                        <span className="ml-1">{project.category}</span>
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map(tech => (
                        <Badge
                          key={tech}
                          className="text-xs bg-primary/10 text-primary border-none"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge className="text-xs bg-muted text-muted-foreground border-none">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">▹</span> Other Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter(p => !p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.category}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <Badge
                        key={tech}
                        className="text-xs bg-muted text-muted-foreground border-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 px-8 rounded-3xl bg-gradient-to-br from-card via-card to-primary/5 border border-border">
          <h2 className="text-2xl font-bold mb-4">Want to see more?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Check out my GitHub for more projects, or get in touch to discuss
            your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/abiaza4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90">
                <Github className="mr-2" size={18} />
                GitHub Profile
              </Button>
            </a>
            <Link href="/demos">
              <Button variant="outline" className="border-primary/50">
                Try Live Demos
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-primary/50">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
