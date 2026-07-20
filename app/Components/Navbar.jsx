"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Menu, X, Coffee } from "lucide-react";
import "../globle.css";
import Loader from "./Loader";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  if (!pathname) {
    return <Loader />;
  }

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 px-4 pt-3">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl border-amber-50 border rounded-3xl">
            <div className="rounded-3xl  backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand */}
                <Link href="/" className="group flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)] transition group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15">
                    <span className="text-lg font-black">K</span>
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm uppercase tracking-[4px] text-cyan-400">
                      Portfolio
                    </p>
                    <p className="text-base font-semibold text-white">
                      Kunal
                    </p>
                  </div>
                </Link>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-2">
                  {navigation.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={classNames(
                          "rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-300",
                          active
                            ? "bg-white/10 text-white ring-1 ring-cyan-400/25"
                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Right actions */}
                <div className="hidden sm:flex items-center gap-3">
                  <a
                    href="https://payments.cashfree.com/forms/codewithkunal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-2xl border border-orange-400/20 bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2.5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(249,115,22,0.15)] transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(249,115,22,0.22)]"
                  >
                    <Coffee className="h-4 w-4" />
                    Buy Me a Coffee
                  </a>
                </div>

                {/* Mobile button */}
                <div className="lg:hidden">
                  <DisclosureButton
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                    aria-label="Toggle menu"
                  >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <DisclosurePanel className="lg:hidden">
            <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-[#020617]/95 px-4 py-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <div className="grid gap-2">
                {navigation.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => close()}
                      className={classNames(
                        "rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300",
                        active
                          ? "bg-white/10 text-white ring-1 ring-cyan-400/25"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <a
                  href="https://payments.cashfree.com/forms/codewithkunal"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => close()}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-orange-400/20 bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-3 text-sm font-semibold text-black"
                >
                  <Coffee className="h-4 w-4" />
                  Buy Me a Coffee
                </a>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}