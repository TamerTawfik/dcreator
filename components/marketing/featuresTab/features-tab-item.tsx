import React from "react";
import { FeatureTab } from "@/types";
import Image from "next/image";

export default function FeaturesTabItem({ featureTab }: { featureTab: FeatureTab }) {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19 mt-20">
        <div className="md:w-1/2">
          <h2 className="text-black dark:text-white text-3xl font-bold mb-7">
            {title}
          </h2>
          <p className="mb-5 text-muted-foreground">{desc1}</p>
          <p className="w-11/12 text-muted-foreground">{desc2}</p>
        </div>
        <div className="hidden md:block md:w-1/2 relative mx-auto aspect-[562/366] max-w-[550px]">
          <Image src={image} alt={title} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          />
        </div>
      </div>
    </>
  );
};

