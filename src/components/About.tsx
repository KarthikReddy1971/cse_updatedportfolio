import React from 'react';
import Education from './Education/Education';
import Certifications from './About/Certifications';
import Hobbies from './About/Hobbies';
import Testimonials from './About/Testimonials';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-[#080d1a] to-[#050a14] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-900/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-300 text-sm mb-4">
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Who I Am</h2>
        </div>

        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16">
<p className="text-lg text-gray-300 leading-relaxed">
  I'm a <span className="text-blue-400 font-semibold">Computer Science graduate</span> passionate about building intelligent applications with{' '}
  <span className="text-indigo-400 font-semibold">Artificial Intelligence</span>,{' '}
  <span className="text-purple-400 font-semibold">Machine Learning</span>,{' '}
  <span className="text-cyan-400 font-semibold">Python</span>, and{' '}
  <span className="text-emerald-400 font-semibold">Data Analytics</span>. I enjoy transforming ideas into scalable software solutions that solve real-world problems and create meaningful impact.
</p>
        </div>

        {/* Education + Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Education />
          <Certifications />
        </div>

        {/* Hobbies */}
        <div className="mb-16">
          <Hobbies />
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <Testimonials />
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-4">
            <a
              href="#resume"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl glass border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}