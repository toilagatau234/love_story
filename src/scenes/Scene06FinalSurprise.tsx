import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { GiftBox } from '../components/GiftBox';
import { finalGift } from '../data/finalGift';
import { storyData } from '../data/story';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Scene06FinalSurprise: React.FC = () => {
  const containerRef = useScrollReveal<HTMLDivElement>(0.12);

  return (
    <SceneShell id="scene-06" style={{ minHeight: '120dvh', padding: '6rem 1.5rem 8rem 1.5rem' }}>
      {/* Soft ambient lighting */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(157, 49, 85, 0.08) 0%, var(--color-bg) 80%)',
          pointerEvents: 'none'
        }}
      />

      <div
        ref={containerRef}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '860px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem'
        }}
      >
        {/* Header without chapter label */}
        <div style={{ textAlign: 'center', maxWidth: '680px' }}>
          <h2
            className="scene-title reveal-init delay-1"
            style={{
              fontSize: 'clamp(2.2rem, 1.8rem + 2.2vw, 3.8rem)',
              marginBottom: '1rem',
              lineHeight: 1.25
            }}
          >
            {finalGift.title}
          </h2>
          <p
            className="reveal-init delay-2"
            style={{
              fontSize: 'clamp(1.1rem, 1.02rem + 0.4vw, 1.35rem)',
              color: 'var(--color-muted)',
              lineHeight: 1.75
            }}
          >
            Dù phía trước thế nào, đây là điều muốn gửi gắm trọn vẹn nhất đến {storyData.meta.recipient}.
          </p>
        </div>

        {/* Interactive Gift Module */}
        <div className="reveal-init delay-3" style={{ width: '100%' }}>
          <GiftBox />
        </div>

        {/* Quiet Editorial Outro */}
        <div
          className="reveal-init delay-4"
          style={{
            marginTop: '3.5rem',
            textAlign: 'center',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(195, 154, 145, 0.2)',
            width: '100%',
            maxWidth: '540px'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 1.15rem + 0.6vw, 1.6rem)',
              color: 'var(--color-ivory-dim)',
              fontStyle: 'italic',
              letterSpacing: '0.02em',
              marginBottom: '0.6rem',
              lineHeight: 1.6
            }}
          >
            “Cảm ơn em vì đã là một phần tươi đẹp nhất trong thanh xuân của anh.”
          </p>
          <span
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-rose)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              fontWeight: 500
            }}
          >
            Sáu năm & Mãi mãi
          </span>
        </div>
      </div>
    </SceneShell>
  );
};
