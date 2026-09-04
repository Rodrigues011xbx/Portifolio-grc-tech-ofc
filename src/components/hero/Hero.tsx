'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const metaLeftRef = useRef<HTMLDivElement>(null);
  const metaRightRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const bgGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Entrance animation
      const entranceTl = gsap.timeline({ delay: 3 });

      entranceTl.fromTo(
        '.hero-visual-wrapper',
        { y: 80, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
        }
      );

      entranceTl.fromTo(
        subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );

      entranceTl.fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.5'
      );

      entranceTl.fromTo(
        [metaLeftRef.current, metaRightRef.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
        '-=0.4'
      );

      entranceTl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      );

      // Scroll-driven animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=1500',
          scrub: 1,
          pin: true,
        },
      });

      // Visual shrinks and moves up
      scrollTl.fromTo('.hero-visual-wrapper',
        { scale: 1, y: 0, opacity: 1 },
        {
          scale: 0.4,
          y: -100,
          opacity: 0,
          stagger: 0.05,
          ease: 'none',
          immediateRender: false,
        }, 0);

      // Subtitle fades
      scrollTl.fromTo(subtitleRef.current,
        { scale: 1, y: 0, opacity: 1 },
        {
          y: -60,
          opacity: 0,
          scale: 0.9,
          ease: 'none',
          immediateRender: false,
        }, 0);

      // Tagline moves up and fades
      scrollTl.fromTo(taglineRef.current,
        { y: 0, opacity: 1 },
        {
          y: -80,
          opacity: 0,
          ease: 'none',
          immediateRender: false,
        }, 0.1);

      // Meta elements fade
      scrollTl.fromTo([metaLeftRef.current, metaRightRef.current],
        { opacity: 1 },
        {
          opacity: 0,
          ease: 'none',
          immediateRender: false,
        }, 0);

      // Background grid scales
      scrollTl.fromTo(bgGridRef.current,
        { scale: 1, opacity: 0.03 },
        {
          scale: 1.5,
          opacity: 0,
          ease: 'none',
          immediateRender: false,
        }, 0);

      // Scroll indicator fades early
      scrollTl.fromTo(scrollIndicatorRef.current,
        { y: 0, opacity: 1 },
        {
          opacity: 0,
          y: -20,
          ease: 'none',
          duration: 0.3,
          immediateRender: false,
        }, 0);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background grid with perspective */}
      <div
        ref={bgGridRef}
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            'linear-gradient(rgba(200, 255, 0, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 255, 0, 0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: 'perspective(800px) rotateX(60deg)',
          transformOrigin: 'center 120%',
        }}
      />

      {/* Radial gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, var(--color-bg) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Meta info - Left */}
      <div
        ref={metaLeftRef}
        className="font-mono"
        style={{
          position: 'absolute',
          left: 'clamp(1.5rem, 5vw, 6rem)',
          bottom: 'clamp(2rem, 5vh, 5rem)',
          fontSize: '0.6rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          opacity: 0,
        }}
      >
        <span>Backend Engineer</span>
        <span style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
          Available for Select Projects
        </span>
      </div>

      {/* Meta info - Right */}
      <div
        ref={metaRightRef}
        className="font-mono"
        style={{
          position: 'absolute',
          right: 'clamp(1.5rem, 5vw, 6rem)',
          bottom: 'clamp(2rem, 5vh, 5rem)',
          fontSize: '0.6rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-text-muted)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.3rem',
          textAlign: 'right',
          opacity: 0,
        }}
      >
        <span>Node.js</span>
        <span>TypeScript</span>
        <span>AWS</span>
        <span>PostgreSQL</span>
      </div>

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Animated system visual */}
        <div
          className="hero-visual-wrapper"
          style={{ width: 'min(90vw, 900px)', willChange: 'transform, opacity' }}
        >
          <div className="hero-visual">
            <div className="hero-visual-header font-mono">
              <span>GRC / SYSTEMS LAB</span>
              <span className="hero-live-status"><i /> LIVE / 01</span>
            </div>
            <div className="hero-visual-stage" aria-label="Animated visualization of a scalable digital system">
              <div className="hero-visual-grid" />
              <div className="hero-scanline" />
              <div className="hero-connection hero-connection-one" />
              <div className="hero-connection hero-connection-two" />
              <div className="hero-connection hero-connection-three" />
              <div className="hero-node hero-node-one"><span>API</span></div>
              <div className="hero-node hero-node-two"><span>DATA</span></div>
              <div className="hero-node hero-node-three"><span>EDGE</span></div>
              <div className="hero-node hero-node-core"><span>CORE</span></div>
              <div className="hero-packet hero-packet-one" />
              <div className="hero-packet hero-packet-two" />
              <div className="hero-packet hero-packet-three" />
              <div className="hero-visual-readout font-mono">
                <span>REQUESTS <b>24.8K</b></span>
                <span>UPTIME <b>99.99%</b></span>
              </div>
            </div>
            <div className="hero-visual-footer font-mono">
              <span>NODE.JS / TYPESCRIPT / AWS</span>
              <span>BUILDING SYSTEMS THAT SCALE</span>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          className="font-mono"
          style={{
            fontSize: 'clamp(0.55rem, 0.8vw, 0.75rem)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            marginTop: '1rem',
            opacity: 0,
          }}
        >
          Backend / Full-Stack Developer
        </div>

        {/* Tagline */}
        <div
          ref={taglineRef}
          className="font-display"
          style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.3rem)',
            fontWeight: 300,
            color: 'var(--color-text-secondary)',
            letterSpacing: '0.05em',
            marginTop: '0.5rem',
            opacity: 0,
          }}
        >
          Building systems that scale.
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        style={{
          position: 'absolute',
          bottom: 'clamp(2rem, 4vh, 4rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
          opacity: 0,
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            backgroundColor: 'var(--color-text-muted)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '40%',
              backgroundColor: 'var(--color-accent)',
              animation: 'scrollLine 1.5s ease-in-out infinite',
            }}
          />
        </div>
        <style jsx>{`
          @keyframes scrollLine {
            0% { top: -40%; }
            100% { top: 100%; }
          }
        `}</style>
      </div>
    </section>
  );
}
