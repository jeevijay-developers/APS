"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function EducationStatsSection() {
  // Hook to track visibility of the right column (stats)
  const { ref, inView } = useInView({
    triggerOnce: true, // run once
    threshold: 0.2, // when 20% of the block is in view
  });

  const stats = [
    { label: "Olympiad Winners", value: 450 },
    { label: "Experienced Teachers", value: 100 },
    { label: "Student Enrolled", value: 600 },
    { label: "Trophy Won", value: 210 },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "#4b5563" : "gray", // hover effect
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "0.5rem 1rem",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };

  return (
    <section className="py-5 my-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              className="p-4 rounded-4"
              style={{ backgroundColor: "#ffb703" }}
            >
              <h2 className="text-white fs-2 mb-3">
                We Offer Quality Education For Quality Life!
              </h2>
              <hr
                className="bg-white mb-3"
                style={{ height: "2px", width: "120px" }}
              />
              <p className="text-white mb-3">
                We at <strong style={{ color: "#000" }}>APS</strong> believe
                that the concept of education is:
              </p>
              <ul className="text-white ps-3 mb-4 list-with-bullets" >
                <li>to allow children to explore, experiment and enjoy</li>
                <li>to make it an exciting and stimulating experience</li>
                <li>to sharpen skills and efficiency</li>
                <li>to give wings of imagination and achievement</li>
              </ul>
              <button
                className="btn text-white px-4 py-3"
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Get in touch today
              </button>
            </div>
          </div>

          {/* Right Section - Stats */}
          <div className="col-lg-6" ref={ref}>
            <div className="row g-4">
              {stats.map((item, idx) => (
                <div className="col-6" key={idx}>
                  <div
                    className="card text-center border-0 rounded-4 py-4"
                    style={{
                      backgroundColor: "#ffffff",
                      boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 24px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 6px 18px rgba(0, 0, 0, 0.1)";
                    }}
                  >
                    <div className="card-body">
                      <h3 className="fs-1 fw-bold text-dark mb-2">
                        {inView && (
                          <CountUp start={0} end={item.value} duration={2.5} />
                        )}
                      </h3>
                      <p className="text-secondary fs-6 mb-0">{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
