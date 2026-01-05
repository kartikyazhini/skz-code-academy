import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Arena from './components/Arena';
import ModuleIntro from './components/ModuleIntro';
import { lessons, modules } from './lessons';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeModuleId, setActiveModuleId] = useState(1);

  // Initialize Lesson Index from LocalStorage
  const [currentLessonIdx, setCurrentLessonIdx] = useState(() => {
    const savedIdx = localStorage.getItem('skz_current_lesson_idx');
    return savedIdx ? parseInt(savedIdx) : 0;
  });

  // Initialize Progress from LocalStorage
  const [userProgress, setUserProgress] = useState(() => {
    const saved = localStorage.getItem('skz_progress');
    return saved ? JSON.parse(saved) : { currentModule: 1, currentSection: 1 };
  });

  // Sync Progress to LocalStorage
  useEffect(() => {
    localStorage.setItem('skz_progress', JSON.stringify(userProgress));
  }, [userProgress]);

  // Sync Current Index to LocalStorage
  useEffect(() => {
    localStorage.setItem('skz_current_lesson_idx', currentLessonIdx.toString());
  }, [currentLessonIdx]);

  /**
   * Called when a module is selected from the Dashboard
   */
  const startSection = (moduleId, sectionId) => {
    setActiveModuleId(moduleId);
    const firstLessonOfSectionIdx = lessons.findIndex(l => l.sectionId === sectionId);

    // Sync progress state immediately to match choice
    setUserProgress(prev => ({
      ...prev,
      currentSection: sectionId,
      currentModule: moduleId
    }));

    // If resuming current section halfway, skip intro. If fresh start, show intro.
    if (sectionId === userProgress.currentSection && currentLessonIdx !== firstLessonOfSectionIdx && currentLessonIdx !== -1) {
      setCurrentView('arena');
    } else {
      setCurrentLessonIdx(firstLessonOfSectionIdx);
      setCurrentView('intro');
    }
  };

  /**
   * Called by Arena when a mission/quiz is successfully completed
   */
  const handleNextLesson = () => {
    const currentLesson = lessons[currentLessonIdx];
    const nextIdx = currentLessonIdx + 1;

    if (nextIdx < lessons.length) {
      const nextLesson = lessons[nextIdx];

      if (nextLesson.sectionId !== currentLesson.sectionId) {
        const nextModule = modules.find(m =>
          m.sections.some(s => s.id === nextLesson.sectionId)
        );

        if (nextModule) {
          setActiveModuleId(nextModule.id);
          setUserProgress(prev => ({
            ...prev,
            currentSection: nextLesson.sectionId,
            currentModule: nextModule.id
          }));
        }
        setCurrentLessonIdx(nextIdx);
        setCurrentView('intro');
      } else {
        setCurrentLessonIdx(nextIdx);
      }
    } else {
      // 🚀 CRITICAL: All lessons finished!
      // Set currentSection to 6 to mark Module 5 as Mastered
      setUserProgress(prev => ({
        ...prev,
        currentSection: 6
      }));
      setCurrentView('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* 1. MAIN DASHBOARD VIEW */}
      {currentView === 'dashboard' && (
        <Dashboard
          modules={modules}
          userProgress={userProgress}
          onStart={startSection}
        />
      )}

      {/* 2. MISSION BRIEFING VIEW */}
      {currentView === 'intro' && (
        <ModuleIntro
          moduleId={activeModuleId}
          onBegin={() => setCurrentView('arena')}
        />
      )}

      {/* 3. CODE TRAINING VIEW */}
      {currentView === 'arena' && lessons[currentLessonIdx] && (
        <Arena
          key={lessons[currentLessonIdx].id} // Key forces re-render on lesson change
          lesson={lessons[currentLessonIdx]}
          onComplete={handleNextLesson}
          onBack={() => setCurrentView('dashboard')}
        />
      )}
    </div>
  );
}

export default App;