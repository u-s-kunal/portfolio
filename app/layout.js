import "./globle.css";
import ClientLayout from "./ClientLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./Components/Navbar.jsx";
import StarField from "./Components/StarField";
import Footer from "./Components/Footer";

// For App Router (app/layout.tsx)
import { Tilt_Neon } from "next/font/google";

const tiltNeon = Tilt_Neon({
  subsets: ["latin"],
  weight: "400", // or 'regular'
  variable: "--font-tilt-neon",
});

export const metadata = {
  title: "CodeWithKunal",
  description: "This is my portfolio website. - Kunal Sudhakar Ughade",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={tiltNeon.variable}>
      <body className="bg-gray-900">
        <StarField />
        <ClientLayout>
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          {children}
        </ClientLayout>
        <div className="h-[1px] bg-amber-50"></div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
