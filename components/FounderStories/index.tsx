"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useFeaturedBlogPostsQuery } from "@/hooks/useContentfulQuery";
import { getImageUrl } from "@/services/contentful";
import { formatDistanceToNow } from "date-fns";

const StoryCard = ({ story }: { story: any }) => {
  const { fields } = story;
  const featuredImageUrl = getImageUrl(fields.featuredImage);

  const publishedDate = fields.publishedDate
    ? formatDistanceToNow(new Date(fields.publishedDate), { addSuffix: true })
    : "";

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
      className="animate_top shadow-solid-8 dark:bg-blacksection rounded-lg bg-white p-4 pb-9"
    >
      <Link
        href={`/blog/${fields.slug}`}
        className="relative block aspect-[368/239]"
      >
        {featuredImageUrl ? (
          <Image
            src={featuredImageUrl}
            alt={fields.title}
            fill
            className="rounded-lg object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-[#5B1B8D] to-[#7B2CBF]">
            <span className="text-2xl font-bold text-white">Mezzo Aid</span>
          </div>
        )}
      </Link>

      <div className="px-4">
        {fields.category && (
          <span className="mt-5 mb-3 inline-block rounded-full bg-[#E6D5F0] px-4 py-1 text-sm font-medium text-[#5B1B8D]">
            {fields.category}
          </span>
        )}

        <h3 className="xl:text-itemtitle2 mt-3 mb-3.5 line-clamp-2 inline-block text-lg font-medium text-black hover:text-[#5B1B8D] dark:text-white dark:hover:text-[#7B2CBF]">
          <Link href={`/blog/${fields.slug}`}>{fields.title}</Link>
        </h3>

        <p className="line-clamp-3 text-[#6B6B6B]">{fields.shortDescription}</p>

        {publishedDate && (
          <p className="mt-2 text-sm text-[#6B6B6B]">{publishedDate}</p>
        )}

        <Link
          href={`/blog/${fields.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-[#5B1B8D] hover:text-[#7B2CBF]"
        >
          Read Story
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
            <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="animate-pulse">
        <div className="aspect-[368/239] rounded-lg bg-[#E6D5F0]" />
        <div className="mt-5 space-y-3 px-4">
          <div className="h-6 w-20 rounded-full bg-[#E6D5F0]" />
          <div className="h-6 rounded bg-[#E6D5F0]" />
          <div className="h-6 w-3/4 rounded bg-[#E6D5F0]" />
          <div className="h-20 rounded bg-[#E6D5F0]" />
        </div>
      </div>
    ))}
  </div>
);

const FounderStories = () => {
  // Fetch only 3 latest blog posts for homepage
  const { data: stories, isLoading, error } = useFeaturedBlogPostsQuery(3);

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        {/* Section Title Start */}
        <div className="animate_top mx-auto text-center">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="mx-auto text-center"
          >
            <div className="mb-4 inline-block rounded-full bg-[#5B1B8D] px-4.5 py-1.5">
              <span className="text-sectiontitle font-medium text-white">
                FOUNDER STORIES
              </span>
            </div>
            <h2 className="xl:text-sectiontitle3 mx-auto mb-4 text-3xl font-bold text-black md:w-4/5 xl:w-1/2 dark:text-white">
              Learn from African Entrepreneurs
            </h2>
            <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5 xl:w-[46%]">
              Real stories from founders who've walked the path from idea to
              investment. Get inspired and learn practical lessons.
            </p>
          </motion.div>
        </div>
        {/* Section Title End */}
      </div>

      <div className="max-w-c-1280 mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0">
        {/* Loading State */}
        {isLoading && <LoadingSkeleton />}

        {/* Error State */}
        {error && (
          <div className="py-10 text-center">
            <p className="text-[#6B6B6B]">
              Unable to load stories. Please try again later.
            </p>
          </div>
        )}

        {/* Stories Grid */}
        {!isLoading && !error && stories && stories.length > 0 && (
          <>
            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {stories.map((story, key) => (
                <StoryCard story={story} key={story.sys.id || key} />
              ))}
            </div>

            <div className="mt-12.5 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#5B1B8D] px-6 py-3 font-medium text-[#5B1B8D] transition-all hover:bg-[#5B1B8D] hover:text-white"
              >
                View All Stories
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
          </>
        )}

        {/* No Stories */}
        {!isLoading && !error && (!stories || stories.length === 0) && (
          <div className="py-10 text-center">
            <p className="mb-4 text-xl text-[#6B6B6B]">No stories yet.</p>
            <p className="text-[#6B6B6B]">
              Check back soon for inspiring founder stories!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FounderStories;
