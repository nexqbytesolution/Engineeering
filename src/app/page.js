import Hero from "@/component/Hero";
import OurQuality from "@/component/OurQuality";
import WhatClientSay from "@/component/WhatClientSay";
import WhyChooseUs from "@/component/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <OurQuality />
      <WhatClientSay />
    </div>
  );
};

export default page;
