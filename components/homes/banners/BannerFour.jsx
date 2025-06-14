import Image from "next/image";
import React from "react";

export default function BannerFour() {
  return (
    <section className="layout-pt-xxl layout-pb-xxl relative">
      {/* Background Image */}
      <div className="sectionBg tiltbg relative">
        <Image
          src="/img/features/1/p1.jpg"
          width={1920}
          height={700}
          alt="image"
          className="img-ratio w-full h-[700px] object-cover "
        />
        {/* Overlay for Better Text Visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Text Content */}
      <div className="container relative z-10">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2
              className="text-white"
            >
              Welcome to Annapurna Public School
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-black text-lg sm:text-sm mt-4  bg-opacity-50 px-4 py-2 rounded-md"
            >
              <span className="text-white">
                Empowering young minds through quality education and holistic
                development.
                <br />
                <span className="text-info">
                  Join APS today — where every child’s potential is nurtured.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
