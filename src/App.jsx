import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Arena from './components/Arena';
import DeveloperRoute from './DeveloperRoute';
import { lessons, modules } from './lessons';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  // --- NEW: Persistent Lesson Index ---
  const [currentLessonIdx, setCurrentLessonIdx] = useState(() => {
    const savedIdx = localStorage.getItem('skz_current_lesson_idx');
    return savedIdx ? parseInt(savedIdx) : 0;
  });

  // Progress tracking
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('skz_progress');
    return saved ? JSON.parse(saved) : { currentModule: 1, currentSection: 1 };
  });

  // Sync Progress to LocalStorage
  useEffect(() => {
    localStorage.setItem('skz_progress', JSON.stringify(userProgress));
  }, [userProgress]);

  // Sync Lesson Index to LocalStorage
  useEffect(() => {
    localStorage.setItem('skz_current_lesson_idx', currentLessonIdx.toString());
  }, [currentLessonIdx]);

  const path = window.location.pathname;
  if (path === '/dev') return <DeveloperRoute />;

  // --- NAVIGATION LOGIC ---
  const startSection = (moduleId, sectionId) => {
    // If the user clicks their CURRENT active section, we just switch view (resuming lesson index)
    if (sectionId === userProgress.currentSection) {
      setCurrentView('arena');
    } else {
      // If they click a different/completed section, find the start of THAT section
      const firstLessonIdx = lessons.findIndex(l => l.sectionId === sectionId);
      if (firstLessonIdx !== -1) {
        setCurrentLessonIdx(firstLessonIdx);
        setCurrentView('arena');
      }
    }
  };

  const handleNextLesson = () => {
    const currentLesson = lessons[currentLessonIdx];
    const nextIdx = currentLessonIdx + 1;

    // Logic to unlock next section if this was a quiz or last lesson
    if (nextIdx < lessons.length) {
      const nextLesson = lessons[nextIdx];
      if (nextLesson.sectionId !== currentLesson.sectionId) {
        setUserProgress(prev => ({
          ...prev,
          currentSection: nextLesson.sectionId
        }));
      }
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
            key={lessons[currentLessonIdx].id}
            lesson={lessons[currentLessonIdx]}
            onComplete={handleNextLesson}
            onBack={() => setCurrentView('dashboard')}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-screen text-white bg-zinc-950 p-10 text-center">
            <h1 className="text-4xl font-black italic text-red-500 mb-4 uppercase">System Error</h1>
            <p className="text-zinc-400 mb-8 max-w-md">Mission not found.</p>
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