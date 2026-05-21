"use client";

import styles from "./projects.module.css";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    { 
      name: "ScaarVault", 
      type: "CLOUD PLATFORM", 
      desc: "A robust cloud storage solution with admin panels and real-time activity logs. Engineered for secure and scalable personal data management.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/azlanabdulla/ScaarVault" 
    },
    { 
      name: "Aethera Search", 
      type: "AI BROWSER", 
      desc: "A hybrid search engine and browser application featuring a sophisticated local data fallback mechanism and intelligent crawler.", 
      tech: ["Python", "React", "Elasticsearch"],
      link: "https://github.com/azlanabdulla/Aethera-Search-Engine" 
    },
    { 
      name: "NOVA Chatbot", 
      type: "AI ASSISTANT", 
      desc: "Gemini-powered Chatbot with intelligent contextual understanding, featuring a sleek terminal-style user interface.", 
      tech: ["Next.js", "Gemini API", "TypeScript"],
      link: "https://github.com/azlanabdulla/nova-gemini-chatbot" 
    },
    { 
      name: "Aster-Lend", 
      type: "MOBILE APP", 
      desc: "A cross-platform mobile application built with Flutter and Dart, focused on providing intuitive financial lending tracking.", 
      tech: ["Flutter", "Dart", "Firebase"],
      link: "https://github.com/azlanabdulla/Aster-Lend" 
    }
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.sectionTitle}>PROJECTS</h2>
        
        <div className={styles.stackArea}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={styles.projectCard} 
              style={{ top: `calc(10vh + ${index * 120}px)` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardInfo}>
                  <span className={styles.projectNumber}>0{index + 1}</span>
                  <div className={styles.clientInfo}>
                    <span className={styles.clientLabel}>{project.type}</span>
                    <span className={styles.clientName}>{project.name}</span>
                  </div>
                </div>
                <Link href={project.link} target="_blank" className={styles.liveBtn}>
                  VIEW PROJECT
                </Link>
              </div>
              
              <div className={styles.cardBody}>
                 <p className={styles.projectDesc}>{project.desc}</p>
                 <div className={styles.techStack}>
                   {project.tech.map((t, i) => (
                     <span key={i} className={styles.techTag}>{t}</span>
                   ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
