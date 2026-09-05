"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Kunal's portfolio assistant. Ask me about his projects, skills, certifications, or technical background.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || isLoading) {
      return;
    }

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: trimmedQuestion,
      },
    ]);

    setQuestion("");
    setIsLoading(true);

    let assistantStarted = false;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: trimmedQuestion,
        }),
      });

      if (!response.ok) {
        let errorMessage = "Something went wrong.";

        try {
          const data = await response.json();
          errorMessage = data.error || errorMessage;
        } catch {
          // Response was not JSON.
        }

        throw new Error(errorMessage);
      }

      if (!response.body) {
        throw new Error("Streaming is not supported by this response.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      let buffer = "";
      let streamFinished = false;

      while (!streamFinished) {
        const { value, done } = await reader.read();

        if (done) {
          break;
        }

        buffer += decoder.decode(value, {
          stream: true,
        });

        const events = buffer.split("\n\n");

        buffer = events.pop() || "";

        for (const event of events) {
          const lines = event.split("\n");

          const dataLine = lines.find((line) =>
            line.startsWith("data: ")
          );

          if (!dataLine) {
            continue;
          }

          const jsonString = dataLine.slice(6);

          let data;

          try {
            data = JSON.parse(jsonString);
          } catch (error) {
            console.error("Invalid SSE JSON:", jsonString);
            continue;
          }

          if (data.type === "text") {
            if (!assistantStarted) {
              assistantStarted = true;

              setMessages((previous) => [
                ...previous,
                {
                  role: "assistant",
                  content: data.text,
                },
              ]);
            } else {
              setMessages((previous) => {
                const updatedMessages = [...previous];
                const lastIndex = updatedMessages.length - 1;

                if (
                  updatedMessages[lastIndex]?.role === "assistant"
                ) {
                  updatedMessages[lastIndex] = {
                    ...updatedMessages[lastIndex],
                    content:
                      updatedMessages[lastIndex].content + data.text,
                  };
                }

                return updatedMessages;
              });
            }
          }

          if (data.type === "done") {
            streamFinished = true;
          }

          if (data.type === "error") {
            throw new Error(
              data.message || "Something went wrong."
            );
          }

          if (data.type === "sources") {
            console.log("RAG sources:", data.sources);
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((previous) => {
        const updatedMessages = [...previous];
        const lastIndex = updatedMessages.length - 1;

        if (
          assistantStarted &&
          updatedMessages[lastIndex]?.role === "assistant"
        ) {
          updatedMessages[lastIndex] = {
            ...updatedMessages[lastIndex],
            content:
              "Sorry, I couldn't complete the response right now. Please try again.",
          };

          return updatedMessages;
        }

        return [
          ...updatedMessages,
          {
            role: "assistant",
            content:
              "Sorry, I couldn't process your question right now. Please try again.",
          },
        ];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* =====================================================
          FLOATING AI BUTTON
      ===================================================== */}

      {!isOpen && (
  <div className="fixed inset-0 z-[2147483647] pointer-events-none">
    <button
      type="button"
      onClick={() => setIsOpen(true)}
      aria-label="Open portfolio AI assistant"
      className="
        pointer-events-auto
        absolute
        bottom-26
        right-5
        flex
        h-16
        w-16
        items-center
        justify-center

        rounded-full

        border-2
        border-white/30

        bg-gradient-to-br
        from-red-500
        via-red-500
        to-purple-600

        text-white

        shadow-[0_0_20px_rgba(239,68,68,0.7),0_0_40px_rgba(147,51,234,0.4)]

        transition-all
        duration-300

        hover:scale-110
        active:scale-95

        sm:bottom-6
        sm:right-6
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="relative z-10 h-8 w-8"
      >
        <path
          strokeLinecap="round"
          d="M12 3v2"
        />

        <circle
          cx="12"
          cy="2.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />

        <rect
          x="4"
          y="6"
          width="16"
          height="13"
          rx="4"
        />

        <circle
          cx="9"
          cy="12"
          r="1"
          fill="currentColor"
          stroke="none"
        />

        <circle
          cx="15"
          cy="12"
          r="1"
          fill="currentColor"
          stroke="none"
        />

        <path
          strokeLinecap="round"
          d="M9 16h6"
        />

        <path
          strokeLinecap="round"
          d="M4 11H2.5M21.5 11H20"
        />
      </svg>

      {/* Notification dot */}
      <span
        className="
          absolute
          right-0.5
          top-1
          h-3
          w-3
          rounded-full
          border-2
          border-white
          bg-green-400
        "
      />
    </button>
  </div>
)}

      {/* =====================================================
          CHAT WINDOW
      ===================================================== */}

      {isOpen && (
        <div
          className="
            fixed z-[9999]
            bottom-3 left-3 right-3
            flex
            h-[calc(100dvh-6rem)]
            max-h-[680px]
            flex-col
            overflow-hidden
            rounded-2xl
            border border-red-200/20
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]

            sm:bottom-6
            sm:left-auto
            sm:right-6
            sm:h-[600px]
            sm:w-[380px]
          "
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              justify-between
              bg-gradient-to-r
              from-red-500
              via-red-500
              to-purple-600
              px-4 py-4
              text-white
            "
          >
            <div className="flex min-w-0 items-center gap-3">
              {/* Small Robot Icon */}

              <div
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-xl
                  border border-white/20
                  bg-white/15
                  backdrop-blur-sm
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M12 3v2"
                  />

                  <circle
                    cx="12"
                    cy="2.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />

                  <rect
                    x="4"
                    y="6"
                    width="16"
                    height="13"
                    rx="4"
                  />

                  <circle
                    cx="9"
                    cy="12"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />

                  <circle
                    cx="15"
                    cy="12"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />

                  <path
                    strokeLinecap="round"
                    d="M9 16h6"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-sm font-semibold sm:text-base">
                  Kunal's AI Assistant
                </h2>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-300" />

                  <p className="truncate text-[11px] text-white/80 sm:text-xs">
                    Ask about my portfolio
                  </p>
                </div>
              </div>
            </div>

            {/* Close Button */}

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="
                ml-3
                flex h-9 w-9
                shrink-0
                items-center justify-center
                rounded-lg
                text-xl
                text-white/80
                transition
                hover:bg-white/15
                hover:text-white
                active:scale-95
              "
              aria-label="Close assistant"
            >
              ×
            </button>
          </div>

          {/* =================================================
              MESSAGES
          ================================================= */}

          <div
            className="
              flex-1
              space-y-3
              overflow-y-auto
              overscroll-contain
              bg-gray-50
              p-3
              sm:p-4
            "
          >
            {messages.map((message, index) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={index}
                  className={`flex ${
                    isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[92%]
                      break-words
                      rounded-2xl
                      px-3.5 py-3
                      text-[13px]
                      leading-relaxed
                      sm:max-w-[90%]
                      sm:text-sm

                      ${
                        isUser
                          ? `
                            rounded-br-md
                            bg-gradient-to-br
                            from-red-500
                            to-purple-600
                            text-white
                            shadow-sm
                          `
                          : `
                            rounded-bl-md
                            border
                            border-gray-200
                            bg-white
                            text-gray-800
                            shadow-sm
                          `
                      }
                    `}
                  >
                    {isUser ? (
                      <div className="whitespace-pre-wrap">
                        {message.content}
                      </div>
                    ) : (
                      <ReactMarkdown
                        components={{
                          h1: ({ children }) => (
                            <h1 className="mb-3 text-lg font-bold text-gray-900">
                              {children}
                            </h1>
                          ),

                          h2: ({ children }) => (
                            <h2 className="mb-2 mt-4 text-base font-bold text-gray-900">
                              {children}
                            </h2>
                          ),

                          h3: ({ children }) => (
                            <h3 className="mb-2 mt-3 text-sm font-bold text-gray-900">
                              {children}
                            </h3>
                          ),

                          p: ({ children }) => (
                            <p className="mb-2.5 last:mb-0">
                              {children}
                            </p>
                          ),

                          ul: ({ children }) => (
                            <ul className="mb-3 ml-5 list-disc space-y-1">
                              {children}
                            </ul>
                          ),

                          ol: ({ children }) => (
                            <ol className="mb-3 ml-5 list-decimal space-y-1">
                              {children}
                            </ol>
                          ),

                          li: ({ children }) => (
                            <li className="pl-0.5">
                              {children}
                            </li>
                          ),

                          strong: ({ children }) => (
                            <strong className="font-semibold text-gray-900">
                              {children}
                            </strong>
                          ),

                          code: ({ children }) => (
                            <code
                              className="
                                rounded
                                bg-gray-100
                                px-1.5 py-0.5
                                text-[11px]
                                text-red-600
                              "
                            >
                              {children}
                            </code>
                          ),
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Loading */}

            {isLoading && (
              <div className="flex justify-start">
                <div
                  className="
                    rounded-2xl
                    rounded-bl-md
                    border border-gray-200
                    bg-white
                    px-4 py-3
                    shadow-sm
                  "
                >
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-red-400" />

                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-red-400 [animation-delay:150ms]" />

                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-purple-500 [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              INPUT
          ================================================= */}

          <div
            className="
              shrink-0
              border-t
              border-gray-200
              bg-white
              p-3
              pb-[max(0.75rem,env(safe-area-inset-bottom))]
            "
          >
            <div className="flex items-end gap-2">
              <textarea
                value={question}
                onChange={(event) =>
                  setQuestion(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask me something..."
                rows={1}
                disabled={isLoading}
                className="
                  max-h-24
                  min-h-10
                  min-w-0
                  flex-1
                  resize-none
                  rounded-xl
                  border
                  border-gray-300
                  bg-gray-50
                  px-3 py-2.5
                  text-sm
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-red-400
                  focus:bg-white
                  focus:ring-2
                  focus:ring-red-100
                  disabled:bg-gray-100
                "
              />

              <button
                type="button"
                onClick={sendMessage}
                disabled={!question.trim() || isLoading}
                className="
                  flex
                  h-10 w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-red-500
                  to-purple-600
                  text-white
                  shadow-sm
                  transition
                  hover:scale-105
                  hover:shadow-md
                  active:scale-95
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
                aria-label="Send message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 2L11 13"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 2l-7 20-4-9-9-4 20-7z"
                  />
                </svg>
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-gray-400">
              Powered by Gemini + MongoDB
            </p>
          </div>
        </div>
      )}
    </>
  );
}