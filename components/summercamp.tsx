import { motion } from "framer-motion";
import TextBlur from "./ui/text-blur";
import AnimatedShinyText from "./ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants"
import Image from "next/image";
import { PulsatingButton } from "./ui/pulsating-btn";

export default function summerCamp() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-muted/80 text-center">
            <PulsatingButton duration={"10"} pulseColor="#FF0000" className="px-4 py-1">
              <span>gunel has no aura</span>
            </PulsatingButton>
          </div>
        </div>
      </motion.div>



    </motion.div>
  )
}



