import { strapi } from "@/lib/strapi/strapi";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "xxx",
  description: "xxx",
};

function localeName(locale: string): null | string {
  switch (locale) {
    case "cs":
      return "Česky";
    case "en":
      return "English";
    default:
      return null;
  }
}

export default async function Articles() {
  const articles = await strapi.fetchArticles();

  return (
    <Container className="pb-14 sm:pb-20 lg:pb-32">
      <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
        Blog
      </h2>
      <div className="max-w-prose text-base md:text-lg lg:text-xl">
        {articles.map((article) => (
          <div key={article.slug}>
            <h3 className="font-display mt-10 text-3xl font-bold tracking-tight">
              {article.title}
            </h3>
            <p className="my-4 text-slate-700">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              {localeName(article.locale) !== null
                ? " | " + localeName(article.locale)
                : ""}
            </p>
            <p className="my-4 text-slate-700">{article.description}</p>
            <Button href={"/blog/" + article.slug} color="black">
              Read article
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
}
