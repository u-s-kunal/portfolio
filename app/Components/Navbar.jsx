"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import "../globle.css";
import Loader from "./Loader";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Certifications", href: "/certifications" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto m-2 max-w-7xl rounded-2xl px-2 sm:px-6 lg:px-8 bg-[#3F4E4F] p-2">
            <div className="relative flex items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton
                  className="cursor-pointer group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                  aria-label="Toggle Menu"
                >
                  {open ? (
                    // X icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    // Hamburger icon
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </DisclosureButton>
              </div>

              {/* Desktop menu */}
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={
                          pathname === item.href ? "page" : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right-side buttons */}
              <div className="flex w-auto gap-3 h-10 items-center">
                <Link
                  href="https://payments.cashfree.com/forms/codewithkunal"
                  target="_blank"
                  className="group relative inline-flex items-center justify-center sm:px-3 px-3 sm:py-2 py-1 overflow-hidden font-semibold rounded-xl text-white shadow-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 hover:from-yellow-400 hover:via-orange-400 hover:to-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-in-out transform scale-105 bg-yellow-700 opacity-0 group-hover:opacity-30 blur-md rounded-full"></span>
                  <span className="relative z-10 flex items-center gap-2 text-sm sm:text-md tracking-wide">
                    Buy Me a Coffee
                    <svg
                      className="w-7 h-7 text-white animate-pulse"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8h1a3 3 0 010 6h-1M4 8h13v7a3 3 0 01-3 3H7a3 3 0 01-3-3V8z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 2s-.5 1.5 0 2.5 0 2.5 0 2.5M12 2s-.5 1.5 0 2.5 0 2.5 0 2.5"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          <DisclosurePanel className="sm:hidden">
            {({ close }) => (
              <div className="px-2 pt-2 pb-3 bg-[#3F4E4F]">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => close()} // 👈 closes the menu
                    className={classNames(
                      pathname === item.href
                        ? "bg-gray-900 text-white font-bold text-xl"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </DisclosurePanel>

          <hr className="text-blue-200 shadow-amber-50 shadow-2xl" />
        </>
      )}
    </Disclosure>
  );
}
