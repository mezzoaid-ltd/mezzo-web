"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <>
      {/* ===== CTA Start ===== */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="max-w-c-1390 dark:bg-blacksection dark:stroke-strokedark mx-auto rounded-lg bg-[#E6D5F0] px-7.5 py-12.5 md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              <h2 className="xl:text-sectiontitle4 mb-4 w-11/12 text-3xl font-bold text-black dark:text-white">
                Ready to Make Your Business Fundable?
              </h2>
              <p className="text-[#6B6B6B]">
                Join thousands of African entrepreneurs who are building
                structured, investment-ready businesses. Start your journey
                today—it's completely free.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  width={299}
                  height={299}
                  src="/images/shape/shape-06.png"
                  alt="Decorative illustration"
                  className="hidden xl:block"
                />
                <a
                  href="https://app.mezzoaid.com/signup/entrepreneur"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#5B1B8D] px-6 py-3 font-medium text-white transition-all hover:bg-[#7B2CBF]"
                >
                  Start Your Free Journey
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-dark.svg"
                    alt="Arrow"
                    className="dark:hidden"
                  />
                  <Image
                    width={20}
                    height={20}
                    src="/images/icon/icon-arrow-light.svg"
                    alt="Arrow"
                    className="hidden dark:block"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== CTA End ===== */}
    </>
  );
};

export default CTA;
