import type { Article } from "@/lib/strapi/types/blog/article";

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className="mx-auto mb-4 w-[65ch] md:text-lg lg:text-xl">
      <div>
        <p className="mb-4">
          {article.publishedAt.toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </header>
  );
}
