import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";

export default function Logos() {
  return (
    <motion.div
      className="flex h-full w-full flex-col gap-2 pb-12 pt-12 md:pb-24 md:pt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-2xl font-bold tracking-tight text-zinc-200 md:text-3xl"
          text="Our Sponsors:"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <p className="text-center text-base text-zinc-300 sm:text-lg">
          A 16-year-old high school robotics team from Sandy, Utah, based at
          <span>&nbsp;</span>
          <Link
            href="https://beehiveacademy.org/"
            className="text-center text-base text-zinc-300 underline sm:text-lg"
            target="_blank">
            Beehive Science & Technology Academy.
          </Link>
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-xl font-bold text-zinc-300 md:text-2xl"
          text="Into The Deep Stats:"
          duration={0.8}
        />
        <p className="text-center text-base text-zinc-300 sm:text-lg">
          Utah Winning Alliance Captain
          <br />
          Utah Inspire Award Winner
          <br />
          26-0 at last 3 comps
          <br />
          #1 & #3 Utah np OPRs <br />
          Top 4/4 State Records <br />
          <Link
            href="https://youtu.be/X6IVD366oko?si=Zzr-3RBBw4lECqgz"
            className="text-center text-base text-zinc-300 underline sm:text-lg"
            target="_blank">
            320np Utah State Record
          </Link>
        </p>
        
      </motion.div>
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-2xl font-black text-zinc-300 sm:text-lg"
          text="Please note: This site is still under construction. Thank you for your patience!"
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
