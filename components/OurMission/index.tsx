"use client";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <section className="dark:bg-blacksection bg-[#E6D5F0] py-20 lg:py-25">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        <div className="grid gap-12.5 lg:grid-cols-2">
          {/* Mission */}
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
            <div className="mb-5 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
              <span className="text-sm font-medium text-white">
                OUR MISSION
              </span>
            </div>
            <h2 className="xl:text-sectiontitle3 mb-5 text-3xl font-bold text-black dark:text-white">
              Empowering 10,000 Entrepreneurs by 2027
            </h2>
            <p className="mb-5 text-lg text-[#6B6B6B]">
              To empower 10,000 African entrepreneurs to build fundable
              businesses by 2027 through structured guidance, expert support,
              and a clear path to investment readiness.
            </p>

            <div className="space-y-4">
              {[
                "Structured quest system removes guesswork",
                "Verified experts provide personalized guidance",
                "Free forever - no barriers to entry",
                "Built by entrepreneurs, for entrepreneurs",
              ].map((point, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#5B1B8D]">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-[#6B6B6B]">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right"
          >
            <div className="mb-5 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
              <span className="text-sm font-medium text-white">OUR VISION</span>
            </div>
            <h2 className="xl:text-sectiontitle3 mb-5 text-3xl font-bold text-black dark:text-white">
              A Future Where Every Idea Has a Chance
            </h2>
            <p className="mb-7.5 text-lg text-[#6B6B6B]">
              We envision a future where every African entrepreneur has access
              to the tools, knowledge, and support needed to turn their ideas
              into funded ventures. Where brilliant business ideas don't fail
              due to lack of guidance or connections, but thrive with the right
              support system.
            </p>

            <div className="shadow-solid-3 rounded-lg bg-white p-7.5 dark:bg-black">
              <h4 className="mb-4 font-semibold text-black dark:text-white">
                What Drives Us Daily
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#5B1B8D]">•</span>
                  <span className="text-[#6B6B6B]">
                    Seeing entrepreneurs transform from uncertain to confident
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#5B1B8D]">•</span>
                  <span className="text-[#6B6B6B]">
                    Celebrating every quest completed and funding secured
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#5B1B8D]">•</span>
                  <span className="text-[#6B6B6B]">
                    Building a thriving community of ambitious builders
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#5B1B8D]">•</span>
                  <span className="text-[#6B6B6B]">
                    Contributing to Africa's entrepreneurial ecosystem
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
