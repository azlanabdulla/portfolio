import Image from "next/image";
import styles from "./imageMarquee.module.css";

interface ImageMarqueeProps {
  tilt?: number;
  reverse?: boolean;
}

const images = [
  "/music/macro1.png",
  "/music/lofi.png",
  "/music/macro2.png",
  "/music/electronic.png",
  "/music/ambient.png",
  "/music/synthwave.png",
];

// Double the array for infinite scroll
const marqueeItems = [...images, ...images];

export default function ImageMarquee({ tilt = 0, reverse = false }: ImageMarqueeProps) {
  const containerStyle = {
    transform: `rotate(${tilt}deg)`,
  };

  return (
    <div className={styles.marqueeContainer} style={containerStyle}>
      <div className={reverse ? styles.scrollReverse : styles.scrollForward}>
        {marqueeItems.map((src, i) => (
          <div key={i} className={styles.imageCard}>
            <Image src={src} alt="Abstract Art" fill sizes="300px" className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
