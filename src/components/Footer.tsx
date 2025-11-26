import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/username", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/username", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/username", icon: Twitter, label: "Twitter" },
  { href: "mailto:email@example.com", icon: Mail, label: "Email" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Portofolio" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl tracking-tight">
              <span className="text-primary">AFR</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Learning New Technology, Move Fast and Development Great Products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AFR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
