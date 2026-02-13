"use client";

import { motion } from "framer-motion";
import { Github, Mail, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { icon: Github, href: "https://github.com/Vijendrapratap/Civic-Vigilance", label: "GitHub" },
  { icon: Mail, href: "mailto:contact@civicvigilance.com", label: "Email" },
];

const footerLinks = [
  {
    title: "Platform",
    links: [
      { name: "Features", href: "#features" },
      { name: "How it Works", href: "#about" },
      { name: "Civic Duty", href: "#civic-duty" },
    ],
  },
  {
    title: "Action",
    links: [
      { name: "Report Issue", href: "#report-demo" },
      { name: "Live Stats", href: "#report-demo" },
    ],
  },
  {
    title: "Legal & Contact",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Email Us", href: "mailto:contact@civicvigilance.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Purple-and-Blue-Illustrated-Let-s-Play-A-Game-Men-Linkedin-Profile-Picture-3-1761871471696.png?width=8000&height=8000&resize=contain"
                alt="Civic Vigilance"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <div className="font-bold text-xl">CIVIC VIGILANCE</div>
                <div className="text-sm text-cyan-300">The People&apos;s Voice</div>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-6 max-w-sm"
            >
              Empowering citizens to report and resolve societal issues through transparency,
              community engagement, and real-time tracking.
            </motion.p>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {new Date().getFullYear()} Civic Vigilance. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center gap-2"
            >
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> for better communities
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
