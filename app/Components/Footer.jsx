import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white py-8 px-4  bg-[#0B666Ab3]">
      <div className="max-w-6xl mx-auto text-center animate-fadeIn">
        <Link href={"/contact"}>
          <h1 className="text-3xl font-bold tilt-neon mb-4">Connect With Me</h1>
        </Link>

        <div className="flex justify-center space-x-6 text-2xl">
          <a
            href="https://github.com/u-s-kunal/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-icon hover:text-[#0ff]"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-icon hover:text-[#0ff]"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:developerkunal01@gmail.com"
            className="neon-icon hover:text-[#0ff]"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="text-gray-300 mt-6 text-sm">
          &copy; {new Date().getFullYear()} Kunal S.U.
        </p>
      </div>
    </footer>
  );
}
