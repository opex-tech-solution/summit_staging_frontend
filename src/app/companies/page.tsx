"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";

const companies = [
  {
    name: "TechPoint Africa",
    category: "Technology",
    description:
      "Bringing Africa's technology community together through conversations, conferences, and innovation.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85",
    logo: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&h=200&q=85",
    events: "12 events",
  },
  {
    name: "Creative House",
    category: "Creative and Media",
    description:
      "Creating spaces where creative professionals connect, collaborate, and share new ideas.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85",
    logo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=200&h=200&q=85",
    events: "8 events",
  },
  {
    name: "Startup Circle",
    category: "Business and Startups",
    description:
      "Connecting ambitious founders, investors, and professionals building the next generation of businesses.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85",
    logo: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=200&h=200&q=85",
    events: "16 events",
  },
];

const benefits = [
  {
    number: "01",
    title: "Bring people together",
    description:
      "Create a place for your audience to meet, exchange ideas, and build meaningful connections.",
  },
  {
    number: "02",
    title: "Manage every detail",
    description:
      "Organize registrations, share event information, and keep your attendees informed.",
  },
  {
    number: "03",
    title: "Grow your community",
    description:
      "Build recognition for your company and give people more reasons to return to your events.",
  },
];

export default function Companies() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-[#111111]">
        <section className="relative overflow-hidden bg-[#f5f6f2] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                Great companies
                <br />
                create{" "}
                <span className="relative inline-block">
                  great moments.
                  <span className="absolute bottom-0 left-0 -z-0 h-3 w-full bg-[#59F033] sm:h-4" />
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
                Your company has a community worth bringing together. Summits
                gives you a place to create events, connect with your audience,
                and turn gatherings into experiences people remember.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/authenticate/signup"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-xl bg-[#59F033] px-7 text-sm font-extrabold text-black shadow-[0_4px_0_#35b91a] transition hover:-translate-y-0.5 hover:bg-[#6af449] active:translate-y-[2px] active:shadow-none"
                >
                  Create your company
                </Link>

                <Link
                  href="/events"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-xl border border-neutral-200 bg-white px-7 text-sm font-bold text-neutral-900 transition hover:bg-neutral-50"
                >
                  Explore events
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-semibold text-neutral-500">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#59F033]" />
                  Built for event organizers
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#59F033]" />
                  Made for your community
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="relative aspect-[4/4.1] overflow-hidden rounded-[28px] bg-neutral-200 sm:rounded-[36px]">
                <Image
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=85"
                  alt="Professionals gathering at a company event"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-5 left-4 right-4 rounded-2xl border border-white/60 bg-white p-4 shadow-xl sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#59F033]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-6 w-6 text-black"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 20V8l8-4 8 4v12M2 20h20M9 20v-5h6v5M8 10h.01M12 10h.01M16 10h.01"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-extrabold tracking-tight">
                      Your company. Your events.
                    </p>
                    <p className="mt-1 text-sm leading-5 text-neutral-500">
                      One place to bring your community together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.055em] sm:text-4xl">
                  Companies to discover
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
                  Explore organizations creating opportunities for people to
                  learn, connect, and do more together.
                </p>
              </div>

              <Link
                href="/events"
                className="inline-flex min-h-11 w-fit items-center justify-center rounded-xl border border-neutral-200 px-5 text-sm font-bold transition hover:bg-neutral-50"
              >
                Browse events
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {companies.map((company) => (
                <article
                  key={company.name}
                  className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.07)]"
                >
                  <Link
                    href="/events"
                    className="relative block h-[210px] overflow-hidden bg-neutral-100"
                  >
                    <Image
                      src={company.image}
                      alt={`${company.name} event`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </Link>

                  <div className="px-5 pb-5">
                    <div className="relative -mt-8 mb-4 flex items-end justify-between">
                      <div className="relative h-[66px] w-[66px] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-sm">
                        <Image
                          src={company.logo}
                          alt={`${company.name} logo`}
                          fill
                          sizes="66px"
                          className="object-cover"
                        />
                      </div>

                      <span className="mb-1 rounded-full bg-[#efffea] px-3 py-1.5 text-xs font-bold text-neutral-800">
                        {company.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold tracking-tight">
                      {company.name}
                    </h3>

                    <p className="mt-2 min-h-[72px] text-sm leading-6 text-neutral-500">
                      {company.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
                      <span className="text-sm font-semibold text-neutral-500">
                        {company.events}
                      </span>
                      <Link
                        href="/events"
                        className="inline-flex min-h-10 items-center rounded-lg bg-[#59F033] px-4 text-sm font-extrabold text-black transition hover:bg-[#6af449]"
                      >
                        View events
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#111111] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <h2 className="text-3xl font-black leading-tight tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                  More than an event.
                  <br />A community.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-7 text-neutral-400 sm:text-base">
                  Every gathering is an opportunity to build relationships,
                  share ideas, and give people a reason to connect with your
                  company.
                </p>

                <Link
                  href="/authenticate/signup"
                  className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-[#59F033] px-6 text-sm font-extrabold text-black transition hover:bg-[#6af449]"
                >
                  Start hosting events
                </Link>
              </div>

              <div className="grid gap-7 sm:grid-cols-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.number}
                    className="border-t border-white/20 pt-5"
                  >
                    <p className="text-sm font-black text-[#59F033]">
                      {benefit.number}
                    </p>
                    <h3 className="mt-5 text-lg font-extrabold tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-400">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-7 rounded-[28px] bg-[#efffea] p-7 sm:p-10 lg:flex-row lg:items-center lg:p-14">
            <div>
              <h2 className="max-w-2xl text-3xl font-black tracking-[-0.055em] sm:text-4xl">
                Ready to bring your people together?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600 sm:text-base">
                Create your company presence on Summits and start building
                experiences around the people who matter to your business.
              </p>
            </div>

            <Link
              href="/authenticate/signup"
              className="inline-flex min-h-[54px] shrink-0 items-center justify-center rounded-xl bg-[#59F033] px-7 text-sm font-extrabold text-black shadow-[0_4px_0_#35b91a] transition hover:-translate-y-0.5 hover:bg-[#6af449] active:translate-y-[2px] active:shadow-none"
            >
              Get started
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
