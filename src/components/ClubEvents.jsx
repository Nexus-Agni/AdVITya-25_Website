import { FocusCards } from "./ui/focus-cards";
import Tech from "../assets/tech.png";
import NonTech from "../assets/non-tech.png";

export function ClubEvents() {
  const cards = [
    {
      title: "Technical Events",
      src: Tech,
      link: "/technical-events",
    },
    {
      title: "Non-Technical Events",
      src: NonTech,
      link: "/non-technical-events",
    },
  ];

  return (
    <>
      <div className="my-16">
        <h1 className="text-6xl text-center text-yellow-400 underline">
          Club Events
        </h1>
      </div>
      <div>
        <FocusCards cards={cards} />;
      </div>
    </>
  );
}
