import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollCueProps {
  label?: string;
  targetId?: string;
}

export const ScrollCue: React.FC<ScrollCueProps> = ({ 
  label = "CUỘN ĐỂ TIẾP TỤC", 
  targetId 
}) => {
  const handleClick = () => {
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div 
      onClick={targetId ? handleClick : undefined}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.35rem',
        cursor: targetId ? 'pointer' : 'default',
        opacity: 0.75,
        transition: 'opacity 0.3s ease',
        userSelect: 'none'
      }}
      className="scroll-cue"
    >
      <span style={{
        fontSize: '0.7rem',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--color-rose)',
        fontWeight: 500
      }}>
        {label}
      </span>
      <ChevronDown 
        size={16} 
        style={{
          color: 'var(--color-rose)',
          animation: 'bounceSlow 2.2s infinite'
        }} 
      />
      <style>{`
        @keyframes bounceSlow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(5px);
          }
          60% {
            transform: translateY(2px);
          }
        }
      `}</style>
    </div>
  );
};
