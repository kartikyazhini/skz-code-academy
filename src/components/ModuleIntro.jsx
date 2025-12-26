import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Lightbulb, Zap, ArrowRight, Layers, Box } from 'lucide-react';

const ModuleIntro = ({ moduleId, onBegin }) => {
  const introData = {
    1: {
      title: "Variables & Data Types",
      concept: "Think of Variables as 'labeled boxes'. In Python, you don't just throw data onto the floor; you store it in a box with a name so you can find it later.",
      variableExamples: [
        {
          label: "Box Name (Variable)",
          value: "fav_song",
          desc: "This is the name you use to call the data later. No spaces allowed!"
        },
        {
          label: "The Content (Value)",
          value: "'S-Class'",
          desc: "The actual data sitting inside the box."
        },
        {
          label: "The Assignment (=)",
          value: "=",
          desc: "The '=' sign is the act of putting the data into the box."
        }
      ],
      dataTypesInfo: [
        {
          type: "Strings (str)",
          desc: "Text data. Anything inside quotes. Like a member's stage name.",
          example: '"Felix"',
        },
        {
          type: "Integers (int)",
          desc: "Whole numbers. No decimals. Like the number of members in SKZ.",
          example: "8",
        },
        {
          type: "Booleans (bool)",
          desc: "True or False values. Like a light switch or a 'Yes/No' answer.",
          example: "True",
        }
      ],
      practicalExample: "Below is a live look at the SKZ World Tour database. Notice how the words on the left (the labels) are the Variables holding the data on the right.",
      exampleCode: `# VARIABLE NAME  | ASSIGNMENT |  VALUE (DATA)
# ------------------------------------------
bias            =           'Bang Chan'   # str
albums          =           14            # int
is_on_tour      =           True          # bool

# To use them later, you just call the variable name:
print(bias) # Output: Bang Chan`,
      whyItMatters: "If you try to add 'Felix' + 5, Python will crash. Knowing your Data Types ensures your code doesn't 'Step Out' of bounds!"
    }
  };

  const data = introData[moduleId] || introData[1];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full bg-zinc-900/30 border border-zinc-800 rounded-[3rem] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
      >
        {/* Header */}
        <div className="p-10 border-b border-zinc-800 bg-gradient-to-r from-skz-green/10 to-transparent">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-skz-green animate-pulse" size={20} />
            <span className="text-skz-green font-black tracking-[0.3em] uppercase text-xs text-glow">Mission Briefing</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">
            {data.title}
          </h1>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">

          {/* 1. Variable Concept */}
          <section>
            <div className="flex items-center gap-3 mb-4 text-zinc-400">
              <Box size={20} />
              <h2 className="font-black uppercase tracking-widest text-sm">1. The Variable Concept</h2>
            </div>
            <p className="text-xl text-zinc-300 leading-relaxed font-medium mb-8">
              {data.concept}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.variableExamples.map((item, i) => (
                <div key={i} className="bg-skz-green/5 border border-skz-green/20 p-6 rounded-[2rem] relative overflow-hidden group">
                   <div className="absolute -right-2 -top-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Box size={80} />
                   </div>
                   <div className="relative z-10">
                      <div className="text-[10px] font-black uppercase tracking-widest text-skz-green mb-1">{item.label}</div>
                      <div className="text-2xl font-mono font-black mb-3">{item.value}</div>
                      <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Data Types */}
          <section>
            <div className="flex items-center gap-3 mb-6 text-zinc-400">
              <Layers size={20} />
              <h2 className="font-black uppercase tracking-widest text-sm">2. Understanding Data Types</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.dataTypesInfo.map((item, i) => (
                <div key={i} className="bg-white/5 border border-zinc-800 p-5 rounded-3xl hover:bg-white/10 transition-colors">
                  <div className="text-skz-green font-mono text-xs mb-2 uppercase font-black">{item.type}</div>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-4">{item.desc}</p>
                  <div className="bg-black/50 p-2 rounded-lg text-center font-mono text-skz-green border border-skz-green/20">
                    {item.example}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Practical Example with Clear Labels */}
          <section className="bg-black/40 p-8 rounded-[2rem] border border-zinc-800/50">
            <div className="flex items-center gap-3 mb-6 text-skz-green">
              <Lightbulb size={20} />
              <h2 className="font-black uppercase tracking-widest text-sm text-glow">Practical Example</h2>
            </div>
            <p className="text-zinc-400 mb-6 italic">
              {data.practicalExample}
            </p>
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 font-mono text-sm md:text-base text-skz-green overflow-x-auto relative">
              {/* Floating Label for Clarity */}
              <div className="absolute top-2 right-4 text-[9px] text-zinc-600 font-black uppercase tracking-widest">Python 3.10</div>
              <pre className="leading-relaxed">{data.exampleCode}</pre>
            </div>
          </section>

          <section className="pb-4">
            <h2 className="font-black uppercase tracking-widest text-[10px] text-zinc-600 mb-2">Pro-Tip:</h2>
            <p className="text-zinc-500 italic text-sm">
              {data.whyItMatters}
            </p>
          </section>
        </div>

        {/* Footer Action */}
        <div className="p-8 bg-zinc-900/50 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onBegin}
            className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-skz-green transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl"
          >
            Enter Training Arena <ArrowRight size={20} />
          </button>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #27272a; border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #4ade80; }
        `}} />
      </motion.div>
    </div>
  );
};

export default ModuleIntro;