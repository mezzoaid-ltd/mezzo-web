"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import faqData from "./faqData";

interface FAQItemProps {
  faqData: {
    id: number;
    quest: string;
    ans: string;
    activeFaq: number;
    handleFaqToggle: (id: number) => void;
  };
}

const FAQItem = ({ faqData }: FAQItemProps) => {
  const { id, quest, ans, activeFaq, handleFaqToggle } = faqData;

  return (
    <div className="border-stroke dark:border-strokedark border-b last:border-none">
      <button
        onClick={() => {
          handleFaqToggle(id);
        }}
        className="flex w-full items-center justify-between px-6 py-5 text-left lg:px-9 lg:py-7.5"
      >
        <h5 className="lg:text-metatitle3 text-base font-medium text-black dark:text-white">
          {quest}
        </h5>
        <div className="border-stroke dark:border-strokedark flex h-8 w-8 items-center justify-center rounded-full border">
          <svg
            className={`fill-[#5B1B8D] transition-all duration-300 dark:fill-white ${
              activeFaq === id ? "rotate-180" : ""
            }`}
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          activeFaq === id ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <p className="px-6 pb-5 text-[#6B6B6B] lg:px-9 lg:pb-7.5">{ans}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  return (
    <>
      {/* ===== FAQ Start ===== */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="max-w-c-1235 relative mx-auto px-4 md:px-8 xl:px-0">
          <div className="absolute -bottom-16 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted background"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted background"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-2/5 lg:w-1/2"
            >
              <span className="font-medium text-black uppercase dark:text-white">
                YOUR QUESTIONS
              </span>
              <h2 className="xl:text-hero relative mb-6 text-3xl font-bold text-black dark:text-white">
                Frequently Asked
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-[#E6D5F0]">
                  {" "}
                  Questions
                </span>
              </h2>

              <a
                href="https://app.mezzoaid.com/signup/entrepreneur"
                className="group mt-7.5 inline-flex items-center gap-2.5 text-[#5B1B8D] hover:text-[#7B2CBF] dark:text-white dark:hover:text-[#7B2CBF]"
              >
                <span className="duration-300 group-hover:pr-2">
                  Still have questions? Contact us
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-3/5 lg:w-1/2"
            >
              <div className="shadow-solid-8 dark:border-strokedark dark:bg-blacksection rounded-lg bg-white dark:border">
                {faqData.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faqData={{ ...faq, activeFaq, handleFaqToggle }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== FAQ End ===== */}
    </>
  );
};

export default FAQ;
