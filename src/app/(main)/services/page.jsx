import Hero from "@/components/servicescomponents/Hero";
import ServiceAreas from "@/components/servicescomponents/ServiceAreas";
import TruckOptions from "@/components/servicescomponents/TruckOptions";
import TruckServices from "@/components/servicescomponents/TruckService";
import WhyChooseUs from "@/components/servicescomponents/WhyChooseUs";

function Services() {
  return (
    <>
      <div>
    <Hero/>
    <TruckServices/>
    <TruckOptions/>
    <ServiceAreas/>
    <WhyChooseUs/>
      </div>
    </>
  );
}

export default Services;
