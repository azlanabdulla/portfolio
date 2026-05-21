"use client";

import styles from "./shapesMarquee.module.css";

const Defs = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="gradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
      <linearGradient id="gradPink" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  </svg>
);

interface ShapeItem {
  type: string;
  color: string;
  size: number;
  y: number;
  rotate?: number;
}

const renderShape = (item: ShapeItem, i: number) => {
  const scale = 1.0;
  const size = item.size * scale;
  const y = item.y * scale;
  const commonStyle = { transform: `translateY(${y}px)` };
  
  switch(item.type) {
    case 'circle':
      return (
        <div key={i} className={styles.shapeWrapper} style={commonStyle}>
          <div className={styles.animatePulse} style={{ animationDelay: `-${i * 0.7}s` }}>
            <svg width={size} height={size} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" fill={item.color} />
            </svg>
          </div>
        </div>
      );
    case 'pill':
      return (
        <div key={i} className={styles.shapeWrapper} style={{ ...commonStyle, transform: `translateY(${y}px) rotate(${item.rotate}deg)` }}>
          <div className={styles.animateWobble} style={{ animationDelay: `-${i * 0.5}s` }}>
            <svg width={size * 1.5} height={size * 0.75} viewBox="0 0 150 75">
              <rect width="150" height="75" rx="37.5" fill={item.color} />
            </svg>
          </div>
        </div>
      );
    case 'spark':
      return (
        <div key={i} className={styles.shapeWrapper} style={commonStyle}>
          <div className={styles.animateSpinSlow} style={{ animationDelay: `-${i * 0.3}s` }}>
            <svg width={size} height={size} viewBox="0 0 100 100">
              <path d="M50 0 Q50 50 100 50 Q50 50 50 100 Q50 50 0 50 Q50 50 50 0 Z" fill={item.color} />
            </svg>
          </div>
        </div>
      );
    case 'starburst':
      return (
        <div key={i} className={styles.shapeWrapper} style={commonStyle}>
          <div className={styles.animateSpin} style={{ animationDelay: `-${i * 0.8}s` }}>
            <svg width={size} height={size} viewBox="0 0 100 100">
              {/* Soft rounded 8-point star approximating the image */}
              <path d="M50 5 L58 35 L88 28 L68 50 L88 72 L58 65 L50 95 L42 65 L12 72 L32 50 L12 28 L42 35 Z" fill={item.color} stroke={item.color} strokeWidth="6" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      );
  }
};

export default function ShapesMarquee({ 
  reverse = false, 
  tilt = 0 
}: { 
  reverse?: boolean; 
  tilt?: number; 
}) {
  const shapesPattern = [
    { type: 'circle', color: '#10b981', size: 80, y: -20 },
    { type: 'starburst', color: 'url(#gradCyan)', size: 100, y: 15 },
    { type: 'pill', color: 'url(#gradBlue)', size: 90, rotate: -45, y: -10 },
    { type: 'circle', color: '#fbcfe8', size: 60, y: 25 },
    { type: 'starburst', color: 'url(#gradBlue)', size: 110, y: -15 },
    { type: 'circle', color: '#3f3f46', size: 70, y: 10 },
    { type: 'circle', color: '#10b981', size: 50, y: -30 },
    { type: 'circle', color: '#2dd4bf', size: 90, y: 15 },
    { type: 'circle', color: '#fde047', size: 60, y: -20 },
    { type: 'spark', color: 'url(#gradCyan)', size: 90, y: 10 },
    { type: 'circle', color: '#fbcfe8', size: 80, y: -10 },
    { type: 'pill', color: '#38bdf8', size: 80, rotate: 0, y: 20 },
    { type: 'circle', color: '#3b82f6', size: 90, y: -15 },
    { type: 'starburst', color: '#38bdf8', size: 90, y: 15 },
    { type: 'spark', color: 'url(#gradBlue)', size: 80, y: -20 },
    { type: 'circle', color: '#10b981', size: 60, y: 20 },
    { type: 'pill', color: 'url(#gradBlue)', size: 90, rotate: -20, y: -10 },
    { type: 'circle', color: '#3f3f46', size: 70, y: 30 },
    { type: 'starburst', color: 'url(#gradBlue)', size: 100, y: -15 },
    { type: 'circle', color: '#fde047', size: 70, y: 15 },
    { type: 'circle', color: '#fde047', size: 80, y: -5 },
    { type: 'circle', color: '#fbcfe8', size: 90, y: 25 },
    { type: 'circle', color: '#10b981', size: 70, y: -10 },
    { type: 'spark', color: '#38bdf8', size: 90, y: 20 },
    { type: 'pill', color: '#2dd4bf', size: 50, rotate: 0, y: -20 },
    { type: 'pill', color: '#3b82f6', size: 50, rotate: -45, y: 20 },
  ];

  // Repeat pattern to ensure a seamless infinite scroll across all monitors
  const repeatedPattern = Array(6).fill(shapesPattern).flat();

  return (
    <div 
      className={styles.marqueeContainer} 
      style={{ 
        transform: `rotate(${tilt}deg)`,
        width: '110vw',
        marginLeft: '-5vw'
      }}
    >
      <Defs />
      <div className={reverse ? styles.scrollReverse : styles.scrollShapes}>
        {repeatedPattern.map((item, index) => renderShape(item, index))}
      </div>
      <div className={reverse ? styles.scrollReverse : styles.scrollShapes}>
        {repeatedPattern.map((item, index) => renderShape(item, index + repeatedPattern.length))}
      </div>
    </div>
  );
}
