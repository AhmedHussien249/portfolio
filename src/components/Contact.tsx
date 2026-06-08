'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  const contactDetails = [
    {
      title: 'Email Address',
      value: 'ahmed.hussien950.ah@gmail.com',
      href: 'mailto:ahmed.hussien950.ah@gmail.com',
      icon: Mail,
      type: 'email' as const,
      color: 'text-sky-400',
    },
    {
      title: 'Phone Number',
      value: '+201003540025',
      href: 'tel:+201003540025',
      icon: Phone,
      type: 'phone' as const,
      color: 'text-emerald-400',
    },
    {
      title: 'Location',
      value: 'Kafr El Sheikh, Egypt',
      href: 'https://maps.google.com/?q=Kafr+El+Sheikh,Egypt',
      icon: MapPin,
      type: 'location' as const,
      color: 'text-rose-400',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-1/10 w-[450px] h-[450px] rounded-full bg-flutter/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/10 left-1/10 w-[350px] h-[350px] rounded-full bg-flutter-cyan/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between min-h-[50vh]">
        
        <div className="w-full flex-grow">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            >
              Get In <span className="text-gradient-flutter">Touch</span>
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
              Have a question, role, or project you'd like to collaborate on? Drop a message!
            </motion.p>
          </div>

          {/* Contact Cards Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {contactDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="glass-card rounded-2xl border border-slate-900 p-6 flex flex-col items-center text-center hover:border-flutter/20 transition-all duration-300 relative group"
                >
                  {/* Glowing Icon Header */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center border border-slate-800/80 mb-5 relative group-hover:border-flutter/30 transition-colors">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>

                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">{item.title}</h3>
                  <a
                    href={item.href}
                    target={item.type === 'location' ? '_blank' : undefined}
                    rel={item.type === 'location' ? 'noopener noreferrer' : undefined}
                    className="text-slate-200 hover:text-flutter-cyan text-sm sm:text-base font-semibold leading-relaxed break-all transition-colors mb-4"
                  >
                    {item.value}
                  </a>

                  {/* Copy Button (only for Email and Phone) */}
                  {item.type !== 'location' ? (
                    <button
                      onClick={() => copyToClipboard(item.value, item.type)}
                      className="mt-auto px-4 py-2 rounded-xl bg-slate-950 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/60 text-slate-400 hover:text-slate-200 text-xs font-bold transition-all flex items-center gap-2"
                    >
                      <AnimatePresence mode="wait">
                        {copiedText === item.type ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="flex items-center gap-1.5 text-flutter-cyan"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied!</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="flex items-center gap-1.5"
                          >
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Info</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto px-4 py-2 rounded-xl bg-slate-950 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/60 text-slate-400 hover:text-slate-200 text-xs font-bold transition-all flex items-center gap-2"
                    >
                      <span>Open Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer copyright */}
        <div className="border-t border-slate-900/80 pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <p className="text-xs text-slate-500 font-sans text-center sm:text-left">
            &copy; {new Date().getFullYear()} Ahmed Hussien Abd El-Razik. All rights reserved.
          </p>
          
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/AhmedHussien249"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-hussien-02b499186"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
