"use client";
import React, { useState } from "react";
import Image from "next/image";
import featuresTabData from "./features-tab-data";
import FeaturesTabItem from "./features-tab-item";

import { motion } from "framer-motion";

export default function FeaturesTabSection() {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="pt-18.5 pb-20 lg:pb-22.5">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

          {/* <!-- Tab Menues Start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top border border-stroke dark:border-black bg-white dark:bg-black rounded-[10px] flex flex-wrap md:flex-nowrap md:items-center justify-center lg:gap-7.5 xl:gap-12.5 mb-15 xl:mb-21.5"
          >
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`relative cursor-pointer w-full md:w-auto border-b last:border-0 md:border-0 border-stroke dark:border-black flex items-center gap-4 py-2 xl:py-5 px-6 xl:px-13.5 ${currentTab === "tabOne"
                ? "active before:w-full before:h-1 before:bg-primary before:absolute before:bottom-0 before:left-0 before:rounded-tl-[4px] before:rounded-tr-[4px]"
                : ""
                }`}
            >
              <div className="w-12.5 h-12.5 rounded-[50%] border border-stroke dark:border-black dark:bg-black flex items-center justify-center">
                <p className="text-black dark:text-white font-medium text-metatitle3">
                  01
                </p>
              </div>
              <div className="lg:w-auto md:w-3/5">
                <h5 className="text-black dark:text-white text-sm xl:text-regular font-medium">
                  Powerful Marketing
                </h5>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`relative cursor-pointer w-full md:w-auto border-b last:border-0 md:border-0 border-stroke dark:border-black flex items-center gap-4 py-2 xl:py-5 px-6 xl:px-13.5 ${currentTab === "tabTwo"
                ? "active before:w-full before:h-1 before:bg-primary before:absolute before:bottom-0 before:left-0 before:rounded-tl-[4px] before:rounded-tr-[4px]"
                : ""
                }`}
            >
              <div className="w-12.5 h-12.5 rounded-[50%] border border-stroke dark:border-black dark:bg-black flex items-center justify-center">
                <p className="text-black dark:text-white font-medium">
                  02
                </p>
              </div>
              <div className="lg:w-auto md:w-3/5">
                <h5 className="text-black dark:text-white text-sm xl:text-regular font-medium">
                  Robust Store Management
                </h5>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabThree")}
              className={`relative cursor-pointer w-full md:w-auto border-b last:border-0 md:border-0 border-stroke dark:border-black flex items-center gap-4 py-2 xl:py-5 px-6 xl:px-13.5 ${currentTab === "tabThree"
                ? "active before:w-full before:h-1 before:bg-primary before:absolute before:bottom-0 before:left-0 before:rounded-tl-[4px] before:rounded-tr-[4px]"
                : ""
                }`}
            >
              <div className="w-12.5 h-12.5 rounded-[50%] border border-stroke dark:border-black dark:bg-blackblack flex items-center justify-center">
                <p className="text-black dark:text-white font-medium">
                  03
                </p>
              </div>
              <div className="lg:w-auto md:w-3/5">
                <h5 className="text-black dark:text-white text-sm xl:text-regular font-medium">
                  Comprehensive Customer Relationship
                </h5>
              </div>
            </div>
          </motion.div>
          {/* <!-- Tab Menues End --> */}

          {/* <!-- Tab Content Start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1154"
          >
            {featuresTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </motion.div>
          {/* <!-- Tab Content End --> */}
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

