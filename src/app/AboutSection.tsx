"use client";

import { motion } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      {/* Flower */}
      <motion.div
        className={styles.aboutImage1}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ y: [0, -15, 0] }}
        transition={{
          opacity: { duration: 1, ease: "easeOut" },
          scale: { duration: 1, type: "spring", bounce: 0.4 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <Image src="/3d_flower_v2.png" alt="3D Flower" width={250} height={250} className={styles.blendImage} priority />
      </motion.div>

      {/* Heart */}
      <motion.div
        className={styles.aboutImage2}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          opacity: { duration: 1, ease: "easeOut", delay: 0.2 },
          scale: { duration: 1, type: "spring", bounce: 0.4, delay: 0.2 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
        }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <Image src="/3d_love.png" alt="3D Heart" width={200} height={200} className={styles.blendImage} priority unoptimized />
      </motion.div>

      {/* Star */}
      <motion.div
        className={styles.aboutImage3}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ y: [0, -15, 0] }}
        transition={{
          opacity: { duration: 1, ease: "easeOut", delay: 0.4 },
          scale: { duration: 1, type: "spring", bounce: 0.4, delay: 0.4 },
          y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
        }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <Image src="/3d_star1.png" alt="3D Star" width={250} height={250} className={styles.blendImage} priority unoptimized />
      </motion.div>

      {/* Cloud */}
      <motion.div
        className={styles.aboutImage4}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 1, ease: "easeOut", delay: 0.6 },
          scale: { duration: 1, type: "spring", bounce: 0.4, delay: 0.6 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
        }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <Image src="/3d_cloud_v2.png" alt="3D Cloud" width={300} height={300} className={styles.blendImage} priority />
      </motion.div>

      <motion.h2 
        className={styles.aboutTitleOutline}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        ABOUT ME
      </motion.h2>
      
      <motion.div 
        className={styles.aboutContent}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className={styles.aboutText}>
          I am a <span className={styles.highlight}>software developer</span> with a passion for forging <span className={styles.highlight}>digital experiences</span>. I specialize in building 
          <span className={styles.highlight}> scalable, visually stunning applications</span> that bridge the gap between <span className={styles.highlight}>complex engineering</span> and <span className={styles.highlight}>elegant design</span>.
        </p>
      </motion.div>
    </section>
  );
}
