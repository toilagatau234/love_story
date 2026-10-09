import React from 'react';

interface SceneShellProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const SceneShell: React.FC<SceneShellProps> = ({
  id,
  className = '',
  children,
  style
}) => {
  return (
    <section
      id={id}
      className={`scene-shell ${className}`}
      style={{
        position: 'relative',
        minHeight: '100dvh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'calc(4rem + var(--safe-top)) 1.5rem calc(4rem + var(--safe-bottom)) 1.5rem',
        overflow: 'hidden',
        scrollMarginTop: '0px',
        ...style
      }}
    >
      {children}
    </section>
  );
};
