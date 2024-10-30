import Link from "next/link";

import { Container } from "@/components/Container";
import clsx from "clsx";

const links = [
  {
    name: "Blog",
    href: "/blog",
  },
];

function LinkItem({
  href,
  name,
  className = "",
}: {
  href: string;
  name: string;
  className?: string;
}) {
  const classes =
    "inline-block rounded-full bg-slate-100 px-4 py-2 text-lg font-bold text-black focus-visible:outline-black";

  return (
    <Link href={href} className={clsx(className, classes)}>
      {name}
    </Link>
  );
}

function MobileNavigation() {
  return (
    <nav className="relative z-50 lg:hidden">
      <div className="row flex justify-between">
        <div className="flex items-center md:gap-x-12">
          <span className="text-2xl font-extrabold tracking-tight">
            <Link
              href="/"
              className="rounded-full py-2 focus-visible:outline-black"
            >
              Vojtěch Mareš
            </Link>
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-row flex-wrap justify-between gap-y-2">
        {links.map((link) => (
          <LinkItem key={link.name} href={link.href} name={link.name} />
        ))}
      </div>
    </nav>
  );
}

function DesktopNavigation() {
  return (
    <nav className="relative z-50 hidden lg:block">
      <div className="flex justify-between">
        <div className="flex justify-start gap-x-6">
          <div className="flex items-center md:gap-x-12">
            <span className="text-2xl font-extrabold tracking-tight">
              <Link
                href="/"
                className="rounded-full py-2 focus-visible:outline-black"
              >
                Vojtěch Mareš
              </Link>
            </span>
          </div>
          <div className="flex flex-row flex-wrap gap-x-6">
            {links.map((link) => (
              <LinkItem key={link.name} href={link.href} name={link.name} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Navigation() {
  return (
    <>
      <header className="mb-12 pt-5 lg:pt-10">
        <Container>
          <MobileNavigation />
          <DesktopNavigation />
        </Container>
      </header>
    </>
  );
}
