import React from 'react';
import { GraduationCap } from 'lucide-react';
import { educationData } from './educationData';
import TimelineItem from './TimelineItem';

export default function Education() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
          <GraduationCap className="w-4 h-4 text-white" />
        </span>
        Education Timeline
      </h3>
      <div className="space-y-3">
        {educationData.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            isLast={index === educationData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}