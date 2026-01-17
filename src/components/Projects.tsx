import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Github, ExternalLink } from 'lucide-react';
const projects = [{
  title: 'E-Commerce Platform',
  description: 'A full-featured online store with product filtering, cart functionality, and secure checkout integration.',
  tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  github: 'https://github.com/UdulaAUN',
  image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
}, {
  title: 'Task Management App',
  description: 'A productivity tool for teams to track progress, assign tasks, and manage deadlines effectively.',
  tags: ['React', 'Firebase', 'Tailwind CSS'],
  github: 'https://github.com/UdulaAUN',
  image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
}, {
  title: 'Portfolio Website',
  description: 'A modern, responsive portfolio website to showcase skills and projects with smooth animations.',
  tags: ['React', 'Framer Motion', 'EmailJS'],
  github: 'https://github.com/UdulaAUN',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
}];
export function Projects() {
  return <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              A selection of projects that demonstrate my ability to solve
              problems and build high-quality software.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="View Source">
                      <Github size={20} />
                    </a>
                  </div>

                  <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-slate-950 text-blue-400 text-xs font-medium rounded-full border border-slate-800">
                        {tag}
                      </span>)}
                  </div>
                </div>
              </div>
            </ScrollReveal>)}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <a href="https://github.com/UdulaAUN" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
              View more on GitHub <ExternalLink size={16} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>;
}