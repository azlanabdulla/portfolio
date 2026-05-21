"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./music.module.css";
import ShapesMarquee from "./ShapesMarquee";

const tracks = [
  {
    id: 1,
    title: "Starboy",
    artist: "The Weeknd, Daft Punk",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e024718e2b124f79258be7bc452",
    url: "https://p.scdn.co/mp3-preview/57c1238d183c40da3157c2892346f58445b1377c"
  },
  {
    id: 2,
    title: "Malabari Banger",
    artist: "MHR",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02c2181090c5c872f6c4b00bc9",
    url: "https://p.scdn.co/mp3-preview/1afe317144595ada18e0523ad401ab1a6be78c47"
  },
  {
    id: 3,
    title: "Gangnam Style",
    artist: "PSY",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0220c8eba212bd2e4305304af8",
    url: "https://p.scdn.co/mp3-preview/4ed443643fee0e9e3217630789a03b7a8f58b4a7"
  },
  {
    id: 4,
    title: "PONNUM KATTA",
    artist: "SA, ThirumaLi",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02d79a6605492bac456f8111a4",
    url: "https://p.scdn.co/mp3-preview/6e1acde06788b15afafadcb2bf8fe58819d52f95"
  },
  {
    id: 5,
    title: "CHEMBARATHI",
    artist: "Dabzee, SA",
    cover: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02ecfadd048b8cb750f5d94d79",
    url: "https://p.scdn.co/mp3-preview/18f33ee563914066eb41872cbcd01afd4ae59dba"
  }
];

export default function MusicSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[currentIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.url;
      audioRef.current.load();
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(e => console.log("Auto-play interrupted", e));
        }
      }
    }
  }, [currentIndex, currentTrack.url]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => console.log("Play failed", e));
      }
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  const getCardStyle = (index: number) => {
    const total = tracks.length;
    let diff = index - currentIndex;
    
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    const absDiff = Math.abs(diff);

    const translateX = diff * 180; 
    const translateZ = absDiff === 0 ? 0 : -100 - (absDiff * 80);
    const rotateY = absDiff === 0 ? 0 : diff < 0 ? 45 : -45;
    const opacity = absDiff === 0 ? 1 : Math.max(1 - (absDiff * 0.4), 0);
    const scale = absDiff === 0 ? 1 : Math.max(1 - (absDiff * 0.1), 0.5);
    const zIndex = 10 - absDiff;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      display: opacity <= 0 ? 'none' : 'block'
    };
  };

  return (
    <section className={styles.musicSection}>
      <div className={styles.marqueeWrapper}>
        <ShapesMarquee tilt={3} reverse={true} />
      </div>

      <div className={styles.sectionHeader}>
        <svg viewBox="0 0 24 24" width="40" height="40" fill="#1db954" className={styles.spotifyIcon}>
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <h2 className={styles.glowingText}>Favorite Tracks</h2>
      </div>

      <audio 
        ref={audioRef} 
        onEnded={handleNext}
        src={currentTrack.url} 
      />

      <div className={styles.carouselContainer}>
        <div className={styles.scene}>
          {tracks.map((track, index) => {
            const isCenter = index === currentIndex;
            return (
              <div 
                key={track.id} 
                className={`${styles.card} ${isCenter ? styles.activeCard : ''}`}
                style={getCardStyle(index)}
                onClick={() => {
                  if (!isCenter) setCurrentIndex(index);
                }}
              >
                <div className={styles.cardInner}>
                  <div className={styles.coverImageContainer}>
                    <Image 
                      src={track.cover} 
                      alt={track.title} 
                      fill 
                      className={styles.coverImage} 
                    />
                  </div>
                  <div className={styles.cardTextContent}>
                    <h3>{track.artist}</h3>
                    <p>{track.title}</p>
                  </div>
                  <div className={styles.cardGlow} style={{ backgroundImage: `url(${track.cover})` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.playerContainer}>
        <div className={styles.controlsPill}>
          <button className={styles.iconBtn} onClick={handlePrev}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>
          
          <button className={`${styles.iconBtn} ${styles.playPauseBtn}`} onClick={togglePlay}>
            {isPlaying ? (
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          
          <button className={styles.iconBtn} onClick={handleNext}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>

          <div className={styles.divider}></div>

          <div className={styles.playerThumbnailWrapper}>
            <Image 
              src={currentTrack.cover} 
              alt={currentTrack.title} 
              width={32} 
              height={32} 
              className={styles.playerThumbnail} 
            />
          </div>

          <button className={styles.iconBtn} onClick={toggleMute}>
            {isMuted ? (
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
