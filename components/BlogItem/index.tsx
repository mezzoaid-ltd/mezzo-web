// components/Blog/BlogItem.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { getAuthorName } from "@/services/contentful";

interface BlogItemProps {
  blog: any;
  index?: number;
}

const BlogItem = ({ blog, index = 0 }: BlogItemProps) => {
  const { fields } = blog;

  const featuredImageUrl = fields.featuredImage?.fields?.file?.url
    ? `https:${fields.featuredImage.fields.file.url}`
    : "/images/blog/blog-placeholder.png";

  const authorName = getAuthorName(fields.author);

  const publishedDate = fields.publishedDate
    ? formatDistanceToNow(new Date(fields.publishedDate), { addSuffix: true })
    : "";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="animate_top group border-stroke shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection rounded-lg border bg-white transition-all"
    >
      <Link href={`/blog/${fields.slug}`} className="block">
        <div className="relative aspect-[368/239] w-full overflow-hidden rounded-t-lg">
          <Image
            src={featuredImageUrl}
            alt={fields.title || "Blog post"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-7.5">
          {/* Category/Date */}
          <div className="mb-3 flex items-center gap-3 text-sm text-[#6B6B6B]">
            {fields.category && (
              <span className="rounded-full bg-[#E6D5F0] px-3 py-1 text-[#5B1B8D]">
                {fields.category}
              </span>
            )}
            {publishedDate && <span>{publishedDate}</span>}
          </div>

          {/* Title */}
          <h3 className="mb-3 line-clamp-2 text-xl font-semibold text-black transition-all duration-300 group-hover:text-[#5B1B8D] dark:text-white dark:group-hover:text-[#7B2CBF]">
            {fields.title}
          </h3>

          {/* Description */}
          <p className="mb-4 line-clamp-3 text-[#6B6B6B]">
            {fields.shortDescription}
          </p>

          {/* Author */}
          <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span>{authorName}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogItem;
