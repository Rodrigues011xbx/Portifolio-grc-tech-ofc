'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '@/data/skills';
import { useCursor } from '@/components/ui/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

const sizeMap: Record<string, string> = {
  'Node.js': 'clamp(2rem, 5vw, 5rem)',
  'TypeScript': 'clamp(2rem, 5vw, 5rem)',
  'PostgreSQL': 'clamp(1.6rem, 3.5vw, 3.5rem)',
  'AWS': 'clamp(2.2rem, 6vw, 6rem)',
  'Docker': 'clamp(1.6rem, 3.5vw, 3.5rem)',
  'Kubernetes': 'clamp(1.4rem, 3vw, 3rem)',
  'RabbitMQ': 'clamp(1.4rem, 3vw, 3rem)',
  'React': 'clamp(1.3rem, 2.5vw, 2.5rem)',
  'Next.js': 'clamp(1.3rem, 2.5vw, 2.5rem)',
  'Express': 'clamp(1.5rem, 3vw, 3rem)',
  'JavaScript': 'clamp(1.5rem, 3vw, 3rem)',
  'Knex': 'clamp(1.2rem, 2vw, 2rem)',
  'MinIO': 'clamp(1.2rem, 2vw, 2rem)',
  'REST APIs': 'clamp(1.4rem, 2.8vw, 2.8rem)',
  'Three.js': 'clamp(1rem, 1.8vw, 1.8rem)',
  'Software Architecture': 'clamp(1.3rem, 2.5vw, 2.5rem)',
  'Use Cases Architecture': 'clamp(1.1rem, 2vw, 2rem)',
  'SaaS Systems': 'clamp(1.3rem, 2.5vw, 2.5rem)',
  'Observability': 'clamp(1.1rem, 2vw, 2rem)',
  'Automated Testing': 'clamp(1.1rem, 2vw, 2rem)',
  'AI / LLMs': 'clamp(1.5rem, 3vw, 3rem)',
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { setCursorVariant, setCursorText } = useCursor();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(
        '.skills-title',
        { y: 60, opacity: 0 },
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

      // Each skill word
      const words = section.querySelectorAll('.skill-word');
      words.forEach((word, i) => {
        gsap.fromTo(
          word,
          {
            y: gsap.utils.random(40, 100),
            opacity: 0,
            scale: gsap.utils.random(0.6, 0.9),
            rotation: gsap.utils.random(-5, 5),
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 65%',
              end: 'center 50%',
              scrub: 1,
            },
            delay: i * 0.02,
          }
        );
      });

      // Parallax movement on each word based on scroll
      words.forEach((word) => {
        const speed = gsap.utils.random(-30, 30);
        gsap.to(word, {
          y: speed,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{
        position: 'relative',
        padding: 'clamp(6rem, 15vh, 12rem) 0',
        overflow: 'hidden',
      }}
    >
      <div className="section-padding">
        {/* Title */}
        <div className="skills-title" style={{ marginBottom: 'clamp(4rem, 8vh, 8rem)', opacity: 0 }}>
          <div className="label" style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>
            Tech Stack
          </div>
          <h2 className="heading-lg">SKILLS</h2>
        </div>

        {/* Technology Universe */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(1rem, 3vw, 3rem)',
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '2rem 0',
          }}
        >
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="skill-word font-display"
              onMouseEnter={() => {
                setCursorVariant('text');
                setCursorText(skill.category);
              }}
              onMouseLeave={() => {
                setCursorVariant('default');
                setCursorText('');
              }}
              style={{
                fontSize: sizeMap[skill.name] || 'clamp(1.2rem, 2.5vw, 2.5rem)',
                fontWeight: 600,
                color: 'var(--color-text)',
                opacity: 0,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                transition: 'color 0.3s, text-shadow 0.3s',
                cursor: 'none',
                willChange: 'transform',
                lineHeight: 1.2,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--color-accent)';
                e.currentTarget.style.textShadow = '0 0 40px rgba(200, 255, 0, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--color-text)';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
