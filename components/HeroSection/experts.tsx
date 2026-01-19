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
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left md:w-1/2"
          >
            <div className="mb-5 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
              <span className="text-sm font-medium text-white">
                EXPERT MARKETPLACE
              </span>
            </div>
            <h1 className="xl:text-hero mb-5 text-3xl font-bold text-black dark:text-white">
              Get Personalized Guidance from{" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-[#E6D5F0]">
                Verified Experts
              </span>
            </h1>
            <p className="mb-7.5 text-lg">
              Connect with Nigerian lawyers, accountants, strategists, and
              successful founders. Book 1-on-1 video consultations to get the
              specific help you need.
            </p>

            <div className="mb-7.5 flex flex-wrap gap-5">
              <a
                href="#browse-experts"
                className="inline-flex items-center justify-center rounded-full bg-[#5B1B8D] px-7.5 py-3.5 font-medium text-white transition-all hover:bg-[#7B2CBF]"
              >
                Browse Experts
              </a>
              <a
                href="https://app.mezzoaid.com/signup/expert"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#5B1B8D] px-7.5 py-3.5 font-medium text-[#5B1B8D] transition-all hover:bg-[#5B1B8D] hover:text-white"
              >
                Become an Expert
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5">
              <div className="rounded-lg bg-[#E6D5F0] p-4 text-center">
                <p className="mb-1 text-2xl font-bold text-[#5B1B8D]">50+</p>
                <p className="text-sm text-[#6B6B6B]">Verified Experts</p>
              </div>
              <div className="rounded-lg bg-[#E6D5F0] p-4 text-center">
                <p className="mb-1 text-2xl font-bold text-[#5B1B8D]">200+</p>
                <p className="text-sm text-[#6B6B6B]">Consultations</p>
              </div>
              <div className="rounded-lg bg-[#E6D5F0] p-4 text-center">
                <p className="mb-1 text-2xl font-bold text-[#5B1B8D]">4.9</p>
                <p className="text-sm text-[#6B6B6B]">Avg Rating</p>
              </div>
            </div>
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
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right relative mx-auto aspect-[700/600] w-full md:w-1/2"
          >
            <Image
              src="/images/hero/experts-hero.svg"
              alt="Mezzo Aid Expert Marketplace"
              fill
              className="dark:hidden"
            />
            <Image
              src="/images/hero/experts-hero-dark.svg"
              alt="Mezzo Aid Expert Marketplace"
              fill
              className="hidden dark:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
