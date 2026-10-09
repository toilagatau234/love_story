import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { ScrollCue } from '../components/ScrollCue';
import { storyData } from '../data/story';
import { photos } from '../data/photos';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Sparkles, Heart } from 'lucide-react';

export const Scene04WhatIKeep: React.FC = () => {
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
        {/* Title Synchronized with Website Style */}
        <div className="reveal-init delay-1">
          <h2
            className="scene-title"
            style={{
              fontSize: 'clamp(2.3rem, 1.9rem + 2.4vw, 4rem)',
              maxWidth: '760px',
              margin: '0 auto',
              lineHeight: 1.22,
              color: 'var(--color-ivory)',
              textShadow: '0 4px 25px rgba(0, 0, 0, 0.85)'
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
          {/* Framed Beach Photo with Floating Motion */}
          <div
            className="reveal-init delay-2 floating-subtle-1"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '1 / 1.15',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.85), var(--shadow-glow)',
              border: '1px solid var(--color-border-glow)'
            }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="ken-burns"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 32%',
                display: 'block'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(13, 10, 13, 0.6) 0%, transparent 60%)',
                pointerEvents: 'none'
              }}
            />
          </div>

          {/* Sincere Confession Card Styled Harmoniously with Website Theme */}
          <div
            className="reveal-init delay-3 shimmer-card"
            style={{
              maxWidth: '700px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              backgroundColor: 'var(--color-card-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.8rem 2.4rem',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: 'var(--shadow-lg), 0 0 35px rgba(157, 49, 85, 0.2)',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-rose)' }}>
              <Heart size={18} fill="#9d3155" />
              <span style={{ fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
                TÂM SỰ CÙNG EM
              </span>
            </div>

            <p
              style={{
                fontSize: 'clamp(1.35rem, 1.22rem + 0.55vw, 1.7rem)',
                color: 'var(--color-rose)',
                fontWeight: 500,
                lineHeight: 1.6,
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.01em',
                fontStyle: 'italic'
              }}
            >
              “{storyData.scene04.paragraphs[0]}”
            </p>

            <p
              style={{
                fontSize: 'clamp(1.12rem, 1.05rem + 0.35vw, 1.35rem)',
                color: 'var(--color-ivory)',
                lineHeight: 1.9,
                fontWeight: 300,
                letterSpacing: '0.01em'
              }}
            >
              {storyData.scene04.paragraphs[1]}
            </p>
          </div>
        </div>

        {/* Transition CTA directly to the final surprise gift */}
        <div
          className="reveal-init delay-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            marginTop: '1.25rem'
          }}
        >
          <button
            className="btn-primary"
            onClick={handleGoToGift}
            style={{
              padding: '1.05rem 2.8rem',
              fontSize: '1.1rem'
            }}
          >
            <Sparkles size={18} />
            <span>{storyData.scene04.ctaButton}</span>
          </button>
          
          <ScrollCue label="MÓN QUÀ CUỐI CÙNG" targetId="scene-06" />
        </div>
      </div>
    </SceneShell>
  );
};
