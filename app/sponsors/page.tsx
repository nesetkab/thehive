import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <div className="hidden lg:flex  flex-row flex-wrap pt-24 p-0">
        <div className="mr-24 flex-1 group rounded-lg border border-transparent  transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ">
          <Link
            href="/sponsors"
            className="place-items-center "
            rel="noopener noreferrer"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#FDE9B160]"
              src="/hive-longway.svg"
              alt="The Hive"
              width={500}
              height={24}
              priority
            />
          </Link>
        </div>
        <div className="  ml-24 flex-1  group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ">
          <Link
            href="/sponsors"
            className="place-items-center "
            rel="noopener noreferrer"
          >
            <h2 className="pr-4 pt-5 text-right  text-2xl  font-semibold">
              Socials
            </h2>
          </Link>
        </div>
      </div>

      <div className="mt-24 hidden lg:flex  flex-wrap pt-24 p-0 place-items-center pt-0 ">
        <h2 className="text-3xl font-black">Our Sponsors:</h2>
        
      </div>
      <div className="mx-40 justify-between  gap-4 flex flex-row flex-wrap items-center">
          <div>
            <Image
              className=""
              src="/beehive.svg"
              alt="Beehive Science & Technology Academy"
              width={300}
              height={24}
              priority
            />
          </div>
          <div>
            <Image
              className=" "
              src="/dod.svg"
              alt="The Hive"
              width={300}
              height={24}
              priority
            />
          </div><div>
            <Image
              className=" "
              src="/stem.svg"
              alt="The Hive"
              width={300}
              height={24}
              priority
            />
          </div><div>
            <Image
              className=""
              src="/motorola.svg"
              alt="The Hive"
              width={300}
              height={24}
              priority
            />
          </div><div>
            <Image
              className=" "
              src="/Aquaveo.svg"
              alt="The Hive"
              width={300}
              height={24}
              priority
            />
          </div><div>
            <Image
              className=" "
              src="/advantage.svg"
              alt="The Hive"
              width={300}
              height={24}
              priority
            />
          </div><div>
            <Image
              className=" "
              src="/plastic.svg"
              alt="The Hive"
              width={300}
              height={24}
              priority
            />
          </div>
          
        </div>
    </main>
  );
}
