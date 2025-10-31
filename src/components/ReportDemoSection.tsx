"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Camera, MapPin, Type, Send, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export default function ReportDemoSection() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const targets = [12543, 10678, 5234];
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    let rafId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount1(Math.floor(targets[0] * easeOut));
      setCount2(Math.floor(targets[1] * easeOut));
      setCount3(Math.floor(targets[2] * easeOut));

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section id="report-demo" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Community Impact</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real numbers from real citizens making real change. When individuals act, communities transform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: TrendingUp,
              value: count1.toLocaleString(),
              label: "Issues Reported",
              sublabel: "Voices raised, problems identified",
              color: "from-cyan-500 to-blue-500",
              bgColor: "bg-cyan-500/10",
            },
            {
              icon: CheckCircle2,
              value: count2.toLocaleString(),
              label: "Issues Resolved",
              sublabel: "Communities restored, trust rebuilt",
              color: "from-green-500 to-emerald-500",
              bgColor: "bg-green-500/10",
            },
            {
              icon: Users,
              value: count3.toLocaleString(),
              label: "Active Citizens",
              sublabel: "Ordinary people, extraordinary impact",
              color: "from-purple-500 to-pink-500",
              bgColor: "bg-purple-500/10",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`inline-flex p-4 rounded-2xl ${stat.bgColor} mb-4`}
              >
                <stat.icon className={`h-10 w-10 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} strokeWidth={2} />
              </motion.div>
              <div className={`text-5xl font-bold mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Empowerment Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16 glass-effect rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-4 dark:text-white">
            You Don't Need Permission to Care
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Every great change in history started with ordinary citizens who refused to accept the status quo. 
            You don't need to wait for someone else to fix the broken streetlight, report the pothole, or 
            highlight the safety hazard. <span className="text-purple-600 dark:text-purple-400 font-semibold">Your 
            awareness is power. Your action is change.</span> Start today, because your community is counting on you.
          </p>
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4 dark:text-white">
              Report an Issue in 3 Simple Steps
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Making a difference has never been easier. Your 2 minutes can change someone's day—or save a life.
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Camera,
                  step: "Step 1",
                  title: "Capture",
                  description: "Take a photo of the issue—visual proof matters",
                  color: "from-red-500 to-orange-500",
                },
                {
                  icon: MapPin,
                  step: "Step 2",
                  title: "Locate",
                  description: "Pin the exact location—precision gets results",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Type,
                  step: "Step 3",
                  title: "Describe",
                  description: "Add relevant details—context drives action",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${item.color} mb-4 shadow-lg group-hover:shadow-2xl transition-shadow`}
                  >
                    <item.icon className="h-10 w-10 text-white" strokeWidth={2} />
                  </motion.div>
                  <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 text-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Be the Change—Start Now
              </Button>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Join thousands who chose action over apathy
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}