import React from 'react';
import Link from 'next/link';

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform"
  >
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);

interface RecruitingSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

const RecruitingSection: React.FC<RecruitingSectionProps> = ({
  title = "Join The Hive!",
  description = "We're looking for passionate and innovative minds to contribute to our team. See how you can make an impact.",
  ctaText = "Learn More",
  ctaLink = "https://docs.google.com/forms/d/e/1FAIpQLSeJNtfkWhTxXR4i5-4TGMmnMV3stT16EHkmsOCVxF4jhKKg3Q/viewform",
}) => {
  return (
    <section className="py-8 sm:py-10">
      <div className="container mx-auto px-4">
        <div className=" text-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-white max-w-2xl">
                {description}
                <span className='italic text-xs'> Note: Students must be attending Beehive Academy to join.</span>
              </p>
            </div>
            <Link href={ctaLink} target='_blank'>
              <span className=" group inline-flex items-center justify-center whitespace-nowrap rounded-md bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 transition-colors">
                {ctaText}
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitingSection;
