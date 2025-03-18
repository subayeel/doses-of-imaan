import React, { useRef, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

const ChatUI = ({ messages, results, showInput, renderInput }) => {
  const messagesEndRef = useRef(null);

  // For typing effect
  const [typingTexts, setTypingTexts] = useState({});

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle typing effect for new assistant messages
  useEffect(() => {
    messages.forEach((message) => {
      if (message.role === "assistant" && !typingTexts[message.id]) {
        animateTyping(message.id, message.content);
      }
    });
  }, [messages]);

  const animateTyping = (id, fullText) => {
    setTypingTexts((prev) => ({ ...prev, [id]: "" }));

    let i = 0;
    const typingSpeed = 15; // ms per character

    const typeChar = () => {
      if (i < fullText.length) {
        setTypingTexts((prev) => ({
          ...prev,
          [id]: fullText.substring(0, i + 1),
        }));
        i++;
        setTimeout(typeChar, typingSpeed);
      }
    };

    typeChar();
  };

  return (
    <div className="flex flex-col h-screen ">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex items-center">
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src="/logo.png" alt="AI Assistant" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-medium">Spiritual Guide</h1>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${
                message.role === "assistant" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`flex ${
                  message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                }  max-w-[60%] space-x-2`}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0 mt-auto">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/logo.png" alt="AI Assistant" />
                      <AvatarFallback className="bg-emerald-600 text-white">
                        AI
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}

                <div
                  className={`px-2 rounded-md ${
                    message.role === "assistant"
                      ? " dark:text-white text-gray-900"
                      : "bg-primary text-white px-3 py-2"
                  }`}
                >
                  <div className="prose-sm">
                    {message.role === "assistant" ? (
                      // Display typing effect for assistant messages
                      <div>{typingTexts[message.id] || ""}</div>
                    ) : (
                      // Normal display for user messages
                      <div>{message.content}</div>
                    )}
                  </div>

                  {message.question === "showResults" && results && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ delay: 0.5 }}
                      className="mt-3 p-3 bg-gray-50 rounded-md border border-gray-200"
                    >
                      <p className="font-semibold text-gray-900">
                        {results.level}
                      </p>
                      <p className="text-sm text-gray-700">{results.message}</p>
                      <div className="mt-2 bg-white rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-blue-500 h-full"
                          style={{ width: `${results.percentage}%` }}
                        />
                      </div>
                      <p className="text-xs mt-1 text-gray-500 text-right">
                        {results.totalPoints}/{results.maxPossible} (
                        {results.percentage}%)
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      {showInput && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 border-t border-gray-200 "
        >
          <Card className="">
            <CardContent className="p-0">{renderInput()}</CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default ChatUI;
