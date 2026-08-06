import React from 'react';
import { Cpu, Braces, Globe, Cloud, Sparkles, Code2 } from 'lucide-react';
const skillCategories = [
  {
    title: 'Machine Learning & Data',
    icon: Cpu,
    color: 'from-violet-500 to-purple-600',
    glow: 'shadow-violet-500/20',
    border: 'border-violet-500/20 hover:border-violet-500/50',
    skills: [
      'Machine Learning',
      'Data Analysis',
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'Data Visualization',
      'Data Preprocessing',
],
  },
  {
    title: 'Programming',
    icon: Braces,
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
    border: 'border-blue-500/20 hover:border-blue-500/50',
    skills: [
      'Python',
      'Java',
      'C',
      'JavaScript',
      'TypeScript',
      'SQL',
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    color: 'from-emerald-500 to-teal-500',
    glow: 'shadow-emerald-500/20',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    skills: [
      'React',
      'Vite',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
      'REST APIs',
      'CustomTkinter',
    ],
  },
  {
    title: 'Cloud & Tools',
    icon: Cloud,
    color: 'from-orange-500 to-amber-500',
    glow: 'shadow-orange-500/20',
    border: 'border-orange-500/20 hover:border-orange-500/50',
    skills: [
      'AWS Cloud',
      'Git',
      'GitHub',
      'VS Code',
      'MySQL',
      'Google Colab',
      'Jupyter Notebook',
    ],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-[#050a14] to-[#080d1a] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-violet-500/20 text-violet-300 text-sm mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
  A practical technology stack built through academic projects,
   professional certifications, and continuous hands-on learning in AI, 
   software development, and cloud technologies.
</p>
{/* Core Tech Stack */}
<div className="text-center mb-6">
  <div className="flex items-center justify-center gap-2 mb-2">
    <Code2 className="w-5 h-5 text-blue-400" />
    <h3 className="text-2xl font-bold text-white">
      Core Tech Stack
    </h3>
  </div>

  <p className="text-gray-400 text-sm">
    Core technologies I use to build scalable software, data-driven applications, and AI-powered solutions.
  </p>
</div>
<div className="flex flex-wrap justify-center gap-3 mt-8 mb-14">
  {[
    
  'Python',
  'React',
  'SQL',
  'MySQL',
  'AWS',
  'Git',
  'Pandas',
  'NumPy',
  'TypeScript',
  ].map((tech) => (
    <span
      key={tech}
className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-500/30 text-blue-300 font-semibold text-sm transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20"    >
      {tech}
    </span>
  ))}
</div>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl glass border ${cat.border} p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${cat.glow}`}
              >
                {/* Icon header */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-4">{cat.title}</h3>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/5 border border-white/8 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
  { value: '15+', label: 'Projects Built' },
  { value: '5+', label: 'Certifications' },
  { value: 'AI/ML', label: 'Carrer Focus' },
  { value: 'Open', label: 'To Opportunities' },
].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl glass border border-white/5">
              <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}