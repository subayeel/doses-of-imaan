import React, { useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ResultsType } from "@/utils/types";
import { Check, Sparkles } from "lucide-react";

interface MessageType {
  id: string | number;
  role: "user" | "assistant";
  content: string;
  question?: string;
}

interface ChatUIProps {
  messages: MessageType[];
  results?: ResultsType;
  suggestedLinks?: React.ReactNode;
  showInput: boolean;
  renderInput: () => React.ReactNode;
  isTyping: boolean;
}

const ChatUI: React.FC<ChatUIProps> = ({
  messages,
  results,
  suggestedLinks,
  showInput,
  renderInput,
  isTyping,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const specialDoses = [
    "hinduismDose",
    "atheismDose",
    "judaismDose",
    "christianityDose",
  ];

  return (
    <div className="flex flex-col h-[calc(100dvh_-_50px)] md:h-[calc(100dvh)] bg-gradient-to-b from-blue-50/50 to-purple-50/50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-gray-200 p-4 flex items-center shadow-sm"
      >
        <Avatar className="h-8 w-8 mr-2">
          <AvatarImage src="/logo.png" alt="Spiritual Guide" />
          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            SG
          </AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-medium text-gray-800">Spiritual Guide</h1>
        {isTyping && (
          <motion.div
            className="flex ml-auto space-x-1"
            animate={{
              transition: {
                staggerChildren: 0.2,
              },
            }}
          >
            {[1, 2].map((dot) => (
              <motion.div
                key={dot}
                className="w-2 h-2 rounded-full bg-blue-400"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  delay: dot * 0.2,
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start ${
                message.role === "assistant" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`flex ${
                  message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                } md:max-w-[75%] space-x-2`}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0 mt-1">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/logo.png" alt="Spiritual Guide" />
                      <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                        SG
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}

                <div
                  className={`px-4 py-3 rounded-2xl ${
                    message.role === "assistant"
                      ? "bg-white text-gray-800 shadow-sm border border-gray-100"
                      : "bg-gradient-to-r from-primary to-purple-600 text-white"
                  }`}
                >
                  <div className="prose-sm">{message.content}</div>

                  {message.question &&
                    specialDoses.includes(message.question) &&
                    suggestedLinks && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ delay: 0.5 }}
                        className="mt-3 space-y-2"
                      >
                        {suggestedLinks}
                      </motion.div>
                    )}

                  {message.question === "showResults" && results && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ delay: 0.5 }}
                      className="mt-3"
                    >
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100 shadow-sm">
                        <div className="flex items-center mb-2">
                          <Sparkles className="h-4 w-4 text-yellow-500 mr-1" />
                          <h3 className="text-sm font-semibold text-gray-900">
                            {results.level}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-700 mb-3">
                          {results.message.split("\n")[0]}
                        </p>
                        <div className="mt-2 bg-white rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${results.percentage}%` }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                          />
                        </div>
                        <p className="text-xs mt-1 text-gray-500 text-right">
                          {results.totalPoints}/{results.maxPossible} points
                        </p>
                        <div className="mt-3 space-y-2">
                          {results.suggestedLinks}
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {message.role === "user" && (
                    <motion.div
                      className="flex justify-end mt-1 space-x-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {[1, 2].map((tick) => (
                        <motion.div
                          key={tick}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + tick * 0.1 }}
                        >
                          <Check className="h-3 w-3 text-blue-200" />
                        </motion.div>
                      ))}
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
          className="p-4 border-t border-gray-200/50 bg-white/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.98 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <Card className="border-0 shadow-sm bg-white/80">
              <CardContent className="p-4">{renderInput()}</CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ChatUI;
