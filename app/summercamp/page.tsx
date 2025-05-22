"use client";

import Header from "@/components/header";
import Particles from "@/components/ui/particles";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import Link from "next/link";
import { AuroraText } from "@/components/magicui/aurora-text";
import { LuConstruction } from "react-icons/lu";
import SummerCamp from "@/components/summercamp";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <Header />
        <SummerCamp />
      </section>




      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"F7FF9B"}
        refresh
      />

    </main >
  );
}
