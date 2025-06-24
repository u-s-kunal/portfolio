"use client";

import SessionWrapper from "./Components/SessionWrapper";

export default function ClientLayout({ children }) {
  return <SessionWrapper>{children}</SessionWrapper>;
}
