import BannerOne from "@/components/homes/banners/BannerOne";
import BrandsOne from "@/components/homes/brands/BrandsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeturesTwo from "@/components/homes/features/FeturesTwo";
import FoundersMessage from "@/components/homes/DirAndFoundersMessage/FoundersMessage";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Header9 from "@/components/layout/header/Header9";
import Banner from "@/components/pages/about/Banner";
import Hero from "@/components/pages/about/Hero";
import Information from "@/components/pages/about/Information";
import Team from "@/components/pages/about/Team";
import React from "react";
import PressRelease from "@/components/homes/PressRelease/PressRelease";
import APSProfile from "@/components/homes/APSProfile/APSProfile";
import VisionandMission from "@/components/homes/VisionandMission/vision-mission";

export const metadata = {
  title: "About Us",
  description: "",
};

export default function page() {
  return (
    <>
      <main>
        <Header9 />
        <Hero />
        <APSProfile />
        {/* <Information /> */}
        {/* <Banner /> */}
        <FeaturesOne />
        <FoundersMessage />
        <VisionandMission />
        <PressRelease />
        {/* <div className="mt-60">
          <FeturesTwo />
        </div>
        <TestimonialOne />
        <BannerOne /> */}
        {/* <Team />
        <BrandsOne /> */}
        <FooterOne />
      </main>
    </>
  );
}
