import { features } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function FeaturesOne() {
  return (
    <section
      className="layout-pt-xl layout-pb-xl bg-gradient position-relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0f4ff, #e8f5e9)" }}
    >
      <div className="container position-relative z-1">
        <div className="row justify-content-center mb-40">
          <div className="col-auto text-center">
            <h2 data-aos="fade-up" className="text-36 fw-700 text-dark">
              Why Choose Annapurna Public School
            </h2>
            <p className="text-16 text-gray mt-10" data-aos="fade-up" data-aos-delay="100">
              Discover our exclusive facilities and premium features
            </p>
          </div>
        </div>

        <div className="row g-4" data-aos="fade-up">
          {features.slice(0, 9).map((elm, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="col-lg-4 col-md-6 col-sm-12"
            >
              <div className="featureCard text-center rounded-20 gap-4 shadow-sm p-3 d-flex flex-column bg-white">
                <div className="mb-3 w-100">
                  <Image
                    src={elm.iconSrc}
                    alt={elm.title}
                    width={380}
                    height={200}
                    className="w-full object-cover"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <h3 className="text-20 fw-600 text-dark">{elm.title}</h3>
                <p className="text-15 text-gray">{elm.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
