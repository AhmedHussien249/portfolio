'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GitPullRequest, Layers, Users, Rocket } from 'lucide-react';

const experiences = [
  {
    role: 'Flutter Developer Intern',
    company: 'Elevate Tech',
    period: 'Oct 2025 - May 2026',
    location: 'Remote',
    description: 'Collaborated in a fast-paced development team to design, build, and deploy robust cross-platform mobile solutions using the Flutter SDK and Dart. Adhered to industry best practices, modern architecture patterns, and automated CI/CD pipelines.',
    achievements: [
      {
        icon: Users,
        title: 'Agile & SCRUM Delivery',
        desc: 'Actively participated in daily standups, sprint planning, and retrospective sessions in SCRUM teams using Jira to deliver high-quality features iteratively.',
      },
      {
        icon: Layers,
        title: 'Clean Architecture & SOLID',
        desc: 'Implemented scalable codebase structures following Clean Architecture and SOLID principles, ensuring highly modular and easily testable components.',
      },
      {
        icon: GitPullRequest,
        title: 'Peer Reviews & Code Quality',
        desc: 'Engaged in comprehensive pull request (PR) reviews, maintaining code standards, linting rules, and mentoring peer developers on Dart optimizations.',
      },
      {
        icon: Rocket,
        title: 'GitHub Actions CI/CD',
        desc: 'Configured automated test runners and build scripts using GitHub Actions, reducing manual deployment efforts and speeding up continuous delivery.',
      },
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within this component container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Smooth out the scroll progress using a spring
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section id="experience" ref={containerRef} className="py-28 relative overflow-hidden bg-[#050508] border-b border-slate-900/40">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/10 w-[400px] h-[400px] rounded-full bg-flutter/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/10 w-[300px] h-[300px] rounded-full bg-flutter-cyan/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Professional <span className="text-gradient-flutter font-black">EXPERIENCE</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 w-20 bg-flutter mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 mt-4 text-base sm:text-lg"
          >
            Bridging the gap between design and high-performance mobile engineering.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Base Unactive Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-slate-900 transform -translate-x-1/2 opacity-60" />

          {/* Active Spring-Linked Timeline Progress Line */}
          <motion.div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2.5px] bg-gradient-to-b from-flutter via-flutter-cyan to-[#00B4D8] transform -translate-x-1/2 z-10 shadow-[0_0_10px_#02569B]"
            style={{
              scaleY,
              originY: 0,
            }}
          />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid grid-cols-1 sm:grid-cols-2 gap-10 items-start"
              >
                
                {/* Timeline node dot */}
                <motion.div 
                  className="absolute left-4 sm:left-1/2 top-6 w-6 h-6 rounded-full bg-slate-950 border-4 border-slate-900 transform -translate-x-1/2 z-20 shadow-xl"
                  style={{
                    borderColor: scrollYProgress.get() > 0.05 ? '#02569B' : '#1e293b',
                    boxShadow: scrollYProgress.get() > 0.05 ? '0 0 10px #02569B' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />

                {/* Left Column: Job & Company (Desktop left, stacks on mobile) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                  className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-900/80 shadow-2xl relative overflow-hidden group hover:border-flutter/25 transition-all duration-300 ml-8 sm:ml-0"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-flutter/5 rounded-full blur-2xl group-hover:bg-flutter/8 transition-colors pointer-events-none" />
                  
                  <div className="flex items-center gap-3 text-flutter-cyan mb-4">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-extrabold uppercase text-xs tracking-wider">Work History</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-1 leading-tight">{exp.role}</h3>
                  <h4 className="text-lg font-bold text-slate-300 mb-4">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-6 border-b border-slate-900 pb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed font-sans">
                    {exp.description}
                  </p>
                </motion.div>

                {/* Right Column: Key Achievements (Desktop right, stacks on mobile) */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 90, damping: 15 }}
                  className="space-y-4 ml-8 sm:ml-0"
                >
                  <div className="pl-1">
                    <h4 className="text-xs uppercase tracking-widest text-slate-500 font-extrabold mb-4">Impact & Deliveries</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {exp.achievements.map((ach, achIdx) => {
                      const Icon = ach.icon;
                      return (
                        <motion.div
                          key={achIdx}
                          whileHover={{ x: 6 }}
                          className="glass-card rounded-2xl p-5 border border-slate-900/80 hover:border-flutter/20 flex gap-4 transition-all duration-300"
                        >
                          <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center shrink-0 border border-slate-800/80">
                            <Icon className="w-5 h-5 text-flutter-cyan" />
                          </div>
                          <div className="space-y-1">
                            <h5 className="text-sm font-extrabold text-white flex items-center gap-2">
                              <span>{ach.title}</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-flutter-cyan" />
                            </h5>
                            <p className="text-xs text-slate-400 leading-relaxed font-sans">{ach.desc}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
