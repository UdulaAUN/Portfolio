import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
export function Hero() {
  return <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text Content - Order 2 on mobile, Order 1 on desktop */}
        <motion.div className="order-2 md:order-1 text-center md:text-left" initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="inline-flex items-center px-4 py-1.5 mb-6 border border-blue-500/20 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide">
            Software Engineer
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 animate-gradient-x">
              Udula Athulathmudali
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I build accessible, pixel-perfect, and performant web experiences.
            Passionate about creating software that solves real-world problems
            with clean code and modern design.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
            <a href="#contact" className="group px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="px-8 py-3.5 bg-slate-800/50 hover:bg-slate-800 text-white rounded-full font-medium transition-all border border-slate-700 hover:border-slate-600 backdrop-blur-sm">
              View Work
            </a>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-6">
            <SocialLink href="https://github.com/UdulaAUN" icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/udula-athulathmudali" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialLink href="mailto:udulanethranjanaathulathmudali@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
          </div>
        </motion.div>

        {/* Profile Image - Order 1 on mobile, Order 2 on desktop */}
        <motion.div className="order-1 md:order-2 relative" initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] mx-auto">
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-2xl animate-pulse" />

            {/* Border Frame */}
            <div className="absolute inset-0 border-2 border-slate-700/50 rounded-[2rem] rotate-3" />

            {/* Image Container */}
            <div className="absolute inset-0 bg-slate-800 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700/50 group">
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Udula Athulathmudali" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}
function SocialLink({
  href,
  icon,
  label
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900/50 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 rounded-full transition-all border border-slate-800 backdrop-blur-sm group" aria-label={label}>
      <span className="group-hover:scale-110 block transition-transform">
        {icon}
      </span>
    </a>;
}