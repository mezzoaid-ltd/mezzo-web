"use client";
import { motion } from "framer-motion";

const pricingCategories = [
  {
    category: "Legal Consultations",
    icon: "⚖️",
    priceRange: "₦15,000 - ₦50,000",
    unit: "per hour",
    services: [
      "CAC registration guidance",
      "Contract review & drafting",
      "Intellectual property advice",
      "Regulatory compliance",
    ],
  },
  {
    category: "Financial Planning",
    icon: "💰",
    priceRange: "₦20,000 - ₦75,000",
    unit: "per session",
    services: [
      "Financial projections help",
      "Bookkeeping setup",
      "Tax planning & strategy",
      "Investment readiness audit",
    ],
  },
  {
    category: "Business Strategy",
    icon: "💼",
    priceRange: "₦25,000 - ₦100,000",
    unit: "per session",
    services: [
      "Business model refinement",
      "Market entry strategy",
      "Competitive analysis",
      "Growth planning",
    ],
  },
  {
    category: "Marketing & Growth",
    icon: "📱",
    priceRange: "₦20,000 - ₦60,000",
    unit: "per session",
    services: [
      "Digital marketing strategy",
      "Brand positioning",
      "Customer acquisition plan",
      "Social media guidance",
    ],
  },
  {
    category: "Product & Technology",
    icon: "💻",
    priceRange: "₦30,000 - ₦90,000",
    unit: "per session",
    services: [
      "MVP development guidance",
      "Technical architecture review",
      "Product strategy",
      "UX/UI consultation",
    ],
  },
  {
    category: "Pitch & Fundraising",
    icon: "🚀",
    priceRange: "₦30,000 - ₦80,000",
    unit: "per session",
    services: [
      "Pitch deck review",
      "Investor preparation",
      "Fundraising strategy",
      "Mock pitch sessions",
    ],
  },
];

const Pricing = () => {
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
              TRANSPARENT PRICING
            </span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Expert Consultation Rates
          </h2>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            Pay only for sessions you book. No subscriptions, no hidden fees.
            Each expert sets their own rates based on experience and
            specialization.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="mb-12.5 grid gap-7.5 md:grid-cols-2 lg:grid-cols-3">
          {pricingCategories.map((item, index) => (
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
              {/* Icon & Category */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E6D5F0]">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {item.category}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-5 rounded-lg bg-[#E6D5F0] p-4 text-center">
                <p className="mb-1 text-2xl font-bold text-[#5B1B8D]">
                  {item.priceRange}
                </p>
                <p className="text-sm text-[#6B6B6B]">{item.unit}</p>
              </div>

              {/* Services */}
              <div>
                <p className="mb-3 text-sm font-medium text-black dark:text-white">
                  What You Get:
                </p>
                <ul className="space-y-2">
                  {item.services.map((service, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#6B6B6B]"
                    >
                      <span className="mt-1 text-[#5B1B8D]">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How Pricing Works */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="animate_top dark:bg-blacksection rounded-lg bg-[#E6D5F0] p-7.5 lg:p-12.5"
        >
          <h3 className="mb-6 text-center text-2xl font-bold text-black dark:text-white">
            How Our Pricing Works
          </h3>

          <div className="grid gap-7.5 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#5B1B8D] text-xl font-bold text-white">
                1
              </div>
              <h4 className="mb-2 font-semibold text-black dark:text-white">
                Expert Sets Rate
              </h4>
              <p className="text-sm text-[#6B6B6B]">
                Each expert determines their hourly or per-session rate based on
                their experience and market demand.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#5B1B8D] text-xl font-bold text-white">
                2
              </div>
              <h4 className="mb-2 font-semibold text-black dark:text-white">
                You Pay Platform
              </h4>
              <p className="text-sm text-[#6B6B6B]">
                Book and pay through our secure platform. We hold funds until
                after your successful session.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#5B1B8D] text-xl font-bold text-white">
                3
              </div>
              <h4 className="mb-2 font-semibold text-black dark:text-white">
                15% Platform Fee
              </h4>
              <p className="text-sm text-[#6B6B6B]">
                We charge a 15% commission (included in the price you see). This
                covers payment processing, support, and platform maintenance.
              </p>
            </div>
          </div>

          <div className="border-stroke dark:border-strokedark mt-8 border-t pt-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 flex-shrink-0 text-[#5B1B8D]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-medium text-black dark:text-white">
                    No Subscription Required
                  </p>
                  <p className="text-sm text-[#6B6B6B]">
                    Pay only for sessions you book. No monthly fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 flex-shrink-0 text-[#5B1B8D]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-medium text-black dark:text-white">
                    Money-Back Guarantee
                  </p>
                  <p className="text-sm text-[#6B6B6B]">
                    Not satisfied? Get a full refund within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 flex-shrink-0 text-[#5B1B8D]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-medium text-black dark:text-white">
                    Flexible Cancellation
                  </p>
                  <p className="text-sm text-[#6B6B6B]">
                    Free cancellation up to 24 hours before session.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="h-6 w-6 flex-shrink-0 text-[#5B1B8D]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-medium text-black dark:text-white">
                    Package Discounts
                  </p>
                  <p className="text-sm text-[#6B6B6B]">
                    Book multiple sessions and save up to 20%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
