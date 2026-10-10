import React, { useState } from 'react';
import { Gift, Heart } from 'lucide-react';
import { finalGift } from '../data/finalGift';

export const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    setIsOpen(true);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '750px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    }}>
      {!isOpen ? (
        // Unopened Gift Box
        <div
          onClick={handleOpenGift}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.75rem',
            padding: '2.8rem 2.2rem',
            backgroundColor: 'var(--color-card-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
            transition: 'transform 0.25s ease, opacity 0.25s ease',
            userSelect: 'none',
            maxWidth: '450px',
            width: '92%'
          }}
          className="gift-box-interactive shimmer-card"
        >
          {/* Visual Gift Container */}
          <div style={{
            position: 'relative',
            width: '140px',
            height: '140px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              position: 'absolute',
              inset: '-15px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(157, 49, 85, 0.4) 0%, transparent 70%)',
              animation: 'pulseGlow 2.5s infinite alternate'
            }} />

            {/* Gift Box Body */}
            <div style={{
              width: '120px',
              height: '110px',
              background: 'linear-gradient(145deg, #7a2544 0%, #441425 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(195, 154, 145, 0.5)',
              position: 'relative',
              boxShadow: '0 15px 30px rgba(0,0,0,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Vertical Ribbon */}
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '20px',
                background: 'linear-gradient(180deg, #dfb4ab 0%, #b3887f 100%)',
                boxShadow: '0 0 10px rgba(195, 154, 145, 0.5)'
              }} />

              {/* Horizontal Ribbon */}
              <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: '20px',
                background: 'linear-gradient(90deg, #dfb4ab 0%, #b3887f 100%)',
                boxShadow: '0 0 10px rgba(195, 154, 145, 0.5)'
              }} />

              {/* Center Bow */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Gift size={36} color="#F4EEE7" />
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 1.4rem + 1vw, 2.2rem)',
              color: 'var(--color-ivory)',
              margin: '0',
              fontWeight: 400
            }}>
              {finalGift.title}
            </h3>
          </div>
        </div>
      ) : (
        // Revealed Flower Bouquet (Clean, NO text overlay) and Harmonized Love Letter
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
          animation: 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          willChange: 'transform, opacity'
        }}>
          {/* Flower Bouquet Frame */}
          <div
            className="floating-subtle-1"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '480px',
              borderRadius: '26px',
              overflow: 'hidden',
              backgroundColor: '#161217',
              border: '1px solid var(--color-border-glow)',
              boxShadow: '0 28px 70px rgba(0,0,0,0.85), var(--shadow-glow)'
            }}
          >
            <img
              src={finalGift.image}
              alt="Bó hoa dành riêng cho Bé Cam"
              loading="eager"
              decoding="async"
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Sincere Love Letter Harmonized with Website Style */}
          <div
            className="shimmer-card"
            style={{
              width: '100%',
              maxWidth: '680px',
              backgroundColor: 'var(--color-card-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem 2.5rem',
              position: 'relative',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: 'var(--shadow-lg), 0 0 35px rgba(157, 49, 85, 0.2)'
            }}
          >
            {/* Header Badge */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-rose)' }}>
                <Heart size={16} fill="#9d3155" />
                <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
                  DÀNH CHO {finalGift.letterRecipient.toUpperCase()}
                </span>
              </div>
              <span style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '2.8rem',
                color: 'var(--color-ivory)',
                letterSpacing: '0.04em',
                lineHeight: 1.1
              }}>
                Thư gửi {finalGift.letterRecipient}
              </span>
            </div>

            {/* Content Synchronized with Website Style */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.6rem',
              color: 'var(--color-ivory)',
              fontSize: 'clamp(1.15rem, 1.05rem + 0.35vw, 1.38rem)',
              lineHeight: 1.95,
              fontWeight: 300,
              letterSpacing: '0.01em'
            }}>
              {finalGift.letterContent.map((paragraph, idx) => (
                <p key={idx} style={{ textIndent: '1.75rem' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature */}
            <div style={{
              marginTop: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              borderTop: '1px solid rgba(195, 154, 145, 0.2)',
              paddingTop: '1.75rem'
            }}>
              <span style={{
                fontSize: '1rem',
                color: 'var(--color-rose)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-display)'
              }}>
                Thương em thật nhiều,
              </span>
              <span style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '2.5rem',
                color: 'var(--color-ivory)',
                marginTop: '0.2rem'
              }}>
                {finalGift.letterSender}
              </span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulseGlow {
          0% { transform: scale(0.95); opacity: 0.5; }
          100% { transform: scale(1.15); opacity: 0.9; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
