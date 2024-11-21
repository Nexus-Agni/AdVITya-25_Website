import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import GradientText from "./ui/GradientText";
import Tech from "../assets/tech.png";
import NonTech from "../assets/non-tech.png";
import ProShow from "../assets/pro-show.png";


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
    {
      title: "Pro Night",
      src: ProShow,
      // link: "/pro-night",
    },
  ];

  const firstTwoCards = cards.slice(0, 2);
  const thirdCard = cards.slice(2, 3);

  return (
    <>
      <div className="bg-zinc-950">
      
        <div className="my-8 pt-20">
          <GradientText
            animationSpeed={10}
            showBorder={false}
            className="text-6xl py-16"
          >
            Our Events
          </GradientText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto md:px-8 w-full">
          
          {firstTwoCards.map((card, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {card.title}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={card.src}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={card.title}
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={card.link}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Learn more →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
        <div className="flex justify-center ">
          {thirdCard.map((card, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {card.title}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={card.src}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={card.title}
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={card.link}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Learn more →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </>
  );
}
