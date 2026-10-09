import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { ScrollCue } from '../components/ScrollCue';
import { storyData } from '../data/story';
import { photos } from '../data/photos';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Scene00Invitation: React.FC = () => {
  const photo = photos.find(p => p.id === 'photo-02') || photos[1];
  const containerRef = useScrollReveal<HTMLDivElement>(0.1);

  return (
    <SceneShell id="scene-00" style={{ minHeight: '100dvh', padding: 0 }}>
      {/* Background Image Container */}
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
            objectPosition: photo.objectPosition,
            filter: 'brightness(0.55) contrast(1.05)',
            transform: 'scale(1.04)'
          }}
        />
        {/* Cinematic Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(16, 13, 16, 0.35) 0%, rgba(16, 13, 16, 0.85) 100%)',
            pointerEvents: 'none'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '35%',
            background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 100%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Foreground Content with Sequential Reveal */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '100dvh',
          width: '100%',
          maxWidth: '750px',
          padding: 'calc(4rem + var(--safe-top)) 1.5rem calc(3rem + var(--safe-bottom)) 1.5rem',
          textAlign: 'center'
        }}
      >
        <div className="reveal-init delay-1" style={{ paddingTop: '1.5rem' }}>
          <span style={{
            fontSize: '0.85rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-rose)',
            fontWeight: 500
          }}>
            A STORY FOR BÉ CAM
          </span>
        </div>

        {/* Center Emotional Title */}
        <div style={{ margin: 'auto 0' }}>
          <h1
            className="scene-title reveal-init delay-2"
            style={{
              fontSize: 'clamp(2.4rem, 2rem + 2.8vw, 4.4rem)',
              marginBottom: '1.5rem',
              maxWidth: '650px',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.85)',
              lineHeight: 1.2
            }}
          >
            {storyData.scene00.title}
          </h1>
          <p
            className="reveal-init delay-3"
            style={{
              fontSize: 'var(--text-lead)',
              color: 'var(--color-ivory-dim)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.02em',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.75)'
            }}
          >
            “{storyData.meta.tagline}”
          </p>
        </div>

        {/* Bottom Scroll Cue Only (Requirement 3: Removed start button) */}
        <div
          className="reveal-init delay-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingBottom: '1.5rem'
          }}
        >
          <ScrollCue
            label={storyData.scene00.scrollCue}
            targetId="scene-01"
          />
        </div>
      </div>
    </SceneShell>
  );
};
