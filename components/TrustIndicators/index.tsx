"use client";
import React from "react";
import { motion } from "framer-motion";
import { metrics } from "./trustindicatorData";

const TrustIndicators = () => {
  return (
    <>
      {/* ===== Trust Indicators Start ===== --> */}
      <section className="border-stroke bg-alabaster dark:border-strokedark border-y py-11 dark:bg-black">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-2 gap-7.5 md:grid-cols-4 lg:gap-12.5">
            {metrics.map((metric) => (
              <motion.div
                key={metric.id}
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
                transition={{ duration: 0.5, delay: metric.delay }}
                viewport={{ once: true }}
                className="animate_top text-center"
              >
                <h3 className="xl:text-sectiontitle3 mb-2.5 text-3xl font-bold text-[#5B1B8D] dark:text-white">
                  {metric.number}
                </h3>
                <p className="dark:text-manatee lg:text-para2 text-base text-[#6B6B6B]">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== Trust Indicators End ===== --> */}
    </>
  );
};

export default TrustIndicators;
