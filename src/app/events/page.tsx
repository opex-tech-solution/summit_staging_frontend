"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import EventCard from "../components/eventcard";
import {
  Search,
  MapPin,
  CalendarDays,
  SlidersHorizontal,
  ChevronDown,
  Building2,
  BadgeCheck,
  CalendarCheck,
  Users,
  Ticket,
  Monitor,
} from "lucide-react";

type EventItem = {
  id: string;
  title: string;
  description: string;
  company: string;
  companyLogo: string;
  verified: boolean;
  location: string;
  venue: string;
  date: string;
  time: string;
  category: string;
  image: string;
  format: "In person" | "Online" | "Hybrid";
  attendees: string;
};

const events: EventItem[] = [
  {
    id: "1",
    title: "The Future of African Technology",
    description:
      "Meet the people building the next generation of African technology and innovation.",
    company: "TechPoint Africa",
    companyLogo:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=160&h=160&q=85",
    verified: true,
    location: "Lagos, Nigeria",
    venue: "Landmark Centre",
    date: "Dec 12, 2026",
    time: "10:00 AM",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85",
    format: "In person",
    attendees: "450+",
  },
  {
    id: "2",
    title: "Building Brands That Matter",
    description:
      "A gathering for ambitious founders, marketers, and creative minds.",
    company: "Creative House",
    companyLogo:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=160&h=160&q=85",
    verified: true,
    location: "Abuja, Nigeria",
    venue: "The Wells Carlton",
    date: "Dec 16, 2026",
    time: "11:00 AM",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    format: "In person",
    attendees: "180+",
  },
  {
    id: "3",
    title: "Designing the Next Generation",
    description:
      "Explore fresh ideas, digital products, and the future of creative work.",
    company: "Design Society",
    companyLogo:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=160&h=160&q=85",
    verified: true,
    location: "Online",
    venue: "Online event",
    date: "Dec 19, 2026",
    time: "2:00 PM",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    format: "Online",
    attendees: "320+",
  },
  {
    id: "4",
    title: "Founders and Funders Meetup",
    description:
      "Build meaningful connections with founders, operators, and investors.",
    company: "Startup Circle",
    companyLogo:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=160&h=160&q=85",
    verified: true,
    location: "Lagos, Nigeria",
    venue: "Victoria Island",
    date: "Jan 8, 2027",
    time: "4:00 PM",
    category: "Networking",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    format: "Hybrid",
    attendees: "250+",
  },
  {
    id: "5",
    title: "The Next Wave of Finance",
    description:
      "Understand emerging financial technology and opportunities in Africa.",
    company: "Finance Forward",
    companyLogo:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=160&h=160&q=85",
    verified: true,
    location: "Lagos, Nigeria",
    venue: "Eko Convention Centre",
    date: "Jan 15, 2027",
    time: "9:30 AM",
    category: "Finance",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
    format: "In person",
    attendees: "200+",
  },
  {
    id: "6",
    title: "Creative Minds Workshop",
    description:
      "Learn practical creative skills and collaborate with other makers.",
    company: "The Creative Room",
    companyLogo:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=160&h=160&q=85",
    verified: false,
    location: "Online",
    venue: "Online event",
    date: "Jan 22, 2027",
    time: "1:00 PM",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    format: "Online",
    attendees: "90+",
  },
];

const categories = [
  "All events",
  "Technology",
  "Business",
  "Design",
  "Networking",
  "Finance",
  "Workshop",
];

const buttonStyle =
  "inline-flex items-center justify-center rounded-xl border border-black/10 bg-[#59F033] px-5 py-3 text-sm font-bold text-black shadow-[0_4px_0_#35b91a] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#6af449] hover:shadow-[0_5px_0_#35b91a] active:translate-y-[3px] active:shadow-[0_1px_0_#35b91a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59F033] focus-visible:ring-offset-2";

function CompanyIdentity({ event }: { event: EventItem }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-black/5 bg-gray-100">
        <Image
          src={event.companyLogo}
          alt={event.company}
          fill
          sizes="40px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="truncate text-sm font-bold text-gray-900">
            {event.company}
          </span>

          {event.verified && (
            <BadgeCheck
              size={16}
              aria-label="Verified organizer"
              fill="#59F033"
              stroke="#111111"
              className="shrink-0"
            />
          )}
        </div>

        <p className="mt-0.5 text-xs text-gray-500">Event organizer</p>
      </div>
    </div>
  );
}

export default function Events() {
  const [search, setSearch] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("All events");
  const [format, setFormat] = useState("All formats");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const companies = useMemo(
    () => [...new Set(events.map((event) => event.company))].sort(),
    []
  );

  const locations = useMemo(
    () => [...new Set(events.map((event) => event.location))].sort(),
    []
  );

  const companyEvents = useMemo(() => {
    const grouped = new Map<string, EventItem[]>();

    events.forEach((event) => {
      const existing = grouped.get(event.company) ?? [];
      grouped.set(event.company, [...existing, event]);
    });

    return [...grouped.entries()].map(([name, companyEventList]) => ({
      name,
      event: companyEventList[0],
      count: companyEventList.length,
    }));
  }, []);

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return events.filter((event) => {
      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.company.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.venue.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query);

      return (
        matchesSearch &&
        (!company || event.company === company) &&
        (!location || event.location === location) &&
        (category === "All events" || event.category === category) &&
        (format === "All formats" || event.format === format)
      );
    });
  }, [search, company, location, category, format]);

  const hasActiveFilters =
    Boolean(search || company || location) ||
    category !== "All events" ||
    format !== "All formats";

  function clearFilters() {
    setSearch("");
    setCompany("");
    setLocation("");
    setCategory("All events");
    setFormat("All formats");
  }

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-[74px] max-w-[1360px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            aria-label="Summits home"
            className="flex shrink-0 items-center gap-2"
          >
            <Image
              src="/images/logo.png"
              alt="Summits"
              width={24}
              height={24}
              className="h-9 w-20 object-contain"
              style={{
                filter: "brightness(0) saturate(100%)",
              }}
            />

            <span className="text-[23px] font-black tracking-[-1.5px] text-black">
              summits
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-500 transition hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/events"
              className="rounded-full bg-[#59F033]/15 px-4 py-2 text-sm font-bold text-black"
            >
              Explore events
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/signin"
              className="hidden rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 sm:inline-flex"
            >
              Sign in
            </Link>

            <Link href="/signin" className={buttonStyle}>
              Host an event
            </Link>
          </div>
        </div>
      </header>

      <section className="px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.065em] sm:text-6xl lg:text-[76px]">
                Find your people.
                <span className="block">Find your thing.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8">
                Discover events worth attending, meet people with your
                interests, and find something new to be part of.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#59F033] shadow-[0_4px_0_#35b91a]">
                <Ticket size={23} />
              </div>

              <div>
                <p className="text-sm font-bold text-gray-900">
                  Your next experience
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Starts with a discovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-[22px] border border-gray-200 bg-white p-3 sm:p-4">
            <div className="flex flex-col gap-3 lg:flex-row">
              <label className="relative min-w-0 flex-1">
                <Search
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search events, companies, or locations"
                  className="h-[52px] w-full rounded-xl border border-transparent bg-gray-50 pl-12 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#59F033] focus:bg-white"
                />
              </label>

              <button
                type="button"
                onClick={() => setFiltersOpen((open) => !open)}
                aria-expanded={filtersOpen}
                className={`inline-flex h-[52px] items-center justify-center gap-2 rounded-xl border px-5 text-sm font-semibold transition ${
                  filtersOpen || hasActiveFilters
                    ? "border-[#59F033] bg-[#59F033]/15 text-black"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                <SlidersHorizontal size={17} />
                Filters
                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    filtersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {filtersOpen && (
              <div className="mt-4 grid grid-cols-1 gap-4 border-t border-gray-100 pt-5 sm:grid-cols-2 lg:grid-cols-4">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-gray-600">
                    Company
                  </span>

                  <span className="relative block">
                    <Building2
                      size={16}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <select
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white pl-9 pr-9 text-sm outline-none focus:border-[#59F033]"
                    >
                      <option value="">All companies</option>
                      {companies.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-gray-600">
                    Location
                  </span>

                  <span className="relative block">
                    <MapPin
                      size={16}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <select
                      value={location}
                      onChange={(event) => setLocation(event.target.value)}
                      className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white pl-9 pr-9 text-sm outline-none focus:border-[#59F033]"
                    >
                      <option value="">All locations</option>
                      {locations.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-gray-600">
                    Category
                  </span>

                  <span className="relative block">
                    <select
                      value={category}
                      onChange={(event) => setCategory(event.target.value)}
                      className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 pr-9 text-sm outline-none focus:border-[#59F033]"
                    >
                      {categories.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </span>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-gray-600">
                    Event format
                  </span>

                  <span className="relative block">
                    <select
                      value={format}
                      onChange={(event) => setFormat(event.target.value)}
                      className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 pr-9 text-sm outline-none focus:border-[#59F033]"
                    >
                      <option value="All formats">All formats</option>
                      <option value="In person">In person</option>
                      <option value="Online">Online</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>

                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </span>
                </label>

                {hasActiveFilters && (
                  <div className="sm:col-span-2 lg:col-span-4">
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="text-sm font-semibold text-gray-600 underline underline-offset-4 transition hover:text-black"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  category === item
                    ? "border border-black/10 bg-[#59F033] text-black shadow-[0_3px_0_#35b91a] active:translate-y-[2px] active:shadow-none"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                Company events to look out for
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                Discover what companies are organising and find events that
                match your interests.
              </p>
            </div>

            <Link
              href="/companies"
              className="inline-flex w-fit items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-[0_3px_0_#e5e7eb] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_0_#e5e7eb] active:translate-y-[2px] active:shadow-none"
            >
              Explore companies
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companyEvents.slice(0, 3).map(({ name, event, count }) => (
              <Link
                key={name}
                href={`/events/${event.id}`}
                className="group flex min-w-0 items-center gap-4 rounded-[22px] border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-[0_5px_0_#e5e7eb]"
              >
                <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={event.companyLogo}
                    alt={name}
                    fill
                    sizes="76px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex min-w-0 items-center gap-1.5">
                    <h3 className="truncate text-base font-extrabold tracking-tight text-gray-950">
                      {name}
                    </h3>

                    {event.verified && (
                      <BadgeCheck
                        size={16}
                        fill="#59F033"
                        stroke="#111111"
                        className="shrink-0"
                      />
                    )}
                  </div>

                  <p className="mt-1.5 line-clamp-1 text-sm text-gray-500">
                    {event.title}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} />
                      {event.date}
                    </span>

                    <span>
                      {count} {count === 1 ? "event" : "events"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.05em] sm:text-4xl">
                Explore all events
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
                Find your next workshop, meetup, conference, or experience.
              </p>
            </div>

            <p className="text-sm text-gray-500">
              <span className="font-bold text-black">
                {filteredEvents.length}
              </span>{" "}
              {filteredEvents.length === 1 ? "event" : "events"} found
            </p>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  image={event.image}
                  date={event.date}
                  time={event.time}
                  venue={
                    event.location === "Online"
                      ? "Online event"
                      : `${event.venue}, ${event.location}`
                  }
                  category={event.category}
                  price="Free"
                  href={`/events/${event.id}`}
                  company={event.company}
                  companyLogo={event.companyLogo}
                  verified={event.verified}
                />
              ))}
            </div>
          ) : (
            <div className="mt-7 flex flex-col items-center rounded-[28px] border border-gray-200 bg-white px-6 py-16 text-center sm:py-20">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#59F033]/20">
                {hasActiveFilters ? (
                  <Search size={25} />
                ) : (
                  <CalendarCheck size={25} />
                )}
              </div>

              <h3 className="mt-5 text-xl font-bold">No events found</h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                Try another search or change your filters to find an event that
                interests you.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className={`${buttonStyle} mt-6`}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 rounded-[28px] border border-gray-200 bg-white p-6 sm:p-9 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-[#59F033] shadow-[0_4px_0_#35b91a]">
              <CalendarDays size={22} />
            </div>

            <div className="max-w-2xl">
              <h2 className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">
                Bring people together.
              </h2>

              <p className="mt-2 text-sm leading-7 text-gray-500 sm:text-base">
                Host your next event on Summits and help the right people
                discover it.
              </p>
            </div>
          </div>

          <Link href="/signin" className={`${buttonStyle} shrink-0`}>
            Start hosting
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
