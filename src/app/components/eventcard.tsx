"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  MapPin,
  Clock3,
  Ticket,
  BadgeCheck,
  Monitor,
} from "lucide-react";

interface EventCardProps {
  id?: string;
  title?: string;
  image?: string;
  date?: string;
  time?: string;
  venue?: string;
  category?: string;
  price?: string;
  href?: string;
  company?: string;
  companyLogo?: string;
  verified?: boolean;
}

export default function EventCard({
  id = "summits-event",
  title = "The Future of Creative Business",
  image = "/images/event-placeholder.jpg",
  date = "Dec 12, 2026",
  time = "10:00 AM",
  venue = "Lagos, Nigeria",
  category = "Conference",
  price = "Free",
  href = "/events",
  company = "Event organizer",
  companyLogo = "/images/logo.png",
  verified = false,
}: EventCardProps) {
  const isOnline = venue.toLowerCase().includes("online");

  return (
    <Link
      href={href}
      className="group block w-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#59F033] focus-visible:ring-offset-4"
      aria-label={`View event: ${title}`}
    >
      <article
        id={id}
        className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_5px_0_#e5e7eb]"
      >
        {/* Ticket header */}

        <div className="relative h-[180px] overflow-hidden bg-neutral-100 sm:h-[190px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          <div className="absolute left-3 top-3 flex items-center gap-2">
            <span className="rounded-md bg-white px-2.5 py-1.5 text-[11px] font-bold text-neutral-900 shadow-sm">
              {category}
            </span>
          </div>

          <span className="absolute right-3 top-3 rounded-md border border-white/30 bg-[#59F033] px-2.5 py-1.5 text-[11px] font-extrabold text-black shadow-[0_2px_0_#35b91a]">
            {price}
          </span>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h2 className="line-clamp-2 text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
              {title}
            </h2>
          </div>
        </div>

        {/* Perforated ticket edge */}

        <div className="relative flex h-5 items-center px-4">
          <span className="-ml-[26px] h-6 w-6 shrink-0 rounded-full border border-neutral-200 bg-neutral-50" />

          <div className="mx-1 flex-1 border-t border-dashed border-neutral-300" />

          <span className="-mr-[26px] h-6 w-6 shrink-0 rounded-full border border-neutral-200 bg-neutral-50" />
        </div>

        {/* Ticket information */}

        <div className="px-4 pb-4 pt-2 sm:px-5 sm:pb-5">
          {/* Organizer */}

          <div className="flex min-w-0 items-center gap-2.5">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100">
              <Image
                src={companyLogo}
                alt={company}
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1">
                <span className="truncate text-sm font-bold text-neutral-900">
                  {company}
                </span>

                {verified && (
                  <BadgeCheck
                    size={15}
                    aria-label="Verified organizer"
                    fill="#59F033"
                    stroke="#111111"
                    className="shrink-0"
                  />
                )}
              </div>

              <p className="mt-0.5 text-xs text-neutral-500">Event organizer</p>
            </div>

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#43c923] bg-[#59F033] text-black shadow-[0_3px_0_#35b91a] transition-all duration-150 group-hover:-translate-y-0.5 group-active:translate-y-[2px] group-active:shadow-none">
              <Ticket size={18} strokeWidth={1.8} />
            </div>
          </div>

          {/* Date and time */}

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <div className="flex min-w-0 items-start gap-2 rounded-lg bg-neutral-50 p-2.5">
              <CalendarDays
                size={15}
                className="mt-0.5 shrink-0 text-neutral-500"
              />

              <div className="min-w-0">
                <p className="text-[11px] text-neutral-500">Date</p>
                <p className="mt-1 break-words text-xs font-bold leading-4 text-neutral-900 sm:text-sm">
                  {date}
                </p>
              </div>
            </div>

            <div className="flex min-w-0 items-start gap-2 rounded-lg bg-neutral-50 p-2.5">
              <Clock3 size={15} className="mt-0.5 shrink-0 text-neutral-500" />

              <div className="min-w-0">
                <p className="text-[11px] text-neutral-500">Time</p>
                <p className="mt-1 break-words text-xs font-bold leading-4 text-neutral-900 sm:text-sm">
                  {time}
                </p>
              </div>
            </div>
          </div>

          {/* Venue */}

          <div className="mt-3 flex min-w-0 items-center gap-2">
            {isOnline ? (
              <Monitor size={15} className="shrink-0 text-neutral-500" />
            ) : (
              <MapPin size={15} className="shrink-0 text-neutral-500" />
            )}

            <p className="truncate text-xs font-medium text-neutral-600 sm:text-sm">
              {venue}
            </p>
          </div>

          {/* Ticket footer */}

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-dashed border-neutral-200 pt-3">
            <span className="text-xs font-semibold text-neutral-700 sm:text-sm">
              Event details
            </span>

            <span className="inline-flex shrink-0 items-center justify-center rounded-lg border border-[#43c923] bg-[#59F033] px-3.5 py-2 text-xs font-extrabold text-black shadow-[0_3px_0_#35b91a] transition-all duration-150 group-hover:bg-[#6af449] group-active:translate-y-[2px] group-active:shadow-none">
              View event
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
