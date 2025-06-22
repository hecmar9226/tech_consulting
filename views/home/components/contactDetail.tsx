import Image from "next/image"
import { ContactForm } from "./contactForm"

export const ContactDetail = () => {
  return (
    <section id="contact-detail" className="relative lg:h-[600px] flex items-center bg-green-300" style={{ scrollMarginTop: '140px' }}>
      <Image src="/img/contactDetail.webp" alt="Fondo hero" fill className="object-cover" />
      <div className="relative px-4 py-12 lg:px-0  lg:z-1 w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/5">
          <ContactForm />
        </div>
        <div className="w-2/5 flex flex-col  gap-5 text-white mt-3">
          <p className="font-bold text-[36px]">Contáctanos</p>
          <div className="flex flex-col gap-2 text-2xl">
            <p>hectorTec@gmail.com</p>
            <p>8128889899</p>
          </div>
          <p className="text-green-400">México</p>
        </div>
      </div>
    </section>
  )
}