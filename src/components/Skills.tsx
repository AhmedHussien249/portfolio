'use client';

import { motion } from 'framer-motion';
import { Smartphone, Layers, Cloud, TestTube } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core & Mobile',
    icon: Smartphone,
    skills: ['Dart', 'Flutter (Android & iOS)', 'Java', 'Kotlin', 'Git / GitHub', 'Agile / SCRUM', 'Jira'],
  },
  {
    title: 'Architecture & State',
    icon: Layers,
    skills: ['Clean Architecture', 'SOLID Principles', 'Repository Pattern', 'Dependency Injection', 'GetIt / Injectable', 'BLoC / Cubit'],
  },
  {
    title: 'APIs & Cloud',
    icon: Cloud,
    skills: ['RESTful APIs', 'Dio Client', 'Retrofit', 'Hive CE', 'Firestore', 'FCM Push Notifications', 'Mapbox SDK', 'Gemini AI'],
  },
  {
    title: 'Testing & DevOps',
    icon: TestTube,
    skills: ['GitHub Actions CI/CD', 'Firebase App Distribution', 'Unit Testing', 'Widget Testing', 'BLoC Testing', 'Mockito'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 90,
      damping: 15,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-bg">
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
            Technical <span className="text-gradient-flutter font-black">Skills</span>
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
            A focused overview of frameworks, patterns, and tools I work with daily.
          </motion.p>
        </div>

        {/* 2x2 Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="card rounded-2xl p-6 hover:border-slate-700/60 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800/40">
                  <div className="w-9 h-9 rounded-lg bg-slate-800/60 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-flutter-cyan" />
                  </div>
                  <h3 className="font-semibold text-base text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Flat Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-800/60 text-xs text-slate-200 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
