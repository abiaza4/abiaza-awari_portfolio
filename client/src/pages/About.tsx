import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Award,
  GraduationCap,
  Clock,
  Heart,
  Globe,
  Lightbulb,
} from "lucide-react";
import { Link } from "wouter";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Git",
  "REST APIs",
  "GraphQL",
  "Tailwind CSS",
  "Next.js",
  "Express",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Profile Image */}
          <div className="relative flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-border shadow-xl">
                <img
                  src="/profile.jpeg"
                  alt="Abiaza"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              I'm <span className="text-primary">Abiaza</span>, a Software
              Engineer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A passionate software engineer with over 2 years of experience in building
              scalable web applications and digital solutions. I specialize in
              full-stack development with a focus on creating efficient,
              user-centric applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in tech began with a fascination for how technology can
              solve real-world problems. Today, I leverage my skills to build
              solutions that not only meet technical requirements but also
              deliver exceptional user experiences.
            </p>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-medium">abiazaawari@gmail.com</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-medium">Kigali, Rwanda</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-sm text-muted-foreground mb-1">
                  Availability
                </p>
                <p className="font-medium text-primary">Open to Work</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-sm text-muted-foreground mb-1">Experience</p>
                <p className="font-medium">2+ Years</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Link href="/resume">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Download className="mr-2" size={18} />
                  Download CV
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map(skill => (
              <Badge
                key={skill}
                className="px-4 py-2 text-sm bg-card hover:bg-primary/20 text-muted-foreground hover:text-primary border-border transition-all duration-300 cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* My Vision for Africa Section */}
        <div className="py-16 px-8 rounded-3xl bg-gradient-to-br from-card via-card to-primary/5 border border-border mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/20 text-primary">
                <Globe size={32} />
              </div>
              <h2 className="text-3xl font-bold">
                My Vision for <span className="text-primary">Africa</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I believe that{" "}
                <span className="text-foreground font-medium">
                  technology is the key to unlocking Africa's vast potential
                </span>
                . As the continent continues to grow digitally, there's an
                incredible opportunity to build solutions that address unique
                African challenges.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-background/50 border border-border">
                  <Lightbulb className="text-primary mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Digital Transformation
                  </h3>
                  <p className="text-sm">
                    Empowering businesses and governments with modern digital
                    infrastructure.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-background/50 border border-border">
                  <Heart className="text-primary mb-3" size={24} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Social Impact
                  </h3>
                  <p className="text-sm">
                    Building systems for NGOs, churches, and community
                    organizations.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground">
                Areas I'm Passionate About:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    <strong className="text-foreground">
                      E-Government Services
                    </strong>{" "}
                    - Like Rwanda's Irembo, making government services
                    accessible to all Africans
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    <strong className="text-foreground">
                      Education Technology
                    </strong>{" "}
                    - Bridging the education gap with accessible online learning
                    platforms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    <strong className="text-foreground">
                      Church Digital Platforms
                    </strong>{" "}
                    - Helping religious organizations connect with their
                    congregations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    <strong className="text-foreground">
                      NGO Management Tools
                    </strong>{" "}
                    - Streamlining operations for organizations making a
                    difference
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <span>
                    <strong className="text-foreground">
                      Healthcare Systems
                    </strong>{" "}
                    - Improving healthcare delivery through technology
                  </span>
                </li>
              </ul>

              <p className="pt-4 border-t border-border">
                My goal is to contribute to Africa's digital revolution by
                building software that solves real problems and improves lives
                across the continent.
              </p>
            </div>
          </div>
        </div>

        {/* What I Love Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors">
            <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
              <Code2 size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Clean Code</h3>
            <p className="text-muted-foreground">
              Writing maintainable, scalable code that stands the test of time.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors">
            <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Problem Solving</h3>
            <p className="text-muted-foreground">
              Breaking down complex problems into elegant solutions.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors">
            <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Impact</h3>
            <p className="text-muted-foreground">
              Building technology that makes a real difference in Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Code2({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
