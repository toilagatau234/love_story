import React from 'react';
import { SceneShell } from '../components/SceneShell';
import { ScrollCue } from '../components/ScrollCue';
import { storyData } from '../data/story';
import { photos } from '../data/photos';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Scene02LittleMoments: React.FC = () => {
  const containerRef = useScrollReveal<HTMLDivElement>(0.1);

  // 6 photos with Photo 02 replacing Photo 08
  const momentPhotos = [
    photos.find(p => p.id === 'photo-01')!,
    photos.find(p => p.id === 'photo-03')!,
    photos.find(p => p.id === 'photo-05')!,
    photos.find(p => p.id === 'photo-06')!,
    photos.find(p => p.id === 'photo-07')!,
    photos.find(p => p.id === 'photo-02')!
  ].filter(Boolean);

  return (
    <SceneShell id="scene-02" style={{ minHeight: '100dvh', padding: '5rem 1.25rem 4rem 1.25rem' }}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          maxWidth: '1000px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem'
        }}
      >
        {/* Header Section */}
        <div style={{ textAlign: 'center', maxWidth: '750px' }}>
          <h2
            className="scene-title reveal-init delay-1"
            style={{
              fontSize: 'clamp(2rem, 1.6rem + 2vw, 3.4rem)',
              marginBottom: '1.25rem',
              lineHeight: 1.25
            }}
          >
            {storyData.scene02.title}
          </h2>

          {/* Poetic Quotes */}
          <div
            className="reveal-init delay-2"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem 1.5rem',
              color: 'var(--color-muted)',
              fontSize: 'clamp(1rem, 0.95rem + 0.3vw, 1.2rem)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-display)',
              lineHeight: 1.6
            }}
          >
            {storyData.scene02.quotes.map((quote, idx) => (
              <span key={idx} style={{ letterSpacing: '0.02em' }}>
                “{quote}”
              </span>
            ))}
          </div>
        </div>

        {/* Compact, clean 2-column mobile / 3-column desktop photo grid without text captions */}
        <div className="compact-moments-grid">
          {momentPhotos.map((item, index) => {
            const delayClass = `delay-${Math.min(6, (index % 6) + 1)}`;

            return (
              <div
                key={`${item.id}-${index}`}
                className={`compact-photo-card reveal-init ${delayClass}`}
              >
                <div className="compact-img-wrapper">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: item.objectPosition
                    }}
                  />
                  <div className="compact-film-vignette" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Cue to Scene 03 */}
        <div className="reveal-init delay-3" style={{ marginTop: '1rem' }}>
          <ScrollCue label="BỨC ẢNH KHOẢNH KHẮC" targetId="scene-03" />
        </div>
      </div>

      <style>{`
        .compact-moments-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
          width: 100%;
          max-width: 900px;
        }

        @media (min-width: 768px) {
          .compact-moments-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        .compact-photo-card {
          background-color: var(--color-bg-soft);
          border: 1px solid rgba(195, 154, 145, 0.25);
          border-radius: var(--radius-md);
          padding: 0.4rem;
          box-shadow: var(--shadow-sm);
          transition: transform 0.35s var(--ease-cinematic), box-shadow 0.35s ease;
        }

        .compact-photo-card:hover {
          transform: translateY(-3px) scale(1.02);
          border-color: rgba(195, 154, 145, 0.5);
          box-shadow: var(--shadow-md);
        }

        .compact-img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1.15;
          border-radius: 8px;
          overflow: hidden;
          background-color: #0c090c;
        }

        .compact-film-vignette {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 20px rgba(16, 13, 16, 0.35);
          pointer-events: none;
        }
      `}</style>
    </SceneShell>
  );
};
