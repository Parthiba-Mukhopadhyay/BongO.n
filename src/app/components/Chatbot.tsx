'use client'
import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import axios from "axios";
import ReactMarkdown from "react-markdown";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; user: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, user: true }];
      setMessages(newMessages);
      setInput("");

      try {
        setLoading(true);

        const prompt = `
        You are a ChatBot designed by PAW-sitive. You strictly answer only queries related to animals and their health. If a question is asked outside this scope, reply with Some Animal Puns in the context of the question given.
        User query: ${input}`;

        const response = await axios.post(
          process.env.NEXT_PUBLIC_AI_KEY ?? "",
          {
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
          }
        );
        console.log(response);
        const botResponse = response.data.candidates[0].content.parts[0].text;
        setLoading(false);
        setMessages([...newMessages, { text: botResponse, user: false }]);
      } catch (error) {
        console.error("Error sending message:", error);
        setLoading(false);
        setMessages([
          ...newMessages,
          { text: "Error: Could not get response from AI", user: false },
        ]);
      }
    }
  };

  useEffect(() => {
    if (isChatbotVisible && messages.length === 0) {
      setMessages([
        {
          text: "Hello 👋, Your friendly assistant here! How can I help you?",
          user: false,
        },
      ]);
    }
  }, [isChatbotVisible]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end h-screen z-50">
      <button
        onClick={() => setIsChatbotVisible(!isChatbotVisible)}
        className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg absolute bottom-3"
      >
        {isChatbotVisible ? <IoClose className="w-6 h-6" /> : <RiMessage3Fill className="w-6 h-6" />}
      </button>
      {isChatbotVisible && (
        <div className="bg-white w-80 h-3/4 shadow-lg rounded-lg overflow-hidden mt-4 absolute bottom-16 right-12">
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-4">
            <h1 className="text-white text-lg font-bold text-center">Welcome to PAW-sitive</h1>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.user ? "justify-end" : "justify-start"} mb-2`}
              >
                <div
                  className={`rounded-lg p-2 shadow-md max-w-xs ${
                    msg.user ? "bg-red-200 text-black" : "bg-red-400 text-white"
                  }`}
                >
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-center mb-2">
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 bg-red-400 rounded-full animate-bounce"></div>
                  <div className="w-4 h-4 bg-red-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-4 h-4 bg-red-400 rounded-full animate-bounce delay-150"></div>
                </div>
                <p className="ml-2 text-red-400">Loading...</p>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="p-2 border-t border-gray-200 flex items-center absolute bottom-1 w-full">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-grow border border-gray-300 rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 bg-red-500 hover:bg-red-600 text-white p-4 rounded-full"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
