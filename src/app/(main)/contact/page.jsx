import ContactSection from "@/components/contactPageComponents/ContactSection";
import FAQSection from "@/components/contactPageComponents/FAQs";
import ContactHero from "@/components/contactPageComponents/Hero";
import MapSection from "@/components/contactPageComponents/Map";

function Contact() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <FAQSection />
      <MapSection />
    </>
  );
}

export default Contact;
