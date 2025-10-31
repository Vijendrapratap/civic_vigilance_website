"use client";

import { motion } from "framer-motion";
import { Camera, Eye, Users, Shield, TrendingUp, Bell } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Camera,
    title: "Instant Reporting",
    description: "Report issues with photos, location, and description in seconds. Your voice matters.",
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Eye,
    title: "Real-Time Tracking",
    description: "Track your reported issues from submission to resolution with transparent updates.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Join thousands of active citizens making a difference in their communities.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Shield,
    title: "Verified Actions",
    description: "All reports are verified and prioritized based on severity and community impact.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: TrendingUp,
    title: "Impact Analytics",
    description: "View statistics and analytics on resolved issues and community impact.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get instant alerts about issues in your area and resolution updates.",
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-500/10",
  },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to report, track, and resolve societal issues in one platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div
                className={`relative h-full p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  hoveredIndex === index ? "scale-105" : ""
                }`}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-2xl ${feature.bgColor} mb-6`}
                >
                  <feature.icon className={`h-8 w-8 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} strokeWidth={2} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  animate={{
                    x: hoveredIndex === index ? 0 : -10,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  className="absolute bottom-8 right-8"
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
