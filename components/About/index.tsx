"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* ===== About Start ===== */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="African entrepreneur team collaborating"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="African entrepreneur team collaborating"
                className="hidden dark:block"
                fill
              />
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
              className="animate_right md:w-1/2"
            >
              <span className="font-medium text-black uppercase dark:text-white">
                <span className="text-metatitle mr-4 mb-4 inline-flex rounded-full bg-[#5B1B8D] px-4.5 py-1 text-white uppercase">
                  Our Mission
                </span>{" "}
                Built for African Entrepreneurs
              </span>
              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
                We Understand Your
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-[#E6D5F0]">
                  {" "}
                  Unique Challenges
                </span>
              </h2>
              <p className="mb-5">
                Thousands of businesses across Africa fail to access funding—not
                because opportunities don't exist, but because they lack the
                right structure, documentation, and guidance.
              </p>
              <p>
                Mezzo Aid bridges this gap by combining education, expert
                support, and intelligent tracking on a single platform. We make
                the complex journey from idea to investment achievable for every
                African entrepreneur.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                  <p className="text-metatitle2 font-semibold text-[#5B1B8D] dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                    Structured Roadmap
                  </h3>
                  <p className="text-[#6B6B6B]">
                    Clear path from ideation to investment through 9 guided
                    quests.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="border-stroke dark:border-strokedark dark:bg-blacksection flex h-15 w-15 items-center justify-center rounded-[50%] border">
                  <p className="text-metatitle2 font-semibold text-[#5B1B8D] dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="text-metatitle2 mb-0.5 text-black dark:text-white">
                    Expert Support
                  </h3>
                  <p className="text-[#6B6B6B]">
                    Access verified Nigerian professionals when you need
                    personalized guidance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== About End ===== */}

      {/* ===== About Two Start ===== */}
      <section>
        <div className="max-w-c-1235 mx-auto overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium text-black uppercase dark:text-white">
                From Idea to Investment
              </h4>
              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
                A Clear Path to {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-[#E6D5F0]">
                  Funding Readiness
                </span>
              </h2>
              <p className="mb-5">
                Our gamified roadmap takes you through 9 comprehensive
                quests—from validating your idea to preparing for your first
                investor pitch. Each quest is designed by experts and tested
                with real Nigerian entrepreneurs.
              </p>
              <p>
                Track your progress with our Readiness Score, unlock badges as
                you hit milestones, and access 100+ templates designed
                specifically for African businesses.
              </p>
              <div>
                <a
                  href="https://app.mezzoaid.com/signup/entrepreneur"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-[#5B1B8D] hover:text-[#7B2CBF] dark:text-white dark:hover:text-[#7B2CBF]"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Start Your Journey Free
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-02.svg"
                alt="Business planning session"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-02.svg"
                alt="Business planning session"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== About Two End ===== */}
    </>
  );
};

export default About;
