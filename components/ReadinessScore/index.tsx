"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const scoreFactors = [
  {
    category: "Business Foundation",
    weight: "20%",
    includes: ["Legal registration", "Business structure", "Banking setup"],
    icon: "⚖️",
  },
  {
    category: "Financial Readiness",
    weight: "25%",
    includes: ["Financial projections", "Bookkeeping", "Revenue model"],
    icon: "💰",
  },
  {
    category: "Market Validation",
    weight: "20%",
    includes: ["Customer research", "Market analysis", "Product-market fit"],
    icon: "📊",
  },
  {
    category: "Business Planning",
    weight: "20%",
    includes: ["Business plan", "Strategy", "Operations"],
    icon: "📋",
  },
  {
    category: "Pitch Readiness",
    weight: "15%",
    includes: ["Pitch deck", "Executive summary", "Ask clarity"],
    icon: "🎯",
  },
];

const ReadinessScore = () => {
  return (
    <section className="py-20 lg:py-25">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:gap-32.5">
          {/* Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_left lg:w-1/2"
          >
            <div className="mb-4 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
              <span className="text-sm font-medium text-white">
                READINESS SCORE
              </span>
            </div>
            <h2 className="xl:text-sectiontitle3 mb-5 text-3xl font-bold text-black dark:text-white">
              Track Your Progress with Our{" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-[#E6D5F0]">
                Readiness Score
              </span>
            </h2>
            <p className="mb-7.5 text-lg text-[#6B6B6B]">
              Your Readiness Score is a 0-100% metric that shows how prepared
              your business is for investment. It's calculated across five key
              categories that investors care about most.
            </p>

            <div className="space-y-4">
              {scoreFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="animate_left border-stroke dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#E6D5F0]">
                      <span className="text-2xl">{factor.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-semibold text-black dark:text-white">
                          {factor.category}
                        </h4>
                        <span className="text-sm font-medium text-[#5B1B8D]">
                          {factor.weight}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {factor.includes.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-[#6B6B6B]"
                          >
                            <span className="mt-1 text-[#5B1B8D]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-7.5 rounded-lg bg-[#E6D5F0] p-5">
              <p className="text-sm text-[#6B6B6B]">
                <span className="font-semibold text-black dark:text-white">
                  Investor Benchmark:
                </span>{" "}
                Most investors and accelerators look for businesses with a
                Readiness Score of{" "}
                <span className="font-semibold text-[#5B1B8D]">
                  70% or higher
                </span>
                . Our quests are designed to get you there.
              </p>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right lg:w-1/2"
          >
            <div className="relative">
              {/* Score Circle Visualization */}
              <div className="mx-auto flex h-[400px] w-[400px] items-center justify-center rounded-full bg-gradient-to-br from-[#E6D5F0] to-[#D8BBF5]">
                <div className="flex h-[320px] w-[320px] flex-col items-center justify-center rounded-full bg-white text-center dark:bg-black">
                  <span className="mb-2 text-6xl font-bold text-[#5B1B8D]">
                    85%
                  </span>
                  <span className="text-lg font-medium text-black dark:text-white">
                    Readiness Score
                  </span>
                  <span className="mt-2 text-sm text-[#6B6B6B]">
                    Investor Ready!
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="shadow-solid-3 dark:bg-blacksection absolute top-10 -right-5 rounded-lg bg-white p-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">✅</span>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">
                      Quest VII
                    </p>
                    <p className="text-xs text-[#6B6B6B]">Completed</p>
                  </div>
                </div>
              </div>

              <div className="shadow-solid-3 dark:bg-blacksection absolute bottom-10 -left-5 rounded-lg bg-white p-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">
                      Badge
                    </p>
                    <p className="text-xs text-[#6B6B6B]">Financial Pro</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReadinessScore;
