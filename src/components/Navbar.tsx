import React, { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [{
  name: 'Home',
  href: '#hero'
}, {
  name: 'About',
  href: '#about'
}, {
  name: 'Skills',
  href: '#skills'
}, {
  name: 'Projects',
  href: '#projects'
}, {
  name: 'Contact',
  href: '#contact'
}];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" onClick={e => {
        e.preventDefault();
        scrollToSection('#hero');
      }} className="flex items-center gap-2 text-2xl font-bold text-white group">
          <Code2 className="w-8 h-8 text-blue-500 group-hover:rotate-12 transition-transform" />
          <span>
            Udula<span className="text-blue-500">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
          e.preventDefault();
          scrollToSection(link.href);
        }} className="text-slate-300 hover:text-blue-400 transition-colors font-medium text-sm uppercase tracking-wider">
              {link.name}
            </a>)}
          <a href="/assets/cv/Udula_Athulathmudali_CV.pdf" download className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5">
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
            e.preventDefault();
            scrollToSection(link.href);
          }} className="text-slate-300 hover:text-blue-400 text-lg font-medium">
                  {link.name}
                </a>)}
              <a href="/assets/cv/Udula_Athulathmudali_CV.pdf" download className="mt-2 px-5 py-3 bg-blue-600 text-white text-center rounded-lg font-medium">
                Download CV
              </a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}