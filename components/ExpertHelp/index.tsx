"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const expertScenarios = [
  {
    quest: "Quest II",
    title: "Legal & Operational",
    challenge: "Need help with CAC registration or contracts?",
    expertType: "Corporate Lawyer",
    typicalCost: "₦15,000 - ₦50,000",
    icon: "⚖️",
  },
  {
    quest: "Quest IV",
    title: "Financial Planning",
    challenge: "Struggling with financial projections or bookkeeping?",
    expertType: "Chartered Accountant",
    typicalCost: "₦20,000 - ₦75,000",
    icon: "💰",
  },
  {
    quest: "Quest V",
    title: "Market Strategy",
    challenge: "Not sure how to position or market your business?",
    expertType: "Business Strategist",
    typicalCost: "₦25,000 - ₦100,000",
    icon: "📊",
  },
  {
    quest: "Quest IX",
    title: "Pitch Deck",
    challenge: "Want feedback on your investor pitch?",
    expertType: "Successful Founder",
    typicalCost: "₦30,000 - ₦80,000",
    icon: "🎯",
  },
];

const ExpertHelp = () => {
  return (
    <section className="py-20 lg:py-25">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        {/* Section Header */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mb-15 text-center"
        >
          <div className="mb-4 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
            <span className="text-sm font-medium text-white">
              EXPERT SUPPORT
            </span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Get Personalized Help When You Need It
          </h2>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            While our quests guide you step-by-step, sometimes you need expert
            advice. Here's when entrepreneurs typically book consultations.
          </p>
        </motion.div>

        {/* Expert Scenarios Grid */}
        <div className="mb-15 grid gap-7.5 md:grid-cols-2">
          {expertScenarios.map((scenario, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="animate_top border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white p-7.5"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#E6D5F0]">
                  <span className="text-3xl">{scenario.icon}</span>
                </div>
                <div>
                  <span className="mb-1 block text-sm font-medium text-[#5B1B8D]">
                    {scenario.quest}
                  </span>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {scenario.title}
                  </h3>
                </div>
              </div>

              <p className="mb-4 text-base font-medium text-black dark:text-white">
                {scenario.challenge}
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-[#E6D5F0] p-3">
                  <span className="text-sm font-medium text-black dark:text-white">
                    Expert Type:
                  </span>
                  <span className="text-sm text-[#5B1B8D]">
                    {scenario.expertType}
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-[#E6D5F0] p-3">
                  <span className="text-sm font-medium text-black dark:text-white">
                    Typical Cost:
                  </span>
                  <span className="text-sm text-[#5B1B8D]">
                    {scenario.typicalCost}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How Expert Consultations Work */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="animate_top dark:bg-blacksection mx-auto max-w-3xl rounded-lg bg-[#E6D5F0] p-7.5 lg:p-12.5"
        >
          <h3 className="mb-6 text-center text-2xl font-bold text-black dark:text-white">
            How Expert Consultations Work
          </h3>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#5B1B8D]">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <p className="text-sm font-medium text-black dark:text-white">
                Browse Expert Profiles
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#5B1B8D]">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <p className="text-sm font-medium text-black dark:text-white">
                Check Availability & Book
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#5B1B8D]">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <p className="text-sm font-medium text-black dark:text-white">
                Meet via Video Call
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#5B1B8D]">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <p className="text-sm font-medium text-black dark:text-white">
                Get Actionable Advice
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/experts"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#5B1B8D] px-7.5 py-3.5 font-medium text-white transition-all hover:bg-[#7B2CBF]"
            >
              Browse Expert Marketplace
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="currentColor"
              >
                <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top mt-10 text-center"
        >
          <p className="text-sm text-[#6B6B6B]">
            <span className="font-semibold text-black dark:text-white">
              Remember:
            </span>{" "}
            Expert consultations are optional. Many entrepreneurs complete all
            quests independently using our templates and resources.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertHelp;
