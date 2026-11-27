"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import EventCard from "@/app/components/eventcard";
import { CalendarDays, Ticket, Bookmark, Search, Bell } from "lucide-react";

const upcomingEvents = [
  {
    id: "future-african-technology",
    title: "The Future of African Technology",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
    date: "Dec 12, 2026",
    time: "10:00 AM",
    venue: "Landmark Centre, Lagos",
    category: "Technology",
    price: "Free",
    company: "TechPoint Africa",
    companyLogo:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&q=80",
    verified: true,
  },
  {
    id: "building-brands-that-matter",
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
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=200&q=80",
    verified: true,
  },
];

const recommendedEvents = [
  {
    id: "designing-next-generation",
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
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=200&q=80",
    verified: true,
  },
  {
    id: "founders-and-funders",
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
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=200&q=80",
    verified: true,
  },
  {
    id: "next-wave-of-finance",
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
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80",
    verified: true,
  },
];

const activityItems = [
  {
    title: "Upcoming events",
    description: "Your next plans",
    count: "2",
    icon: CalendarDays,
    href: "/account/tickets",
  },
  {
    title: "Your tickets",
    description: "Your bookings",
    count: "2",
    icon: Ticket,
    href: "/account/tickets",
  },
  {
    title: "Saved events",
    description: "Events to revisit",
    count: "0",
    icon: Bookmark,
    href: "/account/saved",
  },
];

function ThreeDButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`relative inline-flex min-h-10 items-center justify-center rounded-xl bg-[#59F033] px-5 py-2.5 text-sm font-bold text-black transition-all duration-150 hover:-translate-y-0.5 active:translate-y-1 ${className}`}
      style={{ boxShadow: "0 4px 0 #36b91b" }}
    >
      {children}
    </Link>
  );
}

export default function UserDashboard() {
  const [search, setSearch] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const filteredUpcoming = upcomingEvents.filter((event) =>
    `${event.title} ${event.category} ${event.venue}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const filteredRecommended = recommendedEvents.filter((event) =>
    `${event.title} ${event.category} ${event.venue}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-[#111111]">
      <Sidebar accountType="user" />

      <main className="min-h-screen bg-white lg:ml-[270px]">
        <header className="relative z-30 flex flex-wrap items-center justify-between gap-3 bg-white px-5 py-4 sm:px-7 lg:px-9">
          <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Discover experiences
          </h1>

          <div className="relative order-3 w-full sm:order-none sm:w-auto sm:flex-1 sm:max-w-xs sm:ml-auto">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Find an event"
              aria-label="Search events"
              className="h-10 w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-10 pr-3 text-sm outline-none transition focus:border-[#59F033] focus:bg-white"
            />
          </div>

          <div className="relative flex shrink-0 items-center">
            <button
              type="button"
              onClick={() => setNotificationsOpen((open) => !open)}
              aria-label="Toggle notifications"
              aria-expanded={notificationsOpen}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 transition hover:bg-neutral-50"
            >
              <Bell size={19} strokeWidth={1.8} />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[#59F033] ring-2 ring-white" />
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 top-12 z-50 w-[min(280px,calc(100vw-2rem))] rounded-2xl border border-neutral-100 bg-white p-4 shadow-xl">
                <h3 className="font-bold">Notifications</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  You are all caught up. Booking updates will appear here.
                </p>
                <button
                  type="button"
                  onClick={() => setNotificationsOpen(false)}
                  className="mt-3 text-sm font-semibold"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </header>

        <div className="mx-auto max-w-[1600px] space-y-9 px-5 pb-8 pt-2 sm:px-7 lg:px-9">
          {/* Compact featured section */}
          <section className="relative isolate overflow-hidden rounded-[26px] bg-[#111711] text-white">
            <div className="absolute inset-0 -z-10">
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=85"
                alt="People enjoying a live event"
                className="h-full w-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#101710] via-[#101710]/85 to-[#101710]/30" />
            </div>

            <div className="max-w-xl px-6 py-8 sm:px-9 sm:py-10 lg:px-11">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Make plans.
                <br />
                <span className="text-[#59F033]">Make memories.</span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/75 sm:text-base">
                Find your people, discover new interests, and make your next
                outing one to remember.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <ThreeDButton href="/events">Explore events</ThreeDButton>

                <Link
                  href="/account/tickets"
                  className="text-sm font-semibold text-white transition hover:text-[#59F033]"
                >
                  My tickets
                </Link>
              </div>
            </div>
          </section>

          {/* Account activity */}
          <section>
            <div className="mb-4">
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                Your activity
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                Your plans, bookings, and saved events.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {activityItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-2xl border border-neutral-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#b9efa9] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#59F033]/15 transition group-hover:bg-[#59F033]/25">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <span className="rounded-full bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-500">
                        View
                      </span>
                    </div>

                    <p className="mt-4 text-3xl font-extrabold tracking-tight">
                      {item.count}
                    </p>
                    <h3 className="mt-1 font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Upcoming events */}
          <section>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                  Coming up for you
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Events to look forward to.
                </p>
              </div>

              <ThreeDButton href="/account/tickets">
                <Ticket size={16} className="mr-2" />
                View tickets
              </ThreeDButton>
            </div>

            {filteredUpcoming.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredUpcoming.map((event) => (
                  <EventCard
                    key={event.id}
                    {...event}
                    href={`/events/${event.id}`}
                  />
                ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-neutral-200 p-6 text-sm text-neutral-500">
                No upcoming events match your search.
              </p>
            )}
          </section>

          {/* Recommended events */}
          <section className="pb-4">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                  You might like
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  More experiences worth checking out.
                </p>
              </div>

              <ThreeDButton href="/events">Explore all events</ThreeDButton>
            </div>

            {filteredRecommended.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredRecommended.map((event) => (
                  <EventCard
                    key={event.id}
                    {...event}
                    href={`/events/${event.id}`}
                  />
                ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-neutral-200 p-6 text-sm text-neutral-500">
                No recommended events match your search.
              </p>
            )}
          </section>

          <footer className="border-t border-neutral-100 py-5 text-center text-xs text-neutral-400">
            Made for experiences worth showing up for.
          </footer>
        </div>
      </main>
    </div>
  );
}
