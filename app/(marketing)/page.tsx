import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import HeroSextion from "@/components/marketing/hero/hero-section"
import StackSection from "@/components/marketing/stack/stack-section"
import OpensourceSection from "@/components/marketing/opensource/opensource-section"

export default async function IndexPage() {

  return (
    <>
      <HeroSextion />
      <StackSection />
      <OpensourceSection />
    </>
  )
}
