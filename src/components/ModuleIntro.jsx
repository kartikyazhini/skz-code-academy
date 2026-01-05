import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Lightbulb, Zap, ArrowRight, Layers, Box, Repeat, List, Code2, Terminal } from 'lucide-react';

const ModuleIntro = ({ moduleId, onBegin }) => {
  const introData = {
    1: {
      title: "Variables & Data Types",
      icon: <Box size={20} />,
      concept: "Think of Variables as 'labeled boxes'. In Python, you don't just throw data onto the floor; you store it in a box with a name so you can find it later.",
      variableExamples: [
        { label: "Box Name (Variable)", value: "fav_song", desc: "The name you use to call the data. No spaces allowed!" },
        { label: "The Content (Value)", value: "'S-Class'", desc: "The actual data sitting inside the box." },
        { label: "The Assignment (=)", value: "=", desc: "Putting the data into the box." }
      ],
      dataTypesInfo: [
        { type: "Strings (str)", desc: "Text data. Like a member's stage name.", example: '"Felix"' },
        { type: "Integers (int)", desc: "Whole numbers. Like the count of members.", example: "8" },
        { type: "Booleans (bool)", desc: "True/False logic. Like 'Is on tour?'.", example: "True" }
      ],
      practicalExample: "Below is a live look at the SKZ database. Labels on the left are Variables holding the Data on the right.",
      exampleCode: `# VARIABLE NAME  |  VALUE (DATA)\nbias            = 'Bang Chan'   # str\nalbums          = 14            # int\nis_on_tour      = True          # bool`,
      whyItMatters: "If you try to add 'Felix' + 5, Python will crash. Knowing your types keeps your code in sync!"
    },
    2: {
      title: "Numeric Types & Math",
      icon: <Zap size={20} />,
      concept: "Python is a powerful calculator. We use Integers for whole counts and Floats for precise decimals (like song durations).",
      variableExamples: [
        { label: "Integer (int)", value: "8", desc: "Whole numbers, no decimals." },
        { label: "Float (float)", value: "3.45", desc: "Numbers with decimal points." },
        { label: "Modulo (%)", value: "Remainder", desc: "Finds what's left after division." }
      ],
      dataTypesInfo: [
        { type: "Addition (+)", desc: "Combine values.", example: "5 + 3" },
        { type: "Multiplication (*)", desc: "Repeat values.", example: "8 * 2" },
        { type: "Division (/)", desc: "Always results in a float.", example: "10 / 2 = 5.0" }
      ],
      practicalExample: "Calculating tour revenue or track lengths requires mixing ints and floats accurately.",
      exampleCode: `track_count = 12\ntrack_length = 3.5  # minutes\ntotal_time = track_count * track_length\nprint(total_time)   # 42.0`,
      whyItMatters: "Using the wrong math operator can break your logic. Master the symbols to master the data!"
    },
    3: {
      title: "Text Data (Strings)",
      icon: <Terminal size={20} />,
      concept: "Strings are sequences of characters. In Python, we can manipulate text to create custom messages for Stays.",
      variableExamples: [
        { label: "Concatenation", value: "+", desc: "Gluing two strings together." },
        { label: "F-Strings", value: "f'{}'", desc: "Plugging variables into text easily." },
        { label: "Methods", value: ".upper()", desc: "Built-in tools to change text." }
      ],
      dataTypesInfo: [
        { type: "len()", desc: "Counts every character.", example: "len('SKZ') # 3" },
        { type: "Indexing", desc: "Get one letter. Starts at 0.", example: "'Felix'[0] # 'F'" },
        { type: "Slicing", desc: "Grab a chunk of text.", example: "'StrayKids'[:5]" }
      ],
      practicalExample: "Automating social media posts requires dynamic text using f-strings.",
      exampleCode: `member = 'I.N'\nmessage = f"Welcome to the stage, {member}!"\nprint(message.upper())`,
      whyItMatters: "Strings are how your code talks to the world. Formatting makes it professional."
    },
    4: {
      title: "Boolean Logic",
      icon: <Layers size={20} />,
      concept: "Logic is the engine of decision-making. Booleans (True/False) allow your code to choose different paths.",
      variableExamples: [
        { label: "Equality", value: "==", desc: "Checks if two things are the same." },
        { label: "And", value: "and", desc: "True only if BOTH sides are true." },
        { label: "Not", value: "not", desc: "Flips True to False and vice-versa." }
      ],
      dataTypesInfo: [
        { type: "Greater Than", desc: "Compare values.", example: "fans > 1000" },
        { type: "Not Equal", desc: "Check for difference.", example: "bias != 'None'" },
        { type: "In Keyword", desc: "Check if text is inside.", example: "'S' in 'SKZ'" }
      ],
      practicalExample: "Validating concert tickets or app permissions depends entirely on boolean results.",
      exampleCode: `has_ticket = True\nis_on_list = False\ncan_enter = has_ticket and is_on_list\nprint(can_enter) # False`,
      whyItMatters: "Logic errors are the hardest to find. Understanding 'Truthiness' is your strongest shield."
    },
    5: {
      title: "Type Conversion",
      icon: <Code2 size={20} />,
      concept: "Sometimes data arrives in the wrong format (like a number inside a string). Conversion (Casting) fixes this.",
      variableExamples: [
        { label: "str()", value: "to String", desc: "Turn a number into text." },
        { label: "int()", value: "to Integer", desc: "Turn text or float into a whole number." },
        { label: "float()", value: "to Float", desc: "Turn text or int into a decimal." }
      ],
      dataTypesInfo: [
        { type: "Casting str", desc: "Needed for concatenation.", example: "'Year: ' + str(2024)" },
        { type: "Casting int", desc: "Removes decimals (truncates).", example: "int(8.9) # 8" },
        { type: "Input Fix", desc: "User input is always text.", example: "int(input())" }
      ],
      practicalExample: "When reading data from a website, numbers often come as text. You must convert them to do math.",
      exampleCode: `price_text = '19.99'\n# price_total = price_text * 2  # This would repeat text!\nprice_total = float(price_text) * 2\nprint(price_total) # 39.98`,
      whyItMatters: "TypeErrors are the #1 beginner mistake. Converting types manually puts you in full control."
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
            <div className="text-skz-green animate-pulse">
              {data.icon || <Zap size={20} />}
            </div>
            <span className="text-skz-green font-black tracking-[0.3em] uppercase text-xs text-glow">Mission Briefing: Module 0{moduleId}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">
            {data.title}
          </h1>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">

          {/* 1. Concept */}
          <section>
            <div className="flex items-center gap-3 mb-4 text-zinc-400">
              <BookOpen size={20} />
              <h2 className="font-black uppercase tracking-widest text-sm">1. Core Concept</h2>
            </div>
            <p className="text-xl text-zinc-300 leading-relaxed font-medium mb-8">
              {data.concept}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.variableExamples.map((item, i) => (
                <div key={i} className="bg-skz-green/5 border border-skz-green/20 p-6 rounded-[2rem] relative overflow-hidden group">
                   <div className="relative z-10">
                      <div className="text-[10px] font-black uppercase tracking-widest text-skz-green mb-1">{item.label}</div>
                      <div className="text-2xl font-mono font-black mb-3">{item.value}</div>
                      <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Breakdown */}
          <section>
            <div className="flex items-center gap-3 mb-6 text-zinc-400">
              <Layers size={20} />
              <h2 className="font-black uppercase tracking-widest text-sm">2. System Mechanics</h2>
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

          {/* 3. Practical Example */}
          <section className="bg-black/40 p-8 rounded-[2rem] border border-zinc-800/50">
            <div className="flex items-center gap-3 mb-6 text-skz-green">
              <Lightbulb size={20} />
              <h2 className="font-black uppercase tracking-widest text-sm text-glow">Code Implementation</h2>
            </div>
            <p className="text-zinc-400 mb-6 italic">
              {data.practicalExample}
            </p>
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 font-mono text-sm md:text-base text-skz-green overflow-x-auto relative">
              <div className="absolute top-2 right-4 text-[9px] text-zinc-600 font-black uppercase tracking-widest">skz_interpreter_v1.0</div>
              <pre className="leading-relaxed">{data.exampleCode}</pre>
            </div>
          </section>

          <section className="pb-4">
            <h2 className="font-black uppercase tracking-widest text-[10px] text-zinc-600 mb-2">Instructor Note:</h2>
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
            Start Mission <ArrowRight size={20} />
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