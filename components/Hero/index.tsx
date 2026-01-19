"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* ===== Hero Section Start ===== */}
      <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            {/* Left Content */}
            <div className="md:w-1/2">
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_left"
              >
                <span className="text-metatitle mb-4.5 inline-flex rounded-full bg-[#5B1B8D] px-4.5 py-1.5 font-medium text-white">
                  Empowering African Entrepreneurs
                </span>

                <h1 className="xl:text-hero mb-5 pr-16 text-3xl font-bold text-black dark:text-white">
                  Turn Your Business Idea Into a{" "}
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-[#E6D5F0]">
                    Funded Reality
                  </span>
                </h1>

                <p className="mb-7.5 text-lg">
                  Join the Mezzo Aid roadmap and unlock your funding potential
                  through guided quests, expert support, and proven frameworks.
                  Track your progress with our Readiness Score.
                </p>

                <div className="flex flex-wrap gap-5">
                  <Link
                    href="https://app.mezzoaid.com/signup/entrepreneur"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#5B1B8D] px-6 py-3 font-medium text-white transition-all hover:bg-[#7B2CBF] hover:shadow-lg"
                  >
                    Start Your Journey - Free
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z" />
                    </svg>
                  </Link>

                  <Link
                    href="/how-it-works"
                    className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#5B1B8D] px-6 py-3 font-medium text-[#5B1B8D] transition-all hover:bg-[#5B1B8D] hover:text-white"
                  >
                    See How It Works
                  </Link>
                </div>

                <div className="mt-10 flex items-center gap-5">
                  <div className="flex -space-x-2">
                    <Image
                      src="/images/hero/entrepreneur-1.png"
                      alt="Entrepreneur"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="/images/hero/entrepreneur-2.png"
                      alt="Entrepreneur"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="/images/hero/entrepreneur-3.png"
                      alt="Entrepreneur"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-black dark:text-white">
                      Join 1,000+ entrepreneurs
                    </p>
                    <p className="text-sm text-[#6B6B6B]">
                      Building fundable businesses across Africa
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right hidden md:block md:w-1/2"
            >
              <div className="relative aspect-[600/400]">
                <Image
                  src="/images/hero/mezzo-hero-light.png"
                  alt="African entrepreneur working on business plan"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/images/hero/mezzo-hero-dark.png"
                  alt="African entrepreneur working on business plan"
                  fill
                  className="hidden object-contain dark:block"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== Hero Section End ===== */}
    </>
  );
};

export default Hero;
