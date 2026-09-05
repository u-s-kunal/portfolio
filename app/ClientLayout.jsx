"use client";

import SessionWrapper from "./Components/SessionWrapper";
import ChatWidget from "./Components/ChatWidget";

export default function ClientLayout({ children }) {
  return (
    <SessionWrapper>
      {children}
      <ChatWidget />
    </SessionWrapper>
  );
}