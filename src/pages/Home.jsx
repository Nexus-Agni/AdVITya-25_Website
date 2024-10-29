
import { Leadership } from "../components/Leadership";
import { AdvityaDescription } from "../components/AdVITyaDescription";
import { ClubEvents } from "../components/ClubEvents";
import { Navbar } from "../components/Navbar";
import HeroFarm from "../components/ui/Hero-Farm";
// import { Sponsors } from "../components/Sponsors";

function Home() {
  return (
    <div>
      <div className="bg-black w-full">
        Advitya Website
        <Navbar />
        {/* <HeroSection /> */}
        <HeroFarm />
        <Leadership />
        <AdvityaDescription classname="bg-black" />
        <ClubEvents />
        {/* <Sponsors /> */}
      </div>
    </div>
  );
}

export default Home;
