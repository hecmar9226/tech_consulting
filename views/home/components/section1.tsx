import Image from "next/image"

export const Section1 = () => {
  return (
    <section id="section1" className="relative bg-blue-200 flex flex-row justify-between gap-2  p-10 rounded-4xl my-[100px]">
      <div className="flex flex-col gap-2">
        <p className="font-bold text-2xl">
          Nosotros
        </p>
        <p className="max-w-[500px]">
          Para estructurar correctamente tu layout con Navbar y Footer, lo ideal es usar un componente de Layout que envuelva todas las páginas.
          Para estructurar correctamente tu layout con Navbar y Footer, lo ideal es usar un componente de Layout que envuelva todas las páginas.
          Para estructurar correctamente tu layout con Navbar y Footer, lo ideal es usar un componente de Layout que envuelva todas las páginas.
          Para estructurar correctamente tu layout con Navbar y Footer, lo ideal es usar un componente de Layout que envuelva todas las páginas.
          Para estructurar correctamente tu layout con Navbar y Footer, lo ideal es usar un componente de Layout que envuelva todas las páginas.
        </p>
      </div>
      <Image src="/img/img2.png" alt="Fondo hero" width={400} height={300} className="object-cover rounded-lg" />
    </section>
  )
}