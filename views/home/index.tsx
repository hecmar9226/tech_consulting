import Footer from "@/components/footer"
import Navbar from "@/components/navBar"
import { Hero } from "./components/hero"
import { ContactDetail } from "./components/contactDetail"
import { BenefitsSection } from "./components/benefitsSection"
import { ServicesSection } from "./components/servicesSection"

export const HomeView = () => {
  return (
    <>
    <Navbar />
    <main className='min-h-screen '>
      <div className="w-full">
        <Hero />
        <ServicesSection />
        <ContactDetail />
        <BenefitsSection />
      </div>
    </main>
    <Footer />
    </>
  )
}