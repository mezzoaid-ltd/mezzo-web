// components/Blog/ContentfulRichTextRenderer.tsx
"use client";

import React, { memo } from "react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  MARKS,
  Block,
  Inline,
} from "@contentful/rich-text-types";
import { Asset, Entry } from "contentful";

interface ContentfulRichTextRendererProps {
  document: any;
  className?: string;
}

// Mezzo Aid themed render options
const createRenderOptions = (): Options => ({
  renderNode: {
    [BLOCKS.HEADING_1]: (node: Block | Inline, children: React.ReactNode) => (
      <h1 className="mt-8 mb-6 border-b border-[#5B1B8D]/30 pb-2 text-4xl font-bold text-black dark:text-white">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node: Block | Inline, children: React.ReactNode) => (
      <h2 className="mt-7 mb-5 text-3xl font-bold text-black dark:text-white">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node: Block | Inline, children: React.ReactNode) => (
      <h3 className="mt-6 mb-4 text-2xl font-semibold text-black dark:text-white">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node: Block | Inline, children: React.ReactNode) => (
      <h4 className="mt-5 mb-3 text-xl font-semibold text-black dark:text-white">
        {children}
      </h4>
    ),
    [BLOCKS.PARAGRAPH]: (node: Block | Inline, children: React.ReactNode) => (
      <p className="mb-4 leading-relaxed text-[#6B6B6B] dark:text-[#c8cbd0]">
        {children}
      </p>
    ),
    [BLOCKS.UL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
      <ul className="mb-6 list-disc space-y-2 pl-6 text-[#6B6B6B] dark:text-[#c8cbd0]">
        {children}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node: Block | Inline, children: React.ReactNode) => (
      <ol className="mb-6 list-decimal space-y-2 pl-6 text-[#6B6B6B] dark:text-[#c8cbd0]">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: Block | Inline, children: React.ReactNode) => (
      <li className="mb-1 leading-relaxed">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: Block | Inline, children: React.ReactNode) => (
      <blockquote className="mb-6 rounded-r-lg border-l-4 border-[#5B1B8D] bg-[#E6D5F0] py-4 pl-6 text-[#6B6B6B] italic dark:bg-black/50 dark:text-[#c8cbd0]">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => (
      <hr className="my-8 h-px border-0 bg-gradient-to-r from-transparent via-[#5B1B8D]/50 to-transparent" />
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
      const asset = node.data?.target as Asset;
      if (!asset?.fields) return null;

      const { file, title, description } = asset.fields;
      if (!file) return null;

      const fileUrl =
        typeof file === "string" ? file : (file as any)?.url || "";
      const contentType =
        typeof file === "object" ? (file as any)?.contentType || "" : "";
      const fullFileUrl = fileUrl.startsWith("//")
        ? `https:${fileUrl}`
        : fileUrl;

      const isImage = contentType.startsWith("image/");

      if (isImage) {
        return (
          <figure className="mb-6">
            <img
              src={fullFileUrl}
              alt={String(description || title || "Blog image")}
              className="shadow-solid-3 h-auto w-full rounded-lg"
              loading="lazy"
            />
            {(title || description) && (
              <figcaption className="mt-2 text-center text-sm text-[#6B6B6B] italic dark:text-[#c8cbd0]">
                {title && (
                  <span className="font-medium text-[#5B1B8D]">
                    {String(title)}
                  </span>
                )}
                {title && description && ": "}
                {description && String(description)}
              </figcaption>
            )}
          </figure>
        );
      }

      return null;
    },
    [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => {
      const uri = node.data?.uri;
      return (
        <a
          href={uri}
          className="text-[#5B1B8D] underline decoration-2 underline-offset-2 transition-colors hover:text-[#7B2CBF]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <strong className="font-bold text-black dark:text-white">{text}</strong>
    ),
    [MARKS.ITALIC]: (text: React.ReactNode) => (
      <em className="text-[#6B6B6B] italic dark:text-[#c8cbd0]">{text}</em>
    ),
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="rounded bg-[#E6D5F0] px-2 py-1 font-mono text-sm text-[#5B1B8D] dark:bg-black">
        {text}
      </code>
    ),
  },
});

export const ContentfulRichTextRenderer = memo(
  function ContentfulRichTextRenderer({
    document,
    className = "",
  }: ContentfulRichTextRendererProps) {
    if (!document) {
      return (
        <div className="text-[#6B6B6B] italic dark:text-[#c8cbd0]">
          No content available
        </div>
      );
    }

    try {
      const renderOptions = createRenderOptions();
      return (
        <div className={`prose prose-lg max-w-none ${className}`}>
          {documentToReactComponents(document, renderOptions)}
        </div>
      );
    } catch (error) {
      console.error("Error rendering content:", error);
      return (
        <div className="text-red-500 italic">
          Error rendering content. Please try again later.
        </div>
      );
    }
  },
);
