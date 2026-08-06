import React, { useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
  {
  title: 'Security Incident Response System',
  description:
    'A desktop application designed to streamline security incident reporting and response. Features secure authentication, incident tracking, severity classification, and MySQL database integration for efficient security management.',
  tech: [
    'Python',
    'CustomTkinter',
    'MySQL',
    'SQL',
    'Git',
    'VS Code'
  ],
  github: 'https://github.com/KarthikReddy1971/security-incidence-response-',
  image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3',
  accent: 'from-red-500 to-orange-600',
},
  {
  title: 'Employee Salary Management System',
  description:
    'A desktop application developed to manage employee records, automate salary calculations, and streamline salary increment management. Features include secure data management, employee search, CRUD operations, role-based salary updates, and MySQL database integration with an intuitive CustomTkinter interface.',
  tech: [
    'Python',
    'CustomTkinter',
    'MySQL',
    'SQL',
    'Git',
    'VS Code'
  ],
  github: 'https://github.com/KarthikReddy1971/Employee-Salary-Management-System',
  image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3',
  accent: 'from-blue-500 to-cyan-600',
},
{
  title: 'Credit Card Behaviour Score Prediction',
  description:
    'Developed an end-to-end machine learning model for the IIT Guwahati × IDFC FIRST Bank ML Hackathon to predict credit card default risk. Built a binary classification pipeline with data preprocessing, feature engineering, model training, and evaluation to support proactive risk assessment and portfolio management.',
  tech: [
    'Python',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'Machine Learning',
    'Data Analysis'
  ],
  github: 'https://github.com/KarthikReddy1971/ML-Hackthon-CreditCardBehaviour',
  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3',
  accent: 'from-orange-500 to-amber-600',
},
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 bg-[#050a14] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-300 text-sm mb-4">
            <Layers className="w-3.5 h-3.5" />
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of projects that showcase my skills in full-stack development, AI/ML, and cloud technologies.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col rounded-2xl overflow-hidden glass border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-black/50 to-transparent" />
                {/* Accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accent}`} />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/KarthikReddy1971"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105"
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}