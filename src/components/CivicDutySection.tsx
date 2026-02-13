"use client";

import { motion } from "framer-motion";
import { Scale, Users, Eye, Heart, Shield, BookOpen } from "lucide-react";

const civicPrinciples = [
  {
    icon: Scale,
    title: "Accountability",
    description: "Every citizen has the right to hold public services accountable. Silence is not an option when our community's well-being is at stake.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "A thriving neighborhood is built by active participants. We are the architects of the environment we live in.",
  },
  {
    icon: Eye,
    title: "Active Vigilance",
    description: "Being watchful means caring. Identifying issues early prevents them from becoming crises that threaten our safety.",
  },
  {
    icon: Heart,
    title: "Empathy in Action",
    description: "Reporting a hazard protects your neighbor. Small acts of civic duty are profound acts of kindness.",
  },
  {
    icon: Shield,
    title: "Shared Safety",
    description: "Security is a collective effort. Your vigilance creates a protective shield for the most vulnerable among us.",
  },
  {
    icon: BookOpen,
    title: "Civic Education",
    description: "Knowledge is power. Understanding your rights and responsibilities is the first step toward meaningful change.",
  },
];

export default function CivicDutySection() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern - Topographic Map Style */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-slate-900"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Sticky Content */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Why <span className="text-blue-400">Civic Vigilance</span> Matters
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Democracy isn't a spectator sport. It requires engagement, observation, and action from every one of us.
              </p>

              <div className="prose prose-lg prose-invert text-slate-400">
                <p>
                  Our cities are complex ecosystems. When systems fail—be it a broken streetlamp or an ignored pothole—it affects us all.
                  <strong className="text-white"> You are the sensor network of your city. </strong>
                </p>
                <p>
                  By reporting issues, you aren't just complaining; you are providing the essential data needed for improvement.
                  You are transforming from a passive resident into an active citizen.
                </p>
              </div>

              <div className="mt-10 p-6 bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl">
                <p className="text-lg font-medium text-blue-100 italic">
                  "The oversight of the people is the safeguard of the nation."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Grid of Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {civicPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
              >
                <principle.icon className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-white">{principle.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
