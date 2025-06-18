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
      const scrollY = window.scrollY;
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      const scrollRatio = scrollY / pageHeight;

      // Start fading only after 70% scroll, fully faded by 95%
      const fadeStart = 0.7;
      const fadeEnd = 0.95;

      let opacity = 1;
      if (scrollRatio > fadeStart) {
        opacity = 1 - (scrollRatio - fadeStart) / (fadeEnd - fadeStart);
        opacity = Math.max(0, Math.min(opacity, 1));
      }

      blurbRef.current.style.opacity = opacity;
      blurbRef.current.style.transform = `translateY(${Math.min(20, (1 - opacity) * 30)}px)`;
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className="unfinished-page">
        <div className="unfinished-top-banner"></div>
        <nav className="unfinished-navbar">
            <div className="unfinished-navbar-inner">
                <span className="unfinished-logo-typewriter">unfinished</span>
                <a className="unfinished-link" href="/website">↩ return</a>
            </div>
        </nav>


      <div className="unfinished-container">

        {/* Blurb */}
        <div className="unfinished-blurb" ref={blurbRef}>
          <p>
            <strong>My life is a mosaic of incompletion.</strong><br /><br />
            Everything I start drifts into something else<br />
            I used to think that made me scattered; a failure at mastery.<br />
            But looking back, I see how much I’ve gotten to experience. How many things I’ve touched, tried, felt, and begun.<br /><br />
            Maybe the beauty is in the not-finishing. <br />
            There’s something extraordinary about never calling anything complete. 
            About always curious, always wanting <i>more</i>.<br /><br />
            This is a collection of fragments of my messy, incomplete life.<br />
            a celebration of all that remains <em>unfinished</em>.
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
        <div className="unfinished-bottom-banner"></div>
    </div>
  );
}
