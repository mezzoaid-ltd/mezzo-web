import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getBlogPostBySlug,
  getAuthorName,
  extractSEOData,
  getImageUrl,
} from "@/services/contentful";
import BlogDetailContent from "@/components/BlogDetailContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await params in Next.js 15+
  const { slug } = await params;
  const article = await getBlogPostBySlug(slug);

  if (!article) {
    return {
      title: "Post Not Found - Mezzo Aid",
    };
  }

  const seoData = extractSEOData(article.fields.seoFields);
  const featuredImageUrl = getImageUrl(article.fields.featuredImage);

  // Ensure publishedDate is a string
  const publishedDate = article.fields.publishedDate
    ? String(article.fields.publishedDate)
    : new Date().toISOString();

  return {
    title: seoData.pageTitle || `${article.fields.title} - Mezzo Aid Blog`,
    description: seoData.pageDescription || article.fields.shortDescription,
    openGraph: {
      title: seoData.pageTitle || article.fields.title,
      description: seoData.pageDescription || article.fields.shortDescription,
      images: featuredImageUrl ? [featuredImageUrl] : [],
      type: "article",
      publishedTime: publishedDate,
      authors: [getAuthorName(article.fields.author)],
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.pageTitle || article.fields.title,
      description: seoData.pageDescription || article.fields.shortDescription,
      images: featuredImageUrl ? [featuredImageUrl] : [],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  // Await params in Next.js 15+
  const { slug } = await params;
  const article = await getBlogPostBySlug(slug);

  if (!article) {
    notFound();
  }

  return <BlogDetailContent article={article} slug={slug} />;
}
