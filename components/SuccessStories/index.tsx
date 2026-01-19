"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const stories = [
  {
    name: "Chioma Adeyemi",
    location: "Lagos",
    business: "Fashion Tech Startup",
    image: "/images/user/user-01.png",
    questsCompleted: 9,
    timeframe: "7 months",
    readinessScore: {
      before: "32%",
      after: "88%",
    },
    achievement: "Raised ₦5M seed funding",
    quote:
      "The quest system gave me the structure I desperately needed. I went from a rough idea to a complete pitch deck in 7 months. The Readiness Score kept me motivated—watching it climb from 32% to 88% felt amazing!",
  },
  {
    name: "Ibrahim Mohammed",
    location: "Abuja",
    business: "AgriTech Platform",
    image: "/images/user/user-02.png",
    questsCompleted: 7,
    timeframe: "5 months",
    readinessScore: {
      before: "28%",
      after: "75%",
    },
    achievement: "Accepted into accelerator program",
    quote:
      "I was stuck on financial projections for weeks. One consultation with an expert accountant through the marketplace saved me a month of work. The templates are gold.",
  },
  {
    name: "Sarah Okonkwo",
    location: "Port Harcourt",
    business: "Healthcare Services",
    image: "/images/user/user-03.png",
    questsCompleted: 9,
    timeframe: "9 months",
    readinessScore: {
      before: "35%",
      after: "92%",
    },
    achievement: "Secured ₦8M investment",
    quote:
      "The badge system sounds silly but it kept me going. Each time I unlocked a new badge, it felt like real progress. Now I'm investor-ready and actually got funded!",
  },
];

const SuccessStories = () => {
  return (
    <section className="dark:bg-blacksection bg-[#E6D5F0] py-20 lg:py-25">
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
              SUCCESS STORIES
            </span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Real Results from Real Entrepreneurs
          </h2>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            These founders used our quest system to go from idea to investment.
            Here's how they did it.
          </p>
        </motion.div>

        {/* Success Stories */}
        <div className="grid gap-7.5 lg:grid-cols-3">
          {stories.map((story, index) => (
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
              className="animate_top border-stroke shadow-solid-3 dark:border-strokedark rounded-lg border bg-white p-7.5 dark:bg-black"
            >
              {/* Profile */}
              <div className="mb-6 flex items-center gap-4">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-black dark:text-white">
                    {story.name}
                  </h4>
                  <p className="text-sm text-[#6B6B6B]">{story.location}</p>
                  <p className="text-sm text-[#5B1B8D]">{story.business}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="mb-5 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#E6D5F0] p-4 text-center">
                  <p className="mb-1 text-2xl font-bold text-[#5B1B8D]">
                    {story.questsCompleted}/9
                  </p>
                  <p className="text-xs text-[#6B6B6B]">Quests Completed</p>
                </div>
                <div className="rounded-lg bg-[#E6D5F0] p-4 text-center">
                  <p className="mb-1 text-2xl font-bold text-[#5B1B8D]">
                    {story.timeframe}
                  </p>
                  <p className="text-xs text-[#6B6B6B]">Timeframe</p>
                </div>
              </div>

              {/* Readiness Score Progress */}
              <div className="border-stroke dark:border-strokedark mb-5 rounded-lg border p-4">
                <p className="mb-3 text-sm font-medium text-black dark:text-white">
                  Readiness Score Progress
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <p className="text-xl font-bold text-[#6B6B6B]">
                      {story.readinessScore.before}
                    </p>
                    <p className="text-xs text-[#6B6B6B]">Before</p>
                  </div>
                  <svg
                    className="h-6 w-6 text-[#5B1B8D]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-center">
                    <p className="text-xl font-bold text-[#5B1B8D]">
                      {story.readinessScore.after}
                    </p>
                    <p className="text-xs text-[#6B6B6B]">After</p>
                  </div>
                </div>
              </div>

              {/* Achievement */}
              <div className="mb-5 rounded-lg bg-[#5B1B8D] p-4 text-center">
                <p className="text-sm font-medium text-white">
                  🎉 {story.achievement}
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-[#5B1B8D] pl-4 text-[#6B6B6B] italic">
                "{story.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="animate_top mt-12.5 text-center"
        >
          <p className="mb-5 text-lg font-medium text-black dark:text-white">
            Ready to write your own success story?
          </p>
          <a
            href="https://app.mezzoaid.com/signup/entrepreneur"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#5B1B8D] px-7.5 py-3.5 font-medium text-white transition-all hover:bg-[#7B2CBF]"
          >
            Start Your Journey Free
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
