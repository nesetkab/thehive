import Link from "next/link";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { SiNotion } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
  type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed flex right-0 left-0 justify-between top-0 z-[50] m-4">
      <motion.div variants={itemVariants}>
        <Link href="/" rel="noopener noreferrer" >
          <Button
            size="sm"
            variant="secondary"
            className="text-yellow-50 transition-all duration-150 ease-linear md:hover:text-yellow-200">
            <FaHome className="md:mr-1.5" />
            <span className="hidden md:inline">Home</span>
          </Button>
        </Link>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Link href="/contact" rel="noopener noreferrer" >
          <Button
            size="sm"
            variant="secondary"
            className="text-yellow-50 transition-all duration-150 ease-linear md:hover:text-yellow-200">
            <FaPhoneAlt className="md:mr-1.5" />
            <span className="hidden md:inline">Contact</span>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
