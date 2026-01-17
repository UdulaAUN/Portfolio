import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Code, Database, Globe, Cpu, GraduationCap, Calendar, Award } from 'lucide-react';
export function About() {
  return <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Hello! I'm Udula Athulathmudali, a passionate Software Engineer
                with a strong foundation in building scalable web applications.
                My journey in tech is driven by a curiosity to understand how
                things work under the hood and a desire to create impactful
                solutions.
              </p>
              <p>
                I specialize in modern frontend technologies and have experience
                working with the full software development lifecycle. Whether
                it's crafting pixel-perfect user interfaces or optimizing
                backend performance, I approach every challenge with a
                problem-solving mindset.
              </p>
              <p>
                When I'm not coding, I'm constantly learning new technologies,
                contributing to open source, or exploring the latest trends in
                the tech industry.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard icon={<Code className="w-8 h-8 text-blue-400" />} title="Frontend Dev" desc="React, Modern CSS, Responsive Design" delay={0.1} />
            <FeatureCard icon={<Database className="w-8 h-8 text-purple-400" />} title="Backend" desc="Node.js, Databases, API Design" delay={0.2} />
            <FeatureCard icon={<Globe className="w-8 h-8 text-green-400" />} title="Web Performance" desc="Optimization, SEO, Accessibility" delay={0.3} />
            <FeatureCard icon={<Cpu className="w-8 h-8 text-red-400" />} title="Problem Solving" desc="Algorithms, Data Structures, Logic" delay={0.4} />
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <ScrollReveal width="100%">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full" />
              Education
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <EducationCard degree="BSc (Hons) in Computer Science" institution="University of Westminster" period="2020 - 2024" description="Specialized in Software Engineering, Data Structures, and Artificial Intelligence. Graduated with First Class Honours." delay={0.1} />
            <EducationCard degree="Higher Diploma in Computer Science" institution="Informatics Institute of Technology" period="2018 - 2020" description="Foundation in programming paradigms, database management systems, and web development fundamentals." delay={0.2} />
          </div>
        </div>
      </div>
    </section>;
}
function FeatureCard({
  icon,
  title,
  desc,
  delay
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) {
  return <ScrollReveal delay={delay}>
      <div className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 h-full group">
        <div className="mb-4 p-3 bg-slate-900 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm">{desc}</p>
      </div>
    </ScrollReveal>;
}
function EducationCard({
  degree,
  institution,
  period,
  description,
  delay
}: {
  degree: string;
  institution: string;
  period: string;
  description: string;
  delay: number;
}) {
  return <ScrollReveal delay={delay}>
      <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/5 h-full relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <GraduationCap className="w-24 h-24 text-blue-500" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-blue-400 font-medium text-sm px-3 py-1 bg-blue-500/5 rounded-full border border-blue-500/10">
              {period}
            </span>
          </div>

          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {degree}
          </h4>

          <div className="flex items-center gap-2 text-slate-400 mb-4">
            <GraduationCap className="w-4 h-4" />
            <span className="font-medium">{institution}</span>
          </div>

          <p className="text-slate-500 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>;
}