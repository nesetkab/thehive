import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Link from "next/link";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function SummerCamp() {
  const campInfo = {
    title: "The Hive's Robotics Summer Camp!",
    year: "2025",
    tagline: "A fundraiser with a new challenge each week!",
    description:
      "Get ready to dive into the world of robotics! Our camp is a fundraiser offering a new challenge each week, perfect for aspiring engineers and innovators. Campers will have the opportunity to learn, build, and experiment with robots in a fun and engaging environment. This camp is designed to spark creativity, develop problem-solving skills, and foster a love for technology.",
    grades: "For kids going into Grades 1-8",
    sessions: [
      { id: 1, dates: "June 23rd - 27th" },
      { id: 2, dates: "July 7th - 11th" },
      { id: 3, dates: "July 21st - 25th" },
    ],
    schedule: {
      weekdays: "Monday - Thursday",
      weekdayTime: "9:00 AM - 12:00 PM",
      weekdayDetails: "Students Only. Focus on hands-on learning, building, programming, and tackling the week's challenge!",
      friday: "Friday - Parent Showcase!",
      fridayTime: "10:00 AM - 11:00 AM",
      fridayDetails: "Campers will showcase their amazing robotic creations and what they've learned. Parents and family are invited to attend and celebrate their achievements!",
    },
    cost: "$150 per session",
    includes: "Includes all materials and equipment.",
    registrationLink: "https://secureinstantpayments.com/?Event=5580",
    contactEmail: "3747hive@gmail.com",
  };

  return (
    <main className="flex min-h-screen min-w-screen  flex-col items-center overflow-x-clip pt-4 md:pt-12  text-gray-100"> {/* Suggested dark theme */}


      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl z-10">
        <div className="flex flex-col md:flex-row items-center justify-between w-full my-8 md:my-12">
          <div className="text-center md:text-left mb-6 md:mb-0 md:pr-8">
            <AuroraText className="text-4xl lg:text-6xl font-black leading-tight">
              {campInfo.title}
            </AuroraText>
            <p className="text-xl md:text-2xl mt-3 text-yellow-400 font-semibold">
              Summer {campInfo.year}
            </p>
            <p className="text-lg md:text-xl mt-2 text-gray-300">
              {campInfo.tagline}
            </p>
          </div>
          <Link href={campInfo.registrationLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto mt-4 md:mt-0">
            <NeonGradientCard className="w-full sm:w-64 hover:text-blue-300 transition-colors duration-300">
              <h2 className="text-center text-xl font-bold">
                Register Here!
              </h2>
            </NeonGradientCard>
          </Link>
        </div>

        <div className="w-full mt-10 md:mt-16 space-y-12 text-left bg-gray-800 bg-opacity-70 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl">

          <InfoSection title="🚀 About the Camp">
            <p>{campInfo.description}</p>
          </InfoSection>

          <InfoSection title="🎯 Who is this for?">
            <p>{campInfo.grades}. Whether you're new to robotics or have some experience, there's something for everyone to learn and enjoy!</p>
          </InfoSection>

          <InfoSection title="🗓️ Camp Sessions & Dates">
            <p className="mb-3">We offer three exciting week-long sessions for Summer {campInfo.year}. Choose the one that works best for you, or join us for multiple weeks for varied challenges!</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              {campInfo.sessions.map((session) => (
                <li key={session.id} className="text-lg">
                  <strong>Session {session.id}:</strong> {session.dates}
                </li>
              ))}
            </ul>
          </InfoSection>

          <InfoSection title="⏰ Weekly Schedule">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">{campInfo.schedule.weekdays}</h3>
                <p><strong>Time:</strong> {campInfo.schedule.weekdayTime}</p>
                <p><strong>Details:</strong> {campInfo.schedule.weekdayDetails}</p>
              </div>
              <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">{campInfo.schedule.friday}</h3>
                <p><strong>Time:</strong> {campInfo.schedule.fridayTime}</p>
                <p><strong>Details:</strong> {campInfo.schedule.fridayDetails}</p>
              </div>
            </div>
          </InfoSection>

          <InfoSection title="💰 Cost & What's Included">
            <p className="text-2xl font-bold text-green-400">{campInfo.cost}</p>
            <p className="mt-1">{campInfo.includes} Just bring your curiosity and enthusiasm!</p>
          </InfoSection>

          <InfoSection title="✍️ Register Now!">
            <p className="mb-4">Spaces are limited, so secure your spot today for a summer of robotic fun and learning!</p>
            <Link href={campInfo.registrationLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <NeonGradientCard className=" hover:text-blue-300 transition-colors duration-300 shadow-lg">
                <h2 className="text-center text-xl font-semibold">
                  Click Here to Sign Up
                </h2>
              </NeonGradientCard>
            </Link>
          </InfoSection>

          <InfoSection title="❓ Questions?">
            <p>
              If you have any questions or need more information, please don't hesitate to reach out.
            </p>
            <p className="mt-2">
              Email us at: <a href={`mailto:${campInfo.contactEmail}`} className="text-blue-400 hover:text-blue-300 underline font-semibold">{campInfo.contactEmail}</a>
            </p>
          </InfoSection>

        </div>
        <div className="pb-12"></div> {/* Adding some padding at the bottom */}
      </section>
    </main>
  );
}

// Helper component for consistent section styling
// You can place this outside the Page component or in a separate file
const InfoSection = ({ title, children }) => (
  <section className="border-b border-gray-700 pb-8 last:border-b-0 last:pb-0">
    <h2 className="text-3xl font-bold mb-5 text-yellow-400 flex items-center">
      {/* Example: Icon can be added here if you use a library like react-icons */}
      {/* <FaChalkboardTeacher className="mr-3" /> */}
      {title}
    </h2>
    <div className="text-lg text-gray-200 leading-relaxed space-y-3">
      {children}
    </div>
  </section>
);



