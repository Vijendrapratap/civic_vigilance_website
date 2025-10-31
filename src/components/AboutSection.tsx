"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Report",
    description: "Citizens report issues with photos, location, and details through our intuitive interface. Every report is a step toward accountability.",
    icon: "📸",
  },
  {
    number: "02",
    title: "Verify",
    description: "Our system verifies and categorizes reports, prioritizing based on severity and community impact. Transparency at every step.",
    icon: "✅",
  },
  {
    number: "03",
    title: "Resolve",
    description: "Authorities take action and citizens receive real-time updates until resolution. Closing the loop builds trust.",
    icon: "🎯",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
            Civic Vigilance empowers citizens to be the eyes and ears of their communities. 
            We bridge the gap between citizens and authorities, creating transparency and 
            accountability in addressing societal issues.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-purple-600 dark:text-purple-400">Your civic responsibility is not just 
            a duty—it's the foundation of a thriving, engaged democracy</span> where every voice shapes 
            our collective future. When citizens actively participate in maintaining and improving their 
            communities, we create a ripple effect of positive change that transforms neighborhoods, 
            cities, and ultimately, our nation.
          </p>
        </motion.div>

        {/* The Problem We Solve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 glass-effect rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-4 text-center dark:text-white">Breaking the Silence</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            For too long, citizens have felt powerless when facing civic issues. Traditional complaint 
            systems are fragmented, unresponsive, and lack transparency. Reports disappear into black 
            holes, and communities lose faith in the system.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            <span className="text-cyan-600 dark:text-cyan-400">Civic Vigilance changes this narrative.</span> We 
            create a direct line between concerned citizens and responsive authorities, ensuring every 
            voice is heard, every issue is tracked, and every resolution is celebrated. This isn't just 
            an app—it's a movement toward civic empowerment.
          </p>
        </motion.div>

        {/* How It Works */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
          >
            How It Works
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 -z-10" />
                )}

                <div className="glass-effect rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-4">{step.icon}</div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold mb-3 dark:text-white">{step.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}