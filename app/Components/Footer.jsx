import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B666Ab3] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <Link href="/contact">
          <h1 className="text-3xl mb-2 font-bold tilt-neon hover:text-yellow-300 transition-colors">
            Connect With Me
          </h1>
        </Link>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/u-s-kunal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0ff] transition-colors duration-200"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0ff] transition-colors duration-200"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="mailto:developerkunal01@gmail.com"
            className="hover:text-[#0ff] transition-colors duration-200"
          >
            <i className="fas fa-envelope" />
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <Link href="/terms" className="hover:text-yellow-400">
            Terms & Conditions
          </Link>
          <Link href="/refund" className="hover:text-yellow-400">
            Refund Policy
          </Link>
          <Link href="/shipping" className="hover:text-yellow-400">
            Shipping Policy
          </Link>
        </div>

        <p className="text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Kunal S.U. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
