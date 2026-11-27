"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/sidebar";
import {
  Bell,
  Search,
  Plus,
  CalendarDays,
  Building2,
  Ticket,
  Wallet,
  Users,
  MapPin,
  Clock3,
  CheckCircle2,
  CircleAlert,
  Settings,
  Eye,
  BadgeCheck,
  FileText,
  Image as ImageIcon,
  Video,
  BookOpen,
  ChevronDown,
  UserRound,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Globe,
  Pencil,
  FolderOpen,
  X,
} from "lucide-react";

type Company = {
  id: string;
  name: string;
  initials: string;
  description: string;
  followers: number;
  events: number;
  ticketsSold: number;
  revenue: string;
  color: string;
  verified: boolean;
};

type EventItem = {
  id: string;
  companyId: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  attendees: number;
  capacity: number;
  revenue: string;
  status: "Published" | "Draft";
};

type BlogItem = {
  id: string;
  companyId: string;
  title: string;
  description: string;
  category: string;
  date: string;
  status: "Published" | "Draft";
  reads: number;
};

type MediaItem = {
  id: string;
  companyId: string;
  title: string;
  type: "Image" | "Video";
  date: string;
  size: string;
};

const initialCompanies: Company[] = [
  {
    id: "techpoint-africa",
    name: "TechPoint Africa",
    initials: "TA",
    description:
      "Connecting Africa's technology ecosystem through events, community, innovation and conversations that shape the future of technology.",
    followers: 1248,
    events: 6,
    ticketsSold: 324,
    revenue: "₦1,620,000",
    color: "bg-blue-50 text-blue-700",
    verified: true,
  },
  {
    id: "creative-house",
    name: "Creative House",
    initials: "CH",
    description:
      "A community for designers, creators and creative entrepreneurs to share ideas, develop skills and build meaningful connections.",
    followers: 864,
    events: 4,
    ticketsSold: 186,
    revenue: "₦930,000",
    color: "bg-purple-50 text-purple-700",
    verified: true,
  },
  {
    id: "startup-circle",
    name: "Startup Circle",
    initials: "SC",
    description:
      "Helping founders meet the right people, exchange practical knowledge and build stronger businesses across Africa.",
    followers: 532,
    events: 2,
    ticketsSold: 92,
    revenue: "₦460,000",
    color: "bg-orange-50 text-orange-700",
    verified: true,
  },
];

const initialEvents: EventItem[] = [
  {
    id: "african-tech-summit",
    companyId: "techpoint-africa",
    title: "African Tech Summit 2026",
    date: "Dec 12, 2026",
    time: "10:00 AM",
    venue: "Landmark Centre, Lagos",
    attendees: 324,
    capacity: 500,
    revenue: "₦1,620,000",
    status: "Published",
  },
  {
    id: "creative-business-forum",
    companyId: "creative-house",
    title: "Creative Business Forum",
    date: "Dec 18, 2026",
    time: "11:00 AM",
    venue: "Online event",
    attendees: 186,
    capacity: 300,
    revenue: "₦930,000",
    status: "Published",
  },
  {
    id: "founders-networking-night",
    companyId: "startup-circle",
    title: "Founders Networking Night",
    date: "Jan 08, 2027",
    time: "5:00 PM",
    venue: "Victoria Island, Lagos",
    attendees: 92,
    capacity: 150,
    revenue: "₦460,000",
    status: "Draft",
  },
];

const initialBlogs: BlogItem[] = [
  {
    id: "tech-trends-2026",
    companyId: "techpoint-africa",
    title: "The Technology Trends Shaping Africa in 2026",
    description:
      "A look at the ideas, people and technologies transforming the African technology ecosystem.",
    category: "Technology",
    date: "Nov 20, 2026",
    status: "Published",
    reads: 2480,
  },
  {
    id: "building-tech-community",
    companyId: "techpoint-africa",
    title: "Why Building a Tech Community Matters",
    description:
      "How events and communities help founders, developers and businesses grow together.",
    category: "Community",
    date: "Nov 15, 2026",
    status: "Draft",
    reads: 0,
  },
  {
    id: "creative-business",
    companyId: "creative-house",
    title: "Turning Creative Skills Into a Business",
    description:
      "Practical ideas for creators who want to turn their skills into sustainable businesses.",
    category: "Business",
    date: "Nov 18, 2026",
    status: "Published",
    reads: 1340,
  },
  {
    id: "founder-lessons",
    companyId: "startup-circle",
    title: "Lessons Every First Time Founder Should Know",
    description:
      "Useful lessons on finding customers, building a team and growing a business.",
    category: "Startups",
    date: "Nov 12, 2026",
    status: "Draft",
    reads: 0,
  },
];

const initialMedia: MediaItem[] = [
  {
    id: "tech-summit-cover",
    companyId: "techpoint-africa",
    title: "African Tech Summit Cover",
    type: "Image",
    date: "Nov 22, 2026",
    size: "1.8 MB",
  },
  {
    id: "summit-highlights",
    companyId: "techpoint-africa",
    title: "Previous Summit Highlights",
    type: "Video",
    date: "Nov 19, 2026",
    size: "24 MB",
  },
  {
    id: "creative-forum-cover",
    companyId: "creative-house",
    title: "Creative Business Forum Cover",
    type: "Image",
    date: "Nov 18, 2026",
    size: "2.1 MB",
  },
  {
    id: "founder-event-cover",
    companyId: "startup-circle",
    title: "Founders Networking Cover",
    type: "Image",
    date: "Nov 16, 2026",
    size: "1.4 MB",
  },
];

const initialNotifications = [
  {
    id: 1,
    title: "New ticket purchase",
    message: "A ticket was purchased for African Tech Summit 2026.",
    time: "10 minutes ago",
  },
  {
    id: 2,
    title: "New follower",
    message: "Someone started following your company.",
    time: "1 hour ago",
  },
  {
    id: 3,
    title: "Complete your event",
    message: "Review the details of your upcoming event.",
    time: "3 hours ago",
  },
];

type TabName = "Overview" | "Events" | "Blogs" | "Media";

export default function Company() {
  const [companies] = useState(initialCompanies);
  const [selectedCompanyId, setSelectedCompanyId] =
    useState("techpoint-africa");
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabName>("Overview");
  const [eventFilter, setEventFilter] = useState("All");
  const [blogFilter, setBlogFilter] = useState("All");
  const [mediaFilter, setMediaFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [readNotifications, setReadNotifications] = useState<number[]>([]);
  const [showCompanyDescription, setShowCompanyDescription] = useState(false);

  const selectedCompany =
    companies.find((company) => company.id === selectedCompanyId) ??
    companies[0];

  const companyEvents = initialEvents.filter(
    (event) => event.companyId === selectedCompany.id
  );

  const companyBlogs = initialBlogs.filter(
    (blog) => blog.companyId === selectedCompany.id
  );

  const companyMedia = initialMedia.filter(
    (media) => media.companyId === selectedCompany.id
  );

  const filteredEvents = companyEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = eventFilter === "All" || event.status === eventFilter;

    return matchesSearch && matchesFilter;
  });

  const filteredBlogs = companyBlogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = blogFilter === "All" || blog.status === blogFilter;

    return matchesSearch && matchesFilter;
  });

  const filteredMedia = companyMedia.filter((media) => {
    const matchesSearch = media.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = mediaFilter === "All" || media.type === mediaFilter;

    return matchesSearch && matchesFilter;
  });

  const unreadCount = initialNotifications.filter(
    (notification) => !readNotifications.includes(notification.id)
  ).length;

  const tabs: TabName[] = ["Overview", "Events", "Blogs", "Media"];

  function switchCompany(companyId: string) {
    setSelectedCompanyId(companyId);
    setCompanyMenuOpen(false);
    setSearch("");
    setEventFilter("All");
    setBlogFilter("All");
    setMediaFilter("All");
  }

  function formatNumber(value: number) {
    return new Intl.NumberFormat("en-NG").format(value);
  }

  return (
    <div className="min-h-screen bg-white text-gray-950">
      <Sidebar accountType="company" companyName={selectedCompany.name} />

      <main className="min-h-screen bg-white pb-24 lg:ml-[250px] lg:pb-8">
        {/* Header */}

        <header className="sticky top-0 z-30 border-b border-gray-100 bg-white">
          <div className="flex h-[72px] items-center justify-between gap-3 px-4 sm:px-8 lg:px-10">
            <div>
              <p className="text-xs text-gray-500">Company workspace</p>
              <h1 className="text-lg font-semibold tracking-tight">
                Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                  aria-label="Notifications"
                  className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                >
                  <Bell size={19} />
                  {unreadCount > 0 && (
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#59F033] ring-2 ring-white" />
                  )}
                </button>

                {notificationsOpen && (
                  <div className="absolute right-0 top-12 z-50 w-[min(350px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                    <div className="flex items-center justify-between border-b border-gray-100 p-4">
                      <div>
                        <h3 className="text-sm font-semibold">Notifications</h3>
                        <p className="mt-1 text-xs text-gray-500">
                          {unreadCount} unread
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setReadNotifications(
                            initialNotifications.map((item) => item.id)
                          )
                        }
                        className="text-xs font-medium text-gray-600 hover:text-black"
                      >
                        Mark all read
                      </button>
                    </div>

                    {initialNotifications.map((notification) => {
                      const isRead = readNotifications.includes(
                        notification.id
                      );

                      return (
                        <button
                          key={notification.id}
                          type="button"
                          onClick={() =>
                            setReadNotifications((previous) =>
                              previous.includes(notification.id)
                                ? previous
                                : [...previous, notification.id]
                            )
                          }
                          className={`flex w-full items-start gap-3 border-b border-gray-50 p-4 text-left hover:bg-gray-50 ${
                            isRead ? "bg-white" : "bg-green-50/40"
                          }`}
                        >
                          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#59F033]" />
                          <span>
                            <span className="block text-sm font-medium">
                              {notification.title}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-gray-500">
                              {notification.message}
                            </span>
                            <span className="mt-2 block text-[11px] text-gray-400">
                              {notification.time}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/dashboard/company/events/create"
                className="flex h-10 items-center gap-2 rounded-xl bg-[#59F033] px-3 text-sm font-semibold text-black transition hover:bg-[#48df25] sm:px-4"
              >
                <Plus size={17} />
                <span className="hidden sm:inline">Create event</span>
                <span className="sm:hidden">Create</span>
              </Link>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] space-y-7 px-4 py-6 sm:px-8 lg:px-10 lg:py-8">
          {/* Company heading and switcher */}

          <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Your company
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                Manage your events, publish blogs, organise media and grow your
                community from one place.
              </p>
            </div>

            <div className="relative w-full sm:w-[280px]">
              <button
                type="button"
                onClick={() => setCompanyMenuOpen(!companyMenuOpen)}
                className="flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 text-left transition hover:bg-gray-50"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${selectedCompany.color}`}
                >
                  {selectedCompany.initials}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] text-gray-500">
                    Viewing company
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-semibold">
                    {selectedCompany.name}
                  </span>
                </span>

                <ChevronDown
                  size={17}
                  className={`shrink-0 text-gray-500 transition ${
                    companyMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {companyMenuOpen && (
                <div className="absolute right-0 top-[calc(100%+8px)] z-40 w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-lg">
                  <p className="px-3 py-2 text-xs font-medium text-gray-400">
                    SWITCH COMPANY
                  </p>

                  {companies.map((company) => (
                    <button
                      key={company.id}
                      type="button"
                      onClick={() => switchCompany(company.id)}
                      className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
                        selectedCompany.id === company.id
                          ? "bg-[#F3FBEF]"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ${company.color}`}
                      >
                        {company.initials}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium">
                          {company.name}
                        </span>
                        <span className="mt-1 block text-xs text-gray-500">
                          {formatNumber(company.followers)} followers
                        </span>
                      </span>

                      {selectedCompany.id === company.id && (
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-green-700"
                        />
                      )}
                    </button>
                  ))}

                  <Link
                    href="/dashboard/company/create"
                    className="mt-1 flex items-center gap-2 rounded-xl border-t border-gray-100 px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Plus size={16} />
                    Create another company
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* Company profile */}

          <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-bold ${selectedCompany.color}`}
              >
                {selectedCompany.initials}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold">
                    {selectedCompany.name}
                  </h3>

                  {selectedCompany.verified && (
                    <BadgeCheck
                      size={19}
                      className="fill-[#59F033] text-black"
                      aria-label="Verified company"
                      title="Verified company"
                    />
                  )}
                </div>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">
                  {selectedCompany.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users size={17} className="text-gray-500" />
                    <span className="font-semibold">
                      {formatNumber(selectedCompany.followers)}
                    </span>
                    <span className="text-gray-500">followers</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <CalendarDays size={17} className="text-gray-500" />
                    <span className="font-semibold">
                      {selectedCompany.events}
                    </span>
                    <span className="text-gray-500">events</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Globe size={17} className="text-gray-500" />
                    <span className="text-gray-600">Company profile</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/dashboard/company/${selectedCompany.id}/settings`}
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Pencil size={15} />
                Edit company
              </Link>
            </div>
          </section>

          {/* Workspace tabs */}

          <nav className="flex gap-1 overflow-x-auto border-b border-gray-200">
            {tabs.map((tab) => {
              const active = activeTab === tab;

              const Icon =
                tab === "Overview"
                  ? Building2
                  : tab === "Events"
                  ? CalendarDays
                  : tab === "Blogs"
                  ? BookOpen
                  : ImageIcon;

              const count =
                tab === "Events"
                  ? companyEvents.length
                  : tab === "Blogs"
                  ? companyBlogs.length
                  : tab === "Media"
                  ? companyMedia.length
                  : null;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab);
                    setSearch("");
                  }}
                  className={`flex shrink-0 items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "border-[#59F033] text-gray-950"
                      : "border-transparent text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <Icon size={17} />
                  {tab}
                  {count !== null && (
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-[11px] ${
                        active
                          ? "bg-[#EAFCE4] text-gray-900"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* OVERVIEW TAB */}

          {activeTab === "Overview" && (
            <div className="space-y-7">
              <section>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Company overview</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    The key numbers for {selectedCompany.name}.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    {
                      title: "Events",
                      value: String(selectedCompany.events),
                      description: "Events created by this company",
                      icon: CalendarDays,
                    },
                    {
                      title: "Followers",
                      value: formatNumber(selectedCompany.followers),
                      description: "People following this company",
                      icon: Users,
                    },
                    {
                      title: "Tickets sold",
                      value: formatNumber(selectedCompany.ticketsSold),
                      description: "Tickets sold across events",
                      icon: Ticket,
                    },
                    {
                      title: "Ticket revenue",
                      value: selectedCompany.revenue,
                      description: "Revenue from ticket sales",
                      icon: Wallet,
                    },
                  ].map((stat) => {
                    const Icon = stat.icon;

                    return (
                      <div
                        key={stat.title}
                        className="rounded-2xl border border-gray-200 bg-white p-5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm text-gray-500">{stat.title}</p>
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3F8F1] text-gray-800">
                            <Icon size={19} />
                          </span>
                        </div>

                        <p className="mt-5 break-words text-2xl font-semibold tracking-tight text-gray-950">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-gray-500">
                          {stat.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Manage your content</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose what you want to manage for this company.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab("Events")}
                    className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:border-[#59F033] hover:bg-[#FCFFFA]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3F8F1]">
                      <CalendarDays size={21} />
                    </span>
                    <h4 className="mt-4 font-semibold">Events</h4>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Create events, manage registrations and track ticket
                      sales.
                    </p>
                    <p className="mt-4 text-sm font-medium">
                      {companyEvents.length} events
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("Blogs")}
                    className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:border-[#59F033] hover:bg-[#FCFFFA]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3F8F1]">
                      <BookOpen size={21} />
                    </span>
                    <h4 className="mt-4 font-semibold">Blogs</h4>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Publish company news, announcements and useful articles.
                    </p>
                    <p className="mt-4 text-sm font-medium">
                      {companyBlogs.length} articles
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("Media")}
                    className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:border-[#59F033] hover:bg-[#FCFFFA]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3F8F1]">
                      <ImageIcon size={21} />
                    </span>
                    <h4 className="mt-4 font-semibold">Media library</h4>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Organise event images, video highlights and other media.
                    </p>
                    <p className="mt-4 text-sm font-medium">
                      {companyMedia.length} media files
                    </p>
                  </button>
                </div>
              </section>

              <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <div className="flex items-center justify-between gap-3 border-b border-gray-100 p-5">
                  <div>
                    <h3 className="font-semibold">
                      Upcoming and recent events
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Events belonging to {selectedCompany.name}.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab("Events")}
                    className="text-sm font-medium text-gray-700 hover:text-black"
                  >
                    View events
                  </button>
                </div>

                {companyEvents.length ? (
                  <div className="divide-y divide-gray-100">
                    {companyEvents.slice(0, 3).map((event) => (
                      <div
                        key={event.id}
                        className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-50">
                            <CalendarDays size={18} />
                          </span>
                          <div>
                            <p className="text-sm font-semibold">
                              {event.title}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                              {event.date} at {event.time}
                            </p>
                            <p className="mt-1 flex items-center gap-1 text-xs text-gray-500">
                              <MapPin size={13} />
                              {event.venue}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                            event.status === "Published"
                              ? "bg-green-50 text-green-800"
                              : "bg-amber-50 text-amber-800"
                          }`}
                        >
                          {event.status}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    title="No events yet"
                    description="Create your first event for this company."
                    icon="events"
                    onAction={() =>
                      (window.location.href =
                        "/dashboard/company/events/create")
                    }
                    actionLabel="Create event"
                  />
                )}
              </section>
            </div>
          )}

          {/* EVENTS TAB */}

          {activeTab === "Events" && (
            <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                  <h3 className="text-lg font-semibold">Company events</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Manage events created by {selectedCompany.name}.
                  </p>
                </div>

                <Link
                  href="/dashboard/company/events/create"
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#59F033] px-4 py-2.5 text-sm font-semibold text-black hover:bg-[#48df25]"
                >
                  <Plus size={17} />
                  Create event
                </Link>
              </div>

              <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <SearchInput value={search} onChange={setSearch} />

                <FilterButtons
                  values={["All", "Published", "Draft"]}
                  active={eventFilter}
                  onChange={setEventFilter}
                />
              </div>

              {filteredEvents.length ? (
                <div className="divide-y divide-gray-100">
                  {filteredEvents.map((event) => {
                    const percentage = Math.min(
                      100,
                      Math.round((event.attendees / event.capacity) * 100)
                    );

                    return (
                      <div key={event.id} className="p-5 sm:p-6">
                        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                          <div className="flex items-start gap-3">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-50">
                              <CalendarDays size={20} />
                            </span>

                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h4 className="font-semibold">{event.title}</h4>
                                <StatusBadge status={event.status} />
                              </div>

                              <p className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
                                <CalendarDays size={14} />
                                {event.date}
                                <span className="mx-1">•</span>
                                <Clock3 size={14} />
                                {event.time}
                              </p>

                              <p className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
                                <MapPin size={14} />
                                {event.venue}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:min-w-[390px]">
                            <div>
                              <p className="text-xs text-gray-500">
                                Registrations
                              </p>
                              <p className="mt-1 text-sm font-semibold">
                                {event.attendees} / {event.capacity}
                              </p>
                              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
                                <div
                                  className="h-full rounded-full bg-[#59F033]"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                              <p className="mt-1 text-[11px] text-gray-400">
                                {percentage}% full
                              </p>
                            </div>

                            <div>
                              <p className="text-xs text-gray-500">Revenue</p>
                              <p className="mt-1 text-sm font-semibold">
                                {event.revenue}
                              </p>
                            </div>

                            <Link
                              href={`/dashboard/company/events/${event.id}`}
                              className="inline-flex h-9 items-center justify-center gap-2 self-start rounded-lg border border-gray-200 px-3 text-xs font-medium hover:bg-gray-50"
                            >
                              <Eye size={15} />
                              Manage
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <EmptyState
                  title="No matching events"
                  description="Try changing the search or event status."
                  icon="events"
                  onAction={() => {
                    setSearch("");
                    setEventFilter("All");
                  }}
                  actionLabel="Clear filters"
                />
              )}
            </section>
          )}

          {/* BLOGS TAB */}

          {activeTab === "Blogs" && (
            <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                  <h3 className="text-lg font-semibold">Company blogs</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Share news, stories and updates from {selectedCompany.name}.
                  </p>
                </div>

                <Link
                  href={`/dashboard/company/${selectedCompany.id}/blogs/create`}
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#59F033] px-4 py-2.5 text-sm font-semibold text-black hover:bg-[#48df25]"
                >
                  <Plus size={17} />
                  Write a blog
                </Link>
              </div>

              <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <SearchInput value={search} onChange={setSearch} />

                <FilterButtons
                  values={["All", "Published", "Draft"]}
                  active={blogFilter}
                  onChange={setBlogFilter}
                />
              </div>

              {filteredBlogs.length ? (
                <div className="grid grid-cols-1 gap-4 p-5 pt-0 md:grid-cols-2 xl:grid-cols-3">
                  {filteredBlogs.map((blog) => (
                    <article
                      key={blog.id}
                      className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:border-gray-300"
                    >
                      <div className="flex h-36 items-center justify-center bg-[#F4F7F2]">
                        <BookOpen size={36} className="text-gray-400" />
                      </div>

                      <div className="p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="rounded-md bg-gray-100 px-2 py-1 text-[11px] font-medium text-gray-600">
                            {blog.category}
                          </span>
                          <StatusBadge status={blog.status} />
                        </div>

                        <h4 className="mt-3 font-semibold leading-6">
                          {blog.title}
                        </h4>

                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-500">
                          {blog.description}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-4 text-xs text-gray-500">
                          <span>{blog.date}</span>
                          <span>{formatNumber(blog.reads)} reads</span>
                        </div>

                        <Link
                          href={`/dashboard/company/${selectedCompany.id}/blogs/${blog.id}`}
                          className="mt-4 flex h-10 items-center justify-center gap-2 rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50"
                        >
                          <Pencil size={15} />
                          Manage blog
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="No blog posts found"
                  description="Write your first article or change your filters."
                  icon="blogs"
                  onAction={() => {
                    setSearch("");
                    setBlogFilter("All");
                  }}
                  actionLabel="Clear filters"
                />
              )}
            </section>
          )}

          {/* MEDIA TAB */}

          {activeTab === "Media" && (
            <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                  <h3 className="text-lg font-semibold">Media library</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Manage images and videos for {selectedCompany.name}.
                  </p>
                </div>

                <Link
                  href={`/dashboard/company/${selectedCompany.id}/media/upload`}
                  className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#59F033] px-4 py-2.5 text-sm font-semibold text-black hover:bg-[#48df25]"
                >
                  <Plus size={17} />
                  Add media
                </Link>
              </div>

              <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <SearchInput value={search} onChange={setSearch} />

                <FilterButtons
                  values={["All", "Image", "Video"]}
                  active={mediaFilter}
                  onChange={setMediaFilter}
                />
              </div>

              {filteredMedia.length ? (
                <div className="grid grid-cols-1 gap-4 p-5 pt-0 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredMedia.map((media) => {
                    const MediaIcon =
                      media.type === "Video" ? Video : ImageIcon;

                    return (
                      <article
                        key={media.id}
                        className="overflow-hidden rounded-2xl border border-gray-200"
                      >
                        <div className="flex h-44 items-center justify-center bg-[#F4F7F2]">
                          <MediaIcon size={40} className="text-gray-400" />
                        </div>

                        <div className="p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <h4 className="truncate text-sm font-semibold">
                                {media.title}
                              </h4>
                              <p className="mt-1 text-xs text-gray-500">
                                {media.type} · {media.size}
                              </p>
                            </div>

                            <button
                              type="button"
                              aria-label={`More options for ${media.title}`}
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50"
                            >
                              <MoreHorizontal size={17} />
                            </button>
                          </div>

                          <p className="mt-3 text-xs text-gray-400">
                            Added {media.date}
                          </p>

                          <Link
                            href={`/dashboard/company/${selectedCompany.id}/media/${media.id}`}
                            className="mt-4 flex h-9 items-center justify-center gap-2 rounded-lg border border-gray-200 text-xs font-medium hover:bg-gray-50"
                          >
                            <Eye size={14} />
                            View media
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <EmptyState
                  title="No media found"
                  description="Add images or videos to build your company's media library."
                  icon="media"
                  onAction={() => {
                    setSearch("");
                    setMediaFilter("All");
                  }}
                  actionLabel="Clear filters"
                />
              )}
            </section>
          )}

          {/* Company switcher summary */}

          <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold">Your companies</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Switch workspaces to manage another company.
                </p>
              </div>

              <Link
                href="/dashboard/company/create"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-medium hover:bg-gray-50"
              >
                <Plus size={16} />
                Create company
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
              {companies.map((company) => {
                const isSelected = company.id === selectedCompany.id;

                return (
                  <button
                    key={company.id}
                    type="button"
                    onClick={() => switchCompany(company.id)}
                    className={`flex items-center gap-3 rounded-xl border p-4 text-left transition ${
                      isSelected
                        ? "border-[#59F033] bg-[#FAFFF7]"
                        : "border-gray-200 bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ${company.color}`}
                    >
                      {company.initials}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-1">
                        <span className="truncate text-sm font-semibold">
                          {company.name}
                        </span>
                        {company.verified && (
                          <BadgeCheck
                            size={14}
                            className="shrink-0 fill-[#59F033] text-black"
                          />
                        )}
                      </span>
                      <span className="mt-1 block text-xs text-gray-500">
                        {formatNumber(company.followers)} followers
                      </span>
                    </span>

                    {isSelected && (
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-green-700"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          <footer className="border-t border-gray-100 pt-5 text-xs text-gray-400">
            Summits company workspace
          </footer>
        </div>
      </main>
    </div>
  );
}

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <Search
        size={17}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search..."
        className="h-10 w-full rounded-xl border border-gray-200 bg-white pl-9 pr-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-400"
      />
    </div>
  );
}

function FilterButtons({
  values,
  active,
  onChange,
}: {
  values: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {values.map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          className={`rounded-lg px-3 py-2 text-xs font-medium transition ${
            active === value
              ? "bg-[#59F033] text-black"
              : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: "Published" | "Draft" }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
        status === "Published"
          ? "bg-green-50 text-green-800"
          : "bg-amber-50 text-amber-800"
      }`}
    >
      {status}
    </span>
  );
}

function EmptyState({
  title,
  description,
  icon,
  onAction,
  actionLabel,
}: {
  title: string;
  description: string;
  icon: "events" | "blogs" | "media";
  onAction: () => void;
  actionLabel: string;
}) {
  const Icon =
    icon === "events" ? CalendarDays : icon === "blogs" ? BookOpen : FolderOpen;

  return (
    <div className="px-5 py-12 text-center">
      <Icon size={32} className="mx-auto text-gray-300" />
      <h4 className="mt-3 text-sm font-semibold text-gray-900">{title}</h4>
      <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-gray-500">
        {description}
      </p>
      <button
        type="button"
        onClick={onAction}
        className="mt-4 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        {actionLabel}
      </button>
    </div>
  );
}
