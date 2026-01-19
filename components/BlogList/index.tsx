"use client";

import { motion } from "framer-motion";
import BlogItem from "../BlogItem";
import { useBlogPostsQuery } from "@/hooks/useContentfulQuery";

const BlogList = () => {
  const { data: blogPosts, isLoading, error } = useBlogPostsQuery();

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
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
            <span className="text-sm font-medium text-white">BLOG</span>
          </div>
          <h1 className="xl:text-sectiontitle3 mb-4 text-3xl font-bold text-black dark:text-white">
            Latest Insights & Success Stories
          </h1>
          <p className="mx-auto text-[#6B6B6B] md:w-4/5 lg:w-3/5">
            Expert advice, entrepreneur stories, and practical guides to help
            you build a fundable business.
          </p>
        </motion.div>

        {isLoading && (
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="mb-4 aspect-[368/239] rounded-lg bg-[#E6D5F0]" />
                <div className="space-y-3">
                  <div className="h-4 rounded bg-[#E6D5F0]" />
                  <div className="h-4 w-3/4 rounded bg-[#E6D5F0]" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="py-20 text-center">
            <p className="mb-4 text-red-500">Failed to load blog posts.</p>
          </div>
        )}

        {!isLoading && !error && blogPosts && blogPosts.length > 0 && (
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {blogPosts.map((post, index) => (
              <BlogItem key={post.sys.id} blog={post} index={index} />
            ))}
          </div>
        )}

        {!isLoading && !error && (!blogPosts || blogPosts.length === 0) && (
          <div className="py-20 text-center">
            <p className="mb-4 text-xl text-[#6B6B6B]">No blog posts yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
