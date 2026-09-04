'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCursor } from '@/components/ui/CustomCursor';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Mail, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/Rodrigues011xbx',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gabriel-rodrigues-calixto-364a142a2/',
    icon: LinkedinIcon,
  },
  {
    label: 'Email',
    href: 'mailto:contato.gabrieldev.rc@gmail.com',
    icon: Mail,
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { setCursorVariant, setCursorText } = useCursor();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Big CTA text
      const ctaLines = section.querySelectorAll('.cta-line');
      gsap.fromTo(
        ctaLines,
        { y: 100, opacity: 0, skewY: 4 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          },
        }
      );

      // Links
      gsap.fromTo(
        '.contact-link',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 55%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        position: 'relative',
        padding: 'clamp(8rem, 20vh, 16rem) 0 clamp(4rem, 10vh, 8rem)',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60vw',
          height: '60vw',
          background:
            'radial-gradient(ellipse at center, rgba(200, 255, 0, 0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
        {/* CTA */}
        <div style={{ marginBottom: 'clamp(3rem, 8vh, 6rem)' }}>
          <div className="label" style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
            Get in Touch
          </div>

          <div style={{ overflow: 'hidden' }}>
            {["LET'S", 'BUILD', 'SOMETHING.'].map((line) => (
              <div
                key={line}
                className="cta-line font-display"
                style={{
                  fontSize: 'clamp(3rem, 12vw, 14rem)',
                  fontWeight: 700,
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  textTransform: 'uppercase',
                  opacity: 0,
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Contact links */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              onMouseEnter={() => {
                setCursorVariant('text');
                setCursorText('Open');
              }}
              onMouseLeave={() => {
                setCursorVariant('default');
                setCursorText('');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'clamp(1rem, 2vw, 1.5rem) 0',
                borderBottom: '1px solid var(--color-border)',
                opacity: 0,
                transition: 'padding-left 0.4s var(--ease-out-expo)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.paddingLeft = '1rem';
                const arrow = e.currentTarget.querySelector('.contact-arrow') as HTMLElement;
                if (arrow) {
                  gsap.to(arrow, { x: 4, y: -4, duration: 0.3, ease: 'power2.out' });
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.paddingLeft = '0';
                const arrow = e.currentTarget.querySelector('.contact-arrow') as HTMLElement;
                if (arrow) {
                  gsap.to(arrow, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <link.icon size={18} style={{ color: 'var(--color-text-secondary)' }} />
                <span
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {link.label}
                </span>
              </div>
              <ArrowUpRight
                className="contact-arrow"
                size={18}
                style={{ color: 'var(--color-text-muted)' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
