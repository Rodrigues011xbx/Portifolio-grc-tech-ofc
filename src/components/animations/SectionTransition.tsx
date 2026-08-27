'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionTransitionProps {
  variant?: 'fade' | 'wipe' | 'scale';
}

export default function SectionTransition({ variant = 'fade' }: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (variant === 'wipe') {
        gsap.fromTo(
          el.querySelector('.wipe-line'),
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              end: 'top 40%',
              scrub: 1,
            },
          }
        );
      } else if (variant === 'scale') {
        gsap.fromTo(
          el.querySelector('.scale-dot'),
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 70%',
              end: 'top 40%',
              scrub: 1,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [variant]);

  if (variant === 'wipe') {
    return (
      <div
        ref={ref}
        style={{
          padding: 'clamp(2rem, 5vh, 4rem) 0',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          className="wipe-line"
          style={{
            width: '60%',
            height: 1,
            backgroundColor: 'var(--color-border-active)',
            transformOrigin: 'left center',
            transform: 'scaleX(0)',
          }}
        />
      </div>
    );
  }

  if (variant === 'scale') {
    return (
      <div
        ref={ref}
        style={{
          padding: 'clamp(3rem, 6vh, 5rem) 0',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          className="scale-dot"
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: 'var(--color-accent)',
            opacity: 0,
            boxShadow: '0 0 20px rgba(200, 255, 0, 0.3)',
          }}
        />
      </div>
    );
  }

  // Default fade variant — just spacing
  return (
    <div
      ref={ref}
      style={{
        height: 'clamp(2rem, 4vh, 4rem)',
      }}
    />
  );
}
