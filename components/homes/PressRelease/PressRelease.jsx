'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { IoClose } from "react-icons/io5";
import styles from './PressRelease.module.css';

const pressReleases = [
  {
    id: 1,
    title: "Republic Day Celebration 2025",
    date: "January 26, 2025",
    images: [
      {
        src: "/img/PressRelease/1.jpeg",
        alt: "Flag hoisting ceremony"
      },
      {
        src: "/img/PressRelease/2.jpeg",
        alt: "Student performance"
      },
      {
        src: "/img/PressRelease/3.jpeg",
        alt: "Award ceremony"
      }
    ]
  },
];

const PressRelease = () => {
  const [selectedRelease, setSelectedRelease] = useState(null);

  return (
    <section className={styles.pressReleaseSection}>
      <div className="container">
        <h1 className={styles.sectionTitle}>Latest Press Releases</h1>
        
        <div className={styles.pressGrid}>
          {pressReleases.map(release => (
            <div 
              key={release.id} 
              className={styles.pressCard}
              onClick={() => setSelectedRelease(release)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={release.images[0].src}
                  alt={release.images[0].alt}
                  className={styles.pressImage}
                  width={300}
                  height={200}
                  style={{ objectFit: 'cover' }}
                  priority={release.id === 1}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.eventTitle}>{release.title}</h3>
                <p className={styles.eventDate}>{release.date}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedRelease && (
          <div className={styles.modal} onClick={() => setSelectedRelease(null)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <button 
                className={styles.closeButton}
                onClick={() => setSelectedRelease(null)}
              >
                <IoClose size={20} />
              </button>
              <h2 className={styles.modalTitle}>{selectedRelease.title}</h2>
              <p className={styles.modalDate}>{selectedRelease.date}</p>
              <div className={styles.imageGrid}>
                {selectedRelease.images.map((image, index) => (
                  <div key={index} className={styles.modalImageWrapper}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={500}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PressRelease;