import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Leadership } from "../components/Leadership";
import { AdvityaDescription } from "../components/AdVITyaDescription";
import { ClubEvents } from "../components/ClubEvents";
import { Navbar } from "../components/Navbar";
import Highlights from "../components/Highlights";
import Preloader from "../components/ui/apple-preloader";
import Footer from "../components/Footer";
// import { ContactForm } from "../components/ContactForm";
import ContactUsSection from "../components/ContactUsSection";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <div className="bg-black w-full">
        Advitya Website
        <Navbar />
        <Hero />
        <Leadership />
        <AdvityaDescription classname="bg-black" />
        <Highlights />
        <ClubEvents />
        <ContactUsSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
