'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useCursor } from '@/components/ui/CustomCursor';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { setCursorVariant, setCursorText } = useCursor();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: 20, height: 20 }} />;
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      onMouseEnter={() => setCursorVariant('hover')}
      onMouseLeave={() => setCursorVariant('default')}
      aria-label="Toggle theme"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text-secondary)',
        transition: 'color 0.3s',
        background: 'none',
        border: 'none',
        cursor: 'none',
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLElement).style.color = 'var(--color-text)';
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)';
      }}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
