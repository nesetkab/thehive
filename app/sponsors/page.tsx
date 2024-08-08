import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Link
        href="/"
        className="self-start mt-12 ml-24 rounded-lg border border-transparent  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30 "
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
        href="/sponsors"
        className="absolute self-end mt-12 mr-24 rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30 "
        rel="noopener noreferrer"
      >
        <h2 className="px-12 py-8 text-right  text-2xl  font-semibold">
          Socials
        </h2>
      </Link>

      <div className="mt-24 px-24 hidden lg:flex self-stretch  place-items-start  flex-row">
        <div className="shrink-0  justify-self-start self-start  place-items-center flex flex-col">
          <h2 className="text-3xl font-black">Our Sponsors:</h2>
          <div className=" justify-between  gap-y-8 items-center grid grid-flow-row auto-rows-max">
            <div>
              <Image
                className="-mt-4"
                src="/beehive.svg"
                alt="Beehive Science & Technology Academy"
                width={300}
                height={24}
                priority
              />
            </div>
            <div>
              <Image
                className=" -mt-14"
                src="/dod.svg"
                alt="The Hive"
                width={300}
                height={24}
                priority
              />
            </div>
            <div>
              <Image
                className=" "
                src="/stem.svg"
                alt="The Hive"
                width={300}
                height={24}
                priority
              />
            </div>
            <div>
              <Image
                className=""
                src="/motorola.svg"
                alt="The Hive"
                width={300}
                height={24}
                priority
              />
            </div>
            <div>
              <Image
                className=" "
                src="/Aquaveo.svg"
                alt="The Hive"
                width={300}
                height={24}
                priority
              />
            </div>
            <div>
              <Image
                className=" "
                src="/advantage.svg"
                alt="The Hive"
                width={300}
                height={24}
                priority
              />
            </div>
            <div>
              <Image
                className="-mt-2 "
                src="/plastic.svg"
                alt="The Hive"
                width={300}
                height={24}
                priority
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="pl-24  flex flex-nowrap flex-row">
            <div className="p-10 group rounded-lg border border-transparent transition-colors border-yellow bg-gray-100 border-neutral-100 bg-neutral-800/30 ">
              <h2 className="text-4xl font-black mb-1">Who:</h2>
              <p className="text-xl max-w-[30ch]">
                A high school FIRST® Tech Challenge robotics team made up of
                students interested in the STEM field and mentors who are
                professionals volunteering to help these students.
              </p>
            </div>
            <div className="p-10 ml-8 group rounded-lg border border-transparent transition-colors border-yellow bg-gray-100 border-neutral-100 bg-neutral-800/30 ">
              <h2 className="text-4xl font-black mb-1">What:</h2>
              <p className="text-xl max-w-[30ch]">
                Every year, we design, build, program, and compete robots in a
                2v2 challenge. Competing with thousands of teams across the
                world, we also find funding, make connections, and submit for
                awards.
              </p>
              <a
                href="https://www.firstinspires.org/robotics/ftc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-400"
              >
                Learn More
              </a>
            </div>
            <div className="p-10 ml-8 group rounded-lg border border-transparent transition-colors border-yellow bg-gray-100 border-neutral-100 bg-neutral-800/30 ">
              <h2 className="text-4xl font-black mb-1">Why:</h2>
              <p className="text-xl max-w-[30ch]">
                By taking the role of professionals, we improve our engineering
                skills while improving teamwork skills. We learn life skills
                while enjoying the thrill of competition.
              </p>
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
    </main>
  );
}
