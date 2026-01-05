import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, CheckCircle, Lightbulb, ArrowLeft, Cpu, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

const Arena = ({ lesson, userCode, setUserCode, onComplete, onBack, onShowIntro }) => {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [consoleOutput, setConsoleOutput] = useState("");

  // Reset local feedback states when lesson changes, but keep code if handled by parent
  useEffect(() => {
    setConsoleOutput("");
    setError(null);
    setStatus('idle');
  }, [lesson.id]);

  const handleRun = async () => {
    if (!userCode.trim()) {
      setError("The editor is empty!");
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

      if (data.success) {
        setConsoleOutput(data.output);
        if (data.output.trim() === String(lesson.expectedOutput)) {
          setStatus('success');
          confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
          setTimeout(onComplete, 2000);
        } else {
          setError(`Incorrect output. Expected: ${lesson.expectedOutput}`);
          setStatus('error');
        }
      } else {
        setError(data.error);
        setStatus('error');
      }
    } catch (err) {
      setError("Server connection failed.");
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans p-4 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
        {/* Left Column */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-2">
            <button onClick={onBack} className="text-zinc-500 hover:text-white flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors">
              <ArrowLeft size={16} /> Exit
            </button>
            <button
              onClick={onShowIntro}
              className="text-skz-green/70 hover:text-skz-green flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all border border-skz-green/20 px-3 py-1 rounded-full hover:bg-skz-green/10"
            >
              <BookOpen size={14} /> Review Briefing
            </button>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2.5rem] p-8 flex-1">
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="text-skz-green" size={18} />
              <span className="text-skz-green font-black uppercase text-[10px] tracking-widest">Protocol</span>
            </div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4">{lesson.title}</h2>
            <p className="text-zinc-400 mb-6">{lesson.description}</p>
            <div className="bg-black/40 border border-zinc-800 p-6 rounded-2xl mb-6">
              <p className="text-skz-green font-mono text-sm">{lesson.mission}</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-skz-green/5 border border-skz-green/10 rounded-2xl">
              <Lightbulb className="text-skz-green shrink-0" size={18} />
              <p className="text-xs text-zinc-500 italic">Hint: {lesson.hint}</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2.5rem] overflow-hidden flex flex-col h-[60vh]">
            <div className="bg-zinc-800/50 px-6 py-4 border-b border-zinc-800 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                <Terminal size={12} /> editor.py
              </span>
            </div>
            <textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="flex-1 bg-transparent p-8 font-mono text-skz-green outline-none resize-none text-lg"
              placeholder="# Type your logic here..."
              spellCheck="false"
            />
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8">
            <div className="mb-4 font-mono text-sm">
               <div className="text-zinc-600 text-[10px] uppercase font-black mb-2">Console Output</div>
               <div className={status === 'success' ? 'text-skz-green' : 'text-white'}>
                  {consoleOutput || "> Ready..."}
               </div>
               {error && <div className="text-red-500 text-xs mt-2 font-bold uppercase tracking-tight italic">Error: {error}</div>}
            </div>
            <button
              onClick={handleRun}
              disabled={status === 'success' || status === 'running'}
              className={`w-full py-5 rounded-2xl font-black text-xl transition-all ${
                status === 'success' ? 'bg-skz-green text-black' : 'bg-white text-black hover:bg-skz-green'
              }`}
            >
              {status === 'running' ? "RUNNING..." : status === 'success' ? "MISSION COMPLETE" : "RUN SYSTEM"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arena;