'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GitPullRequest, Layers, Users, Rocket } from 'lucide-react';

const experience = {
  role: 'Junior Flutter Developer',
  company: 'Elevate Tech',
  period: 'Oct 2025 - May 2026',
  location: 'Remote',
  description: 'Collaborated in a fast-paced development team to design, build, and deploy robust cross-platform mobile solutions using the Flutter SDK and Dart. Adhered to industry best practices, modern architecture patterns, and automated CI/CD pipelines.',
  achievements: [
    {
      icon: Users,
      title: 'Agile & SCRUM Delivery',
      desc: 'Participated in daily standups, sprint planning, and retrospective sessions in SCRUM teams using Jira to deliver high-quality features iteratively.',
    },
    {
      icon: Layers,
      title: 'Clean Architecture & SOLID',
      desc: 'Implemented scalable codebase structures following Clean Architecture and SOLID principles, ensuring highly modular and easily testable components.',
    },
    {
      icon: GitPullRequest,
      title: 'Peer Reviews & Code Quality',
      desc: 'Engaged in comprehensive PR reviews, maintaining code standards, linting rules, and mentoring peer developers on Dart optimizations.',
    },
    {
      icon: Rocket,
      title: 'GitHub Actions CI/CD',
      desc: 'Configured automated test runners and build scripts using GitHub Actions, reducing manual deployment efforts and speeding up continuous delivery.',
    },
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-dark-bg">
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
            Professional <span className="text-gradient-flutter font-black">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-px w-16 bg-slate-700 mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 mt-4 text-base sm:text-lg"
          >
            Building production-ready mobile applications with modern engineering practices.
          </motion.p>
        </div>

        {/* Single Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto card rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            
            {/* Left: Role & Context */}
            <div className="lg:col-span-2 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-800/50">
              <div className="flex items-center gap-2.5 text-flutter-cyan mb-5">
                <Briefcase className="w-4 h-4" />
                <span className="font-semibold uppercase text-xs tracking-wider">Work History</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{experience.role}</h3>
              <h4 className="text-lg font-medium text-slate-300 mb-5">{experience.company}</h4>
              
              <div className="flex flex-col gap-2.5 text-sm text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>{experience.location}</span>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                {experience.description}
              </p>
            </div>

            {/* Right: Achievements */}
            <div className="lg:col-span-3 p-8 lg:p-10">
              <h4 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-6">Key Contributions</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {experience.achievements.map((ach, idx) => {
                  const Icon = ach.icon;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl p-4 bg-slate-800/20 border border-slate-800/40 hover:border-slate-700/60 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-800/60 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-flutter-cyan" />
                        </div>
                        <h5 className="text-sm font-semibold text-white">{ach.title}</h5>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">{ach.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
