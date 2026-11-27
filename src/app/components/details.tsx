"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Users,
  CalendarDays,
  ChartNoAxesCombined,
  Ticket,
  Video,
  CheckCircle2,
  BriefcaseBusiness,
  GraduationCap,
  PartyPopper,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Plan with confidence",
    description:
      "Create professional events with custom details, registration forms, ticket options, and everything your audience needs to know.",
    icon: CalendarDays,
    color: "bg-[#E9F8E4]",
    iconColor: "text-[#286C20]",
    span: "md:col-span-7",
  },
  {
    number: "02",
    title: "Bring your people together",
    description:
      "Give attendees one place to discover your events, register, and stay connected with your company.",
    icon: Users,
    color: "bg-[#F2E9FF]",
    iconColor: "text-[#7442B8]",
    span: "md:col-span-5",
  },
  {
    number: "03",
    title: "Make every seat count",
    description:
      "Manage registrations, set ticket prices, control capacity, and keep track of who is attending.",
    icon: Ticket,
    color: "bg-[#FFF0DF]",
    iconColor: "text-[#A85C16]",
    span: "md:col-span-5",
  },
  {
    number: "04",
    title: "Know what is working",
    description:
      "Keep your event activity organized and use attendance and registration insights to make better decisions.",
    icon: ChartNoAxesCombined,
    color: "bg-[#E5F1FF]",
    iconColor: "text-[#245DB0]",
    span: "md:col-span-7",
  },
];

const audiences = [
  {
    title: "Businesses and brands",
    description:
      "Host customer events, product launches, networking sessions, and brand experiences that bring people closer to your business.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A company event with an audience and a presentation stage",
    tag: "Corporate events",
    color: "bg-[#E9F8E4]",
    tagColor: "bg-[#D5F5CA] text-[#245E19]",
    icon: Building2,
  },
  {
    title: "Communities and networks",
    description:
      "Bring members together for meetups, industry conversations, networking experiences, and community gatherings.",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A group of people connecting at a social gathering",
    tag: "Community",
    color: "bg-[#F1E9FF]",
    tagColor: "bg-[#E2D2FF] text-[#6840A5]",
    icon: Users,
  },
  {
    title: "Training and education",
    description:
      "Organize workshops, seminars, training sessions, and learning experiences for employees, customers, and partners.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "People collaborating during a learning and workshop session",
    tag: "Learning",
    color: "bg-[#FFF0DF]",
    tagColor: "bg-[#FFE0BD] text-[#955017]",
    icon: GraduationCap,
  },
  {
    title: "Event professionals",
    description:
      "Coordinate conferences, ticketed experiences, industry summits, and other events from one organized platform.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "A large professional conference with attendees",
    tag: "Conferences",
    color: "bg-[#E5F1FF]",
    tagColor: "bg-[#D0E5FF] text-[#245DB0]",
    icon: PartyPopper,
  },
];

export default function Details() {
  return (
    <main className="w-full overflow-hidden bg-white text-[#171717]">
      {/* Company introduction */}

      <section className="px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e8eae7] bg-[#fafbf9] px-4 py-2 text-sm font-bold text-[#444444]">
              <Building2 size={16} className="text-[#347F24]" />
              Built for businesses
            </div>

            <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[62px]">
              Your company has something worth{" "}
              <span className="text-[#398C27]">
                bringing people together for.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#666666] sm:text-lg">
              Summits helps companies turn ideas into real experiences. Create
              events, manage registrations, sell tickets, and bring customers,
              employees, partners, and communities together in one place.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signin"
                className="btn-primary inline-flex min-h-[54px] items-center justify-center rounded-xl px-7 text-base font-extrabold"
              >
                Start hosting events
              </Link>

              <Link
                href="/events"
                className="btn-secondary inline-flex min-h-[54px] items-center justify-center rounded-xl px-7 text-base font-extrabold text-[#171717]"
              >
                Explore events
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#555555]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#398C27]" />
                Free and paid events
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#398C27]" />
                Simple registration
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[580px]">
            <div className="relative aspect-[4/4.2] overflow-hidden rounded-[32px] bg-[#E9F8E4] sm:rounded-[40px]">
              <Image
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=90"
                alt="Professionals connecting and networking at a company event"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
                <p className="text-sm font-bold text-white/80">
                  Made for meaningful connections
                </p>

                <h3 className="mt-2 max-w-sm text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  Better events start with better experiences.
                </h3>
              </div>
            </div>

            <div className="absolute -left-2 top-7 max-w-[210px] rounded-2xl border border-white/80 bg-white p-4 shadow-[0_12px_35px_rgba(0,0,0,0.10)] sm:-left-8 sm:top-12 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E9F8E4] text-[#286C20]">
                  <Users size={22} />
                </div>

                <div>
                  <p className="text-sm font-extrabold">Your community</p>
                  <p className="mt-1 text-xs text-[#777777]">
                    All in one place
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 bottom-24 rounded-2xl bg-[#59F033] p-4 shadow-[0_10px_25px_rgba(0,0,0,0.12)] sm:-right-5 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70">
                  <CalendarDays size={21} />
                </div>

                <div>
                  <p className="text-sm font-extrabold">One platform</p>
                  <p className="mt-1 text-xs font-semibold text-black/65">
                    Plan. Host. Connect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event management features */}

      <section className="bg-[#F7F8F6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#398C27]">
              Everything works together
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
              From the first idea to the final attendee.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#666666] sm:text-lg">
              Spend less time coordinating different tools and more time
              creating events that move your business forward.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.number}
                  className={`${feature.span} group flex min-h-[280px] flex-col justify-between rounded-[28px] border border-black/[0.04] ${feature.color} p-6 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[310px] sm:p-9`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 ${feature.iconColor}`}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-extrabold text-black/35">
                      {feature.number}
                    </span>
                  </div>

                  <div className="mt-10 max-w-xl">
                    <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#555555] sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Summits is for */}

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#398C27]">
                Who it is for
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">
                Different businesses. One place to bring people together.
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-[#666666] lg:pb-1">
              Whether you are building a brand, growing a network, or organizing
              your next big gathering, Summits gives your events a home.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <article
                  key={audience.title}
                  className={`overflow-hidden rounded-[28px] ${audience.color} transition-transform duration-300 hover:-translate-y-1`}
                >
                  <div className="relative h-[250px] overflow-hidden sm:h-[290px]">
                    <Image
                      src={audience.image}
                      alt={audience.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold ${audience.tagColor}`}
                      >
                        <Icon size={15} />
                        {audience.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                      {audience.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#555555] sm:text-base">
                      {audience.description}
                    </p>

                    <Link
                      href="/signin"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#171717] transition-colors hover:text-[#398C27]"
                    >
                      Create your next event
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Online and in person */}

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[32px] bg-[#101810] lg:grid-cols-2">
          <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-14">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#59F033] text-[#171717]">
              <BriefcaseBusiness size={26} />
            </div>

            <h2 className="mt-7 max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Your events deserve more than scattered tools.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              Keep your event information, registrations, ticketing, and
              attendee experience organized. Give your company a consistent way
              to bring people together.
            </p>

            <div className="mt-8">
              <Link
                href="/signin"
                className="btn-primary inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl px-7 text-base font-extrabold"
              >
                Get started
                <ArrowUpRight size={19} />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=90"
              alt="A speaker presenting at a professional company event"
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E9F8E4] text-[#286C20]">
                  <Video size={24} />
                </div>

                <div>
                  <p className="font-extrabold text-[#171717]">
                    Events that connect
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#666666]">
                    Bring your employees, customers, and partners into the same
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
