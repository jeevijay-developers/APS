import React from "react";

const VisionandMission = () => {
  return (
    <section
      className=" vision-mission container py-10"
    //   style={{
    //     backgroundColor: "#f8f9fa",
        
    //   }}
    >
      <div className="mb-4">
        <img
          src="/img/pageHeader/mission&vision.png" // Replace with your actual icon path
          alt="Vision Icon"
          style={{
            width: "100px",
            height: "100px", // Adjust the height to make the icon square0px",
          }}
        />
      </div>

      <h2 className="fw-semibold text-dark mb-4">Vision & Mission</h2>

      {/* Vision Section */}
      <div className="mb-5">
        <h5 className="text-danger fw-bold mb-2">
          APS <span className="text-primary">VISION</span>
        </h5>
        <p className="text-secondary fs-5">To inculcate in every child:</p>
        <ul className="text-secondary fs-5" style={{ lineHeight: "1.8" }}>
          <li>
            <span className="text-danger">Awareness</span> to become wise and
            resourceful
          </li>
          <li>Passion for excellence in career and perfection in life</li>
          <li>
            <span className="text-danger">Social responsibility</span> and
            patriotic fervour
          </li>
        </ul>
      </div>

      {/* Mission Section */}
      <div>
        <h5 className="text-danger fw-bold mb-2">
          APS <span className="text-primary">MISSION</span>
        </h5>
        <p className="text-secondary fs-5" style={{ lineHeight: "1.8" }}>
          To impart Quality Education using emerging innovative learning tools
          with its foci on imbibing academic, aesthetic, intellectual, creative,
          social, moral, emotional and spiritual values along with physical
          education for all-round development of every child.
        </p>
      </div>
    </section>
  );
};

export default VisionandMission;
