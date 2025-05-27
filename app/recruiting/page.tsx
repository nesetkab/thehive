"use client";

import React from 'react';
import Link from 'next/link'; // Using Next.js Link
import Header from '@/components/header';

const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2"><path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 015.69 3.117L12 21.75l-5.69-6.633z" clipRule="evenodd" /><path d="M0 12.75a1.5 1.5 0 011.5-1.5h21a1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 01-1.5 1.5h-3.354a5.205 5.205 0 01-.889-1.358 7.5 7.5 0 00-12.512 0 5.205 5.205 0 01-.889 1.358H1.5A1.5 1.5 0 010 14.25v-1.5z" /></svg>;
const PencilSquareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2"><path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" /><path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" /></svg>;
const LightBulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 7.758a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" /></svg>;
const PlayCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1.5 inline-block align-middle"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" /></svg>;
const InformationCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1.5 inline-block align-middle"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.04-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" /></svg>;
const EnvelopeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" /></svg>;


// Placeholder data - replace with your actual links and info
const INTEREST_FORM_URL = "https://your-interest-form-link.com"; // <--- IMPORTANT: Update this link!
const CONTACT_EMAIL = "robotics@thehiveschool.org"; // <--- IMPORTANT: Update this email!
const YOUTUBE_VIDEO_URL = "https://www.youtube.com/watch?v=u5hEyV9w5SQL"; // Standard link for "About FIRST Tech Challenge (2021)"
const FTC_INFO_URL = "https://www.firstinspires.org/robotics/ftc";

const SectionTitle: React.FC<{ children: React.ReactNode; icon?: JSX.Element }> = ({ children, icon }) => (
  <h2 className="text-3xl font-bold tracking-tight text-yellow-400 mb-6 flex items-center">
    {icon}
    {children}
  </h2>
);

export default function FTCRecruitmentPage() {
  return (
    <div className=" text-neutral-100 min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <Header />

      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500">
          Join The Hive!
        </h1>
        <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto">
          The FIRST Tech Challenge (FTC) robotics program is an exciting and fun journey where innovation meets teamwork. We've seen great success and hope all interested students can participate!
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        <section>
          <SectionTitle icon={<UsersIcon />}>We're Expanding: Two Teams for 2025-26!</SectionTitle>
          <p className="text-neutral-300 leading-relaxed mb-4">
            To ensure everyone with an interest can get involved, we are excited to announce that we are recruiting for two FTC teams next year:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className=" p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-400 mb-2">The Hive (Current Team)</h3>
              <p className="text-neutral-300 text-sm">
                Our established FTC team will continue its journey, typically involving after-school practices and a full commitment to the competitive season.
              </p>
            </div>
            <div className="bg-slate-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-400 mb-2">Oh, Bee-have! (New Elective Team)</h3>
              <p className="text-neutral-300 text-sm">
                This new FTC team will be taught as an elective class only. It will not have after-school practices but will be required to attend qualifiers and, if qualified, the state competition.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center bg-amber-500 bg-opacity-10 p-6 sm:p-8 rounded-lg">
          <SectionTitle icon={<PencilSquareIcon />}>Express Your Interest!</SectionTitle>
          <p className="text-neutral-200 leading-relaxed mb-6">
            Please fill out the following survey about your interest in joining one of our FIRST Tech Challenge Robotics Teams for the 2025-26 season.
            <br />
            Parents and students are both encouraged to fill this out or attend our upcoming information meeting.
            <br />
            <strong className="text-yellow-300">Note:</strong> If your student is a current member of The Hive robotics team, you do not need to fill out this survey.
          </p>
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-neutral-900 font-semibold py-3 px-8 rounded-md hover:bg-yellow-500 transition-colors duration-300 text-lg shadow-md"
          >
            2025-26 Hive Interest Form
          </a>
        </section>

        <section>
          <SectionTitle icon={<LightBulbIcon />}>Why Join FTC? Skills & Opportunities</SectionTitle>
          <p className="text-neutral-300 leading-relaxed mb-4">
            The competitions are exciting, but FTC is about more than just robots. Participants develop a wide array of valuable skills:
          </p>
          <ul className="list-disc list-inside text-neutral-300 space-y-2 mb-4 pl-4">
            <li>Robot building and design (including CAD)</li>
            <li>Programming (various languages)</li>
            <li>Communication and presenting</li>
            <li>Problem-solving and critical thinking</li>
            <li>Teamwork and collaboration</li>
            <li>Community outreach and fundraising</li>
            <li>Project and time management</li>
          </ul>
          <p className="text-neutral-300 leading-relaxed mb-4">
            Beyond the builders and programmers, our teams thrive with students interested in <strong className="text-yellow-300">design</strong> – from creating marketing handouts and presentations to detailed CAD drawings of the robot. Any skillset is welcome!
          </p>
          <p className="text-neutral-300 italic">
            You might not feel like a typical "robotics" person, but it never hurts to try—you won't know until you check it out. All team members will be learning and growing together.
          </p>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            Once we've gathered a list of interested students, we'll hold a <strong className="text-yellow-300">parent and student information meeting</strong> to discuss next steps and answer questions.
          </p>
        </section>

        <section className="p-6 rounded-lg shadow-md">
          <SectionTitle icon={<UsersIcon />}>Call for Mentors!</SectionTitle>
          <p className="text-neutral-300 leading-relaxed mb-4">
            We are also looking for passionate mentors to help guide our teams. Your expertise can make a huge difference, whether you have a child on the team or simply want to support students in STEM.
          </p>
          <p className="text-neutral-300 leading-relaxed mb-2">Areas where mentors can help include (but are not limited to):</p>
          <ul className="list-disc list-inside text-neutral-300 space-y-1 text-sm mb-4 pl-4">
            <li>Programming (Java)</li>
            <li>Robot Building & Mechanics</li>
            <li>Engineering Design Process</li>
            <li>CAD Design (Fusion 360 & Blender)</li>
            <li>3D Printing</li>
            <li>Documentation</li>
            <li>Fundraising & Outreach</li>
            <li>Team Management</li>
            <li>Presentation & Communication Skills</li>
          </ul>
          <p className="text-neutral-300 leading-relaxed">
            If you're interested in mentoring or want to learn more, please contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}?subject=FTC Mentor Inquiry`} className="text-yellow-400 hover:underline">{CONTACT_EMAIL}</a>,
            or join the upcoming information meeting.
          </p>
        </section>

        <section>
          <SectionTitle>Learn More About FIRST Tech Challenge</SectionTitle>
          <div className="space-y-4">
            <p className="text-neutral-300">
              <a href={YOUTUBE_VIDEO_URL} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline transition-colors">
                <PlayCircleIcon /> Watch: About FIRST Tech Challenge (2021) Video
              </a>
              <span className="text-sm text-neutral-400 block mt-1">A short video overview of the FTC program.</span>
            </p>
            <p className="text-neutral-300">
              <a href={FTC_INFO_URL} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline transition-colors">
                <InformationCircleIcon /> Official FTC Information on firstinspires.org
              </a>
              <span className="text-sm text-neutral-400 block mt-1">Detailed information about the FIRST Tech Challenge.</span>
            </p>
          </div>
        </section>

        <section className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-3">Have Questions?</h3>
          <p className="text-neutral-300 leading-relaxed mb-4 max-w-xl mx-auto">
            We're here to help! Please feel free to reach out if you have any questions about our teams, the FTC program, or how to get involved.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=FTC Recruitment Question`}
            className="inline-flex items-center bg-yellow-400 text-neutral-900 font-semibold py-2.5 px-6 rounded-md hover:bg-yellow-500 transition-colors duration-300 text-base shadow-md"
          >
            <EnvelopeIcon /> Contact Us
          </a>
        </section>
      </main>
    </div>
  );
}
