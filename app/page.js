"use client";

import { SessionProvider } from "next-auth/react";
import Middle from "./Components/Middle";

export default function Home() {
  return (
    <div className="relative  scroll-smooth bg-transparent overflow-x-hidden">
      <SessionProvider>
        <div className="relative z-10">
          <Middle />
        </div>
      </SessionProvider>
    </div>
  );
}
