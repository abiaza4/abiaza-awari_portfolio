import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
  Code2,
  Briefcase,
  Users,
  X as XIcon,
} from "lucide-react";
import BinaryWave from "@/components/BinaryWave";

function Counter({
  end,
  label,
  icon: Icon,
  suffix = "",
}: {
  end: number;
  label: string;
  icon: React.ElementType;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center p-6 rounded-xl bg-card/50 border border-border backdrop-blur-sm">
      <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
        <Icon size={28} />
      </div>
      <div className="text-4xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full Viewport */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
          <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        {/* Binary Wave Effect */}
        <BinaryWave />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Open to Work
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-glow bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Abiaza
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground">
                Software Engineer & Full Stack Developer
              </p>

              <p className="text-lg text-muted-foreground max-w-lg">
                Building elegant solutions to complex problems. Passionate about
                technology and its potential to transform Africa.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/abiaza4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://share.google/qDsKnI8a03QX41OPZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://x.com/AwariAbiaza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-card hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <XIcon size={24} />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-hover"
                  >
                    View My Work
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 font-semibold"
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                  <img
                    src="/profile.jpeg"
                    alt="Abiaza - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 -m-4 animate-pulse-glow"></div>
                <div className="absolute -bottom-4 -right-4 p-4 bg-card rounded-xl border border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <Code2 className="text-primary" size={20} />
                    <span className="text-sm font-medium">Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mt-24">
            <Counter end={2} label="Years Experience" icon={Briefcase} />
            <Counter
              end={50}
              label="Projects Completed"
              icon={Code2}
              suffix="+"
            />
            <Counter end={30} label="Happy Clients" icon={Users} suffix="+" />
            <Counter end={10} label="Awards" icon={Briefcase} />
          </div>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-border">
            <a
              href="mailto:abiazaawari@gmail.com"
              className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                <Mail className="text-primary" size={18} />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm sm:text-base truncate">
                abiazaawari@gmail.com
              </span>
            </a>
            <a
              href="tel:+211922257944"
              className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                <Phone className="text-primary" size={18} />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm sm:text-base">
                +211 922 257 944
              </span>
            </a>
            <a
              href="tel:+250791902058"
              className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                <Phone className="text-primary" size={18} />
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm sm:text-base">
                +250 791 902 058
              </span>
            </a>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                <MapPin className="text-primary" size={18} />
              </div>
              <span className="text-muted-foreground text-sm sm:text-base">
                Kigali, Rwanda
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
