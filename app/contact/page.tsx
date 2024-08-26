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

      <div className="mt-12 px-24 hidden lg:flex self-stretch justify-center flex-row">
        <div className="flex flex-col mr-8">
          <h2 className="text-4xl font-black">Socials</h2>
          <a
            href="https://www.firstinspires.org/robotics/ftc"
            className="mt-4 place-items-center flex flex-row shrink group rounded-lg border border-transparent pl-1 pr-3.5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="ml-4"
              src="/instagram.svg"
              alt="Instagram"
              width={50}
              height={50}
              priority
            />
            <h2 className="px-4 text-2xl font-semibold">Instagram</h2>
          </a>
          <a
            href="https://www.firstinspires.org/robotics/ftc"
            className="mt-4 place-items-center flex flex-row shrink group rounded-lg border border-transparent pl-1 pr-3.5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="ml-4"
              src="/youtube.svg"
              alt="Youtube"
              width={50}
              height={50}
              priority
            />
            <h2 className="px-4 text-2xl font-semibold">Youtube</h2>
          </a>
          <a
            href="https://www.firstinspires.org/robotics/ftc"
            className="mt-4 place-items-center flex flex-row shrink group rounded-lg border border-transparent pl-1 pr-3.5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="ml-4"
              src="/x.svg"
              alt="Twitter/X"
              width={50}
              height={50}
              priority
            />
            <h2 className="px-4 text-2xl font-semibold">X (Twitter)</h2>
          </a>
          <a
            href="https://www.firstinspires.org/robotics/ftc"
            className="mt-4 place-items-center flex flex-row shrink group rounded-lg border border-transparent pl-1 pr-3.5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="ml-4"
              src="/facebook.svg"
              alt="Facebook"
              width={50}
              height={50}
              priority
            />
            <h2 className="px-4 text-2xl font-semibold">Facebook</h2>
          </a>
          
        </div>
        <div className="flex flex-col ml-8">
          <h2 className="text-4xl font-black">Contact Us</h2>
          <a
            href="mailto:3747hive@gmail.com"
            className="mt-4 place-items-center flex flex-row shrink group rounded-lg border border-transparent pl-1 pr-3.5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
            
          >
            <Image
              className="ml-4"
              src="/mail.svg"
              alt="eMail"
              width={50}
              height={50}
              priority
            />
            <h2 className="px-4 text-2xl font-semibold">3747hive@gmail.com</h2>
          </a>
          <a
            href="https://g.co/kgs/PzyaNM7"
            className="mt-4 place-items-center flex flex-row shrink group rounded-lg border border-transparent pl-1 pr-3.5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="ml-4"
              src="/address.svg"
              alt="Address"
              width={50}
              height={50}
              priority
            />
            <h2 className="px-4 text-2xl font-semibold">Beehive Academy</h2>
          </a>
          <a
            href="tel:8015760070"
            className="mt-4 place-items-center flex flex-row shrink group rounded-lg border border-transparent pl-1 pr-3.5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
            
          >
            <Image
              className="ml-4"
              src="/phone.svg"
              alt="Phone"
              width={50}
              height={50}
              priority
            />
            <h2 className="px-4 text-2xl font-semibold">School Phone</h2>
          </a>
          <a
            href="https://beehiveacademy.org"
            className="mt-4 place-items-center flex flex-row shrink group rounded-lg border border-transparent pl-1 pr-3.5 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="ml-4"
              src="/web.svg"
              alt="Website"
              width={50}
              height={50}
              priority
            />
            <h2 className="px-4 text-2xl font-semibold">School Website</h2>
          </a>
        </div>
      </div>
    </main>
  );
}
