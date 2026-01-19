// types/blog.ts
import { Document } from "@contentful/rich-text-types";
import { Asset, Entry, EntrySkeletonType } from "contentful";

// Author Skeleton
export interface BlogAuthorSkeleton extends EntrySkeletonType {
  contentTypeId: "author";
  fields: {
    name: string;
    title?: string;
    bio?: string;
    avatar?: Asset;
  };
}

// Blog Post Skeleton
export interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: "pageBlogPost";
  fields: {
    title: string;
    slug: string;
    shortDescription: string;
    content: Document;
    featuredImage?: Asset;
    author?: Entry<BlogAuthorSkeleton>;
    publishedDate: string;
    category?: string;
    tags?: string[];
    relatedBlogPosts?: Entry<BlogPostSkeleton>[];
    seoFields?: Entry<SEOFieldsSkeleton>;
  };
}

// SEO Fields Skeleton
export interface SEOFieldsSkeleton extends EntrySkeletonType {
  contentTypeId: "seoFields";
  fields: {
    pageTitle?: string;
    pageDescription?: string;
    canonicalUrl?: string;
    nofollow?: boolean;
    noindex?: boolean;
    shareImages?: Asset[];
  };
}

// Helper types for easier use
export type BlogPost = Entry<BlogPostSkeleton>;
export type BlogAuthor = Entry<BlogAuthorSkeleton>;

// SEO Data (extracted)
export interface SEOData {
  pageTitle?: string;
  pageDescription?: string;
  canonicalUrl?: string;
  nofollow: boolean;
  noindex: boolean;
  shareImages: Asset[];
}
//  delete

export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  body?: string;
  mainImage?: any;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
};
