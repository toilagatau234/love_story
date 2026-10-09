import React, { useEffect, useState } from 'react';
import { FilmGrain } from './components/FilmGrain';
import { AudioPlayer } from './components/AudioPlayer';
import { Scene00Invitation } from './scenes/Scene00Invitation';
import { Scene01SixYears } from './scenes/Scene01SixYears';
import { Scene02LittleMoments } from './scenes/Scene02LittleMoments';
import { Scene03MemoryToKeep } from './scenes/Scene03MemoryToKeep';
import { Scene04WhatIKeep } from './scenes/Scene04WhatIKeep';
import { Scene06FinalSurprise } from './scenes/Scene06FinalSurprise';
import './styles/global.css';

export const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="story-root">
      {/* Film Grain Texture */}
      <FilmGrain />

      {/* Floating Audio Toggle */}
      <AudioPlayer />

      {/* Ultra-slender Scroll Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '2px',
          background: 'linear-gradient(90deg, var(--color-wine) 0%, var(--color-rose) 100%)',
          zIndex: 101,
          transition: 'width 0.1s linear',
          pointerEvents: 'none'
        }}
      />

      {/* Sequential Continuous Storytelling Scenes */}
      <main>
        <Scene00Invitation />
        <Scene01SixYears />
        <Scene02LittleMoments />
        <Scene03MemoryToKeep />
        <Scene04WhatIKeep />
        <Scene06FinalSurprise />
      </main>
    </div>
  );
};

export default App;
