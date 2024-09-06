"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LawDrawer from "@/components/LawDrawer";
import Image from "next/image";

interface Message {
  sender: string;
  text: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Welcome to Naaya! How can I assist you today?" }
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newMessage: Message = { sender: "user", text: inputValue };
    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate bot response (this will be replaced with actual chatbot integration)
    setTimeout(() => {
      const botResponse: Message = { sender: "bot", text: "This is a simulated response." };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleNewChat = () => {
    // Clear current chat
    setMessages([{ sender: "bot", text: "Welcome to Naaya! How can I assist you today?" }]);
    setInputValue("");

    const chatHistory = JSON.stringify(messages);
    console.log("Chat history saved:", chatHistory);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center items-center h-1/4">
        <Image src="/navlogo.png" width={100} height={500} alt="Logo" />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl">Welcome to Naaya</h1>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
        <Button onClick={handleNewChat}>New chat</Button>
        <LawDrawer />
      </div>
      <div className="flex flex-col flex-grow p-4 space-y-4 overflow-y-auto bg-gray-100 mt-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="flex p-4 bg-white border-t border-gray-300">
        <Input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow mr-2"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
