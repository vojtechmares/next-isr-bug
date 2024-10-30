import Link from "next/link";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container className="py-8">
        <div className="py-4">
          <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-4">
            <div>
              <h4 className="text-lg font-medium">John Doe</h4>
              <ul className="mt-4 list-none">
                <li>
                  <Link href="#" className="underline">
                    +420 777 777 777
                  </Link>
                </li>
                <li>
                  <Link href="#" className="underline">
                    john.doe@example.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6"></div>
          <p className="mt-6 text-slate-700 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} John Doe, all rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
