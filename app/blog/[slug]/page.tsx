import { Metadata } from "next";
import { strapi } from "@/lib/strapi/strapi";
import "@/styles/highlight-js/github-dark.css";
import { ArticleHeader } from "@/components/blog/article-header";
import { Article } from "@/components/blog/article";
import { notFound } from "next/navigation";

// Next.js will invalidate the cache when a
// request comes in, at most once every hour.
export const revalidate = 3600;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const articles = await strapi.fetchArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await strapi.getArticle(slug);

  return {
    title: article.title + " | John Doe",
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: "/blog/" + slug,
    },
  };
}

export default async function ArticlePage(props: { params: Params }) {
  const { slug } = await props.params;

  try {
    const article = await strapi.getArticle(slug);

    return (
      <>
        <ArticleHeader article={article} />
        <Article article={article} />
      </>
    );
  } catch (error) {
    notFound();
  }
}
