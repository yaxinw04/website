// src/pages/Unfinished.jsx

import React, { useState, useEffect, useRef } from 'react';
import './Unfinished.css';
import entries from './entries';

export default function Unfinished() {
  const [currentEntry, setCurrentEntry] = useState(null);
  const blurbRef = useRef();

  const getRandomEntry = () => {
    const random = entries[Math.floor(Math.random() * entries.length)];
    setCurrentEntry(random);
    setTimeout(() => {
      document.querySelector('.entry')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Blurb scroll-fade animation
  useEffect(() => {
  const handleScroll = () => {
    if (blurbRef.current) {
      const blurbTop = blurbRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const scrollRatio = blurbTop / windowHeight;

      const opacity = Math.max(0, Math.min(1, scrollRatio * 2)); // fade faster
      blurbRef.current.style.opacity = opacity;
      blurbRef.current.style.transform = `translateY(${Math.min(40, (1 - opacity) * 60)}px)`;
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className="unfinished-page">
      <nav className="unfinished-navbar">
        <div className="unfinished-logo" style={{ textAlign: 'center', width: '100%' }}>
          unfinished
        </div>
        <a className="unfinished-link" href="/website">↩ return</a>
      </nav>

      <div className="unfinished-container">

        {/* Blurb */}
        <div className="unfinished-blurb" ref={blurbRef}>
          <p>
            <strong>My life is a mosaic of incompletion.</strong><br />
            Everything I start drifts into something else — a new passion, a new obsession, a new chapter.<br />
            I used to think that made me scattered, unrooted, a failure at mastery.<br />
            But looking back, I see how much I’ve lived — how many things I’ve touched, tried, felt, and begun.<br /><br />
            Maybe the beauty is in the not-finishing. In the becoming.<br />
            There’s something quietly extraordinary about never calling anything complete —<br />
            about always reaching, always curious, always becoming more.<br /><br />
            This is a collection of fragments, flickers, and forgotten corners —<br />
            not a record of endings,<br />
            but a celebration of all that remains <em>unfinished</em>.
          </p>
        </div>

        <header>
          <p className="tagline">a space for memory, feeling, and everything undone.</p>
        </header>

        {/* Entry viewer */}
        {currentEntry ? (
          <section className="entry">
            <h2>{currentEntry.title}</h2>
            {currentEntry.type === 'video' && (
              <video controls src={currentEntry.src} />
            )}
            {currentEntry.type === 'image' && (
              <img src={currentEntry.src} alt={currentEntry.title} />
            )}
            {currentEntry.type === 'text' && (
              <blockquote>{currentEntry.content}</blockquote>
            )}
            {currentEntry.type !== 'text' && <p>{currentEntry.content}</p>}

            <div className="entry-button-container">
              <button onClick={getRandomEntry}>Tell me another</button>
            </div>
          </section>
        ) : (
          <div className="oracle-start">
            <button onClick={getRandomEntry}>
              Tell me something I don't remember
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
