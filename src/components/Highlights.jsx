import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Card from "../components/ui/card-stack";
import GradientText from "./ui/GradientText";

const sections = [
  {
    title: "Sportsfest",
    description:
      "The capital city of India, Delhi, is a blend of historic and modern attractions. Visitors can explore ancient monuments like the Red Fort and Humayun's Tomb, or enjoy the vibrant street life in markets like Chandni Chowk. Delhi's diverse culture and rich history make it a fascinating destination.",
    src: "image1.webp",
    color: "#BBACAF",
  },
  {
    title: "Day-1",
    description:
      "One of the most iconic monuments in the world, the Taj Mahal is a stunning example of Mughal architecture. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, this white marble mausoleum attracts millions of visitors each year..",
    src: "image2.webp",
    color: "#977F6D",
  },
  {
    title: "Day-2",
    description:
      "Famous for its beaches, Goa is a paradise for beach lovers. From the lively Baga Beach to the tranquil Palolem Beach, there is a spot for everyone. Goa also offers vibrant nightlife, colonial architecture, and lush greenery.",
    src: "image5.webp",
    color: "#88A28D",
  },
  {
    title: "Day-3",
    description:
      "The Golden Temple, or Harmandir Sahib, is the spiritual and cultural center of the Sikh religion. Its stunning golden architecture and serene surroundings make it a must-visit. The temple is known for its hospitality, serving free meals to thousands of visitors daily.",
    src: "image3.webp",
    color: "#C2491D",
  },
];

export default function Highlights() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      if (lenis) {
        lenis.destroy(); // Clean up Lenis instance
      }
    };
  }, []);

  return (
    <>
      <div className="my-16 pt-20 backdrop-blur">
        <GradientText
          animationSpeed={10}
          showBorder={false}
          className="text-6xl py-4"
        >
          Key Highlights
        </GradientText>
      </div>
      <main ref={container}>
        {sections.map((section, i) => {
          const targetScale = 1 - (sections.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...section}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </>
  );
}
