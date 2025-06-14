"use client";
import Image from "next/image";
import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. B. V. Rao",
      qualifications: "M.SC., M.S. (IIT MADRAS), PH.D. (IIT DELHI)",
      position: "FOUNDER CHAIRMAN - APS KOTA",
      image: "/img/ourTeam/RaoSir.jpg",
    },
    {
      id: 2,
      name: "Dr. Rama R. Bommu",
      qualifications: "PH.D., POSTDOC. (USA), STA FELLOW (JAPAN)",
      position: "DIRECTOR, APS KOTA",
      image: "/img/ourTeam/ramasir.jpg",
    },
    {
      id: 3,
      name: "Mrs. B.V. Vara Lakshmi",
      qualifications: "M.SC., M.S. (USA), M.ED",
      position: "",
      image: "/img/ourTeam/madamrao.png",
    },
  ];

  return (
    <>
      <section className="team-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="section-title">Our Experienced Team</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-card">
                  <div className="team-image">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={380}
                      height={200}
                      className="w-full object-cover"
                      style={{ borderRadius: "12px" }}
                    />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-qualifications">
                      {member.qualifications}
                    </p>
                    {member.position && (
                      <p className="team-position">{member.position}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        .team-section {
          padding: 80px 0;
          background-color: #f8f9fa;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 60px;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #ffa500 0%, #333 100%);
        }

        .team-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          margin-bottom: 30px;
          height: 100%;
        }

        .team-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          font-weight: 500;
        }

        .team-info {
          padding: 30px 25px;
          text-align: center;
        }

        .team-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .team-qualifications {
          font-size: 0.9rem;
          color: #ffa500;
          font-weight: 600;
          margin-bottom: 8px;
          line-height: 1.4;
        }

        .team-position {
          font-size: 0.9rem;
          color: #7f8c8d;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .team-info {
            padding: 20px 15px;
          }

          .team-name {
            font-size: 1.3rem;
          }

          .team-qualifications,
          .team-position {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default TeamSection;
