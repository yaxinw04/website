import React from "react";

function YouTubeVideoEmbed() {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YkQugwnxAIw?si=ubVonvpHJ0j63Div&amp;start=53"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

function Gamedesign() {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yWy99nkmm4I?si=EkruXWZ8R94ZjraR"
        title="YouTube video player"
        frameBorder="0" // Corrected to camelCase
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen // Corrected to camelCase
      ></iframe>
    </div>
  );
}

function PromoVid() {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eM4WI_Grpx0?si=pCiNsd89CSCjiXw2"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

function WoundsAdressed() {
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/pkNKFyWrEiY?si=0mSRA3VYGbAuqZhA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
export { Gamedesign, YouTubeVideoEmbed, PromoVid, WoundsAdressed };
