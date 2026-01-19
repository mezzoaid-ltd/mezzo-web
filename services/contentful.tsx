// services/contentful.ts
import { createClient, ContentfulClientApi } from "contentful";
import { BlogPostSkeleton, BlogPost } from "@/types/blog";

// Check if Contentful is configured
const isContentfulConfigured = () => {
  return (
    process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID &&
    process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  );
};

// Create Contentful client
const createContentfulClient = (): ContentfulClientApi<undefined> | null => {
  if (!isContentfulConfigured()) {
    console.warn(
      "⚠️  Contentful not configured. Set NEXT_PUBLIC_CONTENTFUL_SPACE_ID and NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN in your .env.local file",
    );
    return null;
  }

  try {
    const isPreview = process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW === "true";

    return createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
      accessToken: isPreview
        ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_TOKEN!
        : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
      host: isPreview ? "preview.contentful.com" : "cdn.contentful.com",
      environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || "master",
    });
  } catch (error) {
    console.error("❌ Failed to create Contentful client:", error);
    return null;
  }
};

const contentfulClient = createContentfulClient();

// Helper: Extract author name
export const getAuthorName = (author: any): string => {
  if (!author) return "Mezzo Aid Team";
  if (typeof author === "string") return author;
  if (author.fields?.name) return author.fields.name;
  if (author.fields?.title) return author.fields.title;
  if (author.fields?.fullName) return author.fields.fullName;
  return "Mezzo Aid Team";
};

// Helper: Extract SEO data
export const extractSEOData = (seoFields: any) => {
  if (!seoFields || !seoFields.fields) {
    return {
      pageTitle: undefined,
      pageDescription: undefined,
      canonicalUrl: undefined,
      nofollow: false,
      noindex: false,
      shareImages: [],
    };
  }

  const fields = seoFields.fields;
  return {
    pageTitle: fields.pageTitle || fields.title,
    pageDescription: fields.pageDescription || fields.description,
    canonicalUrl: fields.canonicalUrl,
    nofollow: fields.nofollow || false,
    noindex: fields.noindex || false,
    shareImages: fields.shareImages || [],
  };
};

// Helper: Extract image URL from Contentful Asset
export const getImageUrl = (asset: any): string | undefined => {
  if (!asset) return undefined;

  try {
    // Handle direct URL
    if (typeof asset === "string") return asset;

    // Handle Contentful Asset object
    const fields = asset?.fields;
    if (!fields) return undefined;

    const file = fields.file;
    if (!file) return undefined;

    const url = file.url;
    if (!url) return undefined;

    // Add https: if URL starts with //
    return url.startsWith("//") ? `https:${url}` : url;
  } catch (error) {
    console.warn("Error extracting image URL:", error);
    return undefined;
  }
};

// Helper: Serialize entry (remove circular references)
const serializeEntry = (entry: any, seen = new WeakSet()): any => {
  if (!entry) return null;
  if (typeof entry !== "object") return entry;
  if (seen.has(entry)) return undefined;

  seen.add(entry);

  if (Array.isArray(entry)) {
    return entry
      .map((item) => serializeEntry(item, seen))
      .filter((item) => item !== undefined);
  }

  const serialized: any = {};
  for (const key in entry) {
    if (entry.hasOwnProperty(key)) {
      const value = serializeEntry(entry[key], seen);
      if (value !== undefined) {
        serialized[key] = value;
      }
    }
  }

  return serialized;
};

// Get all blog posts - Returns BlogPost[] which is Entry<BlogPostSkeleton>[]
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  if (!contentfulClient) {
    console.error("❌ Contentful client not initialized");
    return [];
  }

  try {
    // Use 'as any' to bypass TypeScript's strict query typing for custom field ordering
    const response = await contentfulClient.getEntries({
      content_type: "pageBlogPost",
      include: 2,
      order: ["-fields.publishedDate"],
    } as any);

    return (response.items || []).map((item) => serializeEntry(item));
  } catch (error) {
    console.error("❌ Error fetching blog posts:", error);
    return [];
  }
};

// Get blog post by slug - Returns BlogPost which is Entry<BlogPostSkeleton>
export const getBlogPostBySlug = async (
  slug: string,
): Promise<BlogPost | null> => {
  if (!contentfulClient) {
    console.error("❌ Contentful client not initialized");
    return null;
  }

  if (!slug) {
    console.error("❌ No slug provided");
    return null;
  }

  try {
    // Use 'as any' to bypass TypeScript's strict query typing for field matching
    const response = await contentfulClient.getEntries({
      content_type: "pageBlogPost",
      "fields.slug": slug,
      include: 3,
      limit: 1,
    } as any);

    if (response?.items && response.items.length > 0) {
      return serializeEntry(response.items[0]);
    }

    console.warn(`⚠️  No blog post found with slug: ${slug}`);
    return null;
  } catch (error) {
    console.error("❌ Error fetching blog post by slug:", error);
    return null;
  }
};

// Get featured/recent blog posts (for homepage)
export const getFeaturedBlogPosts = async (
  limit: number = 3,
): Promise<BlogPost[]> => {
  if (!contentfulClient) {
    console.error("❌ Contentful client not initialized");
    return [];
  }

  try {
    // Use 'as any' to bypass TypeScript's strict query typing for custom field ordering
    const response = await contentfulClient.getEntries({
      content_type: "pageBlogPost",
      include: 2,
      order: ["-fields.publishedDate"],
      limit,
    } as any);

    return (response.items || []).map((item) => serializeEntry(item));
  } catch (error) {
    console.error("❌ Error fetching featured blog posts:", error);
    return [];
  }
};
