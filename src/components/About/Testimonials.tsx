import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from './data';

export default function Testimonials() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
          <Quote className="w-4 h-4 text-white" />
        </span>
        Testimonials
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group rounded-xl glass border border-white/5 hover:border-indigo-500/30 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
          >
            <Quote className="w-6 h-6 text-indigo-400/40 mb-3" />
            <blockquote className="text-gray-300 text-sm leading-relaxed italic mb-4">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center gap-3 pt-3 border-t border-white/5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                {testimonial.author[0]}
              </div>
              <div>
                <p className="text-indigo-300 font-semibold text-sm">{testimonial.author}</p>
                <p className="text-gray-500 text-xs">{testimonial.title} · {testimonial.relation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}