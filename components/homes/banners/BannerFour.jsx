import Image from "next/image";
import React from "react";

export default function BannerFour() {
  return (
    <section
      className="layout-pt-xxl layout-pb-xxl position-relative text-white"
      style={{ backgroundColor: "yellow" }} // Custom dark background
    >
      {/* Optional Background Image */}
      <div className="sectionBg position-relative">
        {/* Optional: Uncomment if you want background image */}
        {/* <Image
          src="/img/features/1/a.webp"
          width={1920}
          height={700}
          alt="image"
          className="img-ratio w-100 h-[700px] object-cover"
        /> */}
        <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Text Content */}
      <div className="container position-relative z-3">
        <div className="row justify-content-center text-center">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="display-4 text-warning fw-bold"
            >
              Keep Things Flexible
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-light fs-5 mt-4 bg-dark bg-opacity-75 px-4 py-2 rounded"
            >
              <span className="fw-bold text-black">
                Use Reserve Now & Pay Later to secure the activities you don't
                want to miss without being locked in.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
