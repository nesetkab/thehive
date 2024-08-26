import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Link
        href="/"
        className="hidden lg:inline-block self-start mt-12 ml-24 rounded-lg border border-transparent  transition-colors  hover:border-neutral-700 hover:bg-neutral-800/30 "
        rel="noopener noreferrer"
      >
        <Image
          className="py-4 relative drop-shadow-[0_0_0.3rem_#FDE9B160]"
          src="/hive-longway.svg"
          alt="The Hive"
          width={300}
          height={24}
          priority
        />
      </Link>

      <Link
        href="/contact"
        className="hidden lg:inline-block absolute self-end mt-12 mr-24 rounded-lg border border-transparent transition-colors  hover:border-neutral-700 hover:bg-neutral-800/30 "
        rel="noopener noreferrer"
      >
        <h2 className="px-12 py-8 text-right  text-2xl  font-semibold">
          Socials/Contact
        </h2>
      </Link>

      <div className="mt-12 px-24 hidden lg:flex self-stretch  place-items-start  flex-row">
        <div className="">
          <div className="pl-12  flex flex-col justify-between">
            <h2 className="text-4xl font-black mb-4">Our Members:</h2>
            <div className="flex flex-row ">
              <div className="flex flex-col">
                <Image
                  className=""
                  src="/royd.jpg"
                  alt="eMail"
                  width={100}
                  height={100}
                  priority
                />
                <h2 className="text-3xl font-black ">Royd</h2>
                <h2 className="text-2xl font-bold ">Coach</h2>
              </div>
              <div className="px-12 flex flex-col">
                <Image
                  className=""
                  src="/royd.jpg"
                  alt="eMail"
                  width={100}
                  height={100}
                  priority
                />
                <h2 className="text-3xl font-black ">Royd</h2>
                <h2 className="text-2xl font-bold ">Coach</h2>
              </div>
              <div className="flex flex-col">
                <Image
                  className=""
                  src="/royd.jpg"
                  alt="eMail"
                  width={100}
                  height={100}
                  priority
                />
                <h2 className="text-3xl font-black ">Royd</h2>
                <h2 className="text-2xl font-bold ">Coach</h2>
              </div>
            </div>
          </div>
          <div className="pl-24 flex flex-row">
            <div className="z-[-1] ">
              <Image
                src="/winners.jpg"
                alt="Hive Members celebrating victory"
                className=""
                width={1024}
                height={24}
                priority
              />
            </div>
            <div className="pt-12 -ml-6">
              <h2 className="text-4xl font-black mb-1 max-w-[15ch]">
                This is us after we qualified for the World Championship for the
                very first time in the teams history.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-5 hidden lg:inline-block ">
        <h2 className="text-4xl font-black mb-1">Our Stats:</h2>
        <Link
          href="/accolades"
          className="text-blue-500 underline hover:text-blue-400"
          rel="noopener noreferrer"
        >
          <p className="text-center text-s font-black mb-1">See More</p>
        </Link>
      </div>
      <div className="px-24 hidden lg:flex self-stretch  place-items-start  flex-row justify-between">
        <div className="p-4 group rounded-lg border border-transparent transition-colors border-yellow bg-gray-100 border-neutral-100 bg-neutral-800/30 ">
          <h2 className="text-4xl font-black text-yellow-400 ">
            79th in Total OPR
          </h2>
          <p className="text-xl font-bold max-w-[30ch] mb-2">
            Out of 7,681 teams worldwide.
          </p>
          <p className="text-m font-normal max-w-[30ch]">
            OPR is Offensive Power Ranking and it shows how many points a team
            contributes per match on average.
          </p>
        </div>
        <div className="ml-8 p-4 group rounded-lg border border-transparent transition-colors border-yellow bg-gray-100 border-neutral-100 bg-neutral-800/30 ">
          <h2 className="text-4xl font-black text-yellow-400 ">
            63rd in TeleOP OPR
          </h2>
          <p className="text-xl font-bold max-w-[30ch] mb-2">
            Out of 7,681 teams worldwide.
          </p>
          <p className="text-m font-normal max-w-[30ch]">
            TeleOP OPR is the total offensive points scored during the
            driver-controlled period of the match.
          </p>
        </div>
        <div className="ml-8 p-4 group rounded-lg border border-transparent transition-colors border-yellow bg-gray-100 border-neutral-100 bg-neutral-800/30 ">
          <h2 className="text-4xl font-black text-yellow-400 ">
            Best team in Utah
          </h2>
          <p className="text-xl font-bold max-w-[30ch] mb-2">
            Out of the 37 teams in Utah.
          </p>
          <p className="text-m font-normal max-w-[30ch]">
            As of the 2023-2024 season, our team is ranked #1 in Utah in every
            category, including the robot and awards.
          </p>
        </div>
        <div className="ml-8 p-4 group rounded-lg border border-transparent transition-colors border-yellow bg-gray-100 border-neutral-100 bg-neutral-800/30 ">
          <h2 className="text-4xl font-black text-yellow-400 ">
            11th at World Champ.
          </h2>
          <p className="text-xl font-bold max-w-[30ch] mb-2">
            Out of the 56 teams in our division.
          </p>
          <p className="text-m font-normal max-w-[30ch]">
            Based on TBP, which is the most effective way to rank teams while
            accounting for unfair matchups.
          </p>
        </div>
      </div>
      <div className="pt-10 pb-5 hidden lg:inline-block ">
        <h2 className="text-4xl font-black mb-1">How To Help:</h2>
      </div>
      <div className="mb-8 px-24 hidden lg:flex self-stretch  place-items-start  flex-row">
        <div className="shrink-0  justify-self-start self-start  place-items-center flex flex-col">
          <h2 className="text-3xl font-black">Our Budget:</h2>
          <table className="mt-4 table-auto border-collapse border-spacing-4 border border-white">
            <thead>
              <tr>
                <th className="p-4 border-spacing-4 border border-white">
                  Category
                </th>
                <th className="p-4 border-spacing-4 border border-white">
                  Estimate
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-spacing-4 border border-white">
                  Robot Materials & Electronics
                </td>
                <td className="p-4 border-spacing-4 border border-white">
                  $5,000-$10,000
                </td>
              </tr>
              <tr>
                <td className="p-4 border-spacing-4 border border-white">
                  Tools for Design and Manufacturing
                </td>
                <td className="p-4 border-spacing-4 border border-white">
                  $3,000-$8,000
                </td>
              </tr>
              <tr>
                <td className="p-4 border-spacing-4 border border-white">
                  Travel to FIRST® World Championship
                </td>
                <td className="p-4 border-spacing-4 border border-white">
                  $30,000-$35,000
                </td>
              </tr>
              <tr>
                <td className="p-4 border-spacing-4 border border-white">
                  Travel to Invitational Competitions
                </td>
                <td className="p-4 border-spacing-4 border border-white">
                  $5,000-$10,000
                </td>
              </tr>
              <tr>
                <td className="p-4 border-spacing-4 border border-white">
                  Team Merch, Room Decor, Food, etc.
                </td>
                <td className="p-4 border-spacing-4 border border-white">
                  $500-$3,000
                </td>
              </tr>
              <tr>
                <td className="font-bold p-4 border-spacing-4 border border-white">
                  Total
                </td>
                <td className="font-bold p-4 border-spacing-4 border border-white">
                  $43,500-$66,000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="">
          <div className="pl-12  flex flex-nowrap flex-col">
            <div className="p-8 group rounded-lg border border-transparent transition-colors border-yellow bg-gray-100 border-neutral-100 bg-neutral-800/30 ">
              <h2 className="text-4xl font-black mb-1">Cash Donations</h2>
              <p className="text-xl ">
                Cash Donations allow us to use the money freely on what is
                necessary.
              </p>
            </div>
            <div className="p-8 mt-8 group rounded-lg border border-transparent transition-colors border-yellow bg-gray-100 border-neutral-100 bg-neutral-800/30 ">
              <h2 className="text-4xl font-black mb-1">Tools, Parts, etc.</h2>
              <p className="text-xl ">
                Donations such as 3D-Printers, CNCs, Aluminum, Computers, etc.
                are extremely useful as these parts are often very expensive.
              </p>
            </div>
            <div className="p-8 mt-8 group rounded-lg border border-transparent transition-colors border-yellow bg-gray-100 border-neutral-100 bg-neutral-800/30 ">
              <h2 className="text-4xl font-black mb-1">Mentorship</h2>
              <p className="text-xl ">
                Providing expertise through online or in-person mentorships are
                extremely useful, as learning directly from professionals is the
                best way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12  flex-row justify-between hidden lg:flex ">
        <div className="p-8 group rounded-lg border border-transparent transition-colors border-white bg-neutral-800/30 ">
          <h2 className="text-3xl font-black mb-1 ">
            All donations are tax-deductible, as we are under a 501(c)(3)
          </h2>
        </div>
        <Link href="/contact" className="ml-10" rel="noopener noreferrer">
          <h2 className="rounded-lg border border-transparent transition-colors border-white bg-neutral-800/30 hover:border-neutral-700 hover:bg-neutral-800/60  p-8 text-center self-center text-3xl font-black">
            Contact Us
          </h2>
        </Link>
      </div>
    </main>
  );
}
