import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { ScrollCue } from '../components/ScrollCue';
import { storyData } from '../data/story';
import { photos } from '../data/photos';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Scene03MemoryToKeep: React.FC = () => {
  const photo04 = photos.find(p => p.id === 'photo-04') || photos[3];
  // Requirement 5: Move photo from Scene 4 (photo-03) up to be photo 02 in Scene 3!
  const photo03 = photos.find(p => p.id === 'photo-03') || photos[2];
  const containerRef = useScrollReveal<HTMLDivElement>(0.12);

  return (
    <SceneShell id="scene-03" style={{ minHeight: '115dvh', padding: '5.5rem 1.5rem' }}>
      {/* Blurred Ambient Backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          overflow: 'hidden'
        }}
      >
        <img
          src={photo04.src}
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(50px) brightness(0.2) saturate(1.2)',
            transform: 'scale(1.2)',
            opacity: 0.65
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, transparent 25%, var(--color-bg) 88%)',
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Main Content with Sequential Reveal */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '900px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '3rem'
        }}
      >
        <div className="reveal-init delay-1">
          <h2
            className="scene-title"
            style={{
              fontSize: 'clamp(2.2rem, 1.8rem + 2.2vw, 3.8rem)',
              marginBottom: '1.25rem',
              maxWidth: '720px',
              lineHeight: 1.25
            }}
          >
            {storyData.scene03.title}
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 1.02rem + 0.4vw, 1.35rem)',
              color: 'var(--color-muted)',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.75
            }}
          >
            {storyData.scene03.subtitle}
          </p>
        </div>

        {/* Two Treasured Photographs (Photo 04 photobooth + Photo 03 close selfie) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.5rem 3rem',
            width: '100%'
          }}
        >
          {/* Photo 01: Photobooth Frame with White Border */}
          <div
            className="reveal-init delay-2 photobooth-frame"
            style={{
              position: 'relative',
              maxWidth: '360px',
              width: '88%',
              transform: 'rotate(-1.5deg)',
              transition: 'transform 0.5s ease, opacity 0.85s ease',
              boxShadow: '0 25px 55px rgba(0, 0, 0, 0.85), 0 0 1px rgba(255, 255, 255, 0.25)',
              borderRadius: '4px',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              padding: '0'
            }}
          >
            <img
              src={photo04.src}
              alt={photo04.alt}
              style={{
                width: '100%',
                display: 'block',
                aspectRatio: '1 / 1.05',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Photo 02: Close Selfie Frame (moved from Scene 4) */}
          <div
            className="reveal-init delay-3 photobooth-frame"
            style={{
              position: 'relative',
              maxWidth: '340px',
              width: '88%',
              transform: 'rotate(1.8deg)',
              transition: 'transform 0.5s ease, opacity 0.85s ease',
              boxShadow: '0 25px 55px rgba(0, 0, 0, 0.85), 0 0 1px rgba(255, 255, 255, 0.25)',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#ffffff',
              padding: '10px 10px 30px 10px'
            }}
          >
            <img
              src={photo03.src}
              alt={photo03.alt}
              style={{
                width: '100%',
                display: 'block',
                aspectRatio: '1 / 1.12',
                objectFit: 'cover',
                borderRadius: '4px'
              }}
            />
            <div style={{
              textAlign: 'center',
              marginTop: '8px',
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.2rem',
              color: '#332a30'
            }}>
              Kỷ niệm bên em
            </div>
          </div>
        </div>

        <div className="reveal-init delay-4" style={{ marginTop: '1.5rem' }}>
          <ScrollCue label="ĐIỀU ANH MUỐN NÓI" targetId="scene-04" />
        </div>
      </div>

      <style>{`
        .photobooth-frame:hover {
          transform: rotate(0deg) scale(1.02) !important;
        }
      `}</style>
    </SceneShell>
  );
};
