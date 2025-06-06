"use client"

import Link from 'next/link'
import Header from '@/components/header'
import Particles from '@/components/ui/particles'

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <Header />
      <div className="text-center">
        <p className="text-base font-semibold text-yellow-300">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-yellow-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-yellow-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 transition-colors"
          >
            Go back home
          </Link>

        </div>
      </div>
      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </main>)
}
