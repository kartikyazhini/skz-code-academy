import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Play, CheckCircle, Zap, Shield, Target, ArrowRight } from 'lucide-react';

const Dashboard = ({ modules = [], userProgress, onStart }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-skz-green/30 pb-20">

      {/* --- HERO SECTION --- */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="relative overflow-hidden bg-zinc-900/10 border border-zinc-800/50 rounded-[3rem] p-12 mb-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-skz-green/10 blur-[120px] rounded-full -mr-40 -mt-40" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6 bg-zinc-900/80 w-fit px-4 py-1.5 rounded-full border border-zinc-700"
            >
              <div className="w-2 h-2 rounded-full bg-skz-green animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.3em] text-skz-green uppercase">System Online</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-7xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-6"
            >
              STRAY KIDS<br />
              <span className="text-skz-green text-glow">CODE ACADEMY</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-lg max-w-xl mb-10 font-medium"
            >
              Welcome, Trainee. Master Python through the logic of Stray Kids.
              Your curriculum is organized by core logic modules.
            </motion.p>
          </div>
        </div>

        {/* --- STATS BAR --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-[2.5rem] flex items-center gap-5 backdrop-blur-sm">
            <div className="w-12 h-12 bg-skz-green/10 rounded-2xl flex items-center justify-center text-skz-green border border-skz-green/20 shadow-[0_0_15px_rgba(74,222,128,0.1)]">
              <Zap size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Current Stream</p>
              <p className="text-xl font-black italic uppercase">8 Days</p>
            </div>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-[2.5rem] flex items-center gap-5 backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 border border-purple-500/20">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Completed</p>
              <p className="text-xl font-black italic uppercase">{(userProgress?.currentSection || 1) - 1} / 5</p>
            </div>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-[2.5rem] flex items-center gap-5 backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
              <Shield size={24} />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Current Rank</p>
              <p className="text-xl font-black italic uppercase text-skz-green">Trainee</p>
            </div>
          </div>
        </div>

        {/* --- CURRICULUM SECTION --- */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-8 w-1 bg-skz-green rounded-full shadow-[0_0_10px_#4ade80]" />
            <h2 className="text-3xl font-black italic uppercase tracking-tight">Your Curriculum</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modules.map((module) => {
              // Module status logic: If any section inside is the current section, it's active.
              const isModuleLocked = module.sections.every(s => s.id > (userProgress?.currentSection || 1));
              const currentSectionInModule = module.sections.find(s => s.id === (userProgress?.currentSection || 1));

              return (
                <motion.div
                  key={module.id}
                  whileHover={!isModuleLocked ? { y: -5 } : {}}
                  className={`relative bg-zinc-900/10 border border-zinc-800/50 rounded-[3.5rem] p-10 shadow-2xl backdrop-blur-md transition-all group overflow-hidden ${
                    isModuleLocked ? 'opacity-40 grayscale' : 'hover:border-skz-green/30'
                  }`}
                >
                  {/* Decorative Background Icon */}
                  <Shield className="absolute -right-10 -bottom-10 text-white/[0.02] rotate-12" size={240} />

                  <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-xl ${isModuleLocked ? 'bg-zinc-800' : 'bg-skz-green/10'}`}>
                          <Shield size={20} className={isModuleLocked ? 'text-zinc-600' : 'text-skz-green'} />
                        </div>
                        <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase">
                          Module {module.id < 10 ? `0${module.id}` : module.id}
                        </span>
                      </div>

                      <h3 className="text-4xl font-black italic text-white uppercase tracking-tighter mb-2 leading-none">
                        {module.title}
                      </h3>
                      <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                        {module.subtitle}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      {isModuleLocked ? (
                        <div className="flex items-center gap-2 text-zinc-600 font-black text-xs uppercase tracking-widest">
                          <Lock size={14} /> Locked by Protocol
                        </div>
                      ) : (
                        <>
                          <div className="flex flex-col">
                            <span className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mb-1">Active Mission:</span>
                            <span className="text-skz-green font-black uppercase italic text-sm">
                              {currentSectionInModule ? currentSectionInModule.title : "Module Mastered"}
                            </span>
                          </div>

                          <button
                            onClick={() => {
                                // If the module is unlocked, start the user's current section within this module
                                // or the first section if they haven't started this module yet.
                                const targetSection = currentSectionInModule || module.sections[0];
                                onStart(module.id, targetSection.id);
                            }}
                            className="bg-white text-black w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-skz-green transition-all transform active:scale-90 shadow-xl"
                          >
                            <ArrowRight size={24} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;