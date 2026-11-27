"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import EventCard from "../components/eventcard";

type EventItem = {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  price: string;
  company: string;
  companyLogo: string;
  verified: boolean;
};

const featuredEvents: EventItem[] = [
  {
    id: "1",
    title: "The Future of African Technology",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85",
    date: "Dec 12, 2026",
    time: "10:00 AM",
    venue: "Landmark Centre, Lagos",
    category: "Technology",
    price: "Free",
    company: "TechPoint Africa",
    companyLogo:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=160&h=160&q=85",
    verified: true,
  },
  {
    id: "2",
    title: "Building Brands That Matter",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    date: "Dec 16, 2026",
    time: "11:00 AM",
    venue: "The Wells Carlton, Abuja",
    category: "Business",
    price: "Free",
    company: "Creative House",
    companyLogo:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=160&h=160&q=85",
    verified: true,
  },
  {
    id: "3",
    title: "Designing the Next Generation",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    date: "Dec 19, 2026",
    time: "2:00 PM",
    venue: "Online event",
    category: "Design",
    price: "Free",
    company: "Design Society",
    companyLogo:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=160&h=160&q=85",
    verified: true,
  },
];

const upcomingEvents: EventItem[] = [
  {
    id: "4",
    title: "Founders and Funders Meetup",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    date: "Jan 8, 2027",
    time: "4:00 PM",
    venue: "Victoria Island, Lagos",
    category: "Networking",
    price: "Free",
    company: "Startup Circle",
    companyLogo:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=160&h=160&q=85",
    verified: true,
  },
  {
    id: "5",
    title: "The Next Wave of Finance",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
    date: "Jan 15, 2027",
    time: "9:30 AM",
    venue: "Eko Convention Centre, Lagos",
    category: "Finance",
    price: "Free",
    company: "Finance Forward",
    companyLogo:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=160&h=160&q=85",
    verified: true,
  },
  {
    id: "6",
    title: "Creative Minds Workshop",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    date: "Jan 22, 2027",
    time: "1:00 PM",
    venue: "Online event",
    category: "Workshop",
    price: "Free",
    company: "The Creative Room",
    companyLogo:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=160&h=160&q=85",
    verified: false,
  },
];

const buttonStyle =
  "inline-flex min-h-[54px] items-center justify-center rounded-xl border border-black/10 bg-[#59F033] px-8 text-base font-extrabold text-black shadow-[0_4px_0_#35b91a] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#6af449] hover:shadow-[0_5px_0_#35b91a] active:translate-y-[3px] active:shadow-[0_1px_0_#35b91a]";

export default function HeroSection() {
  return (
    <>
      <Navbar />

      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
        <Image
          src="/images/hero_banner.jpeg"
          alt="Companies bringing people together through memorable events"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center justify-center px-6 py-32 text-center sm:px-10 lg:px-16">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
            <h1 className="text-5xl font-extrabold leading-[0.94] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block">Your events.</span>
              <span className="block">Your people.</span>

              <span className="group relative mt-1 inline-block cursor-default pb-3 text-[#59F033]">
                Your moment.
                <svg
                  viewBox="0 0 420 24"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 h-[13px] w-full overflow-visible sm:h-[16px]"
                >
                  <path
                    d="M3 13 C30 1, 48 23, 78 12 S126 3, 157 13 S207 23, 238 11 S290 3, 320 13 S371 22, 417 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    className="[stroke-dasharray:460] [stroke-dashoffset:460] transition-[stroke-dashoffset] duration-700 ease-out group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0]"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-white/95 sm:mt-7 sm:text-lg sm:leading-8">
              Create unforgettable experiences, bring your community together,
              and manage your events with Summits.
            </p>

            <div className="mt-8 flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row">
              <Link href="/authenticate/signup" className={buttonStyle}>
                Create events
              </Link>

              <Link
                href="/events"
                className="inline-flex min-h-[54px] w-full items-center justify-center rounded-xl border border-white/40 bg-white px-8 text-base font-extrabold text-black transition hover:bg-gray-100 sm:w-auto"
              >
                Discover events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured events */}

      <section className="bg-white px-5 py-16 text-[#111111] sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                Find your next experience.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
                Discover conferences, workshops, and gatherings worth showing up
                for.
              </p>
            </div>

            <Link
              href="/events"
              className="inline-flex w-fit items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-bold text-neutral-900 shadow-[0_3px_0_#e5e7eb] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_#e5e7eb] active:translate-y-[2px] active:shadow-none"
            >
              Explore all events
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                image={event.image}
                date={event.date}
                time={event.time}
                venue={event.venue}
                category={event.category}
                price={event.price}
                href={`/events/${event.id}`}
                company={event.company}
                companyLogo={event.companyLogo}
                verified={event.verified}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events */}

      <section className="bg-neutral-50 px-5 py-16 text-[#111111] sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                Upcoming events
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
                More opportunities to learn, connect, and experience something
                new.
              </p>
            </div>

            <Link
              href="/events"
              className="inline-flex w-fit items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-3 text-sm font-bold text-neutral-900 shadow-[0_3px_0_#e5e7eb] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_#e5e7eb] active:translate-y-[2px] active:shadow-none"
            >
              View all events
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                image={event.image}
                date={event.date}
                time={event.time}
                venue={event.venue}
                category={event.category}
                price={event.price}
                href={`/events/${event.id}`}
                company={event.company}
                companyLogo={event.companyLogo}
                verified={event.verified}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
