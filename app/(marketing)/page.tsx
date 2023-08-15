
import HeroSection from "@/components/marketing/hero/hero-section"
import StackSection from "@/components/marketing/stack/stack-section"
import OpensourceSection from "@/components/marketing/opensource/opensource-section"
import FeaturesTabSection from "@/components/marketing/featuresTab"
import FAQSection from "@/components/marketing/faq"
import ScrollToTop from "@/components/marketing/scrollToTop"

export default async function IndexPage() {

  return (
    <>
      <HeroSection />
      <FeaturesTabSection />
      <StackSection />
      <FAQSection />
      <OpensourceSection />
      <ScrollToTop />
    </>
  )
}
