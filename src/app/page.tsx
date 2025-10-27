import Banner from "@/components/Banner"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import Security from "@/components/Security"
import Pricing from "@/components/Pricing"
import Testimonial from "@/components/Testimonial"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import FAQ from "@/components/FAQ"
import Newsletter from "@/components/Newsletter"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Banner/>
      <Features/>
      <HowItWorks/>
      <Security/>
      <Pricing/>
      <Testimonial/>
      <FAQ/>
      <Newsletter/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default HomePage