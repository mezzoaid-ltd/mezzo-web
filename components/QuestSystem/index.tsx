"use client";
import { motion } from "framer-motion";

const quests = [
  {
    id: 1,
    title: "Quest I: Idea Validation",
    description:
      "Validate your business idea through customer discovery and market research.",
    duration: "2-3 weeks",
    activities: [
      "Customer interviews",
      "Market analysis",
      "Problem validation",
      "Solution testing",
    ],
    icon: "🎯",
  },
  {
    id: 2,
    title: "Quest II: Legal & Operational Foundations",
    description: "Register your business and set up proper legal structure.",
    duration: "2-4 weeks",
    activities: [
      "Business registration",
      "Tax setup",
      "Banking",
      "Basic contracts",
    ],
    icon: "⚖️",
  },
  {
    id: 3,
    title: "Quest III: Business Model Design",
    description: "Create a sustainable revenue model for your business.",
    duration: "2-3 weeks",
    activities: [
      "Revenue streams",
      "Cost structure",
      "Value proposition",
      "Pricing strategy",
    ],
    icon: "💼",
  },
  {
    id: 4,
    title: "Quest IV: Financial Planning",
    description: "Build financial projections and understand your numbers.",
    duration: "3-4 weeks",
    activities: [
      "Financial statements",
      "Projections",
      "Break-even analysis",
      "Bookkeeping setup",
    ],
    icon: "💰",
  },
  {
    id: 5,
    title: "Quest V: Market Strategy",
    description: "Define your target market and go-to-market strategy.",
    duration: "2-3 weeks",
    activities: [
      "Market segmentation",
      "Positioning",
      "Marketing channels",
      "Sales strategy",
    ],
    icon: "📊",
  },
  {
    id: 6,
    title: "Quest VI: Product/Service Development",
    description: "Build your MVP or refine your service offering.",
    duration: "4-6 weeks",
    activities: [
      "MVP development",
      "Testing",
      "Iteration",
      "Customer feedback",
    ],
    icon: "🛠️",
  },
  {
    id: 7,
    title: "Quest VII: Team & Operations",
    description: "Build your team and streamline operations.",
    duration: "2-3 weeks",
    activities: [
      "Hiring strategy",
      "Roles definition",
      "Processes",
      "Culture building",
    ],
    icon: "👥",
  },
  {
    id: 8,
    title: "Quest VIII: Metrics & Tracking",
    description: "Set up systems to track your business performance.",
    duration: "2-3 weeks",
    activities: [
      "KPI setup",
      "Dashboard creation",
      "Reporting systems",
      "Data analysis",
    ],
    icon: "📈",
  },
  {
    id: 9,
    title: "Quest IX: Investor Readiness",
    description: "Prepare your pitch deck and funding materials.",
    duration: "3-4 weeks",
    activities: [
      "Pitch deck",
      "Executive summary",
      "Financial ask",
      "Investor targeting",
    ],
    icon: "🚀",
  },
];

const QuestSystem = () => {
  return (
    <section id="quest-system" className="py-20 lg:py-25">
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
            <span className="text-sm font-medium text-white">THE 9 QUESTS</span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Your Complete Funding Readiness Journey
          </h2>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            Each quest builds on the last, taking you from idea validation to
            investor pitch. Complete them at your own pace.
          </p>
        </motion.div>

        {/* Quest Cards */}
        <div className="grid gap-7.5 md:grid-cols-2 lg:grid-cols-3">
          {quests.map((quest, index) => (
            <motion.div
              key={quest.id}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="animate_top border-stroke shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white p-7.5 transition-all"
            >
              <div className="mb-5 flex h-15 w-15 items-center justify-center rounded-full bg-[#E6D5F0]">
                <span className="text-3xl">{quest.icon}</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                {quest.title}
              </h3>
              <p className="mb-4 text-[#6B6B6B]">{quest.description}</p>
              <div className="mb-4 flex items-center gap-2 text-sm text-[#6B6B6B]">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{quest.duration}</span>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-black dark:text-white">
                  Key Activities:
                </p>
                <ul className="space-y-1">
                  {quest.activities.slice(0, 3).map((activity, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#6B6B6B]"
                    >
                      <span className="mt-1 text-[#5B1B8D]">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                  {quest.activities.length > 3 && (
                    <li className="text-sm text-[#5B1B8D]">
                      +{quest.activities.length - 3} more
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top mt-12.5 text-center"
        >
          <a
            href="https://app.mezzoaid.com/signup/entrepreneur"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#5B1B8D] px-7.5 py-3.5 font-medium text-white transition-all hover:bg-[#7B2CBF]"
          >
            Start Quest I Free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default QuestSystem;
