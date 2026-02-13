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
    <section id="report-demo" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Stats Section with Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: TrendingUp,
              value: count1.toLocaleString(),
              label: "Issues Reported",
              color: "text-blue-500",
              bgColor: "bg-blue-50 dark:bg-blue-900/20",
            },
            {
              icon: CheckCircle2,
              value: count2.toLocaleString(),
              label: "Issues Resolved",
              color: "text-green-500",
              bgColor: "bg-green-50 dark:bg-green-900/20",
            },
            {
              icon: Users,
              value: count3.toLocaleString(),
              label: "Active Citizens",
              color: "text-blue-500",
              bgColor: "bg-blue-50 dark:bg-blue-900/20",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4"
            >
              <div className={`p-3 rounded-lg ${stat.bgColor} ${stat.color}`}>
                <stat.icon className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Report in <span className="text-blue-600 dark:text-blue-400">3 Simple Steps</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              We&apos;ve streamlined the process to make reporting as easy as sending a text. No bureaucracy, just action.
            </p>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Capture",
                  description: "Take a clear photo of the issue. Visual proof helps prioritize the response.",
                  icon: Camera,
                },
                {
                  step: "02",
                  title: "Locate",
                  description: "Confirm the location. Our system automatically tags the GPS coordinates.",
                  icon: MapPin,
                },
                {
                  step: "03",
                  title: "Submit",
                  description: "Add a brief description and hit send. You'll get a tracking ID instantly.",
                  icon: Send,
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Download the App
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 relative shadow-2xl"
          >
            {/* Mock Phone UI */}
            <div className="mx-auto w-[280px] sm:w-[320px] bg-black rounded-[40px] border-8 border-slate-900 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>

              <div className="h-[600px] bg-white dark:bg-slate-900 relative">
                {/* Status Bar */}
                <div className="h-12 bg-slate-50 dark:bg-slate-800 flex items-center justify-between px-6 pt-2">
                  <span className="text-xs font-bold dark:text-white">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-3 bg-slate-900 dark:bg-white rounded-sm opacity-20"></div>
                    <div className="w-4 h-3 bg-slate-900 dark:bg-white rounded-sm opacity-50"></div>
                    <div className="w-4 h-3 bg-slate-900 dark:bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-6">
                  <div className="h-40 bg-slate-100 dark:bg-slate-800 rounded-2xl mb-6 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600">
                    <Camera className="text-slate-400" size={32} />
                  </div>

                  <div className="space-y-4">
                    <div className="h-2 w-1/3 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    <div className="h-10 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 px-4 flex items-center text-sm text-slate-500 dark:text-slate-400">
                      Pothole on Main St.
                    </div>

                    <div className="h-2 w-1/4 bg-slate-200 dark:bg-slate-700 rounded-full mt-4"></div>
                    <div className="h-24 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 text-sm text-slate-500 dark:text-slate-400">
                      Deep pothole causing traffic issues...
                    </div>

                    <div className="pt-4">
                      <div className="w-full h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white font-semibold shadow-lg shadow-blue-500/20">
                        Submit Report
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Nav */}
                <div className="absolute bottom-0 w-full h-20 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex justify-around items-center px-4 pb-4">
                  <div className="text-blue-500"><TrendingUp size={24} /></div>
                  <div className="grid place-items-center w-12 h-12 bg-blue-500 rounded-full text-white -mt-8 shadow-lg shadow-blue-500/30"><Camera size={24} /></div>
                  <div className="text-slate-400"><Users size={24} /></div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-400 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm transform rotate-12">
              Live & Active
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}