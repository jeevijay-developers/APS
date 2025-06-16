'use client';
import Image from 'next/image';
import React from 'react';
import styles from './FoundersMessage.module.css';

const FoundersMessage = () => {
    return (
        <section className={styles.foundersMessageSection}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h1 className={styles.sectionTitle}>Founder's Message</h1>
                        <div className={styles.titleUnderline}></div>
                    </div>
                </div>

                <div className="row align-items-start">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className={styles.founderImageContainer}>
                            <Image
                                src="/img/ourTeam/RaoSir.jpg"
                                alt="Dr. B.V.Rao - Founder Chairman"
                                className={styles.founderImage}
                                height={400}
                                width={300}
                            />
                            <div className={styles.imageOverlay}>
                                <div className={styles.founderDetails}>
                                    <h4 className={styles.founderName}>Dr. B.V.Rao</h4>
                                    <p className={styles.founderTitle}>Founder – Chairman</p>
                                    <p className={styles.founderCredentials}>M.sc, M.S.(IIT Madras), Ph.D.(IIT Delhi)</p>                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-6">
                        <div className={styles.messageContent}>
                            <div className={styles.messageText}>
                                <p className={styles.openingGreeting}>
                                    <strong>Dear parents</strong>,
                                </p>

                                <p>
                                    It gives me immense pleasure to write a few lines about the Vision and the Mission of launching <strong>Annapurna Public School (APS) by the Shree Annapurna Educational and Research Society</strong>.
                                </p>

                                <p>
                                    The school is born to fulfill the dreams of parents by exploring and igniting the inborn talents of their wards and enable them to face the challenges of life.
                                </p>

                                <p>
                                    Focusing of the very ambition of parents, APS endeavors to design, carve and architect the careers of children and develop them into integrated personalities through well-planned, thoughtfully designed and perfectly executed curricular and co-curricular activities.
                                </p>

                                <p>
                                    To meet this end, we have created the facilities in a comprehensive infrastructure at a congenial environment conducive for the complete development of a child under the able guidance of our caring, competent and dedicated teachers.
                                </p>

                                <p>
                                    APS promise to impart well-balanced quality education and inspire children to adapt and enjoy through a fun filled learning process. The children are given the freedom and liberty to express, experiment and learn to mould themselves in the emerging global scenario.
                                </p>

                                <p>
                                    Our objective is to drive the children in achieving theirs goals by making sustained efforts to create a scientific attitude, a creative bent of mind and to make the child sensitive human being. We imbibe and develop all those values and qualities in the children to light their way to a brighter future.
                                </p>

                                <p>
                                    We lend everything it takes to inculcate an uncompromising passion in each and every child to excel in their career and achieve perfection in life. Nothing can satisfy our desire except these and lead the mission successful.
                                </p>
                                <div className={styles.closingSignature}>
                                    <p className={styles.wishes}>With best wishes,</p>
                                    <div className={styles.signatureBlock}>
                                        <h5 className={styles.signatureName}><strong>Dr. B.V.Rao</strong></h5>
                                        <p className={styles.signatureCredentials}><em>M.sc, M.S.(IIT Madras), Ph.D.(IIT Delhi)</em></p>
                                        <p className={styles.signaturePosition}>Founder – Chairman</p>
                                        <p className={styles.signatureOrganization}>Shree Annapurna Educational & Research Society</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersMessage;