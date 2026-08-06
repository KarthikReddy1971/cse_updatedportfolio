import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { certifications } from './data';

export default function Certifications() {
  return (
    <section id="certifications" className="space-y-6">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg">
          <Award className="w-4 h-4 text-white" />
        </span>
        Certifications &amp; Achievements
      </h3>

      <div className="space-y-3">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group rounded-xl glass border border-white/5 hover:border-amber-500/30 p-5 transition-all duration-300 hover:-translate-x-1 hover:shadow-lg hover:shadow-amber-500/5"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors duration-200">
                    {cert.name}
                  </h4>
                  <p className="text-gray-400 text-xs mt-0.5">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{cert.date}</p>
                </div>
              </div>
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 text-amber-300 text-xs font-medium transition-all duration-200 flex-shrink-0"
              >
                <ExternalLink className="w-3 h-3" />
                Verify
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}