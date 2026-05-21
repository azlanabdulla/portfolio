import styles from "./page.module.css";
import Link from "next/link";
import HeroImage from "./HeroImage";
import Marquee from "./Marquee";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import MusicSection from "./MusicSection";
import WebDesignSection from "./WebDesignSection";

import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <Link href="#home">HOME</Link>
          <Link href="#about">ABOUT</Link>
          <Link href="#projects">PROJECTS</Link>
          <Link href="#contact">CONTACT</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        {/* HUGE Background Text */}
        <h1 className={styles.hugeText}>
          I&apos;M AZLAN
        </h1>

        {/* This acts as the space for the center element */}
        <div className={styles.heroContent}>
          {/* Left Text */}
          <div className={styles.leftText}>
            <p>
              TURNING COMPLEX PROBLEMS INTO BEAUTIFUL, HIGH-PERFORMANCE WEB EXPERIENCES 🚀
            </p>
          </div>

          {/* Center Image Space */}
          <div className={styles.centerSpace}>
            <HeroImage />
          </div>

          {/* Right Button */}
          <div className={styles.rightContent}>
            <Link href="#contact">
              <button className={styles.contactBtn}>
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Animated Scrolling Marquee */}
      <Marquee />

      {/* About Section */}
      <AboutSection />

      {/* Sticky Stacking Projects Section */}
      <ProjectsSection />

      {/* 3D Music Player Section */}
      <MusicSection />

      {/* Web Design Video Previews Section */}
      <WebDesignSection />

      {/* Keep in Touch Section */}
      <ContactSection />
    </main>
  );
}
