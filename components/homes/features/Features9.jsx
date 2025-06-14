"use client"
import React from "react";

export default function EducationStatsSection() {
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
                We at <span style={{ color: "#00ffff" }}>APS</span> believe that
                the concept of education is:
              </p>
              <ul className="text-white ps-3 mb-4">
                <li>to allow children to explore, experiment and enjoy</li>
                <li>to make it an exciting and stimulating experience</li>
                <li>to sharpen skills and efficiency</li>
                <li>to give wings of imagination and achievement</li>
              </ul>
              <button
                className="btn text-white px-4 py-2 rounded-5"
                style={{ backgroundColor: "gray", border: "none" }}
              >
                Get in touch today
              </button>
            </div>
          </div>

          {/* Right Section - Stats */}
          <div className="col-lg-6">
            <div className="row g-4">
              {[
                { label: "Olympiad Winners", value: 450 },
                { label: "Experienced Teachers", value: 100 },
                { label: "Student Enrolled", value: 600 },
                { label: "Trophy Won", value: 210 },
              ].map((item, idx) => (
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
                        {item.value}
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
