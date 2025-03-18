"use client";
import { useState } from "react";
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ChatUI() {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white p-6">
      <Image
        src="/logo.png"
        alt="Logo"
        width={80}
        height={80}
        objectFit="contain"
        className="m-4"
      />
      <h1 className="text-3xl font-semibold mb-6">
        Begin you Spiritual Journey today
      </h1>

      <div className="relative w-full max-w-xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything"
          className="w-full bg-gray-800 text-white rounded-lg p-4 pr-12 border border-gray-700 focus:outline-none"
        />
        <Button className="absolute right-4 top-1/2 -translate-y-1/2">
          <Mic size={20} />
        </Button>
      </div>

      <div className="mt-10 bg-gray-900 p-4 rounded-lg text-center w-full max-w-xl">
        <p className="text-gray-400 text-sm">Unlock more with Plus</p>
        <p className="text-gray-500 text-xs">
          ChatGPT Plus gives you higher limits, smarter models, and Sora for
          video.
        </p>
        <Button className="mt-2 bg-gray-700 text-white hover:bg-gray-600">
          Get Plus
        </Button>
      </div>
    </div>
  );
}
