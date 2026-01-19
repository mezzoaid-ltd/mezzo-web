// hooks/useContentfulQuery.ts
"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as contentfulService from "@/services/contentful";

// Helper to extract localized fields
const extractLocalizedFields = (entry: any) => {
  if (!entry || !entry.fields) return entry;

  const extractedFields: any = {};
  for (const [key, value] of Object.entries(entry.fields)) {
    if (value && typeof value === "object" && "en-US" in value) {
      extractedFields[key] = (value as any)["en-US"];
    } else {
      extractedFields[key] = value;
    }
  }

  return {
    ...entry,
    fields: extractedFields,
  };
};

const extractLocalizedArray = (items: any[]) => {
  if (!Array.isArray(items)) return [];
  return items.map((item) => extractLocalizedFields(item));
};

// Hook: Get all blog posts
export const useBlogPostsQuery = () => {
  return useQuery({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      const res = await contentfulService.getBlogPosts();
      return Array.isArray(res) ? extractLocalizedArray(res) : [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
    refetchOnWindowFocus: false,
  });
};

// Hook: Get blog post by slug
export const useBlogPostBySlugQuery = (slug?: string) => {
  return useQuery({
    queryKey: ["blogPost", slug],
    queryFn: async () => {
      if (!slug) return null;
      const res = await contentfulService.getBlogPostBySlug(slug);
      return res ? extractLocalizedFields(res) : null;
    },
    enabled: !!slug,
    staleTime: 0, // Always fresh
    refetchOnWindowFocus: false,
    retry: 1,
  });
};

// Hook: Prefetch blog post (for hover)
export const usePrefetchBlogPost = () => {
  const queryClient = useQueryClient();

  return (slug: string) =>
    queryClient.prefetchQuery({
      queryKey: ["blogPost", slug],
      queryFn: async () => {
        const res = await contentfulService.getBlogPostBySlug(slug);
        return res ? extractLocalizedFields(res) : null;
      },
      staleTime: 1000 * 60 * 5,
    });
};

// Hook: Get featured posts
export const useFeaturedBlogPostsQuery = (limit: number = 3) => {
  return useQuery({
    queryKey: ["featuredBlogPosts", limit],
    queryFn: async () => {
      const res = await contentfulService.getFeaturedBlogPosts(limit);
      return Array.isArray(res) ? extractLocalizedArray(res) : [];
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
};
