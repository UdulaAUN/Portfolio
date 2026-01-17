import React, { useState, useRef } from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');
    setErrorMessage('');
    // IMPORTANT: Replace these with your actual EmailJS credentials
    // You can get these from https://dashboard.emailjs.com/
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
    if (!formRef.current) return;
    // Simulating API call for demo purposes if keys aren't set
    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      setTimeout(() => {
        setIsLoading(false);
        setStatus('success');
        if (formRef.current) formRef.current.reset();
      }, 1500);
      return;
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(result => {
      setIsLoading(false);
      setStatus('success');
      if (formRef.current) formRef.current.reset();
    }, error => {
      setIsLoading(false);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', error);
    });
  };
  return <section id="contact" className="py-24 relative z-10 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss a new opportunity? I'd
              love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Feel free to reach out through any of these channels. I am
                always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>

              <div className="space-y-4">
                <ContactItem icon={<Mail className="w-6 h-6 text-blue-400" />} label="Email" value="udulanethranjanaathulathmudali@gmail.com" href="mailto:udulanethranjanaathulathmudali@gmail.com" />
                <ContactItem icon={<Phone className="w-6 h-6 text-blue-400" />} label="Phone" value="0711311992" href="tel:0711311992" />
                <ContactItem icon={<MapPin className="w-6 h-6 text-blue-400" />} label="Location" value="Sri Lanka" href="#" />
              </div>

              <div className="pt-6 border-t border-slate-800">
                <p className="text-slate-400 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a href="https://github.com/UdulaAUN" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900/50 text-slate-400 hover:text-white hover:bg-blue-600 rounded-lg transition-all border border-slate-800 hover:border-blue-500" aria-label="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/udula-athulathmudali" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900/50 text-slate-400 hover:text-white hover:bg-blue-600 rounded-lg transition-all border border-slate-800 hover:border-blue-500" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 shadow-xl">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input type="text" name="user_name" id="user_name" required className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none" placeholder="Your Name" />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input type="email" name="user_email" id="user_email" required className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea name="message" id="message" required rows={4} className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all outline-none resize-none" placeholder="How can I help you?" />
                </div>

                <button type="submit" disabled={isLoading} className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25">
                  {isLoading ? <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </> : <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>}
                </button>

                {status === 'success' && <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 text-green-400">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>}

                {status === 'error' && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 text-red-400">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{errorMessage}</p>
                  </div>}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>;
}
function ContactItem({
  icon,
  label,
  value,
  href
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return <a href={href} className="flex items-center gap-4 p-4 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all group">
      <div className="p-3 bg-slate-950 rounded-lg group-hover:bg-blue-500/10 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500 mb-1">{label}</p>
        <p className="text-white font-medium group-hover:text-blue-400 transition-colors break-all">
          {value}
        </p>
      </div>
    </a>;
}