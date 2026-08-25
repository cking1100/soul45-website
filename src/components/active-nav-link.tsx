"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveNavLinkProps = {
  href: string;
  children: string;
};

export function ActiveNavLink({ href, children }: ActiveNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`border-b-2 pb-1 text-xs uppercase tracking-[0.12em] transition ${
        isActive ? "border-accent text-ink" : "border-transparent text-ink-muted hover:text-accent"
      }`}
    >
      {children}
    </Link>
  );
}