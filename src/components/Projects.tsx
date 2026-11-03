
import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: 'Crack the Number',
    description:
      'A modern interactive number-guessing game developed using React and TypeScript. Features five difficulty levels, smart hints, score management, attempt tracking, previous guess history, and interactive victory animations. Designed with a responsive interface and engaging game mechanics.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'JavaScript',
      'Git',
    ],
    live:
      'https://crack-numberr.netlify.app/',
    github:
      'https://github.com/KarthikReddy1971/crack-the-number',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-violet-500 to-indigo-600',
  },
  {
    title: 'Security Incident Response System',
    description:
      'A web-based cybersecurity incident management platform designed to streamline security incident reporting and response. Features role-based access for Employees, Analysts, and Admins, secure authentication, incident tracking, investigation management, and PostgreSQL database integration with Row Level Security.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Git',
    ],
    github:
      'https://github.com/KarthikReddy1971/security-incident-response-system',
    live:
      'https://security-incident-response-system-git-main-karthikreddy1971.vercel.app/loginAWS Cloud Practitioner Certified',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-red-500 to-orange-600',
  },
  {
    title: 'NovaMart Analytics Dashboard',
    description:
      'An interactive retail analytics dashboard developed to analyze sales, revenue, profitability, product performance, and customer behaviour. Implemented data preprocessing, RFM customer segmentation, interactive visualizations, business insights, and filtering capabilities to support data-driven decision-making.',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'Streamlit',
      'Plotly',
      'Data Analysis',
    ],
    github:
      'https://github.com/KarthikReddy1971/pandas-novamart-app',
    live:
      'https://pandas-novamart-app.streamlit.app/',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Loan Eligibility Checker',
    description:
      'An interactive financial assessment application developed to evaluate loan eligibility based on applicant income, expenses, existing financial obligations, and credit score. Features rule-based eligibility assessment, EMI calculations, disposable income analysis, and instant financial assessment results.',
    tech: [
      'Python',
      'Streamlit',
      'Financial Analysis',
      'EMI Calculation',
      'Data Processing',
    ],
    github:
      'https://github.com/KarthikReddy1971/loan-approve-check',
    live:
      'https://loan-approve-check.streamlit.app/',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    accent: 'from-blue-500 to-cyan-600',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-[#050a14] overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] rounded-full
          bg-indigo-900/10 blur-[100px]"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2
            px-4 py-1.5 rounded-full glass
            border border-blue-500/20
            text-blue-300 text-sm mb-5"
          >
            <Layers className="w-3.5 h-3.5" />
            Featured Work
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">
              Featured Projects
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto
            text-sm md:text-base leading-relaxed"
          >
            A selection of projects showcasing my skills in
            Software Development, AI/ML, Data Analytics,
            and Cybersecurity.
          </p>
        </div>

        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2
          gap-7 lg:gap-8 items-stretch"
        >

          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col
                h-full min-h-[650px]
                rounded-2xl overflow-hidden
                glass border border-white/5
                hover:border-blue-500/30
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-2xl hover:shadow-blue-500/10"
            >

              {/* Project Image */}
              <div className="relative h-[220px]
                flex-shrink-0 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-105"
                />

                <div className="absolute inset-0
                  bg-gradient-to-t
                  from-[#0d1117] via-black/30 to-transparent"
                />

                {/* Top Accent */}
                <div
                  className={`absolute top-0 left-0 right-0
                    h-1 bg-gradient-to-r ${project.accent}`}
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1
                p-6 lg:p-7 bg-[#131722]"
              >

                {/* Title */}
                <h3 className="text-xl font-bold text-white
                  min-h-[56px] mb-3
                  group-hover:text-blue-300
                  transition-colors duration-300"
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm
                  leading-6 min-h-[144px] mb-5"
                >
                  {project.description}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap content-start
                  gap-2 min-h-[70px] mb-5"
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1
                        text-xs font-medium
                        rounded-full
                        bg-blue-500/10
                        border border-blue-500/20
                        text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-5
                  mt-auto pt-4
                  border-t border-white/5"
                >

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2
                      text-sm text-gray-400
                      hover:text-white
                      transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>

                  {/* Live Demo appears only when available */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2
                        text-sm text-gray-400
                        hover:text-blue-400
                        transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}

                </div>
              </div>
            </article>
          ))}

        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/KarthikReddy1971"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2
              px-6 py-3 rounded-full glass
              border border-white/10
              hover:border-blue-500/50
              text-gray-300 hover:text-white
              font-medium transition-all duration-300
              hover:scale-105"
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
