import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Code2, Database, Layout, Server, Settings, GitBranch, Terminal, Users, MessageSquare, Clock, Brain, Globe, Cpu, Layers, Smartphone } from 'lucide-react';
const skillCategories = [{
  title: 'Frontend Development',
  skills: [{
    name: 'React.js',
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    level: 'Advanced'
  }, {
    name: 'JavaScript',
    icon: <Terminal className="w-8 h-8 text-yellow-400" />,
    level: 'Advanced'
  }, {
    name: 'HTML5',
    icon: <Layout className="w-8 h-8 text-orange-400" />,
    level: 'Advanced'
  },{
    name: 'CSS3',
    icon: <Layout className="w-8 h-8 text-orange-400" />,
    level: 'Advanced'
  },{
    name: 'Tailwind CSS',
    icon: <Layers className="w-8 h-8 text-cyan-400" />,
    level: 'Advanced'
  }, {
    name: 'Vite',
    icon: <Layout className="w-8 h-8 text-purple-400" />,
    level: 'Intermediate'
  }]
}, {
  title: 'Backend',
  skills: [{
    name: 'Node.js',
    icon: <Server className="w-8 h-8 text-green-400" />,
    level: 'Intermediate'
  }, {
    name: 'Express.js',
    icon: <Settings className="w-8 h-8 text-gray-400" />,
    level: 'Intermediate'
  }, {
    name: 'Java',
    icon: <Globe className="w-8 h-8 text-blue-300" />,
    level: 'Advanced'
  }, {
    name: 'Python',
    icon: <Database className="w-8 h-8 text-green-500" />,
    level: 'Intermediate'
  }, {
    name: 'PHP',
    icon: <Database className="w-8 h-8 text-blue-500" />,
    level: 'Basic'
  },{
    name: 'REST APIs',
    icon: <Globe className="w-8 h-8 text-blue-300" />,
    level: 'Advanced'
  },]
}, {
  title: 'Database',
  skills: [{
    name: 'MongoDB',
    icon: <GitBranch className="w-8 h-8 text-orange-500" />,
    level: 'Advanced'
  }, {
    name: 'MySQL',
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    level: 'Advanced'
  }, {
    name: 'Firebase',
    icon: <Send className="w-8 h-8 text-orange-400" />,
    level: 'Intermediate'
  }]
},{
  title: 'Mobile Development',
  skills: [{
    name: 'Kotlin',
    icon: <GitBranch className="w-8 h-8 text-orange-500" />,
    level: 'Advanced'
  }, {
    name: 'Android Studio',
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    level: 'Advanced'
  }]
},{
  title: 'System Programming',
  skills: [{
    name: 'C',
    icon: <GitBranch className="w-8 h-8 text-orange-500" />,
    level: 'Advanced'
  }, {
    name: 'C++',
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    level: 'Advanced'
  }]
},{
  title: 'Tools & Workflow',
  skills: [{
    name: 'Git',
    icon: <GitBranch className="w-8 h-8 text-orange-500" />,
    level: 'Advanced'
  }, {
    name: 'GitHub',
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    level: 'Advanced'
  },{
    name: 'VS Code',
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    level: 'Advanced'
  },{
    name: 'Figma',
    icon: <Users className="w-8 h-8 text-blue-400" />,
    level: 'Basic'
  }]
}, {
  title: 'Soft Skills',
  skills: [{
    name: 'Problem Solving',
    icon: <Brain className="w-8 h-8 text-pink-400" />,
    level: 'Strong'
  }, {
    name: 'Collaboration',
    icon: <Users className="w-8 h-8 text-indigo-400" />,
    level: 'Strong'
  }, {
    name: 'Communication',
    icon: <MessageSquare className="w-8 h-8 text-green-400" />,
    level: 'Strong'
  }, {
    name: 'Time Management',
    icon: <Clock className="w-8 h-8 text-yellow-400" />,
    level: 'Strong'
  }]
}];
// Helper for icon since I can't import Send directly in the array definition easily without defining it above
import { Send } from 'lucide-react';
export function Skills() {
  return <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal width="100%">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Proficiency
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg">
              My technical toolkit and professional capabilities, continuously
              expanding through hands-on experience and learning.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => <div key={category.title}>
              <ScrollReveal delay={0.1}>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-blue-600 rounded-full" />
                  {category.title}
                </h3>
              </ScrollReveal>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => <ScrollReveal key={skill.name} delay={0.1 + index * 0.05}>
                    <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col items-center text-center h-full">
                      <div className="mb-4 p-3 bg-slate-950 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-blue-500/30">
                        {skill.icon}
                      </div>
                      <h4 className="text-slate-200 font-medium mb-1">
                        {skill.name}
                      </h4>
                      {/* Optional: Level indicator or just minimal design */}
                      <div className="w-full bg-slate-800 h-1 rounded-full mt-3 overflow-hidden">
                        <div className="bg-blue-600 h-full w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      </div>
                    </div>
                  </ScrollReveal>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}