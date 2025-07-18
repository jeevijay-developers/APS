import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="pageHeader -type-1">
      <div className="pageHeader__bg">
        <Image width={1800} height={500} src="/img/about/1/3.jpg" alt="image" />
        <Image
          width="1800"
          height="40"
          style={{ height: "auto" }}
          src="/img/hero/1/shape.svg"
          alt="image"
        />
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="pageHeader__content">
              <h1 className="pageHeader__title">About Us</h1>

              <p className="pageHeader__text">
                Annapurna Public School (APS) is a co-educational English medium
                school established by the Shree Annapurna Educational & Research
                Society in fond memory of Smt. Annapurna, the beloved mother of
                the Founder-Chairman, Dr.B.V.Rao, an Eminent Scientist,
                Technocrat, an outstanding Teacher of the prominence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
