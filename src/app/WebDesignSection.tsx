import styles from "./webdesign.module.css";

const videos = [
  "https://raw.githubusercontent.com/azlanabdulla/Assets_Links/main/preview/ABSTRACT.mp4",
  "https://raw.githubusercontent.com/azlanabdulla/Assets_Links/main/preview/BarbarianKing.mp4",
  "https://raw.githubusercontent.com/azlanabdulla/Assets_Links/main/preview/FISH.mp4",
  "https://raw.githubusercontent.com/azlanabdulla/Assets_Links/main/preview/FURRY.mp4",
  "https://raw.githubusercontent.com/azlanabdulla/Assets_Links/main/preview/OBSIDIAN.mp4"
];

export default function WebDesignSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Web Design</h2>
      </div>

      <div className={styles.videoMasonry}>
        {videos.map((src, index) => (
          <div key={index} className={styles.videoItem}>
            <video 
              src={src} 
              autoPlay 
              muted 
              loop 
              playsInline 
              className={styles.video}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
