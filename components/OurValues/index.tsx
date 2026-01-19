"use client";
import { motion } from "framer-motion";

const values = [
  {
    icon: "🎯",
    title: "Entrepreneur-First",
    description:
      "Every decision centers on entrepreneur success. We listen, adapt, and improve based on your feedback. Your success is our success.",
  },
  {
    icon: "💎",
    title: "Transparency",
    description:
      "Clear pricing, no hidden fees. Honest about what works and what doesn't. You deserve the truth, always.",
  },
  {
    icon: "⭐",
    title: "Quality Over Quantity",
    description:
      "Verified experts only. High-quality resources. We'd rather help 100 entrepreneurs properly than 1,000 poorly.",
  },
  {
    icon: "🌍",
    title: "Accessibility",
    description:
      "Free platform for all entrepreneurs. Nigerian context with global standards. No one gets left behind.",
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "Building a supportive ecosystem where entrepreneurs learn from and lift each other. Rise together, not alone.",
  },
  {
    icon: "🚀",
    title: "Innovation",
    description:
      "Constantly improving our platform. Embracing new tools and methods. Always evolving to serve you better.",
  },
];

const OurValues = () => {
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
            <span className="text-sm font-medium text-white">OUR VALUES</span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            What We Stand For
          </h2>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            These six core values guide everything we do - from product
            decisions to how we support entrepreneurs daily.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid gap-7.5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
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
              className="animate_top border-stroke shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white p-7.5 transition-all"
            >
              {/* Icon */}
              <div className="mb-5 flex h-15 w-15 items-center justify-center rounded-full bg-[#E6D5F0]">
                <span className="text-3xl">{value.icon}</span>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B6B6B]">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="animate_top mt-12.5 text-center"
        >
          <div className="dark:bg-blacksection mx-auto max-w-3xl rounded-lg bg-[#E6D5F0] p-7.5">
            <p className="text-lg text-black italic dark:text-white">
              "Our values aren't just words on a page - they're the principles
              we live by every day. They guide how we build our product, support
              our community, and make decisions."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurValues;
