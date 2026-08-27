'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  speed?: number;
}

export default function Marquee({ items, reverse = false, speed = 1 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const ctx = gsap.context(() => {
      // Speed up/slow down based on scroll velocity
      gsap.to(track, {
        x: reverse ? '20%' : '-20%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5 * speed,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reverse, speed]);

  const content = items.join(' • ') + ' • ';
  const repeated = content.repeat(4);

  return (
    <div
      ref={sectionRef}
      style={{
        overflow: 'hidden',
        padding: 'clamp(1rem, 2vh, 2rem) 0',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        ref={trackRef}
        className={reverse ? 'marquee-track-reverse' : 'marquee-track'}
        style={{ willChange: 'transform' }}
      >
        <span
          className="font-display"
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 3rem)',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            color: 'var(--color-text)',
            opacity: 0.12,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase',
          }}
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}
