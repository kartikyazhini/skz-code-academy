import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Arena from './components/Arena';
import ModuleIntro from './components/ModuleIntro';
import { lessons, modules } from './lessons';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeModuleId, setActiveModuleId] = useState(1);

  const [currentLessonIdx, setCurrentLessonIdx] = useState(() => {
    const savedIdx = localStorage.getItem('skz_current_lesson_idx');
    return savedIdx ? parseInt(savedIdx) : 0;
  });

  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('skz_progress');
    return saved ? JSON.parse(saved) : { currentModule: 1, currentSection: 1 };
  });

  useEffect(() => {
    localStorage.setItem('skz_progress', JSON.stringify(userProgress));
  }, [userProgress]);

  useEffect(() => {
    localStorage.setItem('skz_current_lesson_idx', currentLessonIdx.toString());
  }, [currentLessonIdx]);

  const startSection = (moduleId, sectionId) => {
    setActiveModuleId(moduleId);
    const firstLessonOfSectionIdx = lessons.findIndex(l => l.sectionId === sectionId);

    // Logic: If resuming current section halfway, skip intro. If fresh start, show intro.
    if (sectionId === userProgress.currentSection && currentLessonIdx !== firstLessonOfSectionIdx) {
      setCurrentView('arena');
    } else {
      setCurrentLessonIdx(firstLessonOfSectionIdx);
      setCurrentView('intro');
    }
  };

  const handleNextLesson = () => {
    const currentLesson = lessons[currentLessonIdx];
    const nextIdx = currentLessonIdx + 1;

    if (nextIdx < lessons.length) {
      const nextLesson = lessons[nextIdx];
      if (nextLesson.sectionId !== currentLesson.sectionId) {
        setUserProgress(prev => ({ ...prev, currentSection: nextLesson.sectionId }));
        setCurrentLessonIdx(nextIdx);
        setCurrentView('intro');
      } else {
        setCurrentLessonIdx(nextIdx);
      }
    } else {
      setCurrentView('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {currentView === 'dashboard' && (
        <Dashboard modules={modules} userProgress={userProgress} onStart={startSection} />
      )}
      {currentView === 'intro' && (
        <ModuleIntro moduleId={activeModuleId} onBegin={() => setCurrentView('arena')} />
      )}
      {currentView === 'arena' && lessons[currentLessonIdx] && (
        <Arena
          key={lessons[currentLessonIdx].id}
          lesson={lessons[currentLessonIdx]}
          onComplete={handleNextLesson}
          onBack={() => setCurrentView('dashboard')}
        />
      )}
    </div>
  );
}

export default App;