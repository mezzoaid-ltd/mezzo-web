"use client";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Flexible Income",
    description:
      "Set your own rates and availability. Work as much or as little as you want.",
    icon: "💰",
  },
  {
    title: "Help Entrepreneurs",
    description:
      "Make a real impact by helping Nigerian entrepreneurs build fundable businesses.",
    icon: "🎯",
  },
  {
    title: "Build Your Brand",
    description:
      "Showcase your expertise to 1,200+ entrepreneurs actively seeking guidance.",
    icon: "⭐",
  },
  {
    title: "Quality Platform",
    description:
      "Professional booking system, secure payments, and dedicated support team.",
    icon: "✨",
  },
];

const requirements = [
  "Verified professional credentials (degree, certifications, licenses)",
  "Minimum 5 years of relevant experience",
  "Proven track record in your field",
  "Strong communication skills",
  "Available for video consultations",
  "Nigerian-based or familiar with Nigerian business landscape",
];

const applicationSteps = [
  {
    step: "1",
    title: "Apply Online",
    description:
      "Fill out our application form with your credentials and experience.",
  },
  {
    step: "2",
    title: "Verification",
    description:
      "We verify your credentials, background, and professional standing.",
  },
  {
    step: "3",
    title: "Interview",
    description:
      "Brief video interview to assess your communication skills and expertise.",
  },
  {
    step: "4",
    title: "Onboarding",
    description:
      "Set up your profile, rates, and availability. Start accepting bookings!",
  },
];

const BecomeExpert = () => {
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
              JOIN OUR NETWORK
            </span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Become a Mezzo Aid Expert
          </h2>
          <p className="mx-auto text-lg text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            Share your expertise with Nigerian entrepreneurs while earning
            flexible income. Join our growing network of verified professionals.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="mb-15 grid gap-7.5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
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
              className="animate_top text-center"
            >
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#E6D5F0]">
                <span className="text-4xl">{benefit.icon}</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                {benefit.title}
              </h3>
              <p className="text-[#6B6B6B]">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Requirements & Application Process */}
        <div className="grid gap-7.5 lg:grid-cols-2">
          {/* Requirements */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="animate_left border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white p-7.5"
          >
            <h3 className="mb-5 text-2xl font-bold text-black dark:text-white">
              Requirements
            </h3>
            <p className="mb-5 text-[#6B6B6B]">
              We maintain high standards to ensure quality for our
              entrepreneurs. To join our expert network, you should have:
            </p>
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#5B1B8D]">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-[#6B6B6B]">{requirement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Application Process */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="animate_right border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white p-7.5"
          >
            <h3 className="mb-5 text-2xl font-bold text-black dark:text-white">
              Application Process
            </h3>
            <p className="mb-5 text-[#6B6B6B]">
              Our vetting process typically takes 2-3 weeks. Here's what to
              expect:
            </p>
            <div className="space-y-5">
              {applicationSteps.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#5B1B8D] text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-black dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#6B6B6B]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="animate_top mt-12.5 rounded-lg bg-gradient-to-r from-[#5B1B8D] to-[#7B2CBF] p-7.5 text-center md:p-12.5"
        >
          <h3 className="xl:text-sectiontitle3 mb-4 text-2xl font-bold text-white">
            Ready to Share Your Expertise?
          </h3>
          <p className="mb-7.5 text-lg text-white/90">
            Join 50+ verified professionals helping Nigerian entrepreneurs
            succeed. Our average expert earns ₦150,000+ monthly.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://app.mezzoaid.com/signup/expert"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7.5 py-3.5 font-medium text-[#5B1B8D] transition-all hover:bg-gray-100"
            >
              Apply to Become an Expert
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="currentColor"
              >
                <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
              </svg>
            </a>
            <a
              href="mailto:experts@mezzoaid.com"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-white px-7.5 py-3.5 font-medium text-white transition-all hover:bg-white hover:text-[#5B1B8D]"
            >
              Contact Expert Team
            </a>
          </div>

          <p className="mt-5 text-sm text-white/80">
            Questions? Email us at{" "}
            <a href="mailto:experts@mezzoaid.com" className="underline">
              experts@mezzoaid.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomeExpert;
