import Sidebar from './SideComponent';
import ChatInterface from './ChatInterface';
import { Flamenco } from "next/font/google";
import React from 'react';

const sofia = Flamenco({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function AskAIPage() {
  return (
    <div>
      <React.Fragment>
        <div className={`flex w-screen ${sofia.className}`}>
          <div className='hidden sm:flex'>
          <Sidebar />
          </div>
          <div className='w-full'>
            <ChatInterface />
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}