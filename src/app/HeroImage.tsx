"use client";

import Image from "next/image";
import { useState, useRef, MouseEvent } from "react";
import styles from "./page.module.css";

export default function HeroImage() {
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the center of the container
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Move slightly towards the mouse pointer (max 25px in any direction)
    const translateX = (x / (rect.width / 2)) * 25; 
    const translateY = (y / (rect.height / 2)) * 25; 

    setTranslate({ x: translateX, y: translateY });
  };

  const handleMouseLeave = () => {
    setTranslate({ x: 0, y: 0 });
  };

  return (
    <div className={styles.imageFloatingWrapper}>
      <div 
        className={styles.imageInteractiveWrapper}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${translate.x}px, ${translate.y}px) scale(1.15)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <Image 
          src="/azlan.png" 
          alt="Azlan" 
          fill 
          className={styles.heroImage}
          priority
        />
      </div>
    </div>
  );
}
