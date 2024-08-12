"use client";

import { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const metadate: Metadata = {
  title: "Auth",
};

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <>
      {children}
      <div>
        {navLinks.map((link) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
