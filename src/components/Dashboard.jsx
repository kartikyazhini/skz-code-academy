import React from 'react';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, Zap, Shield, ArrowRight, RotateCcw, Trash2 } from 'lucide-react';

const Dashboard = ({ modules = [], userProgress, onStart }) => {
  const handleHardReset = () => {
    if (window.confirm("ARE YOU SURE? This will delete all training progress.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-20">
      <div className="max-w-7xl mx-auto p-6">
        <div className="relative overflow-hidden bg-zinc-900/10 border border-zinc-800/50 rounded-[3rem] p-12 mb-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-skz-green/10 blur-[120px] rounded-full -mr-40 -mt-40" />
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6 bg-zinc-900/80 w-fit px-4 py-1.5 rounded-full border border-zinc-700">
              <div className="w-2 h-2 rounded-full bg-skz-green animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.3em] text-skz-green uppercase">Mission Control Active</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-7xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-6">
              STRAY KIDS<br /><span className="text-skz-green text-glow">CODE ACADEMY</span>
            </motion.h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-zinc-900/20 border border-zinc-800/50 p-8 rounded-[2.5rem] flex items-center gap-5 backdrop-blur-sm">
            <Zap className="text-skz-green" size={24} fill="currentColor" />
            <div><p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Active Streak</p><p className="text-xl font-black italic uppercase">8 Days</p></div>
          </div>
          <div className="bg-zinc-900/20 border border-zinc-800/50 p-8 rounded-[2.5rem] flex items-center gap-5 backdrop-blur-sm">
            <CheckCircle className="text-purple-500" size={24} />
            <div><p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Mastered</p><p className="text-xl font-black italic uppercase">{(userProgress?.currentSection || 1) - 1} / 5</p></div>
          </div>
          <div className="bg-zinc-900/20 border border-zinc-800/50 p-8 rounded-[2.5rem] flex items-center gap-5 backdrop-blur-sm">
            <Shield className="text-blue-500" size={24} />
            <div><p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Rank</p><p className="text-xl font-black italic uppercase text-skz-green">Trainee</p></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modules.map((module) => {
            const currentSectionId = userProgress?.currentSection || 1;
            const activeSectionInModule = module.sections.find(s => s.id === currentSectionId);
            const isLocked = module.sections[0].id > currentSectionId;
            const isCompleted = module.sections[module.sections.length - 1].id < currentSectionId;

            return (
              <motion.div key={module.id} whileHover={!isLocked ? { y: -5 } : {}} className={`relative bg-zinc-900/10 border border-zinc-800/50 rounded-[3.5rem] p-10 shadow-2xl backdrop-blur-md transition-all group overflow-hidden ${isLocked ? 'opacity-40 grayscale' : 'hover:border-skz-green/30'}`}>
                <Shield className="absolute -right-10 -bottom-10 text-white/[0.02] rotate-12" size={240} />
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
                  <div>
                    <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase">Module 0{module.id}</span>
                    <h3 className="text-4xl font-black italic text-white uppercase tracking-tighter mb-2 leading-none">{module.title}</h3>
                    <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em]">{module.subtitle}</p>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    {isLocked ? <div className="text-zinc-600 font-black text-[10px] uppercase tracking-widest">Protocol Locked</div> : isCompleted ? <div className="flex items-center justify-between w-full"><span className="text-skz-green font-black uppercase text-[10px] flex items-center gap-2"><CheckCircle size={16}/> Mastered</span><button onClick={() => onStart(module.id, module.sections[0].id)} className="text-zinc-500 hover:text-white flex items-center gap-2 text-[10px] font-black uppercase"><RotateCcw size={14} /> Restart</button></div> : <><div className="flex flex-col"><span className="text-[9px] text-zinc-500 font-black uppercase tracking-widest mb-1">Active Mission:</span><span className="text-skz-green font-black uppercase italic text-sm">{activeSectionInModule?.title}</span></div><button onClick={() => onStart(module.id, activeSectionInModule.id)} className="bg-white text-black w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-skz-green transition-all transform active:scale-90 shadow-xl"><ArrowRight size={24} /></button></>}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 flex justify-center">
          <button onClick={handleHardReset} className="flex items-center gap-2 text-zinc-800 hover:text-red-500 transition-colors text-[10px] font-black uppercase tracking-[0.3em]">
            <Trash2 size={14} /> Wipe System Memory
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;