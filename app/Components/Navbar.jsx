
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Menu, X, Coffee } from "lucide-react";
import "../global.css";
import Loader from "./Loader";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  if (!pathname) {
    return <Loader />;
  }

  return (
    <Disclosure as="header" className="site-navbar">
      {({ open, close }) => (
        <>
          <div className="navbar-container">

            {/* Brand */}
            <Link href="/" className="navbar-brand">
              <span className="navbar-logo">K</span>

              <span className="navbar-name">
                Kunal Ughade
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="navbar-links">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`navbar-link ${
                      active ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop action */}
            <a
              href="https://payments.cashfree.com/forms/codewithkunal"
              target="_blank"
              rel="noopener noreferrer"
              className="coffee-link"
            >
              <Coffee size={16} />
              <span>Buy me a coffee</span>
            </a>

            {/* Mobile menu button */}
            <DisclosureButton
              className="navbar-menu-button"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </DisclosureButton>
          </div>

          {/* Mobile navigation */}
          <DisclosurePanel className="mobile-menu">
            <nav className="mobile-menu-inner">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => close()}
                    className={`mobile-link ${
                      active ? "active" : ""
                    }`}
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
                className="mobile-coffee-link"
              >
                <Coffee size={16} />
                Buy me a coffee
              </a>
            </nav>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

