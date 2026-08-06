import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code2, Shield, Cloud } from 'lucide-react';
import ProfileImage from './ui/ProfileImage/ProfileImage';

const roles = [
  'AI/ML Engineer',
  'Software Engineer',
  'Python Developer',
  'Machine Learning',
  'Data Analytics',
  'Full-Stack Development',
  'Cloud Computing',
  'Cybersecurity',
];

const floatingIcons = [
  { Icon: Code2, style: 'top-1/4 left-8 animate-float', delay: '0s' },
  { Icon: Shield, style: 'top-1/3 right-10 animate-float', delay: '2s' },
  { Icon: Cloud, style: 'bottom-1/4 left-16 animate-float', delay: '4s' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timerRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timerRef.current = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timerRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timerRef.current);
  }, [displayed, typing, roleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#050a14]">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-700/10 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-800/5 blur-[140px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle ${3 + Math.random() * 4}s ease-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, style, delay }, i) => (
        <div
          key={i}
          className={`absolute hidden lg:flex items-center justify-center w-12 h-12 glass rounded-xl text-blue-400/60 ${style}`}
          style={{ animationDelay: delay }}
        >
          <Icon className="w-6 h-6" />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Profile image */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur opacity-70 animate-pulse" />
            <div className="relative">
              <ProfileImage size="xl" style="circle" border="gradient" className="shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-300 text-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
        
          <span className="text-white">Karthik </span>
          <span className="gradient-text">Reddy</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-300 font-medium">
            {displayed}
            <span className="typed-cursor ml-0.5 w-0.5 h-6 inline-block">&nbsp;</span>
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          Specializing in <span className="text-blue-400 font-medium">Network Security</span>,{' '}
          <span className="text-indigo-400 font-medium">Computer Vision</span>, and{' '}
          <span className="text-purple-400 font-medium">Cloud Architecture</span>.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToContact}
            className="relative px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get in Touch
          </button>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full glass border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View Projects
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 mb-16">
          {[
            { href: 'https://github.com/KarthikReddy1971', Icon: Github, label: 'GitHub' },
            { href: 'https://in.linkedin.com/in/karthik-reddy-buthukuri-25678328a', Icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:karthikreddybuthukuri@gmail.com', Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex items-center justify-center w-11 h-11 rounded-full glass border border-white/10 hover:border-blue-500/60 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollDown}
          className="flex flex-col items-center text-gray-500 hover:text-blue-400 transition-colors duration-300 animate-bounce mx-auto"
        >
          <span className="text-xs mb-1 tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}