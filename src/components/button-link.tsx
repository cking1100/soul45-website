import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  target?: "_self" | "_blank";
};

export function ButtonLink({ href, children, variant = "solid", target = "_self" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition ${
        variant === "solid"
          ? "bg-accent text-black hover:bg-accent-2"
          : "border border-border text-ink-soft hover:border-accent hover:text-accent"
      }`}
    >
      {children}
    </Link>
  );
}
