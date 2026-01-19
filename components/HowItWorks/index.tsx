"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { tabsData } from "../FeaturesTab/featuresTabData";

const HowItWorks = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* ===== How It Works Start ===== */}
      <section className="relative pt-18.5 pb-20 lg:pb-22.5">
        <div className="max-w-c-1390 relative mx-auto px-4 md:px-8 2xl:px-0">
          <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
            <Image
              fill
              className="dark:hidden"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted Shape"
            />
            <Image
              fill
              className="hidden dark:block"
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted Shape"
            />
          </div>

          {/* Section Header */}
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
            className="animate_top mx-auto mb-12.5 text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
              <span className="text-sectiontitle font-medium text-white">
                HOW IT WORKS
              </span>
            </div>
            <h2 className="xl:text-sectiontitle3 mx-auto mb-4 text-3xl font-bold text-black md:w-4/5 xl:w-1/2 dark:text-white">
              Three Simple Steps to Funding Readiness
            </h2>
            <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5 xl:w-[46%]">
              Our proven process takes you from idea to investment-ready
              business through structured guidance and expert support.
            </p>
          </motion.div>

          {/* Tab Menus Start */}
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
            className="animate_top border-stroke shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 mb-15 flex flex-wrap justify-center rounded-[10px] border bg-white md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
          >
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`border-stroke dark:border-strokedark relative flex w-full cursor-pointer items-center gap-4 border-b px-6 py-2 last:border-0 md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabOne"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-[#5B1B8D]"
                  : ""
              }`}
            >
              <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border">
                <p
                  className={`text-metatitle3 font-medium ${
                    currentTab === "tabOne"
                      ? "text-[#5B1B8D]"
                      : "text-black dark:text-white"
                  }`}
                >
                  01
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="xl:text-regular text-sm font-medium text-black dark:text-white">
                  Start Your Quest
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`border-stroke dark:border-strokedark relative flex w-full cursor-pointer items-center gap-4 border-b px-6 py-2 last:border-0 md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabTwo"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-[#5B1B8D]"
                  : ""
              }`}
            >
              <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border">
                <p
                  className={`text-metatitle3 font-medium ${
                    currentTab === "tabTwo"
                      ? "text-[#5B1B8D]"
                      : "text-black dark:text-white"
                  }`}
                >
                  02
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="xl:text-regular text-sm font-medium text-black dark:text-white">
                  Build & Learn
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabThree")}
              className={`border-stroke dark:border-strokedark relative flex w-full cursor-pointer items-center gap-4 border-b px-6 py-2 last:border-0 md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabThree"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-[#5B1B8D]"
                  : ""
              }`}
            >
              <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border">
                <p
                  className={`text-metatitle3 font-medium ${
                    currentTab === "tabThree"
                      ? "text-[#5B1B8D]"
                      : "text-black dark:text-white"
                  }`}
                >
                  03
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="xl:text-regular text-sm font-medium text-black dark:text-white">
                  Get Expert Help
                </button>
              </div>
            </div>
          </motion.div>
          {/* Tab Menus End */}

          {/* Tab Content Start */}
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
            className="animate_top max-w-c-1154 mx-auto"
          >
            {tabsData.map((tab) => (
              <div
                className={tab.id === currentTab ? "block" : "hidden"}
                key={tab.id}
              >
                <div className="flex items-center gap-8 lg:gap-19">
                  <div className="md:w-1/2">
                    <h2 className="xl:text-sectiontitle2 mb-7 text-3xl font-bold text-black dark:text-white">
                      {tab.title}
                    </h2>
                    <p className="mb-5 text-[#6B6B6B]">{tab.desc1}</p>
                    <p className="w-11/12 text-[#6B6B6B]">{tab.desc2}</p>
                  </div>
                  <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
                    <Image
                      src={tab.image}
                      alt={tab.title}
                      fill
                      className="dark:hidden"
                    />
                    <Image
                      src={tab.imageDark}
                      alt={tab.title}
                      fill
                      className="hidden dark:block"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          {/* Tab Content End */}
        </div>
      </section>
      {/* ===== How It Works End ===== */}
    </>
  );
};

export default HowItWorks;
