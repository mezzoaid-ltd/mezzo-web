"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContentfulRichTextRenderer } from "../ContentfulRichTextRenderer";
import SharePost from "../Blog/SharePost";
import RelatedPosts from "../Blog/RelatedPost";
import { getAuthorName, getImageUrl } from "@/services/contentful";

interface BlogDetailContentProps {
  article: any;
  slug: string;
}

const BlogDetailContent = ({ article, slug }: BlogDetailContentProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const { fields } = article;
  const authorName = getAuthorName(fields.author);
  const featuredImageUrl = getImageUrl(fields.featuredImage);

  const publishedDate = fields.publishedDate
    ? new Date(fields.publishedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <section className="pt-35 pb-20 lg:pt-45 lg:pb-25 xl:pt-50 xl:pb-30">
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <div className="md:w-1/2 lg:w-[32%]">
            <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection mb-10 rounded-md border bg-white p-3.5">
              <form>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="border-stroke shadow-solid-12 dark:border-strokedark w-full rounded-lg border px-6 py-4 focus:border-[#5B1B8D] focus:outline-none dark:bg-black"
                  />
                </div>
              </form>
            </div>

            <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection mb-10 rounded-md border bg-white p-9">
              <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                Categories
              </h4>
              <ul>
                {[
                  "Fundraising",
                  "Business Planning",
                  "Legal",
                  "Financial",
                  "Marketing",
                ].map((cat) => (
                  <li
                    key={cat}
                    className="mb-3 transition-all duration-300 last:mb-0 hover:text-[#5B1B8D]"
                  >
                    <Link href={`/blog?category=${cat.toLowerCase()}`}>
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <RelatedPosts relatedPosts={fields.relatedBlogPosts} />
          </div>

          <div className="lg:w-2/3">
            <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection rounded-md border bg-white p-7.5 md:p-10">
              <Link
                href="/blog"
                className="mb-6 inline-flex items-center text-[#6B6B6B] transition-colors hover:text-[#5B1B8D]"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to Blog
              </Link>

              {featuredImageUrl && (
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={featuredImageUrl}
                      alt={fields.title}
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>
              )}

              <h1 className="2xl:text-sectiontitle2 mt-11 mb-5 text-3xl font-semibold text-black dark:text-white">
                {fields.title}
              </h1>

              <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                <li>
                  <span className="text-black dark:text-white">Author: </span>
                  {authorName}
                </li>
                {publishedDate && (
                  <li>
                    <span className="text-black dark:text-white">
                      Published:{" "}
                    </span>
                    {publishedDate}
                  </li>
                )}
                {fields.category && (
                  <li>
                    <span className="text-black dark:text-white">
                      Category:{" "}
                    </span>
                    {fields.category}
                  </li>
                )}
              </ul>

              <div className="blog-details">
                {fields.content && (
                  <ContentfulRichTextRenderer document={fields.content} />
                )}
              </div>

              <SharePost title={fields.title} slug={slug} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailContent;
