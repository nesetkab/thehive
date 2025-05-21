"use client";

import Header from "@/components/header";
import Particles from "@/components/ui/particles";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import Link from "next/link";
import { AuroraText } from "@/components/magicui/aurora-text";
import { LuConstruction } from "react-icons/lu";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <Header />
        <div>
          <h2 className="text-2xl font-medium mb-20">
            <LuConstruction className="inline-block text-5xl text-white mr-2" />
            under construction!
          </h2>
        </div>
        <Link className="px-2" href="https://secureinstantpayments.com/?Event=5580" target="_blank">
          <NeonGradientCard className="hover:fill-50">
            <h2 className="text-center font-medium p-0 -m-1 -z-10 ">
              Sign Up
            </h2>
          </NeonGradientCard>
        </Link>







      </section>

      <AuroraText>
        <h1 className="font-black text-white ">
          Summer Camp!!!
        </h1>
      </AuroraText>


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
