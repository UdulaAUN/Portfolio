import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
} from 'lucide-react';
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

    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    if (!formRef.current) return;

    if (SERVICE_ID === 'YOUR_SERVICE_ID') {
      setTimeout(() => {
        setIsLoading(false);
        setStatus('success');
        formRef.current?.reset();
      }, 1500);
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsLoading(false);
        setStatus('success');
        formRef.current?.reset();
      })
      .catch(() => {
        setIsLoading(false);
        setStatus('error');
        setErrorMessage('Failed to send. Please try again.');
      });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* ❌ CORNER GLOWS REMOVED */}

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white">
              Contact Information
            </h3>

            <div className="space-y-4">
              <ContactItem
                icon={<Mail className="w-6 h-6 text-blue-400" />}
                label="Email"
                value="udulanethranjanaathulathmudali@gmail.com"
                href="mailto:udulanethranjanaathulathmudali@gmail.com"
              />
              <ContactItem
                icon={<Phone className="w-6 h-6 text-blue-400" />}
                label="Phone"
                value="0711311992"
                href="tel:0711311992"
              />
              <ContactItem
                icon={<MapPin className="w-6 h-6 text-blue-400" />}
                label="Location"
                value="Sri Lanka"
                href="#"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <SocialLink
                href="https://github.com/UdulaAUN"
                icon={<Github className="w-6 h-6" />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/udula-athulathmudali"
                icon={<Linkedin className="w-6 h-6" />}
                label="LinkedIn"
              />
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <input
                  name="user_name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white"
                />
                <input
                  name="user_email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white"
                />
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white resize-none"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="text-green-400 flex gap-2 items-center">
                    <CheckCircle /> Message sent!
                  </div>
                )}

                {status === 'error' && (
                  <div className="text-red-400 flex gap-2 items-center">
                    <AlertCircle /> {errorMessage}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* helpers */

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-700 rounded-xl"
    >
      {icon}
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        <p className="text-white">{value}</p>
      </div>
    </a>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      aria-label={label}
      className="p-3 bg-slate-900/50 border border-slate-700 rounded-lg hover:bg-blue-600/30"
    >
      {icon}
    </a>
  );
}
