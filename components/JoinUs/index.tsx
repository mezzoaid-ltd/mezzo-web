"use client";
import { motion } from "framer-motion";

const JoinUs = () => {
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
          className="animate_top mx-auto mb-12.5 text-center"
        >
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Join the Mezzo Aid Community
          </h2>
          <p className="mx-auto text-lg text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            Whether you're an entrepreneur, expert, or partner - there's a place
            for you in our mission to empower African entrepreneurs.
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid gap-7.5 lg:grid-cols-3">
          {[
            {
              title: "For Entrepreneurs",
              icon: "🚀",
              description:
                "Start building your fundable business today. It's free forever.",
              stats: [
                "Free forever",
                "850+ quests completed",
                "95% improvement",
              ],
              cta: "Start Your Journey",
              href: "https://app.mezzoaid.com/signup/entrepreneur",
              featured: true,
            },
            {
              title: "For Experts",
              icon: "👨‍💼",
              description:
                "Share your expertise, earn flexible income, and help entrepreneurs succeed.",
              stats: [
                "50+ verified experts",
                "₦150K avg monthly",
                "Flexible schedule",
              ],
              cta: "Become an Expert",
              href: "https://app.mezzoaid.com/signup/expert",
              featured: false,
            },
            {
              title: "For Partners",
              icon: "🤝",
              description:
                "Collaborate with us to empower more entrepreneurs across Africa.",
              stats: ["Accelerators", "Investors", "Corporates"],
              cta: "Partner With Us",
              href: "/contact",
              featured: false,
            },
          ].map((card, index) => (
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
              className={`animate_top shadow-solid-3 rounded-lg border p-7.5 ${
                card.featured
                  ? "border-[#5B1B8D] bg-gradient-to-br from-[#5B1B8D] to-[#7B2CBF] text-white"
                  : "border-stroke dark:border-strokedark bg-white dark:bg-black"
              }`}
            >
              {/* Icon */}
              <div className="mb-5 text-5xl">{card.icon}</div>

              {/* Title */}
              <h3
                className={`mb-3 text-2xl font-bold ${
                  card.featured ? "text-white" : "text-black dark:text-white"
                }`}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className={`mb-7.5 ${
                  card.featured ? "text-white/90" : "text-[#6B6B6B]"
                }`}
              >
                {card.description}
              </p>

              {/* Stats */}
              <ul className="mb-7.5 space-y-2">
                {card.stats.map((stat, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      card.featured ? "text-white" : "text-[#6B6B6B]"
                    }`}
                  >
                    <span
                      className={
                        card.featured ? "text-white" : "text-[#5B1B8D]"
                      }
                    >
                      ✓
                    </span>
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={card.href}
                className={`inline-flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-3 font-medium transition-all ${
                  card.featured
                    ? "bg-white text-[#5B1B8D] hover:bg-gray-100"
                    : "bg-[#5B1B8D] text-white hover:bg-[#7B2CBF]"
                }`}
              >
                {card.cta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                >
                  <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
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
          <div className="shadow-solid-3 rounded-lg bg-white p-7.5 dark:bg-black">
            <p className="text-lg text-[#6B6B6B]">
              Have questions or want to learn more?{" "}
              <a
                href="/contact"
                className="font-semibold text-[#5B1B8D] hover:underline"
              >
                Get in touch with our team →
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;
