import { HeroSection } from "../components/Hero";
import { Leadership } from "../components/Leadership";
import { AdvityaDescription } from "../components/AdVITyaDescription";
import { ClubEvents } from "../components/ClubEvents";
// import { Sponsors } from "../components/Sponsors";

function Home() {
  return (
    <div>
      <div className="bg-black w-full">
        Advitya Website
        <HeroSection />
        <Leadership />
        <AdvityaDescription classname="bg-black" />
        <ClubEvents />
        {/* <Sponsors /> */}
      </div>
    </div>
  );
}

export default Home;
