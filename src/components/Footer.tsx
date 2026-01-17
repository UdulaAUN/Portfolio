import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
export function Footer() {
  return <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Udula<span className="text-blue-500">.</span>
            </h3>
            <p className="text-slate-500 text-sm">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <SocialLink href="https://github.com/UdulaAUN" icon={<Github size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/udula-athulathmudali" icon={<Linkedin size={20} />} />
            <SocialLink href="mailto:udulanethranjanaathulathmudali@gmail.com" icon={<Mail size={20} />} />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Udula Athulathmudali. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" />{' '}
            in React
          </p>
        </div>
      </div>
    </footer>;
}
function SocialLink({
  href,
  icon
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
      {icon}
    </a>;
}