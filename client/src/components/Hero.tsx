import React from "react";
import Image from "next/image";
// import ReserveSpot from './ReserveSpot';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-visible flex flex-col md:flex-row max-w-screen gap-10 p-2 md:p-10 lg:p-16"
    >
      {/* <img
        src="/bg1.svg"
        alt="background gradient"
        className="absolute block max-w-none w-[150%] md:w-[70%] -top-52 -left-40 -z-10 opacity-60 md:top-[-30rem] md:left-[-25rem]"
      /> */}
      <div className="space-y-6 relative flex-1">
        <div className="space-y-2">
          <a
            href="/askAI"
            className="bg-slate-100 border bg-opacity-20 border-slate-400 rounded-full px-2 flex w-max py-1 gap-2 text-slate-700 hover:bg-opacity-40 duration-100"
            rel="noopener noreferrer"
          >
            try out Naaya.AI 🚀
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8L16 12M16 12L12 16M16 12H8M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                stroke="#344054"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
          </a>
          <h1 className="text-3xl lg:text-6xl 2xl:text-6xl !leading-[1.2] font-semibold">
            Wellcome to 
          </h1>
          <h1 className="text-3xl lg:text-6xl 2xl:text-6xl !leading-[1.2] font-semibold">
            NAAYA.AI
          </h1>
          <p className="text-slate-600 lg:text-lg">
            Welcome to NAAYA.AI! Log in to access personalized dashboards for
            users and legal professionals. Users can interact with a
            multilingual chatbot for legal queries, receive solutions, and get
            lawyer recommendations with text-to-voice and voice-to-text
            features. Legal professionals can post research, share cases, and
            engage in a professional community with comments, likes, and shares.
            They also have access to advanced documentation tools for case
            management. Join us for a collaborative and innovative legal
            experience.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            target="_blank"
            href="/"
            className="bg-slate-100 bg-opacity-30 hover:bg-opacity-60 border block border-slate-300 px-4 py-2 rounded-lg duration-100"
            rel="noopener noreferrer"
          >
            SIGN UP
          </a>
          <a
            target="_blank"
            href="/"
            className="bg-slate-950 text-white bg-opacity-30 hover:bg-opacity-60 border block border-slate-300 px-4 py-2 rounded-lg duration-100"
            rel="noopener noreferrer"
          >
            LOG IN
          </a>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/k.jpeg"
          width={700}
          height={700}
          quality={100}
          alt="NAAYA.AI"
          className="w-full mx-auto bg-[#1C0040] rounded-lg max-w-md"
          style={{
            boxShadow:
              "0px 1.946465253829956px 1.3903323411941528px 0px rgba(37, 2, 65, 0.04), 0px 4.525683879852295px 3.2326314449310303px 0px rgba(37, 2, 65, 0.06), 0px 8.127079963684082px 5.805057048797607px 0px rgba(37, 2, 65, 0.07), 0px 13.487942695617676px 9.634244918823242px 0px rgba(37, 2, 65, 0.09), 0px 22.220930099487305px 15.872093200683594px 0px rgba(37, 2, 65, 0.10), 0px 38.83574676513672px 27.739818572998047px 0px rgba(37, 2, 65, 0.12), 0px 84px 60px 0px rgba(37, 2, 65, 0.16)",
          }}
        />
      </div>
    </section>
  );
}
