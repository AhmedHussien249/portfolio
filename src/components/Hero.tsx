'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Briefcase } from 'lucide-react';
import ShimmerImage from './ShimmerImage';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/10 w-[350px] h-[350px] rounded-full bg-flutter/15 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[350px] h-[350px] rounded-full bg-flutter-cyan/15 blur-[80px] pointer-events-none" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-flutter/10 border border-flutter/20 text-flutter-cyan text-sm font-semibold tracking-wide"
            >
              <Briefcase className="w-4 h-4 text-flutter-cyan" />
              <span>Available for Roles & Internships</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none"
            >
              <span className="text-gradient">I'm </span>
              <span className="text-gradient-flutter font-black">Ahmed Hussien</span>
              <br />
              <span className="text-2xl sm:text-3xl xl:text-4xl text-slate-300 font-semibold block mt-4">
                Junior Flutter Developer & Mobile Engineer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed font-sans"
            >
              Self-driven Flutter Developer with 2+ years of experience building production-ready, cross-platform mobile applications. Specialized in creating high-performance, responsive UIs with BLoC, Clean Architecture, Mapbox integration, and Gemini AI.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
            >
              <a
                href="#projects"
                className="group relative flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-flutter hover:bg-flutter-dark text-white font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(2,86,155,0.3)] hover:shadow-[0_4px_25px_rgba(2,86,155,0.5)] cursor-pointer"
              >
                <span>View Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-flutter/50 hover:bg-slate-800/50 text-slate-200 font-semibold transition-all duration-300 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-flutter-cyan" />
                <span>Contact Me</span>
              </a>

              <a
                href="/Ahmed_Hussein_CV.pdf"
                download="Ahmed_Hussien_CV.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-flutter-cyan/50 hover:bg-slate-800/30 text-flutter-cyan font-semibold transition-all duration-300 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Social Links Shortcut */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-5 pt-6 text-slate-500"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-600">Connect:</span>
              <a
                href="https://github.com/AhmedHussien249"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38bdf8] transition-colors"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-hussien-abd-el-razik/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#38bdf8] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Premium Photo Box */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
              className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96"
            >
              {/* Spinning Ambient Background Glows */}
              <motion.div
                className="absolute inset-[-15px] rounded-full bg-gradient-to-tr from-flutter via-transparent to-flutter-cyan opacity-40 blur-xl pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />
              
              <motion.div
                className="absolute inset-[-5px] rounded-full bg-gradient-to-br from-flutter-cyan via-transparent to-flutter opacity-30 blur-md pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              />

              {/* Offset Decorative Outer Ring */}
              <div className="absolute inset-[-10px] rounded-full border border-dashed border-flutter/20 animate-spin-slow pointer-events-none" />

              {/* Main Photo Frame */}
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-slate-800/80 p-3 bg-slate-950/70 shadow-2xl relative group">
                <div className="w-full h-full rounded-full overflow-hidden relative border border-slate-700/30">
                  <ShimmerImage
                    src="/images/avatar.png"
                    alt="Ahmed Hussien Abd El-Razik"
                    fill
                    priority
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    containerClassName="w-full h-full rounded-full border-none!"
                  />
                  {/* Glass Accent Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>

              {/* Floating Flutter Badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-3 shadow-xl flex items-center gap-2 backdrop-blur-md"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-7 h-7 flex items-center justify-center bg-[#02569B]/10 rounded-lg">
                  {/* Flutter Icon Representation */}
                  <svg className="w-5 h-5 fill-[#02569B]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.314 0L2.3 12 6 15.7 21.686 0H14.31zM21.686 12l-6 6 6 6h7.314l-6-6 6-6h-7.314zM12.086 12l-3.7-3.7-3.7 3.7 3.7 3.7 3.7-3.7z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold font-sans">Specialty</span>
                  <span className="text-xs text-slate-200 font-bold font-sans">Flutter SDK</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
