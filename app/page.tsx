'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [time, setTime] = useState<string>('');
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/Amsterdam',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const key = e.key.toLowerCase();
      if (key === 'g') {
        window.open('https://github.com/martimgalamba7', '_blank', 'noopener,noreferrer');
      } else if (key === 'c') {
        window.open('/CV_MartimGalamba.pdf', '_blank', 'noopener,noreferrer');
      } else if (key === 'l') {
        window.open('https://www.linkedin.com/in/martimgalamba7/', '_blank', 'noopener,noreferrer');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="portfolio-wrapper">
      {/* Dynamic Cursor Ambient Illumination */}
      <div
        className="ambient-spotlight"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      />

      {/* Subtle Background Grid Texture */}
      <div className="bg-subtle-grid" />

      {/* Top Header */}
      <header className="portfolio-header">
        <div className="brand-identity">
          <span className="brand-dot" />
          <span className="brand-code">MG-2026</span>
        </div>

        <div className="live-status">
          <span className="status-indicator" />
          <span className="status-location">Eindhoven, NL</span>
          <span className="status-separator">•</span>
          <span className="status-time">{time || '16:00:00'} CET</span>
        </div>
      </header>

      {/* Center Hero Content */}
      <main className="portfolio-main">
        <div className="hero-section">
          <h1 className="hero-name">
            Martim Galamba
          </h1>

          <p className="hero-tagline">
            Software & AI Engineering <span className="tagline-bullet">•</span> Fontys ICT
          </p>

          <p className="hero-bio">
            Building modern web architectures, intelligent systems, and scalable student community tools.
          </p>

          {/* Clean Interactive Action Links */}
          <nav className="links-group" aria-label="Personal Links">
            <a
              href="https://github.com/martimgalamba7"
              target="_blank"
              rel="noopener noreferrer"
              className="action-card"
            >
              <div className="card-left">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <div className="card-texts">
                  <span className="card-title">GitHub</span>
                  <span className="card-sub">@martimgalamba7</span>
                </div>
              </div>
              <span className="card-keyhint">G</span>
            </a>

            <a
              href="/CV_MartimGalamba.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="action-card"
            >
              <div className="card-left">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <div className="card-texts">
                  <span className="card-title">Curriculum Vitae</span>
                  <span className="card-sub">PDF Document</span>
                </div>
              </div>
              <span className="card-keyhint">C</span>
            </a>

            <a
              href="https://www.linkedin.com/in/martimgalamba7/"
              target="_blank"
              rel="noopener noreferrer"
              className="action-card"
            >
              <div className="card-left">
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <div className="card-texts">
                  <span className="card-title">LinkedIn</span>
                  <span className="card-sub">Professional Profile</span>
                </div>
              </div>
              <span className="card-keyhint">L</span>
            </a>
          </nav>
        </div>
      </main>

      {/* Clean Modern Footer */}
      <footer className="portfolio-footer">
        <span className="footer-copyright">© 2026 Martim Ferreira Galamba</span>
        <span className="footer-meta">Fontys University of Applied Sciences</span>
      </footer>
    </div>
  );
}
