"use client";

import { motion } from "framer-motion";
import { Camera, Eye, Users, Shield, TrendingUp, Bell } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Camera,
    title: "Instant Reporting",
    description: "Document issues with precision. Upload photos, tag locations, and provide critical details in seconds.",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-100 dark:border-blue-800",
  },
  {
    icon: Eye,
    title: "Transparent Tracking",
    description: "Watch your report move from submission to resolution. Complete visibility at every stage of the process.",
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-900/20",
    border: "border-cyan-100 dark:border-cyan-800",
  },
  {
    icon: Users,
    title: "Community Action",
    description: "Amplify your voice. Join thousands of citizens working together to demand better public services.",
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-100 dark:border-indigo-800",
  },
  {
    icon: Shield,
    title: "Verified Impact",
    description: "Reports are validated and prioritized based on severity, ensuring resources go where they are needed most.",
    color: "text-slate-500",
    bg: "bg-slate-50 dark:bg-slate-800/50",
    border: "border-slate-200 dark:border-slate-700",
  },
  {
    icon: TrendingUp,
    title: "Data Insights",
    description: "Visualize neighborhood trends and improvement metrics with our accessible public dashboard.",
    color: "text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-100 dark:border-teal-800",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Stay informed about issues affecting your immediate area with customizable, relevant notifications.",
    color: "text-sky-500",
    bg: "bg-sky-50 dark:bg-sky-900/20",
    border: "border-sky-100 dark:border-sky-800",
  },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50 dark:bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Powerful Tools for <span className="text-blue-600 dark:text-blue-400">Civic Action</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive platform designed to turn individual observations into collective improvements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`h-full p-8 rounded-2xl bg-white dark:bg-slate-900 border transition-all duration-300 shadow-sm hover:shadow-md ${hoveredIndex === index ? "border-blue-300 dark:border-blue-700 -translate-y-1" : "border-slate-200 dark:border-slate-800"
                  }`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl mb-6 ${feature.bg} ${feature.color} ring-1 ring-inset ${feature.border}`}
                >
                  <feature.icon className="h-6 w-6" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
