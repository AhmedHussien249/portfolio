'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GitPullRequest, Layers, Users, Rocket, Check } from 'lucide-react';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/10 w-[400px] h-[400px] rounded-full bg-flutter/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/10 w-[300px] h-[300px] rounded-full bg-flutter-cyan/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Professional <span className="text-gradient-flutter">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-flutter mx-auto mt-4 rounded-full"
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
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-flutter to-flutter-cyan/30 transform -translate-x-1/2 opacity-30 hidden sm:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 items-start"
              >
                
                {/* Timeline node dot (for larger screens) */}
                <div className="absolute left-1/2 top-6 w-5 h-5 rounded-full bg-slate-950 border-4 border-flutter transform -translate-x-1/2 z-20 shadow-glow hidden sm:block" />

                {/* Left Card: Company & Details */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-xl relative overflow-hidden group hover:border-flutter/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-flutter/5 rounded-full blur-2xl group-hover:bg-flutter/10 transition-colors pointer-events-none" />
                  
                  <div className="flex items-center gap-3 text-flutter-cyan mb-4">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-extrabold uppercase text-xs tracking-wider">Work History</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg font-semibold text-slate-300 mb-4">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed font-sans border-t border-slate-900 pt-4">
                    {exp.description}
                  </p>
                </div>

                {/* Right Card: Achievements Grid */}
                <div className="space-y-4">
                  <div className="pl-2 sm:pl-0">
                    <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-4">Key Responsibilities & Impact</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {exp.achievements.map((ach, achIdx) => {
                      const Icon = ach.icon;
                      return (
                        <motion.div
                          key={achIdx}
                          whileHover={{ x: 6 }}
                          className="glass-card rounded-xl p-4 border border-slate-900 hover:border-flutter/20 flex gap-4 transition-all duration-300"
                        >
                          <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center shrink-0 border border-slate-800/80">
                            <Icon className="w-5 h-5 text-flutter-cyan" />
                          </div>
                          <div className="space-y-1">
                            <h5 className="text-sm font-bold text-white flex items-center gap-2">
                              <span>{ach.title}</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-flutter-cyan/50" />
                            </h5>
                            <p className="text-xs text-slate-400 leading-relaxed font-sans">{ach.desc}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
