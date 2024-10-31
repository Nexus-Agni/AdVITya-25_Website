import { ContactForm } from "./ContactForm";
import ContactAnimationJson from "../assets/Lottie/ContactAnimationData.json";
import Lottie from "react-lottie";
import GradientText from "./ui/GradientText";

function ContactUsSection() {
    const ContactAnimationOptions = {
      loop: true,
      autoplay: true,
      animationData: ContactAnimationJson,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  
    return (
      <div className="h-full w-full">
        <GradientText
            animationSpeed={10}
            showBorder={false}
            className="text-6xl py-16"
          >
            CONTACT US
          </GradientText>
        <div className="bg-black">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-7xl py-12 md:py-24">
              <div className="grid items-center justify-items-center gap-4 md:gap-8 lg:gap-x-4 lg:gap-y-10 lg:grid-cols-2 overflow-x-hidden">
                {/* contact from */}
                <ContactForm />
                <Lottie
                  options={ContactAnimationOptions}
                  className="hidden md:block"
                  height={400}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContactUsSection;