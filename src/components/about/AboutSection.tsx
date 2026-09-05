'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Horizontal title movement on scroll
      gsap.to(titleRef.current, {
        x: () => -(titleRef.current!.scrollWidth - window.innerWidth + 200),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 20%',
          end: 'bottom 60%',
          scrub: 1,
        },
      });

      // Content blocks animate in
      const contentBlocks = section.querySelectorAll('.about-block');
      contentBlocks.forEach((block, i) => {
        gsap.fromTo(
          block,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
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
      id="about"
      style={{
        position: 'relative',
        padding: 'clamp(6rem, 15vh, 12rem) 0',
        overflow: 'hidden',
      }}
    >
      {/* Horizontal scrolling title */}
      <div
        style={{
          overflow: 'hidden',
          marginBottom: 'clamp(3rem, 8vh, 6rem)',
        }}
      >
        <div
          ref={titleRef}
          className="font-display"
          style={{
            fontSize: 'clamp(5rem, 15vw, 18rem)',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            color: 'var(--color-text)',
            opacity: 0.06,
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            paddingLeft: '10vw',
            willChange: 'transform',
          }}
        >
          WHO I AM — WHO I AM — WHO I AM
        </div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="section-padding"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(2rem, 4vw, 4rem)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div className="about-block" style={{ opacity: 0 }}>
          <div className="about-architecture" aria-label="System architecture overview">
            <div className="about-architecture-header font-mono">
              <span>GRC / Architecture</span>
              <span><i /> Operational</span>
            </div>
            <div className="about-architecture-stage">
              <div className="about-architecture-ring about-architecture-ring-large" />
              <div className="about-architecture-ring about-architecture-ring-small" />
              <div className="about-architecture-line about-architecture-line-one" />
              <div className="about-architecture-line about-architecture-line-two" />
              <div className="about-architecture-line about-architecture-line-three" />
              <div className="about-architecture-node about-architecture-node-api">API</div>
              <div className="about-architecture-node about-architecture-node-data">DATA</div>
              <div className="about-architecture-node about-architecture-node-queue">QUEUE</div>
              <div className="about-architecture-core">
                <strong>GRC</strong>
                <span>CORE SYSTEM</span>
              </div>
            </div>
            <div className="about-architecture-footer font-mono">
              <span>USE CASES</span>
              <span>EVENTS</span>
              <span>INFRASTRUCTURE</span>
            </div>
          </div>
        </div>

        <div className="about-block" style={{ opacity: 0 }}>
          <div
            className="label"
            style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}
          >
            Background
          </div>
          <p
            className="body-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            I&apos;m a backend and full-stack developer focused on building scalable systems and
            well-architected APIs. I specialize in transforming complex business
            requirements into clean, maintainable code that performs at scale.
          </p>
        </div>

        <div className="about-block" style={{ opacity: 0 }}>
          <div
            className="label"
            style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}
          >
            Approach
          </div>
          <p
            className="body-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            I believe in use-case driven architecture, where every component has a clear
            purpose. My work combines technical depth with attention to system design —
            from database modeling to message queues and cloud infrastructure.
          </p>
        </div>

        <div className="about-block" style={{ opacity: 0 }}>
          <div
            className="label"
            style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}
          >
            Currently
          </div>
          <p
            className="body-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Currently focused on SaaS architecture, async processing patterns, and
            integrating AI capabilities into production systems. Working with
            Node.js, TypeScript, PostgreSQL, and AWS.
          </p>
        </div>
      </div>
    </section>
  );
}
