import { servicesData } from "@/constant/servicesData";
import { ServiceCard } from "./serviceCard";



export const ServicesSection = () => (
  <section id="services-section" className="w-full max-w-[1300px] flex flex-col  px-2 lg:px-0 mx-auto my-[40px] lg:my-[60px]" style={{ scrollMarginTop: '150px' }}>  
    <div className="py-10 bg-[#F3F3F3] rounded-3xl">
      <h2 className="text-[36px] lg:text-[60px] font-bold text-center mb-8 text-[#304959]">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 justify-center ] px-2 lg:px-8  ">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  </section>
);