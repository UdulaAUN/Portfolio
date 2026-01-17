import React from 'react';
import { motion } from 'framer-motion';
export function AnimatedBackground() {
  return <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Gradient Mesh Orbs */}

      {/* Orb 1: Top Left - Blue */}
      <motion.div animate={{
      x: [0, 100, -50, 0],
      y: [0, -50, 50, 0],
      scale: [1, 1.2, 0.9, 1],
      opacity: [0.3, 0.5, 0.3]
    }} transition={{
      duration: 25,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />

      {/* Orb 2: Top Right - Purple */}
      <motion.div animate={{
      x: [0, -100, 50, 0],
      y: [0, 100, -50, 0],
      scale: [1, 1.3, 0.8, 1],
      opacity: [0.3, 0.6, 0.3]
    }} transition={{
      duration: 30,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 2
    }} className="absolute top-[10%] right-[-20%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />

      {/* Orb 3: Bottom Left - Cyan */}
      <motion.div animate={{
      x: [0, 80, -40, 0],
      y: [0, -60, 40, 0],
      scale: [1, 1.1, 0.9, 1],
      opacity: [0.2, 0.4, 0.2]
    }} transition={{
      duration: 28,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 5
    }} className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[130px]" />

      {/* Orb 4: Bottom Right - Indigo */}
      <motion.div animate={{
      x: [0, -120, 60, 0],
      y: [0, 80, -40, 0],
      scale: [1, 1.4, 0.8, 1],
      opacity: [0.3, 0.5, 0.3]
    }} transition={{
      duration: 35,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1
    }} className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />

      {/* Orb 5: Center - Subtle Pulse */}
      <motion.div animate={{
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.2, 0.1]
    }} transition={{
      duration: 15,
      repeat: Infinity,
      ease: 'easeInOut'
    }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />
    </div>;
}