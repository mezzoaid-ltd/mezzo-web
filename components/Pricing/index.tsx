"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <>
      {/* ===== Pricing Table Start ===== */}
      <section
        id="pricing"
        className="overflow-hidden pt-15 pb-20 lg:pb-25 xl:pb-30"
      >
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          {/* Section Title Start */}
          <div className="animate_top mx-auto text-center">
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="mx-auto text-center"
            >
              <div className="mb-4 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
                <span className="text-sectiontitle font-medium text-white">
                  PRICING
                </span>
              </div>
              <h2 className="xl:text-sectiontitle3 mx-auto mb-4 text-3xl font-bold text-black md:w-4/5 xl:w-1/2 dark:text-white">
                Free for Entrepreneurs, Pay Only for Expert Help
              </h2>
              <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5 xl:w-[46%]">
                Access our complete platform at no cost. Only pay when you book
                expert consultations.
              </p>
            </motion.div>
          </div>
          {/* Section Title End */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* Free Tier */}
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
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top group shadow-solid-10 dark:border-strokedark relative rounded-lg border-2 border-[#5B1B8D] bg-[#5B1B8D] p-7.5 md:w-[45%] lg:w-1/2 xl:p-12.5 dark:shadow-none"
            >
              <div className="text-metatitle absolute top-7.5 -right-3.5 -rotate-90 rounded-tl-full rounded-bl-full bg-white px-4.5 py-1.5 font-medium text-[#5B1B8D] uppercase">
                Free Forever
              </div>

              <h3 className="xl:text-sectiontitle3 mb-7.5 text-3xl font-bold text-white">
                ₦0 <span className="text-regular text-white/80">/forever</span>
              </h3>
              <h4 className="text-para2 mb-2.5 font-medium text-white">
                For Entrepreneurs
              </h4>
              <p className="text-white/90">
                Everything you need to build a fundable business.
              </p>

              <div className="mt-9 border-t border-white/20 pt-9 pb-12.5">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Access all 9 structured quests
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Download 100+ business templates
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Track your Readiness Score
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Earn badges and achievements
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Community support and forums
                  </li>
                  <li className="flex items-start gap-3 text-white">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Browse expert directory
                  </li>
                </ul>
              </div>

              <a
                href="https://app.mezzoaid.com/signup/entrepreneur"
                className="group/btn inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-[#5B1B8D] transition-all duration-300 hover:bg-white/90"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get Started Free
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Expert Marketplace Pricing */}
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
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_top group border-stroke shadow-solid-10 dark:border-strokedark dark:bg-blacksection relative rounded-lg border bg-white p-7.5 md:w-[45%] lg:w-1/2 xl:p-12.5 dark:shadow-none"
            >
              <h3 className="xl:text-sectiontitle3 mb-7.5 text-3xl font-bold text-black dark:text-white">
                Pay As You Go
              </h3>
              <h4 className="text-para2 mb-2.5 font-medium text-black dark:text-white">
                Expert Consultations
              </h4>
              <p className="text-[#6B6B6B]">
                Book 1-on-1 sessions with verified experts when you need
                personalized guidance.
              </p>

              <div className="border-stroke dark:border-strokedark mt-9 border-t pt-9 pb-12.5">
                <ul className="space-y-4">
                  <li className="dark:text-manatee text-black">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-medium text-black dark:text-white">
                        Legal Consultation
                      </span>
                      <span className="text-[#5B1B8D]">₦15K - ₦50K/hr</span>
                    </div>
                    <p className="text-sm text-[#6B6B6B]">
                      Business registration, contracts, compliance
                    </p>
                  </li>
                  <li className="dark:text-manatee text-black">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-medium text-black dark:text-white">
                        Financial Planning
                      </span>
                      <span className="text-[#5B1B8D]">
                        ₦20K - ₦75K/session
                      </span>
                    </div>
                    <p className="text-sm text-[#6B6B6B]">
                      Bookkeeping, tax strategy, financial models
                    </p>
                  </li>
                  <li className="dark:text-manatee text-black">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-medium text-black dark:text-white">
                        Business Strategy
                      </span>
                      <span className="text-[#5B1B8D]">
                        ₦25K - ₦100K/session
                      </span>
                    </div>
                    <p className="text-sm text-[#6B6B6B]">
                      Market research, competitive analysis, growth plans
                    </p>
                  </li>
                  <li className="dark:text-manatee text-black">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="font-medium text-black dark:text-white">
                        Pitch Deck Review
                      </span>
                      <span className="text-[#5B1B8D]">
                        ₦30K - ₦80K/session
                      </span>
                    </div>
                    <p className="text-sm text-[#6B6B6B]">
                      Presentation polish, investor readiness
                    </p>
                  </li>
                </ul>

                <div className="mt-6 rounded-lg bg-[#E6D5F0] p-4">
                  <p className="text-sm text-[#6B6B6B]">
                    <span className="font-medium text-black">Note:</span> Prices
                    set by individual experts. Platform commission: 15%.
                    Transparent pricing, no hidden fees.
                  </p>
                </div>
              </div>

              <a
                href="https://app.mezzoaid.com/marketplace"
                className="group/btn inline-flex w-full items-center justify-center gap-2.5 rounded-full border-2 border-[#5B1B8D] px-6 py-3 font-medium text-[#5B1B8D] transition-all duration-300 hover:bg-[#5B1B8D] hover:text-white dark:text-white dark:hover:bg-[#5B1B8D]"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Browse Experts
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== Pricing Table End ===== */}
    </>
  );
};

export default Pricing;
