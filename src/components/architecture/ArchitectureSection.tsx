'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const architectureNodes = [
  { id: 'client', label: 'CLIENT', x: 50, y: 8 },
  { id: 'api', label: 'API GATEWAY', x: 50, y: 22 },
  { id: 'usecases', label: 'USE CASES', x: 50, y: 36 },
  { id: 'db', label: 'DATABASE', x: 25, y: 52 },
  { id: 'queue', label: 'MESSAGE QUEUE', x: 75, y: 52 },
  { id: 'workers', label: 'WORKERS', x: 75, y: 68 },
  { id: 'storage', label: 'STORAGE', x: 25, y: 68 },
  { id: 'cloud', label: 'CLOUD', x: 50, y: 84 },
];

const connections = [
  { from: 'client', to: 'api' },
  { from: 'api', to: 'usecases' },
  { from: 'usecases', to: 'db' },
  { from: 'usecases', to: 'queue' },
  { from: 'queue', to: 'workers' },
  { from: 'usecases', to: 'storage' },
  { from: 'workers', to: 'cloud' },
  { from: 'db', to: 'cloud' },
  { from: 'storage', to: 'cloud' },
];

export default function ArchitectureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(
        '.arch-title',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 75%' },
        }
      );

      // Nodes appear
      const nodes = section.querySelectorAll('.arch-node');
      gsap.fromTo(
        nodes,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'center 50%',
            scrub: 1,
          },
        }
      );

      // Lines draw
      const lines = section.querySelectorAll('.arch-line');
      lines.forEach((line) => {
        const length = (line as SVGLineElement).getTotalLength?.() || 200;
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(line, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 55%',
            end: 'center 40%',
            scrub: 1,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const getNode = (id: string) => architectureNodes.find((n) => n.id === id)!;

  return (
    <section
      ref={sectionRef}
      id="architecture"
      style={{
        position: 'relative',
        padding: 'clamp(6rem, 15vh, 12rem) 0',
        overflow: 'hidden',
      }}
    >
      {/* Blueprint grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.02,
          backgroundImage:
            'linear-gradient(rgba(200, 255, 0, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 255, 0, 0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div className="section-padding">
        {/* Title */}
        <div className="arch-title" style={{ marginBottom: 'clamp(4rem, 8vh, 8rem)', opacity: 0 }}>
          <div className="label" style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>
            System Design
          </div>
          <h2 className="heading-lg">ARCHITECTURE</h2>
          <p
            className="body-md"
            style={{ color: 'var(--color-text-secondary)', marginTop: '1rem', maxWidth: '500px' }}
          >
            How I think about building systems — from client requests to cloud infrastructure.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div
          style={{
            position: 'relative',
            maxWidth: '700px',
            margin: '0 auto',
            aspectRatio: '4/3',
          }}
        >
          {/* SVG connections */}
          <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              overflow: 'visible',
            }}
            preserveAspectRatio="xMidYMid meet"
          >
            {connections.map((conn) => {
              const from = getNode(conn.from);
              const to = getNode(conn.to);
              return (
                <line
                  key={`${conn.from}-${conn.to}`}
                  className="arch-line"
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="var(--color-accent)"
                  strokeWidth="0.15"
                  strokeOpacity="0.4"
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {architectureNodes.map((node) => (
            <div
              key={node.id}
              className="arch-node"
              style={{
                position: 'absolute',
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%) scale(0)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
                opacity: 0,
              }}
            >
              <div
                style={{
                  width: 'clamp(6px, 1vw, 10px)',
                  height: 'clamp(6px, 1vw, 10px)',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)',
                  boxShadow: '0 0 15px rgba(200, 255, 0, 0.4)',
                }}
              />
              <span
                className="font-mono"
                style={{
                  fontSize: 'clamp(0.45rem, 0.7vw, 0.65rem)',
                  letterSpacing: '0.15em',
                  color: 'var(--color-text-secondary)',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {node.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
