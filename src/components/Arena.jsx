import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, CheckCircle, Lightbulb, ArrowLeft, Cpu, Trash2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const Arena = ({ lesson, onComplete, onBack }) => {
  const [userCode, setUserCode] = useState("");
  const [status, setStatus] = useState('idle'); // 'idle', 'running', 'success', 'error'
  const [error, setError] = useState(null);
  const [consoleOutput, setConsoleOutput] = useState("");

  // --- RESET LOGIC ---
  // When the lesson prop changes (e.g. from ID 1 to ID 2), clear everything
  useEffect(() => {
    setUserCode("");
    setConsoleOutput("");
    setError(null);
    setStatus('idle');
  }, [lesson.id]);

  const handleRun = async () => {
    if (!userCode.trim()) {
      setError("The editor is empty! Type your code first.");
      setStatus('error');
      return;
    }

    setError(null);
    setStatus('running');

    try {
      const response = await fetch('http://localhost:5000/run-python', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: userCode }),
      });

      const data = await response.json();

      // We trim both to avoid failure due to accidental newlines
      const cleanOutput = data.output ? data.output.trim() : "";
      const expected = lesson.expectedOutput.trim();

      setConsoleOutput(cleanOutput);

      if (data.success && cleanOutput === expected) {
        setStatus('success');
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#4ade80', '#ffffff']
        });

        // Delay moving to the next question so user sees the success
        setTimeout(() => {
          onComplete();
        }, 2000);
      } else {
        // If the code ran but the output was wrong
        setStatus('error');
        if (!data.success) {
          setError(data.output); // This shows the actual Python error (syntax, etc)
        } else {
          setError(`Output "${cleanOutput}" does not match goal: "${expected}"`);
        }
      }
    } catch (err) {
      setStatus('error');
      setError("Backend Offline: Is 'node server.js' running?");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-zinc-500 hover:text-skz-green transition-colors font-bold uppercase text-xs">
          <ArrowLeft size={16} /> Exit Training
        </button>
        <div className="flex items-center gap-2 bg-zinc-900 px-4 py-1 rounded-full border border-zinc-800">
          <Cpu size={14} className="text-skz-green" />
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Mission Protocol Active</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 h-[80vh]">

        {/* LEFT: MISSION INFO */}
        <div className="flex flex-col gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-zinc-900/40 border border-zinc-800 p-8 rounded-[2rem] flex-1 backdrop-blur-md"
            >
              <span className="text-skz-green font-black tracking-[0.3em] text-[10px] uppercase">
                {lesson.era} / LVL {lesson.id}
              </span>
              <h2 className="text-5xl font-black italic mt-2 mb-4 uppercase leading-none">{lesson.title}</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">{lesson.description}</p>

              <div className="bg-black/60 p-6 rounded-2xl border-l-4 border-skz-green">
                <h4 className="text-zinc-500 text-[10px] font-bold uppercase mb-2 tracking-widest">Objective:</h4>
                <p className="text-white text-xl italic font-bold">"{lesson.mission}"</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="bg-zinc-900/20 border border-zinc-800 p-5 rounded-2xl flex items-start gap-4 italic text-zinc-500 text-sm">
            <Lightbulb className="text-skz-green shrink-0" size={20} />
            <p><span className="text-white font-bold not-italic">HINT:</span> {lesson.hint}</p>
          </div>
        </div>

        {/* RIGHT: CODE EDITOR & CONSOLE */}
        <div className="flex flex-col gap-4">
          <div className="flex-[2] bg-black border border-zinc-800 rounded-[2rem] overflow-hidden flex flex-col shadow-2xl relative">
            <div className="bg-zinc-900/50 px-6 py-3 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${status === 'running' ? 'bg-yellow-500 animate-pulse' : 'bg-red-500/50'}`}></div>
                <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-widest">main.py</span>
              </div>
              <button
                onClick={() => setUserCode("")}
                className="text-zinc-600 hover:text-white transition-colors"
                title="Clear Editor"
              >
                <Trash2 size={14} />
              </button>
            </div>

            <textarea
              className="flex-1 bg-transparent p-6 font-mono text-skz-green focus:outline-none resize-none text-lg selection:bg-skz-green/30"
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              spellCheck="false"
              placeholder="# Start typing your Python code here..."
              disabled={status === 'success' || status === 'running'}
            />
          </div>

          {/* REAL SYSTEM OUTPUT */}
          <div className="flex-1 bg-[#0a0a0a] border border-zinc-800 rounded-[2rem] overflow-hidden flex flex-col shadow-inner">
            <div className="bg-zinc-900/50 px-6 py-2 border-b border-zinc-800 flex items-center gap-2">
              <Terminal size={14} className="text-zinc-500" />
              <span className="text-[10px] font-mono text-zinc-500 font-bold uppercase tracking-widest">Console Output</span>
            </div>
            <div className="flex-1 p-6 font-mono text-sm overflow-y-auto">
              {status === 'running' ? (
                <span className="text-skz-green animate-pulse">Running on SKZ-Server...</span>
              ) : (
                <div className={status === 'success' ? 'text-skz-green' : 'text-white'}>
                  {consoleOutput || <span className="text-zinc-800 italic">{">"} System idle...</span>}
                </div>
              )}
              {error && (
                <div className="text-red-500 mt-2 font-bold tracking-tight uppercase text-[11px] bg-red-500/10 p-2 rounded border border-red-500/20">
                  ERROR: {error}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleRun}
            disabled={status === 'success' || status === 'running'}
            className={`w-full py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all active:scale-95 ${
              status === 'success'
                ? 'bg-skz-green text-black'
                : 'bg-white text-black hover:bg-skz-green'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {status === 'running' ? (
              "PROCESSING..."
            ) : status === 'success' ? (
              <><CheckCircle size={20} /> MISSION ACCOMPLISHED</>
            ) : (
              <><Play fill="black" size={20} /> EXECUTE MISSION</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Arena;