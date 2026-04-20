'use client';

import { useState, useEffect } from 'react';

const roles = [
  'Aspiring Software Engineer',
  'Aspiring AI Engineer',
  'Tech Enthusiast',
  'Problem Solver'
];

export default function ComingSoon() {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setIsDeleting(true);
          setTypingSpeed(2000); // Wait before starting to delete
        } else {
          setTypingSpeed(100);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <main className="container">
      {/* Background elements */}
      <div className="glow-blob" style={{ top: '10%', left: '10%' }}></div>
      <div className="glow-blob" style={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)', opacity: 0.05 }}></div>

      <div className="content-wrapper">
        <div className="fade-in header">
          <span className="badge">Website coming soon</span>

          <h1 className="text-gradient name-title">
            Martim Galamba
          </h1>

          <div className="mono role-container">
            <span className="muted">{'< '}</span>
            <span style={{ color: 'var(--text-primary)' }}>{displayText}</span>
            <span className="cursor"></span>
            <span className="muted">{' />'}</span>
          </div>

        </div>

        <div className="social-links-container fade-in-up">
          <div className="social-links">
            <a href="https://github.com/martimgalamba7" target="_blank" rel="noopener noreferrer" className="social-link mono">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
            <a href="/CV_MartimGalamba.pdf" target="_blank" rel="noopener noreferrer" className="social-link mono">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              CV / Resume
            </a>
            <a href="https://www.linkedin.com/in/martimgalamba7/" target="_blank" rel="noopener noreferrer" className="social-link mono">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer mono">
        <div className="copyright">
          © 2026 Martim Galamba
        </div>
      </div>
    </main>
  );
}
