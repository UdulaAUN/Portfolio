import { ScrollReveal } from "./ui/ScrollReveal";

/* Brand icons */
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaAndroid,
} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiKotlin,
  SiVscodium,
  SiFigma,
} from "react-icons/si";

import { TbPuzzle } from "react-icons/tb";

import { BsPeople, BsChatDots, BsClock } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";

/* ======================
   DATA
====================== */
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact className="w-8 h-8 text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
      { name: "HTML5", icon: <SiHtml5 className="w-8 h-8 text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="w-8 h-8 text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" /> },
      { name: "Vite", icon: <SiVite className="w-8 h-8 text-purple-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="w-8 h-8 text-gray-400" /> },
      { name: "Java", icon: <FaJava className="w-8 h-8 text-red-400" /> },
      { name: "Python", icon: <FaPython className="w-8 h-8 text-blue-300" /> },
      { name: "PHP", icon: <FaPhp className="w-8 h-8 text-indigo-400" /> },
      { name: "REST APIs", icon: <AiOutlineApi className="w-8 h-8 text-blue-400" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="w-8 h-8 text-blue-600" /> },
      { name: "Firebase", icon: <SiFirebase className="w-8 h-8 text-yellow-500" /> },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Kotlin", icon: <SiKotlin className="w-8 h-8 text-purple-500" /> },
      { name: "Android Studio", icon: <FaAndroid className="w-8 h-8 text-green-500" /> },
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      { name: "Git", icon: <FaGitAlt className="w-8 h-8 text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="w-8 h-8 text-slate-300" /> },
      { name: "VS Code", icon: <SiVscodium className="w-8 h-8 text-blue-500" /> },
      { name: "Figma", icon: <SiFigma className="w-8 h-8 text-pink-400" /> },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", icon: <TbPuzzle className="w-8 h-8 text-indigo-400" /> },
      { name: "Collaboration", icon: <BsPeople className="w-8 h-8 text-purple-400" /> },
      { name: "Communication", icon: <BsChatDots className="w-8 h-8 text-green-400" /> },
      { name: "Time Management", icon: <BsClock className="w-8 h-8 text-yellow-400" /> },
    ],
  },
];

/* ======================
   COMPONENT
====================== */
export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal width="100%">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              Technologies and abilities I work with confidently.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <ScrollReveal>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
                  {category.title}
                </h3>
              </ScrollReveal>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <ScrollReveal key={skill.name} delay={index * 0.05}>
                    <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">

                      {/* Bottom fill bar */}
                      <span className="absolute bottom-0 left-0 h-1 w-full bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                      {/* Content */}
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 transition-transform duration-300 group-hover:scale-110">
                          
                          {/* 🔥 BLUR → CLEAR ICON */}
                          <div className="blur-sm opacity-60 group-hover:blur-0 group-hover:opacity-100 transition-all duration-300">
                            {skill.icon}
                          </div>

                        </div>
                        <h4 className="text-slate-200 font-medium text-left">
                          {skill.name}
                        </h4>
                      </div>

                      {/* Hover spotlight */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%)]" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
