import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAutoStartedRef = useRef(false);

  const INTRO_SKIP_SECONDS = 14.5; // Tua qua doan intro toi thang phan hat

  useEffect(() => {
    const audio = new Audio('/music.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.8;
    audioRef.current = audio;

    const playWithIntroSkip = () => {
      if (!audioRef.current || hasAutoStartedRef.current) return;
      
      // Set to 14.5s (skips intro right to vocals)
      if (audioRef.current.currentTime < 1) {
        audioRef.current.currentTime = INTRO_SKIP_SECONDS;
      }
      
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          hasAutoStartedRef.current = true;
        })
        .catch(() => {
          // Autoplay was blocked, will play on next gesture
        });
    };

    // Auto-play when user scrolls down into Scene 2 or past Hero
    const handleScrollTrigger = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 300 && !hasAutoStartedRef.current) {
        playWithIntroSkip();
      }
    };

    // Unlock on first touch/click anywhere
    const handleFirstGesture = () => {
      if (window.scrollY > 300 && !hasAutoStartedRef.current) {
        playWithIntroSkip();
      }
    };

    window.addEventListener('scroll', handleScrollTrigger, { passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true });
    window.addEventListener('click', handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollTrigger);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('click', handleFirstGesture);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (audioRef.current.currentTime < 1) {
        audioRef.current.currentTime = INTRO_SKIP_SECONDS;
      }
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          hasAutoStartedRef.current = true;
        })
        .catch((err) => {
          console.warn('Audio play prevented:', err);
        });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 'calc(1.2rem + var(--safe-top))',
      right: '1.2rem',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Tắt nhạc: SỐ 1 THẾ GIỚI - COVER NỮ CHILL' : 'Bật nhạc: SỐ 1 THẾ GIỚI - COVER NỮ CHILL'}
        title={isPlaying ? 'Tắt nhạc' : 'Bật bài hát "SỐ 1 THẾ GIỚI - COVER NỮ CHILL"'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.55rem 1.1rem',
          backgroundColor: 'rgba(22, 18, 23, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(195, 154, 145, 0.4)',
          borderRadius: '9999px',
          color: isPlaying ? 'var(--color-rose)' : 'var(--color-muted)',
          fontSize: '0.85rem',
          cursor: 'pointer',
          transition: 'all 0.35s ease',
          boxShadow: isPlaying ? '0 0 25px rgba(157, 49, 85, 0.55)' : '0 4px 15px rgba(0,0,0,0.4)'
        }}
      >
        {isPlaying ? (
          <>
            <Music size={15} style={{ animation: 'spin 4s linear infinite', color: 'var(--color-rose)' }} />
            <Volume2 size={16} />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.04em', fontWeight: 600 }}>SỐ 1 THẾ GIỚI (COVER NỮ CHILL)</span>
          </>
        ) : (
          <>
            <VolumeX size={16} />
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.04em' }}>SỐ 1 THẾ GIỚI (COVER NỮ CHILL)</span>
          </>
        )}
      </button>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
