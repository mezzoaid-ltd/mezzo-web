"use client";
import { motion } from "framer-motion";

const Team = () => {
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
          className="animate_top text-center"
        >
          <div className="mb-4 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
            <span className="text-sm font-medium text-white">OUR TEAM</span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-5 text-3xl font-bold text-black dark:text-white">
            Built by Entrepreneurs, for Entrepreneurs
          </h2>
          <p className="mx-auto mb-12.5 max-w-3xl text-lg text-[#6B6B6B]">
            We're a small but mighty team with combined 40+ years of experience
            in entrepreneurship, technology, finance, and business development.
            We've been in your shoes - we know the struggles, the victories, and
            what it takes to build a fundable business.
          </p>
        </motion.div>

        {/* Team Stats */}
        <div className="mb-12.5 grid gap-7.5 md:grid-cols-3">
          {[
            {
              icon: "💼",
              title: "Former Founders",
              stat: "3",
              description:
                "Team members who've built and raised capital for their own startups",
            },
            {
              icon: "🎓",
              title: "Combined Experience",
              stat: "40+",
              description:
                "Years of experience in entrepreneurship, finance, legal, and tech",
            },
            {
              icon: "🌍",
              title: "Nigerian Context",
              stat: "100%",
              description:
                "Deep understanding of the Nigerian and African startup ecosystem",
            },
          ].map((item, index) => (
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
              className="animate_top shadow-solid-3 rounded-lg bg-white p-7.5 text-center dark:bg-black"
            >
              <div className="mb-4 text-5xl">{item.icon}</div>
              <p className="mb-2 text-3xl font-bold text-[#5B1B8D]">
                {item.stat}
              </p>
              <h4 className="mb-2 font-semibold text-black dark:text-white">
                {item.title}
              </h4>
              <p className="text-sm text-[#6B6B6B]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Expertise Areas */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="animate_top"
        >
          <h3 className="mb-7.5 text-center text-2xl font-bold text-black dark:text-white">
            Our Collective Expertise
          </h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "💻", label: "Technology & Product" },
              { icon: "💰", label: "Finance & Accounting" },
              { icon: "⚖️", label: "Legal & Compliance" },
              { icon: "📈", label: "Business Strategy" },
              { icon: "🎨", label: "Design & UX" },
              { icon: "📱", label: "Marketing & Growth" },
              { icon: "🤝", label: "Investor Relations" },
              { icon: "🌍", label: "African Markets" },
            ].map((area, index) => (
              <div
                key={index}
                className="shadow-solid-3 flex items-center gap-3 rounded-lg bg-white p-4 dark:bg-black"
              >
                <span className="text-2xl">{area.icon}</span>
                <span className="font-medium text-black dark:text-white">
                  {area.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Philosophy */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top mt-12.5"
        >
          <div className="shadow-solid-3 rounded-lg bg-white p-7.5 lg:p-12.5 dark:bg-black">
            <h3 className="mb-5 text-center text-2xl font-bold text-black dark:text-white">
              Our Philosophy
            </h3>
            <div className="grid gap-7.5 md:grid-cols-2">
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#5B1B8D]">
                  <span>✓</span>
                  <span>We've Been There</span>
                </h4>
                <p className="text-[#6B6B6B]">
                  Every team member has firsthand experience building
                  businesses, raising capital, or working with startups. We
                  understand your journey because we've walked it.
                </p>
              </div>
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#5B1B8D]">
                  <span>✓</span>
                  <span>Lean & Focused</span>
                </h4>
                <p className="text-[#6B6B6B]">
                  We stay small by design. This allows us to move fast, stay
                  close to our users, and ensure every feature we build truly
                  serves entrepreneurs.
                </p>
              </div>
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#5B1B8D]">
                  <span>✓</span>
                  <span>User-Driven</span>
                </h4>
                <p className="text-[#6B6B6B]">
                  We're in constant conversation with our community. Your
                  feedback directly shapes our product roadmap and priorities.
                </p>
              </div>
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#5B1B8D]">
                  <span>✓</span>
                  <span>Long-Term Thinking</span>
                </h4>
                <p className="text-[#6B6B6B]">
                  We're not building a quick exit. We're here for the long haul,
                  committed to empowering African entrepreneurs for decades to
                  come.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
