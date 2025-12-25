import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Arena from './components/Arena';
import PracticeQuiz from './components/PracticeQuiz';
import DeveloperRoute from './DeveloperRoute';
import { lessons, modules } from './lessons';

function App() {
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, arena
  const [currentLessonIdx, setCurrentLessonIdx] = useState(0);

  // Progress tracking: currentSection 1 means sections 2-5 are locked
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('skz_progress');
    return saved ? JSON.parse(saved) : { currentModule: 1, currentSection: 1 };
  });

  // Sync progress to localStorage
  useEffect(() => {
    localStorage.setItem('skz_progress', JSON.stringify(userProgress));
  }, [userProgress]);

  const path = window.location.pathname;
  if (path === '/dev') return <DeveloperRoute />;

  // --- NAVIGATION LOGIC ---
  const startSection = (moduleId, sectionId) => {
    // Find the first lesson index for this section
    const firstLessonIdx = lessons.findIndex(l => l.sectionId === sectionId);
    if (firstLessonIdx !== -1) {
      setCurrentLessonIdx(firstLessonIdx);
      setCurrentView('arena');
    }
  };

  const handleNextLesson = () => {
    const currentLesson = lessons[currentLessonIdx];
    const nextIdx = currentLessonIdx + 1;

    // Check if we just finished the last lesson of a section
    // (Each section has 30 questions: 15 practice + 15 quiz)
    const isEndOfSection = (nextIdx > 0 && nextIdx % 30 === 0);

    if (isEndOfSection) {
      // Unlock the next section if it exists
      if (userProgress.currentSection === currentLesson.sectionId) {
        setUserProgress(prev => ({
          ...prev,
          currentSection: prev.currentSection + 1
        }));
      }
      setCurrentView('dashboard');
      return;
    }

    // Move to next lesson if within bounds
    if (nextIdx < lessons.length) {
      setCurrentLessonIdx(nextIdx);
    } else {
      setCurrentView('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* 1. DASHBOARD VIEW */}
      {currentView === 'dashboard' && (
        <Dashboard
          modules={modules}
          userProgress={userProgress}
          onStart={startSection}
        />
      )}

      {/* 2. ARENA VIEW */}
      {currentView === 'arena' && (
        lessons[currentLessonIdx] ? (
          <Arena
            // Key forces reset of the editor and state for every new mission
            key={lessons[currentLessonIdx].id}
            lesson={lessons[currentLessonIdx]}
            onComplete={handleNextLesson}
            onBack={() => setCurrentView('dashboard')}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-screen text-white bg-zinc-950 p-10 text-center">
            <h1 className="text-4xl font-black italic text-red-500 mb-4 uppercase">System Error</h1>
            <p className="text-zinc-400 mb-8 max-w-md">
              Mission <span className="text-white font-mono">{currentLessonIdx}</span> not found.
            </p>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="px-8 py-3 bg-white text-black font-black rounded-full hover:bg-skz-green transition-colors"
            >
              RETURN TO DASHBOARD
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default App;