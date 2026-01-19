"use client";

import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/services/contentful";

interface RelatedPostsProps {
  relatedPosts?: any[];
}

const RelatedPosts = ({ relatedPosts }: RelatedPostsProps) => {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection rounded-md border bg-white p-9">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Related Posts
      </h4>
      <div>
        {relatedPosts.slice(0, 3).map((post, index) => {
          const imageUrl =
            getImageUrl(post.fields?.featuredImage) ||
            "/images/blog/blog-placeholder.png";

          return (
            <div
              key={post.sys?.id || index}
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
            >
              <div className="relative h-18 w-45 max-w-45">
                <Image
                  fill
                  src={imageUrl}
                  alt={post.fields?.title || "Related post"}
                  className="object-cover"
                />
              </div>
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-[#5B1B8D] dark:text-white">
                <Link href={`/blog/${post.fields?.slug}`}>
                  {post.fields?.title?.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPosts;
