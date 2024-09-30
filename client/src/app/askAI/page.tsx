"use client";

import SidebarComponent from './SideComponent';
import ChatInterface from './ChatInterface';
import Demo from './sidebar/Demo';
import { Flamenco } from "next/font/google";
import React, { useState } from 'react';

const sofia = Flamenco({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function AskAIPage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>('Dashboard');

  return (
    <div>
      <React.Fragment>
        <div className={`flex w-screen ${sofia.className}`}>
          <div className='hidden sm:flex'>
            <SidebarComponent setSelectedMenuItem={setSelectedMenuItem} />
          </div>
          <div className='w-full'>
            {selectedMenuItem === 'Dashboard' ? (
              <ChatInterface />
            ) : (
              <Demo chatHistory={[]} />
            )}
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}