"use client";

import Header from "@/components/header";
import Particles from "@/components/ui/particles";
import Footer from "@/components/footer";
import CTA from "@/components/cta";
import Logos from "@/components/logos";
import SummerCamp from "@/components/summercamp"
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <Header />
        <NeonGradientCard>
          this page is currently under construction. come back later!
        </NeonGradientCard>


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
