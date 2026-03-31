import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X as CloseIcon, Github, Linkedin, X as XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Demos", path: "/demos" },
  { label: "Contact", path: "/contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/abiaza4", label: "GitHub" },
  { icon: Linkedin, href: "https://share.google/qDsKnI8a03QX41OPZ", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/AwariAbiaza", label: "X" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-1 text-2xl font-bold hover:opacity-80 transition-opacity group">
              <span className="text-primary">&lt;</span>
              <span className="logo-text">AB</span>
              <span className="text-primary">/</span>
              <span className="logo-text">AZA</span>
              <span className="text-primary">&gt;</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`nav-link text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    location === item.path
                      ? "text-primary active"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {socials.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-card transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map(item => (
            <Link key={item.path} href={item.path}>
              <a
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location === item.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <div className="flex gap-3 pt-4 border-t border-border">
            {socials.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
