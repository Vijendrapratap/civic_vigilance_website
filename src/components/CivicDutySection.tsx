"use client";

import { motion } from "framer-motion";
import { Scale, Users, Eye, Heart, Shield, BookOpen } from "lucide-react";

const civicPrinciples = [
  {
    icon: Scale,
    title: "Accountability",
    description: "Every citizen has the right and responsibility to hold public services accountable. When we see something wrong, silence becomes complicity.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Your neighborhood is your responsibility. A thriving community is built by active citizens who care enough to speak up and take action.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Eye,
    title: "Vigilance",
    description: "Being watchful doesn't mean being suspicious—it means caring enough about your surroundings to notice when things need attention.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Empathy in Action",
    description: "Every report you make could improve someone's daily life. From fixing potholes to addressing safety concerns, small actions create big impact.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Collective Safety",
    description: "Safety is not just the government's job—it's a shared responsibility. Your vigilance protects not just you, but everyone in your community.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: BookOpen,
    title: "Civic Education",
    description: "Understanding your rights and duties as a citizen is the first step. Civic vigilance starts with knowing what you can change and how to do it.",
    color: "from-yellow-500 to-amber-500",
  },
];

const impactStories = [
  {
    issue: "Broken streetlights endangering pedestrians",
    action: "127 citizens reported in the same neighborhood",
    result: "Fixed within 48 hours, reducing nighttime incidents by 65%",
    icon: "💡",
  },
  {
    issue: "Illegal waste dumping near residential areas",
    action: "Community documentation with photos and locations",
    result: "Cleanup initiated, surveillance installed, area restored",
    icon: "♻️",
  },
  {
    issue: "Dangerous potholes causing accidents",
    action: "Collective reporting with severity tracking",
    result: "Road repair prioritized, 3 major accidents prevented",
    icon: "🚧",
  },
];

export default function CivicDutySection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Civic Vigilance</span> Matters
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Democracy isn't just about voting once every few years. It's about showing up every day, 
            being present in your community, and taking responsibility for the world around you. 
            <span className="block mt-4 text-cyan-300 font-semibold">
              Civic vigilance is the heartbeat of a healthy democracy.
            </span>
          </p>
        </motion.div>

        {/* The Reality Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 glass-effect rounded-3xl p-10 border border-white/10"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">The Reality We Face</h3>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              <span className="text-cyan-400 font-semibold">Our cities are growing faster than ever</span>, 
              but our civic infrastructure often struggles to keep pace. Potholes go unfixed for months, 
              streetlights stay broken, illegal dumping becomes normalized, and public spaces deteriorate.
            </p>
            <p>
              <span className="text-purple-400 font-semibold">The gap isn't just about resources</span>—it's 
              about awareness. Government bodies can't be everywhere at once. They rely on us, the citizens, 
              to be their eyes and ears. When we stay silent, problems persist. When we speak up, change happens.
            </p>
            <p>
              <span className="text-green-400 font-semibold">But here's the challenge</span>: traditional 
              complaint systems are fragmented, slow, and often discouraging. People don't report issues 
              because they don't believe anything will change. That's where civic vigilance comes in—not 
              as a burden, but as an empowerment tool.
            </p>
          </div>
        </motion.div>

        {/* Civic Principles Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-12 text-center">The Six Pillars of Civic Vigilance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {civicPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${principle.color} mb-4`}
                >
                  <principle.icon className="h-8 w-8 text-white" strokeWidth={2} />
                </motion.div>
                <h4 className="text-xl font-bold mb-3">{principle.title}</h4>
                <p className="text-gray-300 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Real Impact Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">Real Stories, Real Impact</h3>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            These aren't just statistics—they're examples of how civic vigilance transforms communities 
            when citizens take action together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {story.icon}
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-cyan-400 font-semibold uppercase mb-1">The Issue</div>
                    <p className="text-sm text-gray-300">{story.issue}</p>
                  </div>
                  <div>
                    <div className="text-xs text-purple-400 font-semibold uppercase mb-1">Civic Action</div>
                    <p className="text-sm text-gray-300">{story.action}</p>
                  </div>
                  <div>
                    <div className="text-xs text-green-400 font-semibold uppercase mb-1">The Result</div>
                    <p className="text-sm font-semibold text-white">{story.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Your Role Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-effect rounded-3xl p-10 border border-white/10 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Your Role in Building Better Communities</h3>
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
            <p>
              You don't need to be an activist, a politician, or even particularly outspoken. 
              <span className="text-cyan-400 font-semibold"> You just need to care</span>.
            </p>
            <p>
              When you see a broken footpath that could hurt someone, report it. When you notice 
              a streetlight that's been dark for weeks, speak up. When you witness illegal dumping, 
              document it. <span className="text-purple-400 font-semibold">These small acts of vigilance 
              create a culture of accountability</span>.
            </p>
            <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Because the community you want to live in starts with the community you help build.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg"
          >
            🤝 Join the Movement
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
