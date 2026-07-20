import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.10),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.08),_transparent_26%)]" />
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div className="space-y-4">
            <p className="uppercase tracking-[6px] text-cyan-400 text-xs font-semibold">
              Let&apos;s Connect
            </p>

            <Link href="/contact" className="group inline-flex items-center gap-2">
              <h2 className="text-3xl md:text-4xl font-black text-white transition-colors group-hover:text-cyan-300">
                Connect With Me
              </h2>
              <ArrowUpRight className="h-5 w-5 text-cyan-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <p className="max-w-md text-sm leading-7 text-gray-400">
              Open to projects, collaborations, and opportunities in full stack development.
            </p>
          </div>

          <div className="space-y-4 md:justify-self-center">
            <p className="text-sm uppercase tracking-[4px] text-gray-500">
              Social
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/u-s-kunal/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:developerkunal01@gmail.com"
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4 md:justify-self-end">
            <p className="text-sm uppercase tracking-[4px] text-gray-500">
              Policies
            </p>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <Link href="/terms" className="transition hover:text-cyan-300">
                Terms & Conditions
              </Link>
              <Link href="/refund" className="transition hover:text-cyan-300">
                Refund Policy
              </Link>
              <Link href="/shipping" className="transition hover:text-cyan-300">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs tracking-[3px] text-gray-500">
            &copy; {new Date().getFullYear()} Kunal S.U. All rights reserved.
          </p>

          <p className="text-xs tracking-[3px] text-gray-600">
            Built with React, Next.js, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}