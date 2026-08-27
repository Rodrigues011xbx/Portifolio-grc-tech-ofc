'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const overlayTopRef = useRef<HTMLDivElement>(null);
  const overlayBottomRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Counter animation
    tl.to(
      { val: 0 },
      {
        val: 100,
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: function () {
          const val = Math.round(this.targets()[0].val);
          setCount(val);
        },
      },
      0
    );

    // Progress bar
    tl.to(
      barRef.current,
      {
        scaleX: 1,
        duration: 2,
        ease: 'power2.inOut',
        transformOrigin: 'left center',
      },
      0
    );

    // Initial text animations
    tl.fromTo(
      '.loading-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      0
    );

    // Split reveal
    tl.to(overlayTopRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
    }, 2.2);

    tl.to(overlayBottomRef.current, {
      yPercent: 100,
      duration: 0.8,
      ease: 'power4.inOut',
    }, 2.2);

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.3,
      pointerEvents: 'none',
    }, 2.8);

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      {/* Top overlay panel */}
      <div
        ref={overlayTopRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          backgroundColor: 'var(--color-bg)',
          zIndex: 2,
        }}
      />

      {/* Bottom overlay panel */}
      <div
        ref={overlayBottomRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          backgroundColor: 'var(--color-bg)',
          zIndex: 2,
        }}
      />

      {/* Loading content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <div
          className="loading-text font-display"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: 'var(--color-text)',
          }}
        >
          GRC
        </div>

        <div
          className="loading-text font-mono"
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
          }}
        >
          Loading Experience
        </div>

        {/* Progress bar */}
        <div
          style={{
            width: 'clamp(200px, 30vw, 300px)',
            height: 1,
            backgroundColor: 'var(--color-border)',
            overflow: 'hidden',
          }}
        >
          <div
            ref={barRef}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'var(--color-accent)',
              transform: 'scaleX(0)',
              transformOrigin: 'left center',
            }}
          />
        </div>

        {/* Counter */}
        <span
          ref={counterRef}
          className="font-mono"
          style={{
            fontSize: '0.8rem',
            color: 'var(--color-text-secondary)',
            letterSpacing: '0.1em',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {String(count).padStart(3, '0')}%
        </span>
      </div>
    </div>
  );
}
