import Hero from "../components/Hero";
import { Leadership } from "../components/Leadership";
import { AdvityaDescription } from "../components/AdVITyaDescription";
import { ClubEvents } from "../components/ClubEvents";
import { Navbar } from "../components/Navbar";

function Home() {
  return (
    <div>
      <div className="bg-black w-full">
        Advitya Website
        <Navbar />
        <Hero />
        <Leadership />
        <AdvityaDescription classname="bg-black" />
        <ClubEvents />
      </div>
    </div>
  );
}

export default Home;
