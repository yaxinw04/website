// src/pages/Unfinished.jsx

import React, { useState } from 'react';
import './Unfinished.css';
import entries from './entries';

export default function Unfinished() {
  const [currentEntry, setCurrentEntry] = useState(null);

  const getRandomEntry = () => {
    const random = entries[Math.floor(Math.random() * entries.length)];
    setCurrentEntry(random);
  };

  return (
    <div className="unfinished-container">
      <header>
        <h1>unfinished</h1>
        <p className="tagline">a space for memory, feeling, and everything undone.</p>
      </header>

      {currentEntry ? (
        <section className="entry">
          <h2>{currentEntry.title}</h2>
          {currentEntry.type === 'video' && (
            <video controls src={currentEntry.src}></video>
          )}
          {currentEntry.type === 'image' && (
            <img src={currentEntry.src} alt={currentEntry.title} />
          )}
          {currentEntry.type === 'text' && (
            <blockquote>{currentEntry.content}</blockquote>
          )}
          <p>{currentEntry.content}</p>
          <button onClick={getRandomEntry}>Tell me another</button>
        </section>
      ) : (
        <div className="oracle-start">
          <button onClick={getRandomEntry}>Tell me something I forgot</button>
        </div>
      )}
    </div>
  );
}
