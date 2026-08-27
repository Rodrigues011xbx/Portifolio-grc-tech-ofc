'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCursor } from '@/components/ui/CustomCursor';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const { setCursorVariant, setCursorText } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline();
      tl.to(menuRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.6,
        ease: 'power4.inOut',
      });
      tl.fromTo(
        '.menu-item',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power3.out',
        },
        '-=0.3'
      );
    } else {
      document.body.style.overflow = '';
      gsap.to(menuRef.current, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.5,
        ease: 'power4.inOut',
      });
    }
  }, [isOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    []
  );

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          padding: isScrolled ? '1rem 0' : '1.5rem 0',
          transition: 'padding 0.4s var(--ease-out-expo), backdrop-filter 0.4s',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          backgroundColor: isScrolled ? 'var(--color-nav-bg)' : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <div
          className="section-padding"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="font-display"
            onClick={(e) => handleNavClick(e, '#hero')}
            onMouseEnter={() => {
              setCursorVariant('hover');
              setCursorText('');
            }}
            onMouseLeave={() => {
              setCursorVariant('default');
              setCursorText('');
            }}
            style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--color-text)',
            }}
          >
            GRC
          </a>

          {/* Right Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {/* Desktop Nav */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.5rem',
              }}
              className="nav-desktop"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onMouseEnter={() => {
                    setCursorVariant('hover');
                  }}
                  onMouseLeave={() => {
                    setCursorVariant('default');
                  }}
                  className="font-mono"
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-secondary)',
                    transition: 'color 0.3s',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, { color: 'var(--color-text)', duration: 0.3 });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, { color: 'var(--color-text-secondary)', duration: 0.3 });
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            <ThemeToggle />

            {/* Burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="nav-burger"
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: isOpen ? 0 : 5,
                width: 28,
                height: 20,
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: isOpen ? 28 : 28,
                  height: 1,
                  backgroundColor: 'var(--color-text)',
                  transition: 'all 0.3s var(--ease-out-expo)',
                  transform: isOpen ? 'rotate(45deg) translateY(0.5px)' : 'none',
                  transformOrigin: 'center',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: isOpen ? 28 : 18,
                  height: 1,
                  backgroundColor: 'var(--color-text)',
                  transition: 'all 0.3s var(--ease-out-expo)',
                  transform: isOpen ? 'rotate(-45deg) translateY(-0.5px)' : 'none',
                  transformOrigin: 'center',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          backgroundColor: 'var(--color-bg)',
          clipPath: 'inset(0% 0% 100% 0%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          ref={menuItemsRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="menu-item font-display"
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                fontSize: 'clamp(2rem, 8vw, 5rem)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: 'var(--color-text)',
                opacity: 0,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-burger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
