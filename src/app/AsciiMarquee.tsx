"use client";

import { useEffect, useState } from "react";
import styles from "./asciiMarquee.module.css";

export default function AsciiMarquee() {
  const [waveText, setWaveText] = useState("");
  // Density characters to create a fluid 3D-like wave
  const chars = [" ", "░", "▒", "▓", "█"]; 

  useEffect(() => {
    let frame = 0;
    const width = 200; // Enough characters to span ultra-wide monitors

    const interval = setInterval(() => {
      let newText = "";
      for (let i = 0; i < width; i++) {
        // Create overlapping sine waves for organic fluid movement
        const wave1 = Math.sin((i * 0.1) + (frame * 0.15));
        const wave2 = Math.sin((i * 0.05) - (frame * 0.1));
        const combined = (wave1 + wave2) / 2; // Range -1 to 1

        // Map sine output to character array index (0 to 4)
        const normalized = (combined + 1) / 2; // Range 0 to 1
        const charIndex = Math.floor(normalized * (chars.length - 0.01));
        
        newText += chars[charIndex];
      }
      setWaveText(newText);
      frame++;
    }, 50); // Runs 20 times a second for smooth animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.animatedAscii}>
        {waveText}
      </div>
    </div>
  );
}
