import React from 'react'
import Sidebar from './sidebar'
import ChatInterface from './ChatInterface'

import { Flamenco } from "next/font/google";

const sofia = Flamenco({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function chatspace() {
  return (
    <div className={`flex h-screen w-screen ${sofia.className}`}>
      <Sidebar />
      {/* <div className="flex-1 p-4">
        <h1 className="text-2xl">Chat Interface</h1>
        <div className="mt-4">
          <p>uviuvu</p>
        </div>
      </div> */}
      <div className='w-full'>
      <ChatInterface />
      </div>
    </div>
  )
}
