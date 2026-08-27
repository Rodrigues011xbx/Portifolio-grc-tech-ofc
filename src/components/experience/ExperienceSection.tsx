'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '@/data/experience';
import { useCursor } from '@/components/ui/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const { setCursorVariant } = useCursor();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.exp-title',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          },
        }
      );

      // Timeline line grows
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'bottom 70%',
            scrub: 1,
          },
        }
      );

      // Experience cards
      const cards = section.querySelectorAll('.exp-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 80,
            opacity: 0,
            filter: 'blur(8px)',
          },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      style={{
        position: 'relative',
        padding: 'clamp(6rem, 15vh, 12rem) 0',
      }}
    >
      <div className="section-padding">
        {/* Section title */}
        <div className="exp-title" style={{ marginBottom: 'clamp(4rem, 8vh, 8rem)', opacity: 0 }}>
          <div
            className="label"
            style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}
          >
            Career Path
          </div>
          <h2 className="heading-lg">EXPERIENCE</h2>
        </div>

        {/* Timeline */}
        <div
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {/* Timeline line */}
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: 1,
              height: '100%',
              backgroundColor: 'var(--color-accent)',
              opacity: 0.3,
              transformOrigin: 'top',
              transform: 'scaleY(0)',
            }}
          />

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="exp-card"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              style={{
                position: 'relative',
                paddingLeft: 'clamp(2rem, 4vw, 4rem)',
                paddingBottom: 'clamp(3rem, 6vh, 5rem)',
                opacity: 0,
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: -4,
                  top: 8,
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)',
                  boxShadow: '0 0 20px rgba(200, 255, 0, 0.4)',
                }}
              />

              {/* Year */}
              <div
                className="font-mono"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  opacity: 0.08,
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {exp.year}
              </div>

              {/* Role */}
              <h3
                className="heading-md"
                style={{
                  marginBottom: '0.5rem',
                  color: 'var(--color-text)',
                }}
              >
                {exp.role}
              </h3>

              {/* Company */}
              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
                  color: 'var(--color-accent)',
                  marginBottom: '1.5rem',
                  fontWeight: 500,
                }}
              >
                {exp.company}
              </div>

              {/* Description */}
              <p
                className="body-md"
                style={{
                  color: 'var(--color-text-secondary)',
                  marginBottom: '1.5rem',
                  maxWidth: '600px',
                }}
              >
                {exp.description}
              </p>

              {/* Technologies */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono"
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.35rem 0.75rem',
                      border: '1px solid var(--color-border)',
                      borderRadius: '2px',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              {exp.highlights && (
                <div style={{ marginTop: '1.5rem' }}>
                  {exp.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="body-md"
                      style={{
                        color: 'var(--color-text-muted)',
                        paddingLeft: '1rem',
                        borderLeft: '1px solid var(--color-border)',
                        marginBottom: '0.5rem',
                        paddingTop: '0.25rem',
                        paddingBottom: '0.25rem',
                      }}
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
