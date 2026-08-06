import React from 'react';
import { FileDown, ExternalLink, FileText, CheckCircle } from 'lucide-react';

const highlights = [
  'AWS Cloud Practitioner Certified',
  'Red Hat Enterprise App Developer',
  'Salesforce AI Associate Certified',
  '90% accuracy in ML model (Amazon Challenge)',
];

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 bg-[#080d1a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-900/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-500/20 text-indigo-300 text-sm mb-4">
            <FileText className="w-3.5 h-3.5" />
            My Resume
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Resume</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            A detailed overview of my skills, certifications, experience, and qualifications.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl glass border border-white/8 overflow-hidden">
          {/* Card header */}
          <div className="px-8 py-6 border-b border-white/5 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">Karthik Reddy</h3>
                <p className="text-gray-400 text-sm mt-0.5">Cybersecurity Engineer · Full-Stack Developer · AI/ML</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="px-8 py-6 border-b border-white/5">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Key Highlights</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="px-8 py-6">
            <p className="text-gray-400 text-sm mb-5">
              Download or view my full resume in PDF format for complete details about my education, experience, and projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/resume.pdf"
                download="KarthikReddy_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                View in Browser
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
