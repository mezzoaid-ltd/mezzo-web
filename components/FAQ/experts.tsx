"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How are experts verified?",
    answer:
      "All experts go through a rigorous vetting process. We verify credentials (degrees, certifications, licenses), check professional backgrounds, conduct video interviews, and require a minimum of 5 years relevant experience. Only verified experts with proven track records are accepted into our marketplace.",
  },
  {
    question: "How do consultations work?",
    answer:
      "After booking, you'll receive a confirmation email with a video call link. Sessions happen via our platform (no need for Zoom or Google Meet). You can share documents, screens, and chat during the session. After the consultation, you'll have access to chat follow-ups with your expert for clarifications.",
  },
  {
    question: "What if I'm not satisfied with a consultation?",
    answer:
      "We offer a money-back guarantee. If you're not satisfied with your consultation, contact our support team within 24 hours of the session. We'll either arrange a free follow-up session or provide a full refund—no questions asked.",
  },
  {
    question: "How do I pay for consultations?",
    answer:
      "We accept payment via debit/credit cards, bank transfers, and USSD. All payments are processed securely through our platform. Your payment is held in escrow until after the successful completion of your session, protecting both you and the expert.",
  },
  {
    question: "Can I request a specific expert?",
    answer:
      "Yes! You can browse expert profiles, filter by category, experience, rating, and price, then book directly with your preferred expert. You can also read reviews from other entrepreneurs to help you decide. If you need help choosing, contact our support team.",
  },
  {
    question: "Are sessions recorded?",
    answer:
      "Sessions are not automatically recorded for privacy reasons. However, you can request recording with the expert's permission at the start of your session. Some experts offer recorded sessions as an add-on service for an additional fee.",
  },
  {
    question: "What's the cancellation policy?",
    answer:
      "You can cancel or reschedule for free up to 24 hours before your scheduled session. Cancellations within 24 hours are charged 50% of the session fee (to compensate the expert for blocked time). No-shows without cancellation are charged the full amount.",
  },
  {
    question: "Do I need to complete quests before booking an expert?",
    answer:
      "No, expert consultations are completely independent from our quest system. You can book an expert at any time, whether you're just starting out or already far along in your journey. However, many entrepreneurs find it helpful to complete relevant quests first to get the most value from expert sessions.",
  },
  {
    question: "Can I book multiple sessions with the same expert?",
    answer:
      "Absolutely! Many entrepreneurs work with the same expert over several sessions. You can book package deals (3, 5, or 10 sessions) at discounted rates. Experts you've worked with before are saved in your dashboard for easy re-booking.",
  },
  {
    question: "What happens if an expert cancels?",
    answer:
      "If an expert needs to cancel, you'll receive immediate notification and a full refund. We'll also help you find an alternative expert in the same category if you'd like. Expert cancellations are rare—our professionals maintain a 98% attendance rate.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="dark:bg-blacksection bg-[#E6D5F0] py-20 lg:py-25">
      <div className="max-w-c-1280 mx-auto px-4 md:px-8 xl:px-0">
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
            <span className="text-sm font-medium text-white">FAQ</span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            Everything you need to know about booking and working with our
            experts. Can't find your answer? Email us at{" "}
            <a
              href="mailto:experts@mezzoaid.com"
              className="text-[#5B1B8D] hover:underline"
            >
              experts@mezzoaid.com
            </a>
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mx-auto max-w-4xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="animate_top mb-4"
            >
              <div className="border-stroke shadow-solid-3 dark:border-strokedark rounded-lg border bg-white dark:bg-black">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-7.5 text-left transition-all"
                >
                  <h3 className="pr-8 font-semibold text-black dark:text-white">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`h-6 w-6 text-[#5B1B8D] transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="border-stroke dark:border-strokedark border-t px-7.5 pt-5 pb-7.5">
                    <p className="text-[#6B6B6B]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="animate_top mt-12.5 text-center"
        >
          <div className="shadow-solid-3 rounded-lg bg-white p-7.5 dark:bg-black">
            <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
              Still have questions?
            </h3>
            <p className="mb-5 text-[#6B6B6B]">
              Our support team is here to help. We typically respond within 2
              hours during business hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:experts@mezzoaid.com"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#5B1B8D] px-7.5 py-3.5 font-medium text-white transition-all hover:bg-[#7B2CBF]"
              >
                Email Support
              </a>
              <a
                href="/#support"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#5B1B8D] px-7.5 py-3.5 font-medium text-[#5B1B8D] transition-all hover:bg-[#5B1B8D] hover:text-white"
              >
                Live Chat
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
