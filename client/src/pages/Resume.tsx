import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, MapPin, Award, GraduationCap } from "lucide-react";
import { Link } from "wouter";

const experiences = [
  {
    company: "Tech Solutions Inc.",
    location: "Remote",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description:
      "Lead development of enterprise web applications. Mentored junior developers and implemented best practices.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    company: "StartupHub",
    location: "Africa",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple client projects. Implemented REST APIs and responsive frontends.",
    technologies: ["Vue.js", "Python", "MongoDB", "REST APIs"],
  },
  {
    company: "Digital Agency",
    location: "Remote",
    role: "Frontend Developer",
    period: "2019 - 2020",
    description:
      "Developed user interfaces for various clients. Collaborated with designers to implement pixel-perfect designs.",
    technologies: ["JavaScript", "React", "Tailwind CSS", "Figma"],
  },
];

const education = [
  {
    institution: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    period: "2015 - 2019",
    location: "Africa",
    description:
      "Focus on software engineering and web technologies. Graduated with honors.",
  },
  {
    institution: "Tech Academy",
    degree: "Full Stack Web Development Bootcamp",
    period: "2019",
    location: "Remote",
    description:
      "Intensive 12-week program covering modern web development technologies.",
  },
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Meta Front-End Developer Certificate",
  "Google Cloud Professional Developer",
  "Meta Back-End Developer Certificate",
];

const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Vue.js",
    "Tailwind CSS",
    "HTML/CSS",
  ],
  backend: ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Docker", "AWS", "CI/CD", "Linux", "REST APIs"],
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Resume</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A summary of my professional experience, skills, and education in
            software development.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Download className="mr-2" size={18} />
            Download CV
          </Button>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">▹</span> Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map(skill => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-primary/30 text-primary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            {/* Backend */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map(skill => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-primary/30 text-primary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            {/* Tools */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Tools & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(skill => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-primary/30 text-primary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">▹</span> Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <Badge
                      key={tech}
                      className="bg-primary/10 text-primary border-none"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">▹</span> Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-primary font-medium">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-3">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">▹</span> Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Award className="text-primary" size={24} />
                </div>
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">
            Interested in working together?
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
