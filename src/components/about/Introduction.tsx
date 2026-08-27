'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    const ctx = gsap.context(() => {
      // Split text into words
      const content = text.textContent || '';
      text.innerHTML = content
        .split(' ')
        .map(
          (word) =>
            `<span class="intro-word" style="display:inline-block;opacity:0.08;filter:blur(6px);transform:translateY(20px);transition:none;margin-right:0.05em">${word}</span>`
        )
        .join(' ');

      const words = text.querySelectorAll('.intro-word');

      gsap.to(words, {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          end: 'bottom 50%',
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(4rem, 10vh, 8rem) 0',
      }}
    >
      <div
        className="section-padding"
        style={{
          maxWidth: '55ch',
          textAlign: 'center',
        }}
      >
        <p
          ref={textRef}
          className="font-display"
          style={{
            fontSize: 'clamp(1.4rem, 3vw, 2.6rem)',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-0.01em',
            color: 'var(--color-text)',
          }}
        >
          Eu construo sistemas, APIs e produtos digitais focados em performance, escalabilidade e arquitetura.
        </p>
      </div>
    </section>
  );
}
