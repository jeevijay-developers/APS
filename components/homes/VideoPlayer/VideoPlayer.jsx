'use client';
import React from 'react';
import styles from './VideoPlayer.module.css';

const VideoPlayer = () => {
  return (
    <section className={styles.videoSection}>
      <div className="container">
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Shaping Futures with Vision & Heart</h2>
            <p className={styles.description}>
              At Annapurna Public School, learning goes beyond books. Guided by our visionary
              founder Dr. B. V. Rao and the dynamic leadership of Dr. Rama R. Bommu, we're
              redefining education through a balance of academic rigor, personal growth, and
              joyful exploration. From Play Group to Class XII, every child at APS is
              nurtured to dream, discover, and achieve — because we believe every young
              mind holds the power to shape a brighter tomorrow.
            </p>
          </div>

          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <video
                controls
                preload="metadata"
                className={styles.videoElement}
                controlsList="nodownload"
              >
                <source src="/APS-video.mp4" type="video/mp4" />
                Your browser doesn't support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>);
};

export default VideoPlayer;