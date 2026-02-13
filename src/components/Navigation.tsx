"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { rafThrottle } from "@/lib/performance";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Civic Duty", href: "#civic-duty" },
  { name: "Report", href: "#report-demo" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const throttledHandleScrollRef = useRef<(() => void) | null>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    // Track active section
    const sections = navLinks.map(link => link.href.replace("#", ""));
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    // Create throttled version once
    throttledHandleScrollRef.current = rafThrottle(handleScroll);

    // Initial call
    handleScroll();

    // Add throttled listener
    const throttledHandler = throttledHandleScrollRef.current;
    window.addEventListener("scroll", throttledHandler, { passive: true });

    return () => {
      if (throttledHandler) {
        window.removeEventListener("scroll", throttledHandler);
      }
    };
  }, [handleScroll]);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "glass-effect shadow-md py-3 bg-white/80 dark:bg-slate-900/80"
            : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection("#home")}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Purple-and-Blue-Illustrated-Let-s-Play-A-Game-Men-Linkedin-Profile-Picture-3-1761871471696.png?width=8000&height=8000&resize=contain"
                alt="Civic Vigilance Logo"
                width={40}
                height={40}
                className="rounded-full shadow-md"
                priority
                quality={90}
              />
              <div className="hidden sm:block">
                <div className={`font-bold text-lg tracking-tight ${isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"}`}>CIVIC VIGILANCE</div>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">The People&apos;s Voice</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`font-medium transition-colors duration-200 relative group text-sm ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                    aria-label={`Navigate to ${link.name}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                  </button>
                );
              })}
              <div className="pl-4 border-l border-slate-200 dark:border-slate-700 flex items-center gap-4">
                <ThemeToggle />
                <Button
                  onClick={() => scrollToSection("#report-demo")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 shadow-md shadow-blue-500/20"
                  aria-label="Get started with reporting"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${isScrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-slate-50 dark:bg-slate-900"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-900 dark:text-white text-2xl font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button
                  onClick={() => scrollToSection("#report-demo")}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 shadow-lg"
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}