'use client'

import Image from "next/image";
import Link from "next/link";
import { LuConstruction } from "react-icons/lu";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animation-variants";

export default function Page() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Link
        href="/"
        className="hidden lg:inline-block self-start mt-12 ml-24 rounded-lg border border-transparent  transition-colors  hover:border-neutral-700 hover:bg-neutral-800/30 "
        rel="noopener noreferrer"
        legacyBehavior>
        <Image
          className="py-4 relative drop-shadow-[0_0_0.3rem_#FDE9B160]"
          src="/hive-longway.svg"
          alt="The Hive"
          width={300}
          height={24}
          priority
        />
      </Link>
      <motion.div variants={itemVariants} className="flex-row flex-wrap mt-12 justify-center">
        <h1 className="text-4xl font-bold text-center text-white">
          <LuConstruction className="inline-block text-5xl text-white" />
          <span className="ml-2">Under Construction</span>
        </h1>
        </motion.div>
    </main>
  );
}
