// components/MainBannerComponent.tsx
"use client";
import React from "react";
import MainBannerMobile from "./mobile/MainBannerMobile";
import MainBannerDesktop from "./desktop/MainBannerDesktop";
import withWindowSize from "@/components/common/withWindowSize";

interface MainBannerProps {
  isMobile: boolean;
}

const MainBannerComponent: React.FC<MainBannerProps> = ({ isMobile }) => {
  return (
    <>
      {isMobile ? <MainBannerMobile /> : <MainBannerDesktop />}
    </>
  );
}

export default withWindowSize(MainBannerComponent);
