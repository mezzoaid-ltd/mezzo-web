"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../Common/SectionHeader";
import featuresData from "./featuresData";

const SingleFeature = ({ feature }: { feature: (typeof featuresData)[0] }) => {
  const { icon, title, description } = feature;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -10,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="animate_top shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark z-40 rounded-lg border border-white bg-white p-7.5 transition-all xl:p-12.5"
    >
      <div className="relative mb-7.5 flex h-16 w-16 items-center justify-center rounded-lg bg-[#5B1B8D]">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="xl:text-itemtitle mb-5 text-xl font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="dark:text-manatee text-[#6B6B6B]">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  return (
    <>
      {/* ===== Features Start ===== */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <SectionHeader
            headerInfo={{
              title: "PLATFORM FEATURES",
              subtitle: "Everything You Need to Become Investment-Ready",
              description:
                "Our platform combines education, expert support, and intelligent tracking to guide you from idea to investment.",
            }}
          />
          {/* Section Title End */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* ===== Features End ===== */}
    </>
  );
};

export default Features;
