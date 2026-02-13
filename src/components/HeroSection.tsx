"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight, ShieldCheck, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { rafThrottle } from "@/lib/performance";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const throttledHandleMouseMoveRef = useRef<((e: MouseEvent) => void) | null>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    // Create throttled version once
    throttledHandleMouseMoveRef.current = rafThrottle(handleMouseMove);

    const throttledHandler = throttledHandleMouseMoveRef.current;
    window.addEventListener("mousemove", throttledHandler, { passive: true });

    return () => {
      if (throttledHandler) {
        window.removeEventListener("mousemove", throttledHandler);
      }
    };
  }, [handleMouseMove]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px] dark:bg-blue-900"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-400 opacity-20 blur-[120px] dark:bg-cyan-900"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 tracking-wide uppercase">
                Empowering Communities
              </p>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Civic
              <span className="block gradient-text">Vigilance</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              The People&apos;s Voice. <span className="text-gray-400 dark:text-gray-500">|</span> <span className="text-blue-600 dark:text-blue-400">Accountability</span> starts with you.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Join a network of engaged citizens transforming neighborhoods through transparency and action. Report issues, track resolutions, and build a safer tomorrow—together.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection("report-demo")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Reporting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                size="lg"
                variant="outline"
                className="border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold px-8 py-6 text-lg rounded-xl"
              >
                How It Works
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span>Verified Reports</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span>Active Community</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Modern Dashboard/Map Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-lg mx-auto">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/2dde8b25-27cc-4a13-a1fa-db0708eb2ddc/generated_images/abstract-geometric-illustration-of-diver-0ca9fadb-20251031005937.jpg"
                  alt="Civic Engagement Dashboard"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Floating UI Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 right-8 glass-effect rounded-xl p-4 border-l-4 border-blue-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold text-sm">Latest Activity</span>
                    <span className="text-blue-200 text-xs">Just now</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">Pothole Reported</div>
                      <div className="text-blue-200 text-xs">Main St. & 4th Ave</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-8 right-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 flex items-center gap-3 max-w-[180px]"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">System Operational</span>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl dark:bg-blue-500/20" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl dark:bg-cyan-500/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}