import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Arena from './components/Arena';
import ModuleIntro from './components/ModuleIntro';
import { lessons, modules } from './lessons';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeModuleId, setActiveModuleId] = useState(1);
  const [isReview, setIsReview] = useState(false);

  // 🚀 CRITICAL: Store code here so it persists during review jumps
  const [currentCode, setCurrentCode] = useState("");

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
    setIsReview(false);
    setCurrentCode(""); // Clear code for a fresh start from dashboard
    const firstLessonOfSectionIdx = lessons.findIndex(l => l.sectionId === sectionId);

    setUserProgress(prev => ({
      ...prev,
      currentSection: sectionId,
      currentModule: moduleId
    }));

    if (sectionId === userProgress.currentSection && currentLessonIdx !== firstLessonOfSectionIdx && currentLessonIdx !== -1) {
      setCurrentView('arena');
    } else {
      setCurrentLessonIdx(firstLessonOfSectionIdx);
      setCurrentView('intro');
    }
  };

  const handleNextLesson = () => {
    const currentLesson = lessons[currentLessonIdx];
    const nextIdx = currentLessonIdx + 1;

    // Clear code for the next mission
    setCurrentCode("");

    if (nextIdx < lessons.length) {
      const nextLesson = lessons[nextIdx];

      if (nextLesson.sectionId !== currentLesson.sectionId) {
        const nextModule = modules.find(m => m.sections.some(s => s.id === nextLesson.sectionId));
        if (nextModule) {
          setActiveModuleId(nextModule.id);
          setUserProgress(prev => ({ ...prev, currentSection: nextLesson.sectionId, currentModule: nextModule.id }));
        }
        setIsReview(false);
        setCurrentLessonIdx(nextIdx);
        setCurrentView('intro');
      } else {
        setCurrentLessonIdx(nextIdx);
      }
    } else {
      setUserProgress(prev => ({ ...prev, currentSection: 6 }));
      setCurrentView('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {currentView === 'dashboard' && (
        <Dashboard modules={modules} userProgress={userProgress} onStart={startSection} />
      )}

      {currentView === 'intro' && (
        <ModuleIntro
          moduleId={activeModuleId}
          isReview={isReview}
          onBegin={() => setCurrentView('arena')}
        />
      )}

      {currentView === 'arena' && lessons[currentLessonIdx] && (
        <Arena
          // 🔥 Note: We REMOVED the 'key' prop here so the component
          // doesn't force a full reset when we just switch views
          lesson={lessons[currentLessonIdx]}
          userCode={currentCode} // Pass state down
          setUserCode={setCurrentCode} // Pass setter down
          onComplete={handleNextLesson}
          onBack={() => setCurrentView('dashboard')}
          onShowIntro={() => {
            setIsReview(true);
            setCurrentView('intro');
          }}
        />
      )}
    </div>
  );
}

export default App;