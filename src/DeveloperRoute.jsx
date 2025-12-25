import React from 'react';
import Arena from './components/Arena';
import PracticeQuiz from './components/PracticeQuiz';
import { lessons } from './lessons';
import { practicePrograms } from './practiceData';

const DeveloperRoute = () => {
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get('id');
  const modeParam = params.get('mode');

  // --- 1. HANDLE PRACTICE QUIZ MODE ---
  if (modeParam === 'practice') {
    return (
      <div className="bg-zinc-950 min-h-screen">
        <div className="bg-amber-500 text-black text-[10px] font-black py-1 px-4 text-center uppercase tracking-[0.3em]">
          Dev Mode: Testing Practice Quiz (25 Questions)
        </div>
        <PracticeQuiz
          programs={practicePrograms}
          onComplete={() => {
            alert("Dev Test: All 25 Practice Programs Passed!");
            window.location.href = '/';
          }}
        />
      </div>
    );
  }

  // --- 2. HANDLE SPECIFIC MISSION ID ---
  const lessonIndex = lessons.findIndex(l => l.id === parseInt(idParam));
  const lesson = lessons[lessonIndex];

  // Fallback UI if neither mode nor valid ID is found
  if (!lesson) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-mono p-10">
        <h1 className="text-4xl font-black mb-4 uppercase italic tracking-tighter text-red-500">Dev Control Center</h1>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl mb-8 w-full max-w-md">
          <h2 className="text-skz-green text-xs font-bold mb-4 uppercase tracking-widest">Quick Access</h2>
          <a
            href="/dev?mode=practice"
            className="block w-full bg-white text-black text-center py-3 rounded-xl font-black hover:bg-skz-green transition-colors mb-4"
          >
            RUN 25-PROGRAM QUIZ
          </a>
        </div>

        <p className="text-zinc-500 mb-4 uppercase text-[10px] tracking-widest font-bold">Jump to Mission ID:</p>
        <div className="grid grid-cols-5 gap-2 max-w-2xl">
            {[...Array(50)].map((_, i) => (
                <a key={i} href={`/dev?id=${i+1}`} className="p-2 border border-zinc-800 text-xs hover:bg-zinc-900 text-center rounded-md">
                    {i+1}
                </a>
            ))}
        </div>
      </div>
    );
  }

  // --- 3. RENDER MISSION ARENA ---
  return (
    <div className="bg-zinc-950 min-h-screen">
      <div className="bg-skz-green text-black text-[10px] font-black py-1 px-4 text-center uppercase tracking-[0.3em]">
        Dev Mode: Testing Mission {lesson.id} - {lesson.title}
      </div>
      <Arena
        lesson={lesson}
        onComplete={() => alert("Dev Test: Mission Logic Passed!")}
        onBack={() => window.location.href = '/'}
      />
    </div>
  );
};

export default DeveloperRoute;