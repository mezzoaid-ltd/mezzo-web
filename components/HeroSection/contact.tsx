"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25">
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
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
          <div className="mb-5 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
            <span className="text-sm font-medium text-white">CONTACT US</span>
          </div>
          <h1 className="xl:text-hero mb-5 text-3xl font-bold text-black dark:text-white">
            We're Here to{" "}
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-[#E6D5F0]">
              Help You Succeed
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-[#6B6B6B]">
            Have questions about our platform, need help with your quest, or
            want to discuss partnership opportunities? Our team typically
            responds within 2 hours during business hours.
          </p>

          {/* Quick Stats */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-lg bg-[#E6D5F0] p-5">
              <div className="mb-2 text-3xl">⚡</div>
              <p className="mb-1 text-xl font-bold text-black dark:text-white">
                2 Hours
              </p>
              <p className="text-sm text-[#6B6B6B]">Average Response Time</p>
            </div>
            <div className="rounded-lg bg-[#E6D5F0] p-5">
              <div className="mb-2 text-3xl">💬</div>
              <p className="mb-1 text-xl font-bold text-black dark:text-white">
                1,200+
              </p>
              <p className="text-sm text-[#6B6B6B]">Entrepreneurs Helped</p>
            </div>
            <div className="rounded-lg bg-[#E6D5F0] p-5">
              <div className="mb-2 text-3xl">🌍</div>
              <p className="mb-1 text-xl font-bold text-black dark:text-white">
                Lagos, Nigeria
              </p>
              <p className="text-sm text-[#6B6B6B]">Our Headquarters</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
