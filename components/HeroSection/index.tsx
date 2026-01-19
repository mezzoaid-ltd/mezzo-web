"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25">
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-32.5">
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
                HOW IT WORKS
              </span>
            </div>
            <h1 className="xl:text-hero mb-5 text-3xl font-bold text-black dark:text-white">
              Your Roadmap from{" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-[#E6D5F0]">
                Idea to Investment
              </span>
            </h1>
            <p className="mb-7.5 text-lg">
              Follow our structured 9-quest system designed specifically for
              African entrepreneurs. Track your progress, unlock resources, and
              get expert help when you need it.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="https://app.mezzoaid.com/signup/entrepreneur"
                className="inline-flex items-center justify-center rounded-full bg-[#5B1B8D] px-7.5 py-3.5 font-medium text-white transition-all hover:bg-[#7B2CBF]"
              >
                Start Your Journey Free
              </a>
              <a
                href="#quest-system"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#5B1B8D] px-7.5 py-3.5 font-medium text-[#5B1B8D] transition-all hover:bg-[#5B1B8D] hover:text-white"
              >
                Explore Quests
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-2">
                <Image
                  src="/images/user/user-01.png"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/images/user/user-02.png"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/images/user/user-03.png"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <p className="text-sm">
                <span className="font-semibold text-black dark:text-white">
                  850+ quests completed
                </span>{" "}
                <span className="text-[#6B6B6B]">
                  by entrepreneurs like you
                </span>
              </p>
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
            className="animate_right relative mx-auto aspect-[700/500] w-full md:w-1/2"
          >
            <Image
              src="/images/hero/how-it-works-hero.svg"
              alt="How Mezzo Aid Works"
              fill
              className="dark:hidden"
            />
            <Image
              src="/images/hero/how-it-works-hero-dark.svg"
              alt="How Mezzo Aid Works"
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
