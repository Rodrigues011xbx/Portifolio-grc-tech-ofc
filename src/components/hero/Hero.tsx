'use client';

import { useCallback, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useCursor } from '@/components/ui/CustomCursor';
import { scrollToSection } from '@/hooks/useSmoothScroll';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Work / Portfolio', href: '#projects' },
  { label: 'Blog', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const { setCursorVariant } = useCursor();

  const goTo = useCallback((href: string) => {
    scrollToSection(href);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      if (!reduced) {
        const entranceTl = gsap.timeline({ delay: 2.9 });

        entranceTl.fromTo('.editorial-nav, .editorial-name', { opacity: 0, y: -18 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' });
        entranceTl.fromTo('.editorial-copy, .editorial-socials, .editorial-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out' }, '-=0.35');
      }

      gsap.to(copyRef.current, {
        y: -30,
        opacity: 0.65,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onLeaveBack: () => {
            gsap.to(copyRef.current, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', overwrite: true });
          },
        },
      });

      gsap.to(visualRef.current, {
        y: -50,
        opacity: 0.75,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onLeaveBack: () => {
            gsap.to(visualRef.current, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', overwrite: true });
          },
        },
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="hero hero--editorial">
      <div className="editorial-frame">
        <nav className="editorial-nav" aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} className={index === 0 ? 'is-active' : ''} onClick={(event) => { event.preventDefault(); goTo(item.href); }}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="editorial-stage">
          <div className="editorial-name" aria-hidden="true">
            <span>Gabriel</span>
            <span>Rodrigues</span>
          </div>

          <div ref={copyRef} className="editorial-copy">
            <p>I create backend systems that blend precision with scale, crafting APIs and products that stay fast under real load.</p>
            <div className="editorial-socials" aria-label="Social links">
              <a href="#contact" aria-label="X profile">X</a>
              <a href="#contact" aria-label="LinkedIn profile">in</a>
              <a href="#contact" aria-label="GitHub profile">GH</a>
            </div>
          </div>

          <div ref={visualRef} className="editorial-portrait-wrap">
            <div className="editorial-portrait-ring" />
            <Image className="editorial-portrait" src="/profile.png" alt="Gabriel Rodrigues Calixto" width={800} height={800} priority />
          </div>

          <div className="editorial-pitch">
            <p>Backend architecture with human judgment: systems that are clear, resilient, and ready to grow.</p>
            <button type="button" className="editorial-cta" onClick={() => goTo('#contact')} onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}>
              Let&apos;s talk <ArrowUpRight size={16} strokeWidth={2} />
            </button>
          </div>

          <div className="editorial-scroll" aria-hidden="true">
            <span>Scroll</span>
            <ArrowDownRight size={18} strokeWidth={1.4} />
          </div>
        </div>
      </div>
    </section>
  );
}
