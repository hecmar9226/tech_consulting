import Image from "next/image"

export const Hero = () => {
  return(
    <section id="hero-section" className="relative w-full h-[400px] lg:h-[600px] flex lg:items-center text-white pt-[80px]" style={{ scrollMarginTop: '90px' }}>
      <Image src="/img/hero.webp" alt="Fondo hero" fill className="object-cover" />
      <div className="w-full max-w-[1300px] mx-auto">
        <h1 className="relative z-10 text-[36px] leading-[38px] lg:text-[60px] lg:leading-[56px] font-bold ml-[50px] max-w-[600px]">
          Tenemos la solución tecnológica que tu empresa necesita
        </h1>
      </div>
    </section>
  )
}