"use client";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Sign Up & Assess",
    description:
      "Create your free account and complete our initial readiness assessment to understand where you are in your journey.",
    icon: "📝",
    duration: "5 minutes",
  },
  {
    id: 2,
    title: "Start Your Quests",
    description:
      "Begin with Quest I and work through our structured 9-quest system. Each quest builds on the previous one.",
    icon: "🎯",
    duration: "2-4 weeks per quest",
  },
  {
    id: 3,
    title: "Track Your Progress",
    description:
      "Watch your Readiness Score climb as you complete activities. Earn badges and unlock new resources along the way.",
    icon: "📊",
    duration: "Real-time updates",
  },
  {
    id: 4,
    title: "Get Expert Help",
    description:
      "Book consultations with verified professionals when you need personalized guidance on specific challenges.",
    icon: "👨‍💼",
    duration: "As needed",
  },
  {
    id: 5,
    title: "Become Investor-Ready",
    description:
      "Complete Quest IX with your polished pitch deck and be ready to confidently approach investors for funding.",
    icon: "🚀",
    duration: "6-9 months total",
  },
];

const JourneySteps = () => {
  return (
    <section className="dark:bg-blacksection relative overflow-hidden bg-[#E6D5F0] py-20 lg:py-25">
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
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
            <span className="text-sm font-medium text-white">YOUR JOURNEY</span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Five Steps to Funding Readiness
          </h2>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            Here's exactly what happens from signup to your first investor
            pitch. The journey is clear, structured, and proven.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Hidden on mobile */}
          <div className="absolute top-0 left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-[#5B1B8D] lg:block" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`animate_top flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-full lg:w-5/12">
                  <div className="shadow-solid-3 rounded-lg bg-white p-7.5 dark:bg-black">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#5B1B8D]">
                        <span className="text-3xl">{step.icon}</span>
                      </div>
                      <div>
                        <span className="mb-1 block text-sm font-medium text-[#5B1B8D]">
                          Step {step.id}
                        </span>
                        <h3 className="text-xl font-semibold text-black dark:text-white">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mb-4 text-[#6B6B6B]">{step.description}</p>
                    <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
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
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Center Circle - Only visible on large screens */}
                <div className="hidden lg:block lg:w-2/12">
                  <div className="relative flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#5B1B8D] bg-white">
                      <span className="text-lg font-bold text-[#5B1B8D]">
                        {step.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden w-5/12 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top mt-15 text-center"
        >
          <p className="mb-5 text-lg font-medium text-black dark:text-white">
            Ready to start your journey?
          </p>
          <a
            href="https://app.mezzoaid.com/signup/entrepreneur"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#5B1B8D] px-7.5 py-3.5 font-medium text-white transition-all hover:bg-[#7B2CBF]"
          >
            Create Free Account
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySteps;
