"use client";
import { useRef } from "react";
import styles from "./GalleryCarousel.module.css";

const images = [
  "https://images.pexels.com/photos/2231633/pexels-photo-2231633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/955938/pexels-photo-955938.jpeg",
  "https://images.pexels.com/photos/2089530/pexels-photo-2089530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2183132/pexels-photo-2183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2192237/pexels-photo-2192237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2231633/pexels-photo-2231633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

export default function GalleryCarousel() {
  const trackRef = useRef(null);
  const visibleCount = 4;

  const scrollAmount = () => {
    if (!trackRef.current) return 0;
    return trackRef.current.offsetWidth; // ширината на видимата част
  };

  const next = () => {
    trackRef.current.scrollBy({ left: scrollAmount(), behavior: "smooth" });
  };

  const prev = () => {
    trackRef.current.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={prev}>
        &lt;
      </button>
      <div className={styles.track} ref={trackRef}>
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Gallery ${idx}`} loading="lazy" />
        ))}
      </div>
      <button className={styles.next} onClick={next}>
        &gt;
      </button>
    </div>
  );
}
