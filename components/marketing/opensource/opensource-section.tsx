import Link from "next/link"
import { siteConfig } from "@/config/site"

export default function OpensourceSection() {
  return (
    <section id="open-source" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Proudly Open Source
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          we believe in the power of collaboration. Allowing developers to contribute, customize, and enhance the app to suit their unique needs. <br />{" "}
          The code is available on{" "}
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            GitHub
          </Link>
          .{" "}
        </p>

      </div>
    </section>
  )
}