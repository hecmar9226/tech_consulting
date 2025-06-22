import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode; 
  title: string;
};

export const BenefitCard = ({ icon, title }: ServiceCardProps) => {
  return (
    <div className="bg-[#f4f4f4] py-10 w-full lg:max-w-[250px] w-w-full mx-auto rounded-[12px] flex flex-col items-center gap-6 shadow-2xl">
      {icon}
      <p className="text-[30px] text-[#304959] font-bold text-center px-1">{title}</p>
    </div>
  )
}