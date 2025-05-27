"use client";

import React from 'react';
import Particles from '@/components/ui/particles';
import Header from '@/components/header';

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

// Example Social Icons (Replace with actual SVGs or from a library like react-icons)
const InstagramIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.644-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.644 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>;
const YouTubeIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.515 3.422 0 4.92 0 8.572v6.856c0 3.652.515 5.15 4.385 5.388 3.6.245 11.626.246 15.23 0 3.87-.238 4.385-1.736 4.385-5.388V8.572c0-3.652-.515-5.15-4.385-5.388zm-10.646 12.34V6.21l6.773 3.855-6.773 4.459z" /></svg>;
const XIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const FacebookIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>;


interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

export default function ContactPage() {
  const schoolAddress = "2165 E 9400 S Sandy, UT 84093";
  const contactEmail = "3747hive@gmail.com";
  const socialMediaLinks: SocialLink[] = [
    { name: "Instagram", href: "https://instagram.com/thehive3747", icon: <InstagramIcon /> },
    { name: "YouTube", href: "https://www.youtube.com/@thehive3747", icon: <YouTubeIcon /> },

  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form data submitted:", data);
    alert("Thank you for your message! (This is a demo - form data logged to console)");
    // In a real scenario, you'd send this data to a backend or a form handling service.
    event.currentTarget.reset(); // Reset form fields
  };

  return (
    <div className=" text-neutral-100 min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <Header />
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500">
          Get In Touch
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
          We&apos;d love to hear from you! Whether you have questions, feedback, or want to get involved, here&apos;s how you can reach us.
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Our School</h2>
            <div className="flex items-start text-neutral-200">
              <MapPinIcon />
              <p className="leading-relaxed">{schoolAddress}</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Email Us</h2>
            <div className="flex items-center text-neutral-200 hover:text-yellow-300 transition-colors">
              <EnvelopeIcon />
              <a href={`mailto:${contactEmail}`} className="leading-relaxed">
                {contactEmail}
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">Socials</h2>
            <div className="flex space-x-5">
              {socialMediaLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-neutral-400 hover:text-yellow-300 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Send Us a Message</h2>
          <form action="https://formspree.io/f/mpwdggon" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm text-neutral-100"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm text-neutral-100"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-300">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm text-neutral-100"
                placeholder="Reason for contacting"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md shadow-sm placeholder-neutral-500 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm text-neutral-100"
                placeholder="Your message..."
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-neutral-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-yellow-500 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Particles
        quantityDesktop={350}
        quantityMobile={100}
        ease={80}
        color={"#F7FF9B"}
        refresh
      />
    </div>
  );
}          
