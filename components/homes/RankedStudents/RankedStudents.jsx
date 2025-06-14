import React from 'react'
import Image from 'next/image'
import styles from './RankedStudents.module.css'

const RankedStudents = () => {
  return (
    <div className={`container ${styles.card_container} my-lg-5`}>
        <h1 className='mb-4'>Our Acievements</h1>
      <div className={styles.card_grid}>
        {/* Card 1 */}
        <div className={`card ${styles.card_wrapper}`}>
          <div className={styles.image_container}>
            <Image
              src="/img/rankedStudents/1.jpeg" 
              alt="Card image 1"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className={`card ${styles.card_wrapper}`}>
          <div className={styles.image_container}>
            <Image
              src="/img/rankedStudents/2.jpg"
              alt="Card image 2"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className={`card ${styles.card_wrapper}`}>
          <div className={styles.image_container}>
            <Image
              src="/img/rankedStudents/3.jpg"
              alt="Card image 3"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RankedStudents