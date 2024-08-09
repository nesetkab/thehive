import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <Link
        href="/"
        className="hidden lg:inline-block self-start mt-12 ml-24 rounded-lg border border-transparent  transition-colors   hover:border-neutral-700 hover:bg-neutral-800/30 "
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

      <div className="mt-12 px-24 hidden lg:flex self-stretch  place-items-center justify-between  flex-row">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Socials</h2>
          <Image
            className=""
            src="/instagram.svg"
            alt="Instagram"
            width={96}
            height={96}
            priority
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">Contact Us</h2>
        </div>
      </div>
    </main>
  );
}
