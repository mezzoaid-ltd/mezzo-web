"use client";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Legal Experts",
    description: "Corporate lawyers, secretaries, and compliance specialists",
    icon: "⚖️",
    specializations: [
      "Business registration (CAC)",
      "Contract drafting",
      "Intellectual property",
      "Compliance & regulations",
    ],
    averageRate: "₦15,000 - ₦50,000/hr",
    experts: 12,
  },
  {
    title: "Financial Experts",
    description: "Chartered accountants, CFOs, and financial advisors",
    icon: "💰",
    specializations: [
      "Financial projections",
      "Bookkeeping setup",
      "Tax planning",
      "Financial modeling",
    ],
    averageRate: "₦20,000 - ₦75,000/session",
    experts: 15,
  },
  {
    title: "Business Strategists",
    description: "Consultants, advisors, and business coaches",
    icon: "💼",
    specializations: [
      "Business model design",
      "Market strategy",
      "Competitive analysis",
      "Growth planning",
    ],
    averageRate: "₦25,000 - ₦100,000/session",
    experts: 18,
  },
  {
    title: "Marketing Experts",
    description: "Digital marketers, brand specialists, and growth hackers",
    icon: "📱",
    specializations: [
      "Digital marketing",
      "Brand positioning",
      "Social media strategy",
      "Customer acquisition",
    ],
    averageRate: "₦20,000 - ₦60,000/session",
    experts: 10,
  },
  {
    title: "Product & Tech",
    description: "Product managers, developers, and technical advisors",
    icon: "💻",
    specializations: [
      "MVP development",
      "Product strategy",
      "Technical architecture",
      "UX/UI consultation",
    ],
    averageRate: "₦30,000 - ₦90,000/session",
    experts: 8,
  },
  {
    title: "Successful Founders",
    description: "Entrepreneurs who've raised funding and built businesses",
    icon: "🚀",
    specializations: [
      "Pitch deck review",
      "Investor preparation",
      "Fundraising strategy",
      "Founder mentorship",
    ],
    averageRate: "₦30,000 - ₦80,000/session",
    experts: 7,
  },
];

const ExpertCategories = () => {
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
              EXPERT CATEGORIES
            </span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Find the Right Expert for Your Challenge
          </h2>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            All experts are verified Nigerian professionals with proven track
            records. Browse by category to find the help you need.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid gap-7.5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
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
              className="animate_top group border-stroke shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white p-7.5 transition-all"
            >
              {/* Icon & Title */}
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#E6D5F0] transition-all group-hover:bg-[#5B1B8D]">
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-sm text-[#5B1B8D]">
                    {category.experts} Experts
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mb-5 text-[#6B6B6B]">{category.description}</p>

              {/* Specializations */}
              <div className="mb-5">
                <p className="mb-3 text-sm font-medium text-black dark:text-white">
                  Specializations:
                </p>
                <ul className="space-y-2">
                  {category.specializations.map((spec, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#6B6B6B]"
                    >
                      <span className="mt-1 text-[#5B1B8D]">✓</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rate */}
              <div className="rounded-lg bg-[#E6D5F0] p-4 text-center">
                <p className="text-xs text-[#6B6B6B]">Average Rate</p>
                <p className="font-semibold text-[#5B1B8D]">
                  {category.averageRate}
                </p>
              </div>

              {/* CTA */}
              <button className="mt-5 w-full rounded-full border-2 border-[#5B1B8D] px-6 py-2.5 font-medium text-[#5B1B8D] transition-all hover:bg-[#5B1B8D] hover:text-white">
                Browse {category.title}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="animate_top dark:bg-blacksection mt-12.5 rounded-lg bg-[#E6D5F0] p-7.5 text-center"
        >
          <p className="mb-4 text-lg font-medium text-black dark:text-white">
            Can't find the right category?
          </p>
          <p className="mb-6 text-[#6B6B6B]">
            Contact our team and we'll help match you with the perfect expert
            for your specific needs.
          </p>
          <a
            href="mailto:experts@mezzoaid.com"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#5B1B8D] px-7.5 py-3.5 font-medium text-white transition-all hover:bg-[#7B2CBF]"
          >
            Contact Expert Team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertCategories;
