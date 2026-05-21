"use client";

import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPython, 
  SiFlutter 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import styles from "./marquee.module.css";

export default function Marquee() {
  const techStack = [
    { name: "REACT", icon: <SiReact size={33} className={styles.icon} /> },
    { name: "NEXT.JS", icon: <SiNextdotjs size={33} className={styles.icon} /> },
    { name: "TYPESCRIPT", icon: <SiTypescript size={33} className={styles.icon} /> },
    { name: "NODE.JS", icon: <SiNodedotjs size={33} className={styles.icon} /> },
    { name: "EXPRESS", icon: <SiExpress size={33} className={styles.icon} /> },
    { name: "MONGODB", icon: <SiMongodb size={33} className={styles.icon} /> },
    { name: "PYTHON", icon: <SiPython size={33} className={styles.icon} /> },
    { name: "JAVA", icon: <FaJava size={33} className={styles.icon} /> },
    { name: "FLUTTER", icon: <SiFlutter size={33} className={styles.icon} /> }
  ];

  return (
    <div className={styles.marqueeSection}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeBand}>
          <div className={styles.marqueeContent}>
            <div className={styles.marqueeTrack}>
              {Array(3).fill(0).map((_, i) => (
                <div key={`t1-${i}`} className={styles.itemGroup}>
                  {techStack.map((tech, j) => (
                    <span key={`tech-${i}-${j}`} className={styles.textItem}>
                      {tech.name} {tech.icon}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <div className={styles.marqueeTrack}>
              {Array(3).fill(0).map((_, i) => (
                <div key={`t2-${i}`} className={styles.itemGroup}>
                  {techStack.map((tech, j) => (
                    <span key={`tech-2-${i}-${j}`} className={styles.textItem}>
                      {tech.name} {tech.icon}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
