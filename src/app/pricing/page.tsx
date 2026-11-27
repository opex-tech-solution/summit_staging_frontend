"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import {
  Check,
  Search,
  BookOpen,
  CircleHelp,
  ChevronDown,
  X,
} from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Everything you need to start hosting events.",
    price: "₦0",
    period: "forever",
    available: true,
    features: [
      "Create and publish events",
      "Manage event registrations",
      "Custom registration forms",
      "Attendee management",
      "Event analytics",
      "Event page customization",
    ],
  },
  {
    name: "Pro",
    description: "More tools to grow your events and audience.",
    price: "Coming Soon",
    period: "",
    available: false,
    features: [
      "Everything in Free",
      "Advanced event analytics",
      "Custom branding",
      "Priority support",
      "Advanced attendee insights",
      "More event management tools",
    ],
  },
  {
    name: "Business",
    description: "Powerful tools for teams hosting events at scale.",
    price: "Coming Soon",
    period: "",
    available: false,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Advanced organization tools",
      "Multiple event managers",
      "Enhanced reporting",
      "Dedicated support",
    ],
  },
];

export default function Pricing() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const resourcesRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setResourcesOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setResourcesOpen(false);
        setSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (searchOpen) {
      searchRef.current?.focus();
    }
  }, [searchOpen]);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[78px] max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
          <Link
            href="/"
            aria-label="Summits home"
            className="flex shrink-0 items-center gap-2.5"
          >
            <Image
              src="/images/logo.png"
              alt="Summits logo"
              width={46}
              height={46}
              priority
              className="h-10 w-10 object-contain brightness-0 blur-[0.3px]"
            />

            <span className="text-[25px] font-black tracking-[-1.5px] text-black">
              summits
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
            >
              Home
            </Link>

            <div ref={resourcesRef} className="relative">
              <button
                type="button"
                onClick={() => setResourcesOpen((open) => !open)}
                aria-expanded={resourcesOpen}
                className="flex items-center gap-2 py-3 text-sm font-medium text-gray-600 transition-colors hover:text-black"
              >
                Resources
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {resourcesOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_16px_50px_rgba(0,0,0,0.10)]">
                  <Link
                    href="/blog"
                    onClick={() => setResourcesOpen(false)}
                    className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#59F033]/15 text-black">
                      <BookOpen size={19} />
                    </span>

                    <span>
                      <span className="block text-sm font-semibold text-gray-900">
                        Blog
                      </span>
                      <span className="mt-1 block text-xs text-gray-500">
                        Ideas and event insights
                      </span>
                    </span>
                  </Link>

                  <Link
                    href="/help"
                    onClick={() => setResourcesOpen(false)}
                    className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-gray-50"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-800">
                      <CircleHelp size={19} />
                    </span>

                    <span>
                      <span className="block text-sm font-semibold text-gray-900">
                        Help centre
                      </span>
                      <span className="mt-1 block text-xs text-gray-500">
                        Find answers and support
                      </span>
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
            >
              About Us
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            {searchOpen ? (
              <form
                onSubmit={handleSearch}
                className="absolute left-0 right-0 top-full flex items-center gap-2 border-b border-gray-100 bg-white px-5 py-4 shadow-lg sm:px-8 lg:left-auto lg:right-12 lg:top-[68px] lg:w-[360px] lg:rounded-2xl lg:border lg:px-4"
              >
                <Search size={19} className="shrink-0 text-gray-400" />

                <input
                  ref={searchRef}
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search Summits..."
                  aria-label="Search Summits"
                  className="min-w-0 flex-1 bg-transparent py-2 text-sm text-black outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  aria-label="Close search"
                  className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-black"
                >
                  <X size={17} />
                </button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100 hover:text-black"
              >
                <Search size={20} strokeWidth={1.8} />
              </button>
            )}

            <Link
              href="/signin"
              className="inline-flex items-center justify-center rounded-full bg-[#59F033] px-5 py-3 text-sm font-bold text-black transition-colors hover:bg-[#4de52a]"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      <section className="relative px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:px-12">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#59F033]/[0.07] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              Your events.
              <br />
              <span className="relative inline-block">
                Your rules.
                <span className="absolute bottom-1 left-0 -z-10 h-3 w-full -rotate-2 bg-[#59F033] sm:bottom-2 sm:h-5" />
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-gray-500 sm:mt-10 sm:text-lg sm:leading-8">
              Everything you need to bring people together. Start for free,
              build your audience, and grow at your own pace.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#39B91B]" />
                Free to start
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#39B91B]" />
                No credit card required
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#39B91B]" />
                Built for event creators
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Pick your plan.
              </h2>

              <p className="mt-2 text-sm text-gray-500 sm:text-base">
                Start with what works for you.
              </p>
            </div>

            <p className="text-sm text-gray-500">
              One platform. More possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`relative flex flex-col overflow-hidden rounded-[28px] border p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                  plan.available
                    ? "border-[#59F033] bg-white shadow-[0_12px_45px_rgba(0,0,0,0.07)]"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-black ${
                    plan.available
                      ? "bg-[#59F033] text-black"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  0{index + 1}
                </div>

                <h3 className="mt-7 text-2xl font-bold tracking-tight">
                  {plan.name}
                </h3>

                <p className="mt-2 min-h-12 max-w-[250px] text-sm leading-6 text-gray-500">
                  {plan.description}
                </p>

                <div className="mt-8 border-b border-gray-100 pb-7">
                  {plan.available ? (
                    <>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-black tracking-[-0.06em]">
                          {plan.price}
                        </span>

                        <span className="text-sm text-gray-500">
                          / {plan.period}
                        </span>
                      </div>

                      <p className="mt-3 text-sm text-gray-500">
                        All the essentials at no cost.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-2xl font-bold tracking-tight text-gray-400">
                        Coming Soon
                      </p>

                      <p className="mt-3 text-sm text-gray-400">
                        More features are on the way.
                      </p>
                    </>
                  )}
                </div>

                <div className="mt-7 flex-1">
                  <p className="mb-5 text-sm font-bold">What is included</p>

                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-sm leading-6 ${
                          plan.available ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.available
                              ? "bg-[#59F033] text-black"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-9">
                  {plan.available ? (
                    <Link
                      href="/signin"
                      className="flex w-full items-center justify-center rounded-2xl bg-[#59F033] px-5 py-4 text-sm font-bold text-black transition-colors hover:bg-[#4de52a]"
                    >
                      Get started for free
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="flex w-full cursor-not-allowed items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-400"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#111111] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-[#59F033]/25 sm:right-10 sm:top-[-100px] sm:h-80 sm:w-80">
            <div className="absolute inset-8 rounded-full border border-[#59F033]/20" />
            <div className="absolute inset-16 rounded-full border border-[#59F033]/15" />
          </div>

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-5xl">
                Got an idea?
                <br />
                Make it happen.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                Create your event, invite your audience, and bring your
                community together with Summits.
              </p>
            </div>

            <Link
              href="/signin"
              className="inline-flex w-fit shrink-0 items-center justify-center rounded-2xl bg-[#59F033] px-6 py-4 text-sm font-bold text-black transition-colors hover:bg-[#4de52a]"
            >
              Start for free
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
