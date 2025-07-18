import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import Banner from "@/components/homes/banners/Banner";
import Banner11 from "@/components/homes/banners/Banner11";
import BannerFour from "@/components/homes/banners/BannerFour";
import BannerOne from "@/components/homes/banners/BannerOne";
import DestinationsOne from "@/components/homes/destinations/DestinationsOne";
import TopAttractions from "@/components/homes/destinations/TopAttractions";
import TrendingDestinations from "@/components/homes/destinations/TrendingDestinations";
import Features9 from "@/components/homes/features/Features9";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import FeaturesThree from "@/components/homes/features/FeaturesThree";
import Hero7 from "@/components/homes/heros/Hero7";
import RankedStudents from "@/components/homes/RankedStudents/RankedStudents";
import TeamSection from "@/components/homes/Team/TeamSection";

import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import PopulerTours from "@/components/homes/tours/PopulerTours";
import TourSlider4 from "@/components/homes/tours/TourSlider4";
import TourTypeOne from "@/components/homes/tourTypes/TourTypeOne";
import VideoPlayer from "@/components/homes/VideoPlayer/VideoPlayer";
import FooterFive from "@/components/layout/footers/FooterFive";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import Header6 from "@/components/layout/header/Header6";
import Header9 from "@/components/layout/header/Header9";
import React from "react";

export const metadata = {
  title: "Home-7 || ViaTour - Travel & Tour React NextJS Template",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default function page() {
  return (
    <>
      <main>
        <Header9 />
        <Hero7 />
        <RankedStudents />
        <TeamSection />
        {/* <DestinationsOne /> */}
        {/* <Tour1 /> */}
        <Banner />
        {/* <TourTypeOne /> */}
        {/* <TourSlderOne /> */}
        <VideoPlayer />
        <Features9 />
        <BannerFour />
        <FeaturesOne />

        <TestimonialOne />
        {/* <ArticlesThree /> */}
        <FooterOne />
      </main>
    </>
  );
}
