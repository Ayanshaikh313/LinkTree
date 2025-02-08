"use client";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MeteorsDemo } from "@/components/MeteorsDemo";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const createTree = () => {
    router.push(`/generate?handle=${Text}`);
  };
  const [Text, setText] = useState("");
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid  grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center flex-col ml-[6vw] gap-3 mt-32 md:mb-44 mb-8 md:mt-40">
          <h1 className="text-[#D2E823] font-Poppins_Black font-bold text-4xl md:text-7xl">
            Everything you are.
          </h1>
          <h1 className="text-[#D2E823] font-Poppins_Black font-bold text-4xl md:text-7xl">
            In one, simple link in bio.
          </h1>
          <h1 className="text-[#D2E823] text-lg md:text-xl my-4">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </h1>
          <div className="input flex flex-col md:flex-row gap-6 mt-0 mr-[15px]">
            <input
              value={Text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              className=" md:px-4 md:py-3 py-2 px-1  text-[#676B5F] focus:outline-green-800 rounded-md"
              type="text"
              placeholder="Enter Your Handle"
            />
            <button
              onClick={() => {
                createTree();
              }}
              type="submit"
              className="bg-[#E3BAE4] rounded-full py-2 px-1 ml-10 mr-14 md:px-8 md:py-3 font-semibold"
            >
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[6vw] mt-10 md:mt-52">
          <img className="w-full  max-w-md" src="/homepage.png" alt="homepage image" />
        </div>
      </section>
      <section className="bg-[#E9C0E9] min-h-[100vh] grid grid-cols-1 md:grid-cols-2">
        <div className="one ml-[6vw] mb-16">
          <img
            className="mt-20 md:mt-40 w-full max-w-lg"
            src="/second.png"
            alt="second image"
          />
        </div>
        <div className="two mr-[6vw] flex flex-col justify-center gap-5 items-center">
          <h1 className="text-4xl md:text-6xl  font-bold text-[#502274] font-Poppins_Black">
            Create and customize your Linktree in minutes
          </h1>
          <h1 className="text-[#502274] font-semibold text-base md:text-lg">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </h1>
          <div className="btn flex justify-start items-start m-0 md:mt-8 md:mr-[490px]">
            <button className="bg-[#502274] rounded-full px-8 py-3 text-white font-semibold">
              Get Started for free
            </button>
          </div>
        </div>
      </section>
      <section className="min-h-[100vh] grid grid-cols-1 md:grid-cols-2 bg-[#780016]">
        <div className="one flex flex-col justify-center items-center ml-[6vw]">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-Poppins_Black">
            Share your Linktree from your Instagram, TikTok, Twitter and other bios
          </h1>
        </div>
        <div className="two mr-[6vw]">
          <img className="mt-20 md:mt-40 w-full max-w-lg" src="/third.png" alt="" />
        </div>
      </section>
      <section className="min-h-[100vh] gap-10 bg-white flex flex-col items-center justify-center ">
        <div className="mt-20 md:mt-80 flex justify-center items-center flex-col gap-4">
          <h1 className="text-3xl md:text-4xl text-[#502274] font-bold font-Poppins_Black">
            Click To Get Source Code
          </h1>
          <img width={80} className="rounded-full" src="/logo.png" alt="" />
          <Link href="https://github.com/Ayanshaikh313?tab=repositories">
            <MeteorsDemo />
            <button className="p-[3px] mt-8 relative mb-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-black hover:bg-transparent font-Poppins_Black">
                Click Me!
              </div>
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
