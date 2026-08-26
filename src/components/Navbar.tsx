'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-slate-800/50'
          : 'py-6 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-white font-extrabold text-xl font-display">
          <Terminal className="w-5 h-5 text-flutter-cyan" />
          <span>Ahmed</span>
          <span className="text-flutter-cyan">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-slate-400 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/portfolio/Ahmed_Hussein_CV.pdf"
              download="Ahmed_Hussien_CV.pdf"
              className="px-4 py-2 rounded-lg bg-flutter text-white text-sm font-semibold hover:bg-flutter-dark transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0a0f1a]/95 backdrop-blur-lg border-b border-slate-800/50"
          >
            <ul className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-400 hover:text-white text-base font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/portfolio/Ahmed_Hussein_CV.pdf"
                  download="Ahmed_Hussien_CV.pdf"
                  onClick={() => setIsOpen(false)}
                  className="inline-block text-center w-full px-4 py-2.5 rounded-lg bg-flutter hover:bg-flutter-dark text-white text-sm font-semibold transition-colors"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
