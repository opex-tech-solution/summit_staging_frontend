"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ChevronDown, BookOpen, CircleHelp } from "lucide-react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!searchOpen) return;

    const timeout = window.setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setResourcesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchQuery.trim();

    if (!query) {
      searchInputRef.current?.focus();
      return;
    }

    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  }

  const navTextColor = scrolled ? "text-black" : "text-white";
  const navHoverColor = "hover:text-[#59F033]";

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50 w-full
          transition-[background-color,backdrop-filter,box-shadow] duration-300 ease-out
          ${
            scrolled
              ? `
                border-none
                bg-white/40
                shadow-[0_6px_24px_rgba(0,0,0,0.06)]
                backdrop-blur-[28px]
                backdrop-saturate-[160%]
                supports-[backdrop-filter]:bg-white/30
              `
              : "border-none bg-transparent shadow-none"
          }
        `}
      >
        <nav
          className="relative mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="Summits home"
          >
            <Image
              src="/images/logo.png"
              alt="Summits logo"
              width={52}
              height={52}
              priority
              className={`
                h-[48px] w-[48px] object-contain
                transition-all duration-300
                ${scrolled ? "brightness-0" : "brightness-0 invert"}
              `}
            />

            <span
              className={`
                text-[24px] font-extrabold tracking-tight
                transition-colors duration-300
                ${navTextColor}
              `}
            >
              Summits
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/events"
              className={`text-[15px] font-bold transition-colors duration-300 ${navTextColor} ${navHoverColor}`}
            >
              Discover events
            </Link>

            <Link
              href="/pricing"
              className={`text-[15px] font-bold transition-colors duration-300 ${navTextColor} ${navHoverColor}`}
            >
              Pricing
            </Link>

            <div className="relative" ref={resourcesRef}>
              <button
                type="button"
                onClick={() => setResourcesOpen((open) => !open)}
                aria-expanded={resourcesOpen}
                aria-haspopup="menu"
                className={`inline-flex items-center gap-2 py-3 text-[15px] font-bold transition-colors duration-300 ${navTextColor} ${navHoverColor}`}
              >
                Resources
                <ChevronDown
                  size={16}
                  strokeWidth={2.5}
                  className={`transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {resourcesOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-2 text-black shadow-[0_16px_45px_rgba(0,0,0,0.14)]"
                >
                  <Link
                    href="/blog"
                    role="menuitem"
                    onClick={() => setResourcesOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#F3F8EF] hover:text-[#286C20]"
                  >
                    <BookOpen
                      size={18}
                      strokeWidth={1.8}
                      className="shrink-0"
                    />
                    <span>Blog</span>
                  </Link>

                  <Link
                    href="/help"
                    role="menuitem"
                    onClick={() => setResourcesOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#F3F8EF] hover:text-[#286C20]"
                  >
                    <CircleHelp
                      size={18}
                      strokeWidth={1.8}
                      className="shrink-0"
                    />
                    <span>Help</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2.5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className={`
                flex h-10 w-10 items-center justify-center
                rounded-xl bg-transparent
                transition-colors duration-300
                ${
                  scrolled
                    ? "text-black hover:bg-black/5"
                    : "text-white hover:bg-white/10"
                }
              `}
            >
              <Search size={21} strokeWidth={2} />
            </button>

            <Link
              href="/authenticate/signin"
              className="btn-primary inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-extrabold"
            >
              Sign in
            </Link>
          </div>
        </nav>

        <div className="md:hidden">
          <div className="mx-auto flex max-w-[1440px] items-center gap-6 overflow-x-auto px-5 py-2 sm:px-8">
            <Link
              href="/events"
              className={`shrink-0 text-sm font-bold ${navTextColor} ${navHoverColor}`}
            >
              Discover events
            </Link>

            <Link
              href="/pricing"
              className={`shrink-0 text-sm font-bold ${navTextColor} ${navHoverColor}`}
            >
              Pricing
            </Link>

            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setResourcesOpen((open) => !open)}
                aria-expanded={resourcesOpen}
                aria-haspopup="menu"
                className={`inline-flex items-center gap-1.5 text-sm font-bold ${navTextColor} ${navHoverColor}`}
              >
                Resources
                <ChevronDown
                  size={15}
                  strokeWidth={2.5}
                  className={`transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {resourcesOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full z-50 mt-3 w-44 rounded-2xl border border-black/[0.06] bg-white p-2 text-black shadow-[0_16px_45px_rgba(0,0,0,0.14)]"
                >
                  <Link
                    href="/blog"
                    role="menuitem"
                    onClick={() => setResourcesOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#F3F8EF] hover:text-[#286C20]"
                  >
                    <BookOpen size={18} strokeWidth={1.8} />
                    <span>Blog</span>
                  </Link>

                  <Link
                    href="/help"
                    role="menuitem"
                    onClick={() => setResourcesOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#F3F8EF] hover:text-[#286C20]"
                  >
                    <CircleHelp size={18} strokeWidth={1.8} />
                    <span>Help</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/30 px-4 pt-[15vh] backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSearchOpen(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="summits-search-title"
            className="w-full max-w-[620px] overflow-hidden rounded-[24px] border border-black/[0.06] bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:p-7"
          >
            <div className="mb-5 flex items-center justify-between">
              <h2
                id="summits-search-title"
                className="text-xl font-extrabold tracking-tight text-black sm:text-2xl"
              >
                Find your next event
              </h2>

              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e8eae7] text-[#555555] transition-colors hover:bg-[#f7f8f7] hover:text-black"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSearch}>
              <div className="flex min-h-[58px] items-center gap-3 rounded-2xl border-2 border-[#e8eae7] bg-[#fafbf9] px-4 transition-colors focus-within:border-[#59F033]">
                <Search size={21} className="shrink-0 text-[#737373]" />

                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search events, topics or companies"
                  aria-label="Search events, topics or companies"
                  className="h-full min-w-0 flex-1 bg-transparent py-4 text-[15px] font-semibold text-black outline-none placeholder:font-normal placeholder:text-[#999999]"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="shrink-0 rounded-lg p-1 text-[#737373] hover:text-black"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="btn-primary mt-4 flex h-[50px] w-full items-center justify-center rounded-xl px-5 text-sm font-extrabold"
              >
                Search events
              </button>
            </form>

            <p className="mt-4 text-sm text-[#737373]">
              Discover events and experiences from companies on Summits.
            </p>
          </section>
        </div>
      )}
    </>
  );
}
