import React from 'react';
import { Lock, Play, CheckCircle } from 'lucide-react';
import { modules } from '../lessons';

const Dashboard = ({ onStart, userProgress }) => {
  // userProgress should be an object like: { currentModule: 1, currentSection: 1 }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-6xl font-black italic mb-12 uppercase tracking-tighter">
        Python <span className="text-skz-green">Fundamentals</span>
      </h1>

      <div className="grid gap-8">
        {modules.map((module) => (
          <div key={module.id} className="bg-zinc-900/40 p-8 rounded-[2.5rem] border border-zinc-800">
            <h2 className="text-2xl font-bold text-skz-green mb-1">{module.title}</h2>
            <p className="text-zinc-500 mb-8">{module.subtitle}</p>

            <div className="space-y-4">
              {module.sections.map((section, index) => {
                const isLocked = section.id > userProgress.currentSection;
                const isCompleted = section.id < userProgress.currentSection;

                return (
                  <div
                    key={section.id}
                    className={`flex items-center justify-between p-6 rounded-2xl border transition-all ${
                      isLocked ? 'bg-black/20 border-zinc-900 opacity-50' : 'bg-zinc-900 border-zinc-800 hover:border-skz-green'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-zinc-600">0{section.id}</span>
                      <h3 className="text-lg font-bold uppercase italic">{section.title}</h3>
                    </div>

                    {isLocked ? (
                      <Lock className="text-zinc-700" size={20} />
                    ) : isCompleted ? (
                      <div className="flex items-center gap-2 text-skz-green text-xs font-bold uppercase">
                        <CheckCircle size={16} /> Completed
                      </div>
                    ) : (
                      <button
                        onClick={() => onStart(module.id, section.id)}
                        className="bg-white text-black px-6 py-2 rounded-full font-black text-xs hover:bg-skz-green transition-colors flex items-center gap-2"
                      >
                        <Play size={12} fill="black" /> START SECTION
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};