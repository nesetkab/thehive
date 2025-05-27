import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import Image from "next/image";
import Link from "next/link";
export default function CTA() {
  return (
    <motion.div
      className="flex w-fit h-fit max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex h-fit w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <Link href="/summercamp" rel="noopener noreferrer" >
              <AnimatedShinyText className="px-4 py-1">
                <span>Sign up for our Summer Camp!</span>
              </AnimatedShinyText>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.img
        src="/hive text2.svg"
        alt="The Hive 3747, A high school robotics team from Sandy, Utah."
        className="mx-auto z-10 h-48 "
        variants={itemVariants}
      />
      <motion.div variants={itemVariants}>
        <Image
          className="text-center -z-10 -mt-16 text-2xl font-black text-zinc-300 sm:text-lg"
          src="/winners.jpg"
          alt="The members of The Hive embracing in celebration after winning the 2024 Utah Championship."
          width={800}
          height={600}
        />
      </motion.div>
    </motion.div>
  );
}
