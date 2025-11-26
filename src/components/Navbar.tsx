"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Portfolio" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHireDialogOpen, setIsHireDialogOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-primary">AFR</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                pathname === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Dialog open={isHireDialogOpen} onOpenChange={setIsHireDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Hire Me
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Contact Me</DialogTitle>
              </DialogHeader>
              <ContactForm onSuccess={() => setIsHireDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/40 bg-background"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Dialog open={isHireDialogOpen} onOpenChange={setIsHireDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full mt-4">
                    <Mail className="h-4 w-4 mr-2" />
                    Hire Me
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Hubungi Saya</DialogTitle>
                  </DialogHeader>
                  <ContactForm onSuccess={() => setIsHireDialogOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
