'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const terminalLines = [
  { type: 'prompt', content: '$ whoami' },
  { type: 'output', content: 'gabriel@developer' },
  { type: 'empty', content: '' },
  { type: 'prompt', content: '$ cat stack.txt' },
  { type: 'output', content: 'node.js' },
  { type: 'output', content: 'typescript' },
  { type: 'output', content: 'postgresql' },
  { type: 'output', content: 'aws' },
  { type: 'output', content: 'docker' },
  { type: 'output', content: 'kubernetes' },
  { type: 'output', content: 'rabbitmq' },
  { type: 'empty', content: '' },
  { type: 'prompt', content: '$ cat status.txt' },
  { type: 'output', content: 'building scalable systems...' },
  { type: 'empty', content: '' },
  { type: 'prompt', content: '$ cat philosophy.txt' },
  { type: 'output', content: 'clean architecture > clever code' },
  { type: 'output', content: 'readability > complexity' },
  { type: 'output', content: 'systems thinking > feature delivery' },
  { type: 'empty', content: '' },
  { type: 'cursor', content: '$ _' },
];

export default function TerminalSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Terminal container
      gsap.fromTo(
        '.terminal-container',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          },
        }
      );

      // Lines appear one by one
      const lines = section.querySelectorAll('.terminal-line');
      gsap.fromTo(
        lines,
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'center 40%',
            scrub: 1,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: 'clamp(4rem, 10vh, 8rem) 0',
      }}
    >
      <div className="section-padding" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div
          className="terminal-container terminal-window"
          style={{ opacity: 0 }}
        >
          {/* Terminal header */}
          <div className="terminal-header">
            <div className="terminal-dot" style={{ backgroundColor: '#ff5f57' }} />
            <div className="terminal-dot" style={{ backgroundColor: '#febc2e' }} />
            <div className="terminal-dot" style={{ backgroundColor: '#28c840' }} />
            <span
              style={{
                marginLeft: '0.75rem',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
              }}
            >
              terminal — gabriel
            </span>
          </div>

          {/* Terminal body */}
          <div
            style={{
              padding: 'clamp(1rem, 2vw, 1.5rem)',
              fontSize: 'clamp(0.7rem, 1vw, 0.85rem)',
              lineHeight: 1.8,
            }}
          >
            {terminalLines.map((line, i) => (
              <div
                key={i}
                className="terminal-line"
                style={{
                  opacity: 0,
                  color:
                    line.type === 'prompt'
                      ? 'var(--color-accent)'
                      : line.type === 'cursor'
                      ? 'var(--color-accent)'
                      : 'var(--color-text-secondary)',
                  minHeight: line.type === 'empty' ? '1.2em' : 'auto',
                  fontWeight: line.type === 'prompt' ? 500 : 300,
                }}
              >
                {line.content}
                {line.type === 'cursor' && (
                  <span
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '14px',
                      backgroundColor: 'var(--color-accent)',
                      marginLeft: '2px',
                      animation: 'blink 1s step-end infinite',
                      verticalAlign: 'text-bottom',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
