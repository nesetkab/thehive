"use client";

import CTA from "@/components/cta";
//import Logos from "@/components/logos";
import Particles from "@/components/ui/particles";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SponsorsSection from "@/components/SponsorsSection";

import Aquaveo from "@/public/logos/Aquaveo.svg";
import BeehiveAcademy from "@/public/logos/BeehiveAcademy.svg";
import Dodstem from "@/public/logos/Dodstem.svg";
import Haas from "@/public/logos/Haas.svg";
import JacobsenInnovation from "@/public/logos/JacobsenInnovation.svg";
import LayshiaClarendon from "@/public/logos/LayshiaClarendon.svg";
import Motorola from "@/public/logos/Motorola.svg";
import Parker from "@/public/logos/Parker.svg";
import STEMActionCenter from "@/public/logos/STEMActionCenter.svg";
import Utahrealestate from "@/public/logos/Utahrealestate.svg";
import RecruitingSection from "@/components/recruit";

const sponsorData = [
  {
    id: 1,
    name: "Beehive Academy",
    logoSvg: < BeehiveAcademy />,
    websiteUrl: 'https://beehiveacademy.org',
  },
  {
    id: 2,
    name: "Aquaveo",
    logoSvg: < Aquaveo />,
    websiteUrl: 'https://aquaveo.com/',
  },
  {
    id: 3,
    name: "Dodstem",
    logoSvg: < Dodstem />,
    websiteUrl: 'https://www.dodstem.us/',
  },
  {
    id: 4,
    name: "Haas",
    logoSvg: < Haas />,
    websiteUrl: 'https://www.ghaasfoundation.org/',
  },

  {
    id: 6,
    name: "LayshiaClarendon",
    logoSvg: < LayshiaClarendon />,
    websiteUrl: 'https://www.athletesforimpact.com/thelayshiaclarendonfoundation',
  },
  {
    id: 7,
    name: "Motorola",
    logoSvg: < Motorola />,
    websiteUrl: 'https://motorola.com/',
  },
  {
    id: 8,
    name: "Parker",
    logoSvg: < Parker />,
    websiteUrl: 'https://www.parker.com/'
  },
  {
    id: 9,
    name: "STEMActionCenter",
    logoSvg: < STEMActionCenter />,
    websiteUrl: 'https://stem.utah.gov/'
  },
  {
    id: 10,
    name: "Utahrealestate",
    logoSvg: < Utahrealestate />,
    websiteUrl: 'https://www.utahrealestate.com/',
  },
  {
    id: 11,
    name: "JacobsenInnovation",
    logoSvg: < JacobsenInnovation />,
    websiteUrl: 'https://jacobseninnovations.com/',
  },

]

export default function Home() {
  return (
    <main className="flex w-auto min-w-full  min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <section className=" max-w-full min-w-full flex flex-col  items-center px-4 sm:px-6 lg:px-8">
        <Header />

        <CTA />

        <RecruitingSection />

        <SponsorsSection
          sponsors={sponsorData}
        />
      </section>

      <Footer />

      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>
  );
}
