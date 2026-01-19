"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What's the best way to get quick support?",
    answer:
      "For the fastest response, use our live chat feature during business hours (Mon-Fri, 9AM-6PM WAT). For non-urgent inquiries, email us at support@mezzoaid.com and we'll respond within 2 hours.",
  },
  {
    question: "Do you offer phone support?",
    answer:
      "Yes! Call us at +234 (0) 800 MEZZO-AID during business hours. For technical issues or quest help, we recommend using email or chat so we can share screenshots and documents easily.",
  },
  {
    question: "Can I schedule a call with someone from your team?",
    answer:
      "Absolutely! For detailed discussions about partnerships, media inquiries, or complex issues, you can schedule a call through our contact form. Select 'Partnership Opportunity' or 'General Inquiry' and we'll arrange a time.",
  },
  {
    question: "How do I report a bug or technical issue?",
    answer:
      "Please email support@mezzoaid.com with details about the issue, including screenshots if possible, your browser/device info, and steps to reproduce the problem. We typically fix critical bugs within 24 hours.",
  },
  {
    question: "Can I visit your office?",
    answer:
      "Yes, but by appointment only. Our Lagos office is at 15 Wole Ariyo Street, Lekki Phase 1. Email hello@mezzoaid.com to schedule a visit. We love meeting entrepreneurs in person!",
  },
  {
    question: "Do you have support in other languages?",
    answer:
      "Currently, our primary support language is English. However, many of our team members speak Yoruba, Igbo, and Hausa. Let us know your preferred language and we'll do our best to accommodate.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-25">
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
            <span className="text-sm font-medium text-white">SUPPORT FAQ</span>
          </div>
          <h2 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Common Support Questions
          </h2>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            Quick answers to frequently asked questions about contacting our
            support team.
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
              <div className="border-stroke shadow-solid-3 dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
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
      </div>
    </section>
  );
};

export default FAQ;
