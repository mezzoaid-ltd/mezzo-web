"use client";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2019",
    title: "The Problem",
    description:
      "Identified the gap between great business ideas and investment capital in Africa",
  },
  {
    year: "2020",
    title: "Research & Development",
    description:
      "Interviewed 200+ entrepreneurs and investors to understand real challenges",
  },
  {
    year: "2021",
    title: "Beta Launch",
    description:
      "Launched beta with 50 entrepreneurs in Lagos. Collected feedback and iterated.",
  },
  {
    year: "2022",
    title: "Quest System",
    description:
      "Introduced our structured 9-quest system based on investor requirements",
  },
  {
    year: "2023",
    title: "Expert Marketplace",
    description:
      "Launched professional marketplace connecting entrepreneurs with verified experts",
  },
  {
    year: "2024",
    title: "1,000+ Milestone",
    description:
      "Crossed 1,000 registered entrepreneurs and ₦50M in funding secured",
  },
  {
    year: "2025",
    title: "Expansion",
    description:
      "Expanding to Ghana, Kenya, and South Africa. Building for 10,000+ entrepreneurs",
  },
];

const OurStory = () => {
  return (
    <section className="py-20 lg:py-25">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
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
            <span className="text-sm font-medium text-white">OUR STORY</span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            How Mezzo Aid Came to Be
          </h2>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            Our journey from identifying a critical problem to building a
            platform that's helped 1,200+ entrepreneurs build fundable
            businesses.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 bg-[#5B1B8D]/30 lg:block" />
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`animate_top flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="w-full lg:w-5/12">
                  <div className="border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white p-7.5">
                    <div className="mb-3 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5B1B8D] text-lg font-bold text-white">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-black dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[#6B6B6B]">{item.description}</p>
                  </div>
                </div>
                <div className="hidden lg:block lg:w-2/12">
                  <div className="mx-auto flex h-4 w-4 items-center justify-center rounded-full border-4 border-[#5B1B8D] bg-white" />
                </div>
                <div className="hidden w-5/12 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
