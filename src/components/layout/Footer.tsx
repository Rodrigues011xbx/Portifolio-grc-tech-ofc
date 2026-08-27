'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { useCursor } from '@/components/ui/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { setCursorVariant } = useCursor();

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer-content',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        position: 'relative',
        padding: 'clamp(3rem, 6vh, 5rem) 0 clamp(1.5rem, 3vh, 2.5rem)',
        borderTop: '1px solid var(--color-border)',
      }}
    >
      <div
        className="section-padding footer-content"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '2rem',
          opacity: 0,
        }}
      >
        {/* Left */}
        <div>
          <div
            className="font-display"
            style={{
              fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              marginBottom: '0.4rem',
            }}
          >
            Gabriel Rodrigues Calixto
          </div>
          <div
            className="font-mono"
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
            }}
          >
            Backend / Full-Stack Developer
          </div>
        </div>

        {/* Center - social icons */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {[
            { icon: GithubIcon, href: 'https://github.com/gabrielrcalixto', label: 'GitHub' },
            { icon: LinkedinIcon, href: 'https://linkedin.com/in/gabrielrcalixto', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:gabriel@example.com', label: 'Email' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              style={{
                color: 'var(--color-text-muted)',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)';
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)';
              }}
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>

        {/* Right */}
        <div
          className="font-mono"
          style={{
            fontSize: '0.55rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
          }}
        >
          © {new Date().getFullYear()} — Designed & Built by GRC
        </div>
      </div>
    </footer>
  );
}
