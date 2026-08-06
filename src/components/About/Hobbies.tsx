import React from 'react';
import { Sparkles } from 'lucide-react';
import { hobbies } from './data';

export default function Hobbies() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg">
          <Sparkles className="w-4 h-4 text-white" />
        </span>
        Hobbies &amp; Interests
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="group rounded-xl glass border border-white/5 hover:border-pink-500/30 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/5"
          >
            <div className="text-2xl mb-2">{hobby.icon}</div>
            <h4 className="font-semibold text-white text-sm group-hover:text-pink-300 transition-colors duration-200">
              {hobby.name}
            </h4>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}