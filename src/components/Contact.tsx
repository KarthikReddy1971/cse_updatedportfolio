import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    text: 'karthikreddybuthukuri@gmail.com',
    href: 'mailto:karthikreddybuthukuri@gmail.com',
    color: 'from-blue-500 to-blue-600',
    glow: 'hover:shadow-blue-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    text: 'Connect on LinkedIn',
    href: 'https://in.linkedin.com/in/karthik-reddy-buthukuri-25678328a',
    color: 'from-sky-500 to-blue-600',
    glow: 'hover:shadow-sky-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    text: 'KarthikReddy1971',
    href: 'https://github.com/KarthikReddy1971',
    color: 'from-gray-600 to-gray-700',
    glow: 'hover:shadow-gray-500/20',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:karthikreddybuthukuri@gmail.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;
    window.location.href = mailtoUrl;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050a14] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-900/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-300 text-sm mb-4">
            <Send className="w-3.5 h-3.5" />
            Let's Talk
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm always excited to collaborate on innovative projects in AI/ML, Cybersecurity, and Full-Stack Development.
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — contact cards + info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Contact Info</h3>
              <p className="text-gray-400 text-sm">Feel free to reach out through any of these channels.</p>
            </div>

            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <a
                  key={i}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-4 rounded-2xl glass border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-x-1 hover:shadow-xl ${card.glow}`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{card.label}</p>
                    <p className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors duration-200">
                      {card.text}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-2xl glass border border-white/5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Location</p>
                <p className="text-white font-medium text-sm">Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1.5">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500/60 focus:outline-none focus:ring-1 focus:ring-blue-500/40 text-white placeholder-gray-600 text-sm transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500/60 focus:outline-none focus:ring-1 focus:ring-blue-500/40 text-white placeholder-gray-600 text-sm transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-blue-500/60 focus:outline-none focus:ring-1 focus:ring-blue-500/40 text-white placeholder-gray-600 text-sm transition-all duration-200 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {sent ? '✓ Message Sent!' : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}