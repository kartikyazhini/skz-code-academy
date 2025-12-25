import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, CheckCircle, ChevronRight, Zap } from 'lucide-react';

const PracticeQuiz = ({ programs, onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState('idle'); // 'idle', 'running', 'success', 'error'

  const currentProgram = programs[currentIdx];

  const handleRunCode = async () => {
    setStatus('running');
    try {
      const response = await fetch('http://localhost:5000/run-python', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();

      const cleanOutput = data.output.trim();
      const expected = currentProgram.expectedOutput.trim();

      setOutput(cleanOutput);

      if (data.success && cleanOutput === expected) {
        setStatus('success');

        // --- AUTO-LOAD NEXT QUESTION ---
        // Give the user 1.5 seconds to see their success before switching
        setTimeout(() => {
          if (currentIdx < programs.length - 1) {
            setCurrentIdx(prev => prev + 1);
            setCode("");
            setOutput("");
            setStatus('idle');
          } else {
            onComplete(); // Finish the whole quiz
          }
        }, 1500);

      } else {
        setStatus('error');
      }
    } catch (err) {
      setOutput("Backend Offline: Ensure 'node server.js' is running.");
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      {/* Progress Bar */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-skz-green">Sector Clearance Protocol</span>
          <span className="font-mono text-xs text-zinc-500">{currentIdx + 1} / {programs.length}</span>
        </div>
        <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-skz-green"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIdx + 1) / programs.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 h-[70vh]">
        {/* Left: Mission Details */}
        <div className="flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-[2.5rem] flex-1"
            >
              <h2 className="text-4xl font-black italic uppercase mb-4 text-white">
                {currentProgram.title}
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                {currentProgram.instruction}
              </p>

              <div className="bg-black/40 p-4 rounded-xl border border-zinc-800/50">
                <p className="text-[10px] uppercase font-bold text-zinc-500 mb-1 tracking-widest">Expected Result:</p>
                <code className="text-skz-green font-mono">{currentProgram.expectedOutput}</code>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Console Output */}
          <div className="h-40 bg-black border border-zinc-800 rounded-[2rem] p-6 font-mono text-sm overflow-hidden relative">
            <div className="text-[10px] text-zinc-600 mb-2 flex items-center gap-2 uppercase tracking-widest font-bold">
              <Terminal size={12} /> Output Log
            </div>
            <div className={status === 'success' ? 'text-skz-green' : status === 'error' ? 'text-red-500' : 'text-zinc-400'}>
              {output || "> System ready for execution..."}
            </div>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="absolute inset-0 bg-skz-green/10 flex items-center justify-center backdrop-blur-[2px]"
              >
                <div className="bg-skz-green text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <CheckCircle size={12} /> Mission Success - Loading Next...
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right: Code Editor */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] overflow-hidden flex flex-col relative">
            <textarea
              className="flex-1 bg-transparent p-8 font-mono text-lg text-white focus:outline-none resize-none selection:bg-skz-green/30"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
              placeholder="# Enter your Python solution..."
              disabled={status === 'success' || status === 'running'}
            />
          </div>

          <button
            onClick={handleRunCode}
            disabled={status === 'success' || status === 'running'}
            className={`w-full py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 transition-all ${
              status === 'running' ? 'bg-zinc-800 text-zinc-500' : 'bg-white text-black hover:bg-skz-green'
            }`}
          >
            {status === 'running' ? "EXECUTING..." : <><Play size={20} fill="black" /> RUN PROGRAM</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeQuiz;