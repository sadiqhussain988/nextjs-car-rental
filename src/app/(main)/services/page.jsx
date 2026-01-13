
import Hero from "@/components/servicescomponents/Hero";
import ServiceAreas from "@/components/servicescomponents/ServiceAreas";
import TruckOptions from "@/components/servicescomponents/TruckOptions";
import TruckService from "@/components/servicescomponents/TruckService";
import WhyChooseUs from "@/components/servicescomponents/WhyChooseUs";


function Services() {
  return (
    <>
      <div>
    <Hero/>
    <TruckService/>
    <TruckOptions/>
    <ServiceAreas/>
    <WhyChooseUs/>
      </div>
    </>
  );
}

export default Services;
