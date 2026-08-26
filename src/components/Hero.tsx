'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-24 overflow-hidden bg-dark-bg">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800/40 border border-slate-700/50 text-flutter-cyan text-xs font-semibold uppercase tracking-wider"
            >
              <Briefcase className="w-3.5 h-3.5 text-flutter-cyan" />
              <span>Available for Roles & Internships</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tighter leading-none text-left mb-2 flex flex-col space-y-3"
            >
              <span className="text-gradient block">I'm</span>
              <span className="text-gradient-flutter font-black block">Ahmed Hussien</span>
              <span className="text-xl sm:text-2xl xl:text-3xl text-slate-400 font-medium tracking-normal block pt-2 font-sans">
                Junior Flutter Developer & Mobile Engineer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed font-sans text-left"
            >
              Results-driven Junior Flutter Developer with proven practical experience in building scalable cross-platform mobile apps for iOS & Android.
Proficient in Dart, Clean Architecture, BLoC/Cubit state management, RESTful APIs, and offline caching. Adept at agile team collaboration
(Scrum/Jira), CI/CD pipelines, and writing thorough unit and widget tests to deliver robust, high-performance applications.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
            >
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-flutter text-white font-semibold transition-colors hover:bg-flutter-dark cursor-pointer"
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 text-slate-300 hover:text-white font-medium transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-flutter-cyan" />
                <span>Contact Me</span>
              </a>

              <a
                href="/portfolio/Ahmed_Hussein_CV.pdf"
                download="Ahmed_Hussien_CV.pdf"
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 text-slate-300 hover:text-white font-medium transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-flutter-cyan" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-5 pt-6 text-slate-500"
            >
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-500">Connect:</span>
              <a
                href="https://github.com/AhmedHussien249"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-hussien-02b499186/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Clean Static Avatar */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
            >
              {/* Clean Avatar Circle */}
              <div className="w-full h-full rounded-full p-[2px] bg-gradient-to-br from-slate-700 to-slate-800 hover:scale-[1.03] transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-dark-bg">
                  <img
                    src="/portfolio/images/avatar.png"
                    alt="Ahmed Hussien Abd El-Razik"
                    className="object-cover object-top rounded-full w-full h-full"
                  />
                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/40 via-transparent to-transparent rounded-full pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
