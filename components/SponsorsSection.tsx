import React from 'react';

interface Sponsor {
  id: string | number;
  name: string;
  logoSvg: JSX.Element;
  websiteUrl: string;
}

interface SponsorsProps {
  sponsors: Sponsor[];
  title?: string;
  ctaTitle?: string;
  ctaText?: string;
  emailAddress?: string;
  emailButtonText?: string;
}

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const SponsorsSection: React.FC<SponsorsProps> = ({
  sponsors,
  title = "Sponsors",
  ctaTitle = "Want your name here?",
  ctaText = "Invest in our passion for robotics and our impact in the community.",
  emailAddress = "3747hive@gmail.com",
  emailButtonText = "Email Us",
}) => {
  return (
    <section className="text-neutral-100 lg:px-64 min-w-full justify-center items-center  py-16 md:py-24 sm:px-6 ">
      <div className="min-w-full items-center justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 ">
          {title}
        </h2>

        {sponsors.length > 0 ? (
          <div className="grid min-w-full  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-x-4 md:gap-y-1 gap-0 items-center justify-center">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${sponsor.name}`}
                className="group flex justify-center items-center text-neutral-400 hover:text-neutral-100 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded-md"
              >
                <div className="min-w-full min-h-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300 ">
                  {React.cloneElement(sponsor.logoSvg, {
                    className: "fill-white max-w-full p-4 max-h-full w-auto h-auto",
                  })}
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-neutral-400">We are currently seeking sponsors. Get in touch to feature your logo here!</p>
        )}

        <div className="mt-4 text-center">
          <h3 className="text-2xl sm:text-4xl font-semibold mb-2 text-neutral-50">
            {ctaTitle}
          </h3>
          <p className="text-neutral-300 max-w-xl mx-auto mb-4 text-sm sm:text-base leading-relaxed">
            {ctaText}
          </p>
          <a
            href={`mailto:${emailAddress}`}
            className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-neutral-900 bg-neutral-100 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-neutral-50 transition-colors"
          >
            {emailButtonText}
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section >
  );
};

export default SponsorsSection;
