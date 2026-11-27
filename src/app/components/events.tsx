"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ChevronDown,
  CalendarDays,
  Search,
  SlidersHorizontal,
  Users,
  HeartPulse,
  Palette,
  Leaf,
  Landmark,
  Laptop,
  BriefcaseBusiness,
  Music2,
  GraduationCap,
  Utensils,
  X,
  Clock3,
  Globe2,
  Stethoscope,
  Camera,
  BadgeCheck,
} from "lucide-react";

const countries = [
  {
    name: "Nigeria",
    places: [
      "Lagos",
      "Abuja",
      "Port Harcourt",
      "Ibadan",
      "Kano",
      "Enugu",
      "Benin City",
      "Uyo",
      "Jos",
      "Kaduna",
      "Abeokuta",
      "Ilorin",
      "Warri",
      "Calabar",
      "Owerri",
    ],
  },
  { name: "Ghana", places: ["Accra", "Kumasi", "Tamale"] },
  { name: "Kenya", places: ["Nairobi", "Mombasa", "Kisumu"] },
  {
    name: "South Africa",
    places: ["Johannesburg", "Cape Town", "Durban", "Pretoria"],
  },
  {
    name: "United Kingdom",
    places: ["London", "Manchester", "Birmingham"],
  },
  {
    name: "United States",
    places: ["New York", "Los Angeles", "San Francisco", "Chicago"],
  },
  {
    name: "United Arab Emirates",
    places: ["Dubai", "Abu Dhabi"],
  },
  { name: "Canada", places: ["Toronto", "Vancouver", "Montreal"] },
  { name: "Singapore", places: ["Singapore"] },
];

const categories = [
  {
    name: "Fintech",
    description: "Money, payments and finance",
    color: "bg-[#E5F8DC]",
    iconColor: "text-[#327823]",
    iconBg: "bg-[#D1F2C4]",
    icon: Landmark,
  },
  {
    name: "Health",
    description: "Healthcare and wellness",
    color: "bg-[#FFF0EF]",
    iconColor: "text-[#B84242]",
    iconBg: "bg-[#FFDAD8]",
    icon: HeartPulse,
  },
  {
    name: "Art and Culture",
    description: "Creativity, design and expression",
    color: "bg-[#F2EAFE]",
    iconColor: "text-[#7949B6]",
    iconBg: "bg-[#E3D4FC]",
    icon: Palette,
  },
  {
    name: "Climate",
    description: "Sustainability and a greener future",
    color: "bg-[#E2F6EC]",
    iconColor: "text-[#267653]",
    iconBg: "bg-[#CDEEDC]",
    icon: Leaf,
  },
  {
    name: "Technology",
    description: "AI, software and new ideas",
    color: "bg-[#E5EEFF]",
    iconColor: "text-[#315CB3]",
    iconBg: "bg-[#D2E1FF]",
    icon: Laptop,
  },
  {
    name: "Business",
    description: "Leadership and networking",
    color: "bg-[#FFF0DD]",
    iconColor: "text-[#A66322]",
    iconBg: "bg-[#FFE0B8]",
    icon: BriefcaseBusiness,
  },
  {
    name: "Music",
    description: "Live shows and music communities",
    color: "bg-[#FFE8F3]",
    iconColor: "text-[#A43D75]",
    iconBg: "bg-[#FFD4E8]",
    icon: Music2,
  },
  {
    name: "Education",
    description: "Workshops and learning",
    color: "bg-[#FFF8D8]",
    iconColor: "text-[#8B711A]",
    iconBg: "bg-[#FFF0A8]",
    icon: GraduationCap,
  },
  {
    name: "Food and Lifestyle",
    description: "Food, culture and experiences",
    color: "bg-[#FCEBDD]",
    iconColor: "text-[#995326]",
    iconBg: "bg-[#F8D9BE]",
    icon: Utensils,
  },
  {
    name: "Community",
    description: "Meet people and build connections",
    color: "bg-[#E6F5F7]",
    iconColor: "text-[#26727B]",
    iconBg: "bg-[#CCEBEF]",
    icon: Users,
  },
  {
    name: "Healthcare",
    description: "Medical innovation and patient care",
    color: "bg-[#FBE8E8]",
    iconColor: "text-[#A63D3D]",
    iconBg: "bg-[#F7D0D0]",
    icon: Stethoscope,
  },
  {
    name: "Photography",
    description: "Visual stories and creative expression",
    color: "bg-[#EEEAFE]",
    iconColor: "text-[#5D50A4]",
    iconBg: "bg-[#DDD6FC]",
    icon: Camera,
  },
];

const upcomingEvents = [
  {
    id: "fintech-forum",
    title: "The Future of African Fintech",
    description: "Meet the people shaping the next chapter of African finance.",
    category: "Fintech",
    month: "DEC",
    day: "05",
    date: "December 5, 2026",
    time: "10:00 AM",
    city: "Lagos",
    country: "Nigeria",
    venue: "Victoria Island",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=85",
    organizer: {
      name: "Paystack",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&h=120&q=85",
      verified: true,
    },
    accent: "bg-[#DDFACF]",
    accentText: "text-[#286C20]",
  },
  {
    id: "creative-lagos",
    title: "Creative Lagos Experience",
    description:
      "Explore new ideas and celebrate the city's creative community.",
    category: "Art and Culture",
    month: "DEC",
    day: "12",
    date: "December 12, 2026",
    time: "2:00 PM",
    city: "Lagos",
    country: "Nigeria",
    venue: "Lekki",
    price: "Paid",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
    organizer: {
      name: "Creative Lagos",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=120&h=120&q=85",
      verified: true,
    },
    accent: "bg-[#F0E1FF]",
    accentText: "text-[#7040A0]",
  },
  {
    id: "green-future",
    title: "Building a Sustainable Future",
    description:
      "Practical ideas for greener businesses and resilient communities.",
    category: "Climate",
    month: "DEC",
    day: "18",
    date: "December 18, 2026",
    time: "11:00 AM",
    city: "Lagos",
    country: "Nigeria",
    venue: "Ikeja",
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=85",
    organizer: {
      name: "Green Future Initiative",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=120&h=120&q=85",
      verified: false,
    },
    accent: "bg-[#D9F5E8]",
    accentText: "text-[#21664A]",
  },
];

function AnimatedWave() {
  return (
    <div aria-hidden="true" className="mt-5 h-3 w-32 overflow-hidden sm:w-40">
      <svg
        viewBox="0 0 160 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full overflow-visible"
      >
        <path
          d="M-160 6 C-145 -2 -135 -2 -120 6 S-95 14 -80 6 S-55 -2 -40 6 S-15 14 0 6 S25 -2 40 6 S65 14 80 6 S105 -2 120 6 S145 14 160 6 S185 -2 200 6 S225 14 240 6 S265 -2 280 6 S305 14 320 6"
          stroke="#59F033"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-summits-wave"
        />
      </svg>

      <style jsx>{`
        .animate-summits-wave {
          stroke-dasharray: 80 80;
          animation: summits-wave 3s linear infinite;
        }

        @keyframes summits-wave {
          from {
            stroke-dashoffset: 160;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-summits-wave {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default function Events() {
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");
  const [selectedPlace, setSelectedPlace] = useState("Lagos");
  const [countryOpen, setCountryOpen] = useState(false);
  const [placeOpen, setPlaceOpen] = useState(false);
  const [locationSearch, setLocationSearch] = useState("");
  const [eventSearch, setEventSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [eventType, setEventType] = useState("All events");

  const selectedCountryData = countries.find(
    (country) => country.name === selectedCountry
  );

  const availablePlaces = selectedCountryData?.places ?? [];

  const filteredPlaces = availablePlaces.filter((place) =>
    place.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesCategory =
      activeCategory === "All" || event.category === activeCategory;

    const matchesSearch =
      `${event.title} ${event.description} ${event.category} ${event.city} ${event.venue} ${event.organizer.name}`
        .toLowerCase()
        .includes(eventSearch.toLowerCase());

    const matchesCountry = event.country === selectedCountry;

    const matchesPlace =
      selectedPlace === "All locations" || event.city === selectedPlace;

    const matchesType =
      eventType === "All events" ||
      (eventType === "Free events" && event.price === "Free") ||
      (eventType === "Paid events" && event.price === "Paid");

    return (
      matchesCategory &&
      matchesSearch &&
      matchesCountry &&
      matchesPlace &&
      matchesType
    );
  });

  function chooseCountry(countryName: string) {
    const country = countries.find((item) => item.name === countryName);

    setSelectedCountry(countryName);
    setSelectedPlace(country?.places[0] ?? "All locations");
    setCountryOpen(false);
    setPlaceOpen(false);
    setLocationSearch("");
  }

  function chooseCategory(category: string) {
    setActiveCategory(category);

    document
      .getElementById("upcoming-events")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function clearFilters() {
    setEventType("All events");
    setActiveCategory("All");
    setEventSearch("");
  }

  return (
    <main className="w-full overflow-hidden bg-[#FCFCFA] text-[#171717]">
      <section className="px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-36 lg:px-12">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              Good things happen when people get together.
            </h1>

            <AnimatedWave />

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#666666] sm:text-lg">
              Discover experiences, meet your people, and find something worth
              showing up for.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-[#555555] sm:text-2xl">
              Events in
            </span>

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setCountryOpen(!countryOpen);
                  setPlaceOpen(false);
                  setLocationSearch("");
                }}
                aria-expanded={countryOpen}
                className="inline-flex items-center gap-2 rounded-lg border-b-2 border-[#59F033] px-2 py-1 text-xl font-extrabold transition-colors hover:bg-[#F1FAEC] sm:text-2xl"
              >
                <Globe2 size={19} className="text-[#398C27]" />
                {selectedCountry}
                <ChevronDown
                  size={19}
                  className={`transition-transform duration-200 ${
                    countryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {countryOpen && (
                <div className="absolute left-0 top-[calc(100%+10px)] z-50 w-[280px] rounded-2xl border border-[#e7e9e3] bg-white p-3 shadow-[0_15px_45px_rgba(0,0,0,0.12)]">
                  <div className="mb-2 flex items-center gap-2 rounded-xl border border-[#e8eae7] px-3">
                    <Search size={16} className="text-[#777777]" />
                    <input
                      value={locationSearch}
                      onChange={(event) =>
                        setLocationSearch(event.target.value)
                      }
                      placeholder="Find a country"
                      className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>

                  <div className="max-h-64 overflow-y-auto">
                    {filteredCountries.map((country) => (
                      <button
                        key={country.name}
                        type="button"
                        onClick={() => chooseCountry(country.name)}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition-colors hover:bg-[#F3F7F0] ${
                          selectedCountry === country.name
                            ? "bg-[#E9F8E4] font-extrabold"
                            : "font-semibold"
                        }`}
                      >
                        {country.name}
                        {selectedCountry === country.name && (
                          <span className="text-xs text-[#398C27]">
                            Selected
                          </span>
                        )}
                      </button>
                    ))}

                    {filteredCountries.length === 0 && (
                      <p className="px-3 py-4 text-sm text-[#777777]">
                        No countries found.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <span className="text-xl font-bold text-[#555555] sm:text-2xl">
              ,
            </span>

            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setPlaceOpen(!placeOpen);
                  setCountryOpen(false);
                  setLocationSearch("");
                }}
                aria-expanded={placeOpen}
                className="inline-flex items-center gap-2 rounded-lg border-b-2 border-[#59F033] px-2 py-1 text-xl font-extrabold transition-colors hover:bg-[#F1FAEC] sm:text-2xl"
              >
                <MapPin size={19} className="text-[#398C27]" />
                {selectedPlace}
                <ChevronDown
                  size={19}
                  className={`transition-transform duration-200 ${
                    placeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {placeOpen && (
                <div className="absolute left-0 top-[calc(100%+10px)] z-50 w-[280px] rounded-2xl border border-[#e7e9e3] bg-white p-3 shadow-[0_15px_45px_rgba(0,0,0,0.12)]">
                  <div className="mb-2 flex items-center gap-2 rounded-xl border border-[#e8eae7] px-3">
                    <Search size={16} className="text-[#777777]" />
                    <input
                      value={locationSearch}
                      onChange={(event) =>
                        setLocationSearch(event.target.value)
                      }
                      placeholder="Find a city"
                      className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none"
                    />
                  </div>

                  <div className="max-h-64 overflow-y-auto">
                    {[
                      "All locations",
                      ...filteredPlaces.filter(
                        (place) => place !== "All locations"
                      ),
                    ].map((place) => (
                      <button
                        key={place}
                        type="button"
                        onClick={() => {
                          setSelectedPlace(place);
                          setPlaceOpen(false);
                          setLocationSearch("");
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm transition-colors hover:bg-[#F3F7F0] ${
                          selectedPlace === place
                            ? "bg-[#E9F8E4] font-extrabold"
                            : "font-semibold"
                        }`}
                      >
                        {place}
                        {selectedPlace === place && (
                          <span className="text-xs text-[#398C27]">
                            Selected
                          </span>
                        )}
                      </button>
                    ))}

                    {filteredPlaces.length === 0 && (
                      <p className="px-3 py-4 text-sm text-[#777777]">
                        No locations found.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="relative mt-7 flex min-h-[58px] items-center gap-3 rounded-2xl border border-[#e7e9e3] bg-white px-4 transition-colors focus-within:border-[#59F033] focus-within:ring-4 focus-within:ring-[#59F033]/10">
            <Search size={20} className="shrink-0 text-[#777777]" />

            <input
              type="search"
              value={eventSearch}
              onChange={(event) => setEventSearch(event.target.value)}
              placeholder="Search events, interests or experiences"
              aria-label="Search events"
              className="min-w-0 flex-1 bg-transparent py-4 text-sm font-semibold outline-none placeholder:font-normal placeholder:text-[#999999] sm:text-base"
            />

            {eventSearch && (
              <button
                type="button"
                onClick={() => setEventSearch("")}
                aria-label="Clear search"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#777777] transition-colors hover:bg-[#F1F2EE] hover:text-black"
              >
                <X size={16} />
              </button>
            )}

            <button
              type="button"
              onClick={() => setFiltersOpen(!filtersOpen)}
              aria-label="Open event filters"
              aria-expanded={filtersOpen}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                filtersOpen
                  ? "bg-[#E9F8E4] text-[#286C20]"
                  : "text-[#555555] hover:bg-[#F3F5F0]"
              }`}
            >
              <SlidersHorizontal size={19} />
            </button>

            {filtersOpen && (
              <div className="absolute right-0 top-[calc(100%+10px)] z-40 w-[min(320px,calc(100vw-40px))] rounded-2xl border border-[#e7e9e3] bg-white p-5 shadow-[0_15px_45px_rgba(0,0,0,0.12)]">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold">Filter events</h3>
                  <button
                    type="button"
                    onClick={() => setFiltersOpen(false)}
                    aria-label="Close filters"
                    className="rounded-lg p-1.5 transition-colors hover:bg-[#F3F5F0]"
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="mb-3 mt-5 text-sm font-bold text-[#555555]">
                  Ticket type
                </p>

                <div className="flex flex-wrap gap-2">
                  {["All events", "Free events", "Paid events"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setEventType(type)}
                      className={`rounded-full border px-3 py-2 text-xs font-bold transition-colors ${
                        eventType === type
                          ? "border-[#59F033] bg-[#E9F8E4] text-[#286C20]"
                          : "border-[#e8eae7] text-[#555555] hover:border-[#b7dca8]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn-primary mt-5 min-h-11 w-full rounded-xl px-4 text-sm font-extrabold"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-bold text-[#777777]">
              Popular:
            </span>

            {["Fintech", "Technology", "Business", "Art and Culture"].map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => chooseCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                    activeCategory === category
                      ? "border-[#59F033] bg-[#E9F8E4] text-[#245E19]"
                      : "border-[#e8eae7] bg-white text-[#555555] hover:border-[#59F033] hover:text-black"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Upcoming events */}

      <section
        id="upcoming-events"
        className="scroll-mt-24 border-y border-[#eeefe9] bg-[#F5F6F2] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
                Upcoming events
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-7 text-[#666666]">
                Find your next great conversation, new connection, or
                unforgettable experience.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e6e8e1] bg-white px-4 py-2 text-sm font-bold text-[#555555]">
              <MapPin size={16} className="text-[#398C27]" />
              {selectedPlace === "All locations"
                ? selectedCountry
                : `${selectedPlace}, ${selectedCountry}`}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["All", "Fintech", "Art and Culture", "Climate"].map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-extrabold transition-colors ${
                    activeCategory === category
                      ? "bg-[#171717] text-white"
                      : "border border-[#e4e5e1] bg-white text-[#555555] hover:border-[#59F033] hover:text-black"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>

          {filteredEvents.length > 0 ? (
            <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-2">
              {filteredEvents.map((event) => (
                <article
                  key={event.id}
                  className="group relative flex min-h-[260px] overflow-hidden rounded-[24px] border border-[#E4E6DF] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#C8E7BD] hover:shadow-[0_16px_36px_rgba(25,40,20,0.07)] sm:min-h-[270px]"
                >
                  {/* Event image */}

                  <div className="relative min-h-full w-[34%] min-w-[112px] overflow-hidden bg-[#E9EEE4] sm:w-[32%]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 640px) 38vw, 240px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    <span
                      className={`absolute left-2 top-2 max-w-[calc(100%-16px)] rounded-full px-2.5 py-1.5 text-[10px] font-extrabold sm:left-3 sm:top-3 sm:px-3 sm:text-xs ${event.accent} ${event.accentText}`}
                    >
                      {event.category}
                    </span>
                  </div>

                  <div className="relative flex min-w-0 flex-1">
                    <div className="flex min-w-0 flex-1 flex-col justify-between p-3.5 sm:p-5">
                      <div>
                        <div className="mb-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-bold text-[#398C27] sm:text-sm">
                          <Clock3 size={14} className="shrink-0" />
                          <span>{event.time}</span>
                          <span className="text-[#D4D7CF]">/</span>
                          <span className="text-[#777777]">{event.price}</span>
                        </div>

                        <h3 className="line-clamp-2 text-base font-extrabold leading-snug tracking-[-0.025em] transition-colors group-hover:text-[#286C20] sm:text-xl">
                          {event.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#777777] sm:text-sm sm:leading-6">
                          {event.description}
                        </p>
                      </div>

                      {/* Company profile, name and verification */}

                      <div className="mt-3 flex min-w-0 items-center gap-2.5 border-t border-[#F0F1ED] pt-3">
                        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-[#E8EAE5] bg-[#F2F4EF] sm:h-9 sm:w-9">
                          <Image
                            src={event.organizer.image}
                            alt={`${event.organizer.name} profile`}
                            fill
                            sizes="36px"
                            className="object-cover"
                          />
                        </div>

                        <div className="flex min-w-0 items-center gap-1">
                          <span className="truncate text-xs font-extrabold text-[#30332D] sm:text-sm">
                            {event.organizer.name}
                          </span>

                          {event.organizer.verified && (
                            <span
                              title="Verified organizer"
                              aria-label="Verified organizer"
                              className="inline-flex shrink-0 items-center justify-center"
                            >
                              <BadgeCheck
                                size={17}
                                fill="#59F033"
                                stroke="#FFFFFF"
                                strokeWidth={2.5}
                                className="text-[#59F033]"
                              />
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="flex min-w-0 items-center gap-1.5 text-[11px] font-semibold text-[#666666] sm:text-xs">
                          <MapPin size={13} className="shrink-0" />
                          <span className="truncate">
                            {event.venue}, {event.city}
                          </span>
                        </div>

                        <Link
                          href="/signin"
                          className="btn-primary mt-3 inline-flex min-h-9 items-center justify-center rounded-lg px-4 text-xs font-extrabold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:min-h-10 sm:px-5 sm:text-sm"
                        >
                          View event
                        </Link>
                      </div>
                    </div>

                    {/* Date ticket */}

                    <div className="relative flex w-[62px] shrink-0 flex-col items-center justify-center border-l border-dashed border-[#D9DBD5] bg-[#FAFBF8] sm:w-[78px]">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[9px] top-[-9px] h-[18px] w-[18px] rounded-full border border-[#E4E6DF] bg-[#F5F6F2]"
                      />

                      <span
                        aria-hidden="true"
                        className="absolute -left-[9px] bottom-[-9px] h-[18px] w-[18px] rounded-full border border-[#E4E6DF] bg-[#F5F6F2]"
                      />

                      <span className="text-[10px] font-extrabold tracking-[0.13em] text-[#777777] sm:text-xs">
                        {event.month}
                      </span>

                      <span className="mt-1 text-3xl font-extrabold leading-none tracking-[-0.06em] sm:text-4xl">
                        {event.day}
                      </span>

                      <CalendarDays size={16} className="mt-3 text-[#398C27]" />

                      <span className="mt-2 px-1 text-center text-[9px] font-bold leading-4 text-[#777777] sm:text-[10px]">
                        {event.date.split(",")[0]}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-7 rounded-[24px] border border-[#E4E6DF] bg-white px-6 py-14 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9F8E4]">
                <Search size={24} className="text-[#398C27]" />
              </div>

              <h3 className="mt-5 text-xl font-extrabold">No events found</h3>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#777777]">
                Try changing your location, search term, category, or ticket
                type to discover more events.
              </p>

              <button
                type="button"
                onClick={() => {
                  clearFilters();
                  setSelectedCountry("Nigeria");
                  setSelectedPlace("Lagos");
                }}
                className="btn-primary mt-6 min-h-11 rounded-xl px-6 text-sm font-extrabold"
              >
                Reset filters
              </button>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#E4E6DF] pt-5">
            <p className="text-sm text-[#777777]">
              Showing{" "}
              <span className="font-extrabold text-[#171717]">
                {filteredEvents.length}
              </span>{" "}
              {filteredEvents.length === 1 ? "event" : "events"}
            </p>

            {(eventSearch ||
              activeCategory !== "All" ||
              eventType !== "All events") && (
              <button
                type="button"
                onClick={clearFilters}
                className="shrink-0 text-sm font-bold text-[#286C20] transition-colors hover:text-black"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Browse categories */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
              Browse by category
            </h2>

            <p className="mt-3 text-base leading-7 text-[#666666]">
              Follow what you love. Find the people who love it too.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
            {(showAllCategories ? categories : categories.slice(0, 8)).map(
              (category) => {
                const Icon = category.icon;

                return (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => chooseCategory(category.name)}
                    className={`group flex min-h-[155px] flex-col items-start justify-between rounded-[22px] border border-black/[0.025] p-4 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] sm:min-h-[180px] sm:rounded-[26px] sm:p-6 ${category.color}`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${category.iconBg} ${category.iconColor} transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14`}
                    >
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <div className="mt-5">
                      <h3 className="text-base font-extrabold tracking-tight sm:text-lg">
                        {category.name}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-[#555555] sm:text-sm sm:leading-6">
                        {category.description}
                      </p>
                    </div>
                  </button>
                );
              }
            )}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="btn-secondary min-h-[48px] rounded-xl px-7 text-sm font-extrabold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {showAllCategories
                ? "Show fewer categories"
                : "Explore all categories"}
            </button>
          </div>
        </div>
      </section>

      {/* Host an event */}

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto grid max-w-[1280px] overflow-hidden rounded-[30px] border border-[#DCE8D5] bg-[#EAF7E5] md:grid-cols-2">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              Have something worth bringing people together for?
            </h2>

            <p className="mt-4 max-w-xl text-base leading-8 text-[#555555]">
              Create an event for your customers, team, partners, or community
              with Summits.
            </p>

            <div className="mt-7">
              <Link
                href="/signin"
                className="btn-primary inline-flex min-h-[54px] items-center justify-center rounded-xl px-8 text-base font-extrabold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Host an event
              </Link>
            </div>
          </div>

          <div className="relative min-h-[260px] bg-[#D9E9D2] sm:min-h-[340px]">
            <Image
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85"
              alt="Professionals collaborating at a company event"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
