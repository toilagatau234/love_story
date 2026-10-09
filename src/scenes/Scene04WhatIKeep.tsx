import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { ScrollCue } from '../components/ScrollCue';
import { storyData } from '../data/story';
import { photos } from '../data/photos';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Scene04WhatIKeep: React.FC = () => {
  // Requirement 5: Scene 4 replaced with beach photo (photo-02)!
  const photo = photos.find(p => p.id === 'photo-02') || photos[1];
  const containerRef = useScrollReveal<HTMLDivElement>(0.12);

  const handleGoToGift = () => {
    const giftScene = document.getElementById('scene-06');
    if (giftScene) {
      giftScene.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SceneShell id="scene-04" style={{ minHeight: '115dvh', padding: '5.5rem 1.5rem' }}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          maxWidth: '860px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '3rem'
        }}
      >
        {/* Title without chapter header */}
        <div className="reveal-init delay-1">
          <h2
            className="scene-title"
            style={{
              fontSize: 'clamp(2.2rem, 1.8rem + 2.2vw, 3.8rem)',
              maxWidth: '740px',
              margin: '0 auto',
              lineHeight: 1.25
            }}
          >
            {storyData.scene04.title}
          </h2>
        </div>

        {/* Intimate Beach Portrait & Confession Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2.5rem',
            width: '100%'
          }}
        >
          {/* Framed Beach Photo */}
          <div
            className="reveal-init delay-2"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '360px',
              aspectRatio: '1 / 1.15',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 35px rgba(157, 49, 85, 0.25)',
              border: '1px solid rgba(195, 154, 145, 0.3)'
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 32%'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(16, 13, 16, 0.55) 0%, transparent 60%)'
              }}
            />
          </div>

          {/* Narrative Content with exact text from Requirement 6 */}
          <div
            className="reveal-init delay-3"
            style={{
              maxWidth: '680px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              backgroundColor: 'var(--color-card-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem 2.2rem',
              backdropFilter: 'blur(16px)',
              boxShadow: 'var(--shadow-md)',
              textAlign: 'left'
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1.25rem, 1.15rem + 0.5vw, 1.55rem)',
                color: 'var(--color-rose)',
                fontWeight: 500,
                lineHeight: 1.65,
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.01em'
              }}
            >
              “{storyData.scene04.paragraphs[0]}”
            </p>

            <p
              style={{
                fontSize: 'clamp(1.1rem, 1.02rem + 0.4vw, 1.35rem)',
                color: 'var(--color-ivory-dim)',
                lineHeight: 1.85,
                fontWeight: 300
              }}
            >
              {storyData.scene04.paragraphs[1]}
            </p>
          </div>
        </div>

        {/* Transition CTA directly to the final surprise gift (Requirement 7) */}
        <div
          className="reveal-init delay-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '1rem'
          }}
        >
          <button
            className="btn-primary"
            onClick={handleGoToGift}
            style={{
              padding: '1rem 2.6rem',
              fontSize: '1.05rem'
            }}
          >
            <span>{storyData.scene04.ctaButton}</span>
          </button>
          
          <ScrollCue label="MÓN QUÀ CUỐI CÙNG" targetId="scene-06" />
        </div>
      </div>
    </SceneShell>
  );
};
