"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25">
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-32.5">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left md:w-1/2"
          >
            <div className="mb-5 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
              <span className="text-sm font-medium text-white">
                ABOUT MEZZO AID
              </span>
            </div>
            <h1 className="xl:text-hero mb-5 text-3xl font-bold text-black dark:text-white">
              Empowering{" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-[#E6D5F0]">
                African Entrepreneurs
              </span>{" "}
              to Build Fundable Businesses
            </h1>
            <p className="mb-7.5 text-lg text-[#6B6B6B]">
              We're on a mission to bridge the gap between brilliant business
              ideas and investment capital by providing structured guidance,
              expert support, and a clear path to funding readiness.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="https://app.mezzoaid.com/signup/entrepreneur"
                className="inline-flex items-center justify-center rounded-full bg-[#5B1B8D] px-7.5 py-3.5 font-medium text-white transition-all hover:bg-[#7B2CBF]"
              >
                Join Us Today
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#5B1B8D] px-7.5 py-3.5 font-medium text-[#5B1B8D] transition-all hover:bg-[#5B1B8D] hover:text-white"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right relative mx-auto aspect-[700/600] w-full md:w-1/2"
          >
            <Image
              src="/images/hero/about-hero.svg"
              alt="About Mezzo Aid"
              fill
              className="dark:hidden"
            />
            <Image
              src="/images/hero/about-hero-dark.svg"
              alt="About Mezzo Aid"
              fill
              className="hidden dark:block"
            />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="animate_top mt-15 grid grid-cols-2 gap-7.5 lg:grid-cols-4"
        >
          {[
            { value: "1,200+", label: "Entrepreneurs Registered" },
            { value: "850+", label: "Quests Completed" },
            { value: "₦50M+", label: "Capital Raised" },
            { value: "50+", label: "Verified Experts" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="xl:text-sectiontitle3 mb-2 text-3xl font-bold text-[#5B1B8D]">
                {stat.value}
              </p>
              <p className="text-[#6B6B6B]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
