"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <section className="dark:bg-blacksection bg-white pt-35 pb-25 md:pt-40 md:pb-30 xl:pt-46 xl:pb-35">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="w-full px-4 md:w-5/12 lg:w-6/12"
          >
            <div className="relative mx-auto aspect-square max-w-[400px] text-center">
              <Image
                src="/images/404.svg"
                alt="404 Not Found"
                fill
                className="mx-auto max-w-full"
              />
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12"
          >
            <div>
              <div className="mb-8">
                <h1 className="mb-4 text-7xl font-bold text-[#5B1B8D] dark:text-white">
                  Oops!
                </h1>
                <h2 className="mb-5 text-3xl font-semibold text-black dark:text-white">
                  We Can't Seem to Find The Page You're Looking For
                </h2>
                <p className="mb-8 text-base leading-relaxed text-[#6B6B6B]">
                  The page you are looking for might have been moved, deleted,
                  or possibly never existed. Let's get you back on track to
                  building your fundable business.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#5B1B8D] px-7.5 py-3.5 font-medium text-white transition-all hover:bg-[#7B2CBF]"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Go To Home
                </Link>

                <Link
                  href="https://app.mezzoaid.com/signup/entrepreneur"
                  className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#5B1B8D] px-7.5 py-3.5 font-medium text-[#5B1B8D] transition-all hover:bg-[#5B1B8D] hover:text-white"
                >
                  Start Your Quest
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </Link>
              </div>

              <div className="mt-10">
                <p className="mb-3 text-sm font-medium text-black dark:text-white">
                  Popular Pages:
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/how-it-works"
                      className="text-[#6B6B6B] transition-colors hover:text-[#5B1B8D]"
                    >
                      → How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/experts"
                      className="text-[#6B6B6B] transition-colors hover:text-[#5B1B8D]"
                    >
                      → Expert Marketplace
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#pricing"
                      className="text-[#6B6B6B] transition-colors hover:text-[#5B1B8D]"
                    >
                      → Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-[#6B6B6B] transition-colors hover:text-[#5B1B8D]"
                    >
                      → Founder Stories
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
