'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/data/projects';
import { useCursor } from '@/components/ui/CustomCursor';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { setCursorVariant, setCursorText } = useCursor();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Section title
      gsap.fromTo(
        '.projects-title',
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

      // Each project card - cinematic entrance
      const projectCards = section.querySelectorAll('.project-card');
      projectCards.forEach((card) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
        });

        tl.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: 'none',
          }
        );

        // Inner elements stagger
        const inner = card.querySelectorAll('.project-inner');
        tl.fromTo(
          inner,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.05, ease: 'none' },
          0.3
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      style={{
        position: 'relative',
        padding: 'clamp(6rem, 15vh, 12rem) 0',
      }}
    >
      <div className="section-padding">
        {/* Title */}
        <div className="projects-title" style={{ marginBottom: 'clamp(4rem, 10vh, 8rem)', opacity: 0 }}>
          <div className="label" style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>
            Portfolio
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(3rem, 10vw, 12rem)',
              fontWeight: 700,
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
            }}
          >
            Selected<br />Work
          </h2>
        </div>

        {/* Project Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(6rem, 12vh, 10rem)' }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => {
                setCursorVariant('text');
                setCursorText('View');
              }}
              onMouseLeave={() => {
                setCursorVariant('default');
                setCursorText('');
              }}
              style={{
                position: 'relative',
                opacity: 0,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                gap: 'clamp(2rem, 4vw, 4rem)',
                alignItems: 'center',
                padding: 'clamp(2rem, 4vw, 4rem)',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.01)',
                transition: 'border-color 0.4s, background-color 0.4s',
              }}
              onMouseOver={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-border-active)';
                el.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-border)';
                el.style.backgroundColor = 'rgba(255, 255, 255, 0.01)';
              }}
            >
              {/* Project Visual */}
              <div
                className="project-inner"
                style={{
                  position: 'relative',
                  aspectRatio: '16/10',
                  backgroundColor: 'var(--color-bg-secondary)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-border)',
                  opacity: 0,
                }}
              >
                {/* Abstract pattern instead of placeholder image */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.06,
                    backgroundImage:
                      'linear-gradient(135deg, var(--color-accent) 0%, transparent 50%), radial-gradient(circle at 70% 30%, var(--color-accent) 0%, transparent 50%)',
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: 'clamp(2rem, 5vw, 5rem)',
                      fontWeight: 700,
                      color: 'var(--color-text)',
                      opacity: 0.08,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="project-inner" style={{ opacity: 0 }}>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--color-accent)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {project.category} — {project.year}
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: 'clamp(2rem, 4vw, 4rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      marginBottom: '1rem',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="body-md"
                    style={{
                      color: 'var(--color-text-secondary)',
                      maxWidth: '500px',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="project-inner" style={{ opacity: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                    }}
                  >
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono"
                        style={{
                          fontSize: '0.55rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          padding: '0.3rem 0.6rem',
                          border: '1px solid var(--color-border)',
                          borderRadius: '2px',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details for featured projects */}
                {project.details && (
                  <div className="project-inner" style={{ opacity: 0 }}>
                    <div
                      className="label"
                      style={{ marginBottom: '0.75rem', color: 'var(--color-text-muted)' }}
                    >
                      Architecture Highlights
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                        gap: '0.4rem',
                      }}
                    >
                      {project.details.map((detail) => (
                        <div
                          key={detail}
                          className="font-mono"
                          style={{
                            fontSize: '0.6rem',
                            color: 'var(--color-text-muted)',
                            letterSpacing: '0.05em',
                            padding: '0.3rem 0',
                            borderBottom: '1px solid var(--color-border)',
                          }}
                        >
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="project-inner" style={{ display: 'flex', gap: '1rem', opacity: 0 }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      onMouseEnter={() => {
                        setCursorVariant('text');
                        setCursorText('Open');
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-secondary)',
                        transition: 'color 0.3s',
                      }}
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live`}
                      onMouseEnter={() => {
                        setCursorVariant('text');
                        setCursorText('Open');
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-secondary)',
                        transition: 'color 0.3s',
                      }}
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
