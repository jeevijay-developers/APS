import React from "react";

const APSProfile = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <img
          src="/img/pageHeader/logo.png" // Ensure this path is correct
          alt="APS Logo"
          className="img-fluid"
          style={{ maxWidth: "120px" }}
        />
      </div>
      <h2 className="text-center fw-semibold mb-4">APS Profile</h2>
      <div className="text-secondary fs-5" style={{ lineHeight: "1.8" }}>
        <p>
          Annapurna Public School (APS) is a co-educational English medium
          school established by the Shree Annapurna Educational & Research
          Society in fond memory of Smt. Annapurna, the beloved mother of the
          Founder-Chairman, <strong>Dr. B.V. Rao</strong>, an Eminent Scientist,
          Technocrat, an outstanding Teacher of the prominence.
        </p>
        <p>
          He helped thousands of young minds to shape and fulfill their career
          dreams. He is one amongst those persons who has made it possible to
          have Kota city on the map on whole India in the field of Education.
        </p>
        <p>
          Under his able guidance the APS is ready to pave the wave for its
          Success with excellence and perfection.
        </p>
        <p>
          APS promise to impart well-balanced quality Education and inspire
          children to adapt and enjoy through a fun filled learning process. The
          children are given the freedom and liberty to express, experiment and
          learn to mould themselves in the emerging global scenario.
        </p>
      </div>
    </section>
  );
};

export default APSProfile;
