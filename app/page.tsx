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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" flex flex-row flex-wrap ">
        <div className="basis-1/3 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 lg:text-left">
          <h2 className="mb-3 text-xl font-semibold">
            Hive Members
          </h2>
        </div >
       
        <div className="basis-1/3">
          
          <Carousel images={images} />
          
        </div>
        <div className="basis-1/3 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 lg:text-right">
          <a
            className="pointer-events-none   lg:pointer-events-auto "
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-xl font-semibold">
              Socials
            </h2>
          </a>
        </div>
      </div>

      <div className=" p-0 relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-yellow-200 after:via-yellow-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-yellow-700 before:dark:opacity-10 after:dark:from-yellow-900 after:dark:via-[#FFD700] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#FDE9B160]"
          src="/hive text2.svg"
          alt="Next.js Logo"
          width={500}
          height={10}
          priority
        />
      </div>
      
      <div className=" flex flex-row flex-wrap justify-center lg:mb-0 lg:w-full  lg:text-left">
        <a
          href="https://www.firstinspires.org/robotics/ftc"
          className="shrink group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
          className="shrink group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
          className="shrink group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
          className="shrink group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
    </main>
  );
}
