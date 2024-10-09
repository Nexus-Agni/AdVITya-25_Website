import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import chancellor from "../assets/chancellor.png";
import vp from "../assets/vp.png";
import avp from "../assets/avp.png";
import vc from "../assets/vc.png";
import registrar from "../assets/registrar.png";
// import { Highlight } from "../ui/hero-highlight";

export function Leadership() {
  const LeadershipItems = [
    {
      title: "Dr. G. Viswanathan",
      description: "Chancellor",
      img: chancellor,
    },
    {
      title: "Mr. Sankar Viswanathan",
      description: "Vice President",
      img: vp,
    },
    {
      title: "Ms. Kadhambari S Viswanathan",
      description: "Assistant Vice President",
      img: avp,
    },
    {
      title: "Dr. Senthil Kumar Arumugam",
      description: "Vice Chancellor",
      img: vc,
    },
    {
      title: "Dr. Debashis Adhikari",
      description: "Registrar",
      img: registrar,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row flex-wrap items-center justify-center bg-black ">
      {/* <Highlight className="text-yellow-300 text-6xl md:text-8xl">
        LEADERSHIP
      </Highlight> */}
      <HoverEffect items={LeadershipItems} />
    </div>
  );
}
