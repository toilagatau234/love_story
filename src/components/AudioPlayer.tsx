import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/music.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.75;
    audioRef.current = audio;

    // Handle user interaction for autoplay policy
    const handleFirstInteraction = () => {
      // User can start with button, but if they click anywhere we can optionally let music play or keep manual toggle
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
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
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio play prevented:', err);
        });
    }
  };

  // Expose play function to global window for scene cues
  useEffect(() => {
    (window as unknown as { startLoveSong?: () => void }).startLoveSong = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };
  }, [isPlaying]);

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
        aria-label={isPlaying ? 'Tắt bài hát Số 1 Thế Giới' : 'Bật bài hát Số 1 Thế Giới'}
        title={isPlaying ? 'Tắt nhạc' : 'Bật bài hát "Số 1 Thế Giới"'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.55rem 1rem',
          backgroundColor: 'rgba(25, 21, 26, 0.85)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(195, 154, 145, 0.35)',
          borderRadius: '9999px',
          color: isPlaying ? 'var(--color-rose)' : 'var(--color-muted)',
          fontSize: '0.85rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: isPlaying ? '0 0 20px rgba(157, 49, 85, 0.45)' : 'none'
        }}
      >
        {isPlaying ? (
          <>
            <Music size={15} style={{ animation: 'spin 4s linear infinite' }} />
            <Volume2 size={16} />
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.04em', fontWeight: 500 }}>Số 1 Thế Giới</span>
          </>
        ) : (
          <>
            <VolumeX size={16} />
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.04em' }}>Bật nhạc</span>
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
