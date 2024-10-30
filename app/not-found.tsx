import Link from "next/link";

import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="mb-8 mt-16">
      <h2 className="mb-8 text-5xl font-medium">D'oh.</h2>
      <p>Sorry, nothing to see here.</p>
      <div className="my-8">
        <h3 className="text-3xl font-bold">error 404</h3>
      </div>
      <Link href="/" className="underline">
        Go to homepage
      </Link>
    </Container>
  );
}
