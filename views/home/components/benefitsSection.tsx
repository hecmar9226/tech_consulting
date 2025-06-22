import { Book, Convert3DCube, MoneySend, ProfileTick } from "iconsax-react";
import { BenefitCard } from "./benefitCard"

const benefitsData = [
  { icon: <MoneySend size="88"color="#EE6F46" />, title: "Ahorro de tiempo y recursos" },
  { icon: <Book size="88"color="#EE6F46" />, title: "Mejora de la calidad" },
  { icon: <ProfileTick size="88"color="#EE6F46" />, title: "Soluciones personalizadas" },
  { icon: <Convert3DCube size="88"color="#EE6F46" />, title: "Escalabilidad futura" }
];

export const BenefitsSection = () => {
  return (
    <section id="benefits-section" className="w-full max-w-[1300px] flex flex-col  px-4 lg:px-0 mx-auto"  style={{ scrollMarginTop: '90px' }}>
      <div className="py-[50px] flex flex-col gap-6 justify-center items-center mb-6">
        <div className="flex flex-col gap-3 justify-center items-center">
          <p className="text-[36px] lg:text-[60px] text-[#304959] font-bold">¿Beneficios de Elegir Nuestros Servicios?</p>
          <p className="max-w-[1050px]  text-[16pxs] lg:text-[26px] lg:leading-[35px]">
            Trabajar con un analista de software experto puede marcar una gran diferencia en el éxito de tu proyecto. 
            Estos son algunos de los beneficios que obtienes al trabajar con nosotros:
          </p>
        </div>
        <div className="mt-8 w-full flex flex-col lg:flex-row gap-10 lg:gap-5">
          {benefitsData.map((service, index) => (
            <BenefitCard key={index} title={service.title} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}