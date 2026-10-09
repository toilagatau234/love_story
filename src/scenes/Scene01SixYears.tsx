import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { ScrollCue } from '../components/ScrollCue';
import { storyData } from '../data/story';
import { photos } from '../data/photos';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Scene01SixYears: React.FC = () => {
  const photo = photos.find(p => p.id === 'photo-02') || photos[1];
  const containerRef = useScrollReveal<HTMLDivElement>(0.15);

  return (
    <SceneShell id="scene-01" style={{ minHeight: '110dvh' }}>
      {/* Background Ambience */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 25%',
            filter: 'brightness(0.35) contrast(1.1) saturate(0.9)',
            transform: 'scale(1.08)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, var(--color-bg) 0%, rgba(16, 13, 16, 0.7) 40%, rgba(16, 13, 16, 0.85) 75%, var(--color-bg) 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Foreground Narrative with Sequential Reveal */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '720px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '3rem'
        }}
      >
        {/* Title without chapter label */}
        <div className="reveal-init delay-1">
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4.2rem, 3.2rem + 5vw, 7.2rem)',
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: 'var(--color-ivory)',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.9)'
            }}
          >
            {storyData.scene01.title}
          </h2>
        </div>

        {/* Narrative Cadence */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            padding: '2.5rem 2rem',
            backgroundColor: 'rgba(25, 21, 26, 0.72)',
            border: '1px solid rgba(195, 154, 145, 0.25)',
            borderRadius: 'var(--radius-lg)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: 'var(--shadow-md)',
            width: '100%'
          }}
        >
          {storyData.scene01.paragraphs.map((p, idx) => (
            <p
              key={idx}
              className={`reveal-init delay-${idx + 2}`}
              style={{
                fontSize: idx === 2 ? 'clamp(1.25rem, 1.15rem + 0.5vw, 1.55rem)' : 'clamp(1.1rem, 1.02rem + 0.4vw, 1.35rem)',
                color: idx === 2 ? 'var(--color-rose)' : 'var(--color-ivory-dim)',
                fontWeight: idx === 2 ? 500 : 300,
                lineHeight: 1.85,
                letterSpacing: idx === 2 ? '0.02em' : 'normal'
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <div className="reveal-init delay-5" style={{ marginTop: '1rem' }}>
          <ScrollCue label="NHỮNG KHOẢNH KHẮC ĐỜI THƯỜNG" targetId="scene-02" />
        </div>
      </div>
    </SceneShell>
  );
};
