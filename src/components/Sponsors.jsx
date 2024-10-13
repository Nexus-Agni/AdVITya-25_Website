import { Marquee } from "./ui/marquee";

const Logos = [
  {
    name: "tailwindcss",
    src: "path/to/tailwindcss-logo.png",
  },
  {
    name: "framer",
    src: "path/to/framer-logo.png",
  },
  {
    name: "aws",
    src: "path/to/aws-logo.png",
  },
  {
    name: "aws",
    src: "path/to/aws-logo.png",
  },
];

export const Sponsors = () => {
  return (
    <>
      <div className="flex items-center justify-center text-yellow-400 text-6xl underline my-16">
        Our Sponsors
      </div>
      <div className="mt-16 mb">
        <Marquee>
          {Logos.map((logo, index) => (
            <div
              key={index}
              className="relative h-full w-fit mx-[4rem] flex items-center justify-start"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-[80px] sm:w-auto w-[140px]"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};
