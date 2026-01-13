import AboutHeader from "@/components/aboutComponents/AboutHeader";
import OurMission from "@/components/aboutComponents/OurMission";
import OurTeam from "@/components/aboutComponents/OurTeam";
import SuccessStory from "@/components/aboutComponents/SucessStory";
import WhyChooseUs from "@/components/servicescomponents/WhyChooseUs";

function About() {
  return (
    <>
      <div className="overflow-hidden">
        <AboutHeader/>
        <OurMission/>
        <OurTeam/>
        <SuccessStory/>
        <WhyChooseUs/>
      </div>
    </>
  );
}

export default About;
