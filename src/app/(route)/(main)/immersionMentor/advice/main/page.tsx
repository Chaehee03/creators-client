"use client";

import Banner from "@/app/_components/banner/Banner";
import Header from "@/app/_components/header/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Banner mode="mentorAdvice" />
    </div>
  );
};

export default page;
