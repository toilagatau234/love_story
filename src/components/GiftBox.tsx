import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { finalGift } from '../data/finalGift';

export const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenGift = () => {
    if (isOpen || isOpening) return;
    setIsOpening(true);

    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#C39A91', '#9d3155', '#F4EEE7', '#fcd5ce']
      });
    } catch {
      // Fallback
    }

    setTimeout(() => {
      setIsOpen(true);
      setIsOpening(false);
    }, 900);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '720px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    }}>
      {!isOpen ? (
        // Unopened Gift Box (Directly clickable, no button - Requirement 1)
        <div
          onClick={handleOpenGift}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '2.5rem 2rem',
            backgroundColor: 'var(--color-card-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
            transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            transform: isOpening ? 'scale(1.08)' : 'scale(1)',
            opacity: isOpening ? 0.7 : 1,
            userSelect: 'none',
            maxWidth: '440px',
            width: '92%'
          }}
          className="gift-box-interactive"
        >
          {/* Visual Gift Container */}
          <div style={{
            position: 'relative',
            width: '135px',
            height: '135px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              position: 'absolute',
              inset: '-12px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(157, 49, 85, 0.35) 0%, transparent 70%)',
              animation: 'pulseGlow 2.5s infinite alternate'
            }} />

            {/* Gift Box Body */}
            <div style={{
              width: '115px',
              height: '105px',
              background: 'linear-gradient(145deg, #7a2544 0%, #441425 100%)',
              borderRadius: '14px',
              border: '1px solid rgba(195, 154, 145, 0.45)',
              position: 'relative',
              boxShadow: '0 12px 25px rgba(0,0,0,0.55)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {/* Vertical Ribbon */}
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '18px',
                background: 'linear-gradient(180deg, #dfb4ab 0%, #b3887f 100%)',
                boxShadow: '0 0 8px rgba(195, 154, 145, 0.4)'
              }} />

              {/* Horizontal Ribbon */}
              <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: '18px',
                background: 'linear-gradient(90deg, #dfb4ab 0%, #b3887f 100%)',
                boxShadow: '0 0 8px rgba(195, 154, 145, 0.4)'
              }} />

              {/* Center Bow */}
              <div style={{
                position: 'absolute',
                top: '-14px',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Gift size={34} color="#F4EEE7" />
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
              color: 'var(--color-ivory)',
              marginBottom: '0.5rem',
              fontWeight: 400
            }}>
              {finalGift.title}
            </h3>
            <p style={{
              fontSize: 'clamp(0.95rem, 0.9rem + 0.3vw, 1.1rem)',
              color: 'var(--color-rose)',
              fontStyle: 'italic',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.03em'
            }}>
              (Chạm vào hộp quà để mở)
            </p>
          </div>
        </div>
      ) : (
        // Revealed Flower Bouquet (Clean, NO text overlay) and Love Letter
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem',
          animation: 'fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards'
        }}>
          {/* Flower Bouquet Frame - PURE, CLEAN, ZERO TEXT OVERLAY (Requirement 8) */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '460px',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: '#19151A',
            border: '1px solid rgba(195, 154, 145, 0.35)',
            boxShadow: '0 25px 65px rgba(0,0,0,0.85), 0 0 50px rgba(157, 49, 85, 0.35)'
          }}>
            <img
              src={finalGift.image}
              alt="Bó hoa dành riêng cho Bé Cam"
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Sincere Love Letter */}
          <div style={{
            width: '100%',
            maxWidth: '640px',
            backgroundColor: 'rgba(25, 21, 26, 0.8)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.8rem 2.2rem',
            position: 'relative',
            backdropFilter: 'blur(16px)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1.75rem'
            }}>
              <span style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '2.4rem',
                color: 'var(--color-rose)',
                letterSpacing: '0.05em'
              }}>
                Thư gửi Bé Cam
              </span>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
              color: 'var(--color-ivory-dim)',
              fontSize: 'clamp(1.1rem, 1.02rem + 0.35vw, 1.35rem)',
              lineHeight: 1.9,
              fontWeight: 300
            }}>
              {finalGift.letterContent.map((paragraph, idx) => (
                <p key={idx} style={{ textIndent: '1.5rem' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div style={{
              marginTop: '2.25rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              borderTop: '1px solid rgba(195, 154, 145, 0.2)',
              paddingTop: '1.5rem'
            }}>
              <span style={{
                fontSize: '0.95rem',
                color: 'var(--color-muted)'
              }}>
                Thương em thật nhiều,
              </span>
              <span style={{
                fontFamily: 'var(--font-handwriting)',
                fontSize: '2.2rem',
                color: 'var(--color-rose)',
                marginTop: '0.25rem'
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
            transform: translateY(25px);
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
