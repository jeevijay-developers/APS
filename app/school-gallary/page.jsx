import ClubGallary from "@/components/ClubGallary/ClubGallary";
import TrendingDestinationsTwo from "@/components/homes/destinations/TrendingDestinationsTwo";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Header9 from "@/components/layout/header/Header9";
import React from "react";

const page = () => {
  return (
    <div>
      <Header9 />
      <TrendingDestinationsTwo />

      {/* <ClubGallary /> */}
      <FooterOne />
    </div>
  );
};

export default page;
