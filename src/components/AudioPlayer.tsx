import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

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
      
      if (audioRef.current.currentTime < 1) {
        audioRef.current.currentTime = INTRO_SKIP_SECONDS;
      }
      
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          hasAutoStartedRef.current = true;
          cleanupListeners();
        })
        .catch(() => {
          // Autoplay blocked by browser policy without user gesture yet,
          // will trigger on first interaction.
        });
    };

    const handleFirstGesture = () => {
      if (!hasAutoStartedRef.current) {
        playWithIntroSkip();
      }
    };

    const cleanupListeners = () => {
      window.removeEventListener('scroll', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };

    // Try playing immediately when page loads
    playWithIntroSkip();

    // Listen for any immediate touch / click / scroll / keydown
    window.addEventListener('scroll', handleFirstGesture, { passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true });
    window.addEventListener('pointerdown', handleFirstGesture, { passive: true });
    window.addEventListener('click', handleFirstGesture, { passive: true });
    window.addEventListener('keydown', handleFirstGesture, { passive: true });

    return () => {
      cleanupListeners();
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
        aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
        title={isPlaying ? 'Đang phát: SỐ 1 THẾ GIỚI - Nhấn để tắt' : 'Nhấn để bật nhạc'}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          padding: isPlaying ? '0.6rem 0.95rem' : '0.6rem',
          minWidth: '42px',
          height: '42px',
          backgroundColor: 'rgba(22, 18, 23, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: isPlaying ? '1px solid rgba(157, 49, 85, 0.6)' : '1px solid rgba(195, 154, 145, 0.3)',
          borderRadius: '9999px',
          color: isPlaying ? 'var(--color-rose)' : 'var(--color-muted)',
          cursor: 'pointer',
          transition: 'all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)',
          boxShadow: isPlaying ? '0 0 25px rgba(157, 49, 85, 0.45), 0 4px 15px rgba(0,0,0,0.5)' : '0 4px 15px rgba(0,0,0,0.4)'
        }}
      >
        {isPlaying ? (
          <>
            <Volume2 size={18} style={{ color: 'var(--color-rose)' }} />
            {/* Animated Sound Wave Equalizer Bars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '14px' }}>
              <span className="sound-wave-bar bar-1" />
              <span className="sound-wave-bar bar-2" />
              <span className="sound-wave-bar bar-3" />
              <span className="sound-wave-bar bar-4" />
            </div>
          </>
        ) : (
          <VolumeX size={18} />
        )}
      </button>
      <style>{`
        .sound-wave-bar {
          display: inline-block;
          width: 3px;
          border-radius: 9999px;
          background: linear-gradient(to top, var(--color-rose), #ff8fa3);
          transform-origin: bottom;
        }
        .bar-1 {
          height: 12px;
          animation: waveJump 0.8s ease-in-out infinite alternate;
        }
        .bar-2 {
          height: 16px;
          animation: waveJump 0.6s ease-in-out infinite alternate 0.2s;
        }
        .bar-3 {
          height: 10px;
          animation: waveJump 0.9s ease-in-out infinite alternate 0.4s;
        }
        .bar-4 {
          height: 14px;
          animation: waveJump 0.7s ease-in-out infinite alternate 0.1s;
        }
        @keyframes waveJump {
          0% {
            transform: scaleY(0.3);
            opacity: 0.6;
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
