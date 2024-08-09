"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from './slider';



export default function Home() {
  const images = [
    'beehive.svg',
    'dod.svg',
    'stem.svg',
    'motorola.svg',
    'Aquaveo.svg',
    'advantage.svg',
    'plastic.svg',
  ];
   // bg-gray-100
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-center">
      <Link
        href="/"
        className="hidden lg:inline-block absolute self-start mt-12 ml-24 rounded-lg border border-transparent  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30 "
        rel="noopener noreferrer"
      >
        <h2 className="px-8 py-6 text-center  text-xl  font-semibold">
         Hive Members
         </h2>
      </Link>

      <Link
        href="/contact"
        className="hidden lg:inline-block absolute self-end mt-12 mr-24 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30 "
        rel="noopener noreferrer"
      >
        <h2 className="px-8 py-6 text-center  text-xl  font-semibold">
          Socials/Contact
        </h2>
      </Link>
      <div className="hidden lg:flex flex-row flex-wrap mt-12 justify-center">
        
        <div className="basis-1/2">
          <Carousel images={images} />
        </div>
        
      </div>

      <div className=" lg:hidden flex flex-row pt-16 py-0 px-0 ">
        <div className="left-0 top-0 w-32  relative text-center  group rounded-lg border border-transparent  transition-colors  hover:border-neutral-700 hover:bg-neutral-800/30 ">
          <h2 className="mb-3 mt-3 text-xl font-semibold">
            Hive
          </h2>
        </div >
        <div className="right-0 top-0 w-32  relative text-center  group rounded-lg border border-transparent  transition-colors  hover:border-neutral-700 hover:bg-neutral-800/30 ">
          
            <h2 className=" mb-3 mt-3 text-xl font-semibold">
              Socials
            </h2>
          
        </div>
      </div>

      <div className=" px-8 relative z-[-1] flex place-items-center before:absolute  before:-translate-x-1/3 before:rounded-full  before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[130px] after:w-full after:translate-x-1/6 after:bg-gradient-conic  after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-yellow-700 before:opacity-10 after:from-yellow-900 after:via-[#FFD700] after:opacity-40 before:w-[400px]  before:h-[400px]">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#FDE9B160]"
          src="/hive text2.svg"
          alt="Next.js Logo"
          width={500}
          height={10}
          priority
        />
      </div>
      
      <div className="hidden lg:flex p-24 flex flex-row flex-wrap justify-center lg:mb-0 lg:w-full  ">
        <a
          href="https://www.firstinspires.org/robotics/ftc"
          className="shrink group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            FTC{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn more about FIRST Tech Challenge and FIRST.
          </p>
        </a>

        <Link
          href="/sponsors"
          className="shrink group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Sponsors{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about our team and why you should sponsor us!
          </p>
        </Link>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="shrink group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Documents{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Access our Engineering Portfolio as well as our Presentation.
          </p>
        </a>

        <Link
          href="/accolades"
          className="shrink group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Accolades{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Learn about our past seasons and our robots.
          </p>
        </Link>
      </div>

      <div className="pb-36 lg:hidden  flex flex-row flex-wrap justify-center text-center">
        <a
          href="https://www.firstinspires.org/robotics/ftc"
          className="justify-left shrink group rounded-lg border border-transparent pl-1 pr-3.5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-1 text-xl font-semibold">
            FTC{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[15ch] text-sm opacity-50">
            Learn more about FIRST Tech Challenge & FIRST.
          </p>
        </a>

        <Link
          href="/sponsors"
          className="shrink group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-1 text-xl font-semibold">
            Sponsors{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[15ch] text-sm opacity-50">
            Learn about our team and why you should sponsor us!
          </p>
        </Link>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="shrink group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-1 text-xl font-semibold">
            Documents{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[15ch] text-sm opacity-50">
            Access our Eng. Portfolio and our Presentation.
          </p>
        </a>

        <Link
          href="/accolades"
          className="shrink group rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-1 text-xl font-semibold">
            Accolades{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[15ch] text-balance text-sm opacity-50">
            Learn about our past seasons and our robots.
          </p>
        </Link>
      </div>
    </main>
  );
}
