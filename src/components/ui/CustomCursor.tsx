'use client';

import { useEffect, useRef, useState, createContext, useContext, useCallback } from 'react';
import { gsap } from 'gsap';
import { useIsTouchDevice } from '@/hooks/useMediaQuery';

interface CursorContextType {
  setCursorText: (text: string) => void;
  setCursorVariant: (variant: 'default' | 'hover' | 'text' | 'hidden') => void;
}

const CursorContext = createContext<CursorContextType>({
  setCursorText: () => {},
  setCursorVariant: () => {},
});

export const useCursor = () => useContext(CursorContext);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'text' | 'hidden'>('default');
  const isTouch = useIsTouchDevice();
  const posRef = useRef({ x: 0, y: 0 });

  const handleSetCursorText = useCallback((text: string) => setCursorText(text), []);
  const handleSetCursorVariant = useCallback(
    (variant: 'default' | 'hover' | 'text' | 'hidden') => setCursorVariant(variant),
    []
  );

  useEffect(() => {
    if (isTouch) return;
    
    // Set initial centering securely via GSAP
    gsap.set([cursorRef.current, cursorDotRef.current], { xPercent: -50, yPercent: -50 });

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: 'power3.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [isTouch]);

  useEffect(() => {
    if (isTouch) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const sizes = {
      default: { width: 32, height: 32, borderRadius: '50%' },
      hover: { width: 64, height: 64, borderRadius: '50%' },
      text: { width: 100, height: 100, borderRadius: '50%' },
      hidden: { width: 0, height: 0, borderRadius: '50%' },
    };

    gsap.to(cursor, {
      ...sizes[cursorVariant],
      duration: 0.4,
      ease: 'power3.out',
    });
  }, [cursorVariant, isTouch]);

  if (isTouch) {
    return (
      <CursorContext.Provider value={{ setCursorText: handleSetCursorText, setCursorVariant: handleSetCursorVariant }}>
        {children}
      </CursorContext.Provider>
    );
  }

  return (
    <CursorContext.Provider value={{ setCursorText: handleSetCursorText, setCursorVariant: handleSetCursorVariant }}>
      {children}
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          backgroundColor: 'var(--color-accent)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          border: `1px solid ${cursorVariant === 'text' ? 'var(--color-accent)' : 'var(--color-border-active)'}`,
          backgroundColor: cursorVariant === 'text' ? 'var(--color-accent-dim)' : 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s, border-color 0.3s',
        }}
      >
        {cursorText && (
          <span
            ref={cursorTextRef}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
            }}
          >
            {cursorText}
          </span>
        )}
      </div>
    </CursorContext.Provider>
  );
}
