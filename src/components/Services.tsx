import React from 'react';
import {
  Brain,
  Lightbulb,
  Users,
  MessageCircle,
  Clock3,
  Rocket,
  Sparkles,
} from 'lucide-react';

const strengths = [
  {
    title: 'Critical Thinking',
    description:
      'Analyzing complex challenges with logical reasoning and structured decision-making to build effective software solutions.',
    Icon: Brain,
    color: 'from-violet-500 to-purple-600',
    glow: 'hover:shadow-violet-500/15',
  },
  {
    title: 'Problem Solving',
    description:
      'Breaking down complex problems into manageable tasks and delivering practical, efficient, and scalable solutions.',
    Icon: Lightbulb,
    color: 'from-yellow-500 to-orange-500',
    glow: 'hover:shadow-yellow-500/15',
  },
  {
    title: 'Team Collaboration',
    description:
      'Collaborating effectively with teammates, sharing knowledge, and contributing to successful project outcomes.',
    Icon: Users,
    color: 'from-blue-500 to-cyan-500',
    glow: 'hover:shadow-blue-500/15',
  },
  {
    title: 'Communication',
    description:
      'Communicating technical ideas clearly and working confidently with both technical and non-technical teams.',
    Icon: MessageCircle,
    color: 'from-emerald-500 to-teal-500',
    glow: 'hover:shadow-emerald-500/15',
  },
  {
    title: 'Time Management',
    description:
      'Prioritizing tasks efficiently, maintaining productivity, and consistently meeting deadlines.',
    Icon: Clock3,
    color: 'from-orange-500 to-amber-500',
    glow: 'hover:shadow-orange-500/15',
  },
  {
    title: 'Continuous Learning',
    description:
      'Continuously exploring new technologies, tools, and best practices through projects, certifications, and hands-on learning.',
    Icon: Rocket,
    color: 'from-pink-500 to-rose-500',
    glow: 'hover:shadow-pink-500/15',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#080d1a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-900/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-300 text-sm mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Professional Strengths
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Professional Strengths
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Beyond technical expertise, I bring strong analytical thinking,
            effective collaboration, clear communication, and a continuous
            learning mindset that enables me to contribute meaningfully to
            software development teams.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((strength, index) => {
            const Icon = strength.Icon;

            return (
              <div
                key={index}
                className={`group relative rounded-2xl glass border border-white/5 hover:border-white/15 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${strength.glow}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${strength.color} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {strength.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {strength.description}
                </p>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${strength.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}