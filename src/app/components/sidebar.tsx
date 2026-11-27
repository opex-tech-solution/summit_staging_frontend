"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  CalendarDays,
  Ticket,
  Building2,
  Settings,
  ChevronDown,
  UserRound,
  Plus,
  Users,
  LayoutDashboard,
  Bookmark,
  BadgeCheck,
  FileText,
} from "lucide-react";
import { useState } from "react";

type SidebarProps = {
  accountType?: "user" | "company";
  profileName?: string;
  profileImage?: string;
  companyName?: string;
};

const mockCompanies = [
  {
    id: "techpoint-africa",
    name: "TechPoint Africa",
    initials: "TA",
    href: "/dashboard/company/techpoint-africa",
    color: "bg-blue-100 text-blue-700",
    verified: true,
  },
  {
    id: "creative-house",
    name: "Creative House",
    initials: "CH",
    href: "/dashboard/company/creative-house",
    color: "bg-purple-100 text-purple-700",
    verified: true,
  },
  {
    id: "startup-circle",
    name: "Startup Circle",
    initials: "SC",
    href: "/dashboard/company/startup-circle",
    color: "bg-orange-100 text-orange-700",
    verified: true,
  },
];

export default function Sidebar({
  accountType = "user",
  profileName = "Your profile",
  profileImage,
  companyName = "Your company",
}: SidebarProps) {
  const pathname = usePathname();
  const [companiesOpen, setCompaniesOpen] = useState(true);

  const isCompany = accountType === "company";

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const navigation = isCompany
    ? [
        {
          label: "Home",
          href: "/dashboard/company",
          icon: House,
        },
        {
          label: "Events",
          href: "/dashboard/company/events",
          icon: CalendarDays,
        },
        {
          label: "Blogs",
          href: "/dashboard/company/blogs",
          icon: FileText,
        },
        {
          label: "Tickets",
          href: "/account/tickets",
          icon: Ticket,
        },
      ]
    : [
        {
          label: "Home",
          href: "/dashboard",
          icon: House,
        },
        {
          label: "Events",
          href: "/events",
          icon: CalendarDays,
        },
        {
          label: "Tickets",
          href: "/account/tickets",
          icon: Ticket,
        },
        {
          label: "Saved",
          href: "/account/saved",
          icon: Bookmark,
        },
      ];

  const companyLinks = [
    {
      label: "Company overview",
      href: "/dashboard/company",
      icon: LayoutDashboard,
    },
    {
      label: "Manage events",
      href: "/dashboard/company/events",
      icon: CalendarDays,
    },
    {
      label: "Manage blogs",
      href: "/dashboard/company/blogs",
      icon: FileText,
    },
    {
      label: "Team members",
      href: "/dashboard/company/team",
      icon: Users,
    },
  ];

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[250px] flex-col overflow-hidden border-r border-neutral-100 bg-white lg:flex">
        {/* Logo */}
        <div className="flex h-[72px] shrink-0 items-center border-b border-neutral-100 px-5">
          <Link
            href="/dashboard"
            className="flex items-center gap-2.5"
            aria-label="Summits home"
          >
            <Image
              src="/images/logo.png"
              alt="Summits logo"
              width={32}
              height={32}
              priority
              className="h-7 w-7 object-contain brightness-0"
            />

            <span className="text-xl font-extrabold tracking-tight text-black">
              summits
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="sidebar-scroll min-h-0 flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex min-h-10 items-center gap-3 rounded-xl px-3 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-[#59F033] text-black"
                      : "text-neutral-600 hover:bg-neutral-50 hover:text-black"
                  }`}
                >
                  <Icon size={18} strokeWidth={active ? 2.3 : 1.8} />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Companies dropdown */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setCompaniesOpen((open) => !open)}
                className={`flex min-h-10 w-full items-center gap-3 rounded-xl px-3 text-sm font-semibold transition-colors ${
                  isActive("/dashboard/company") || isActive("/companies")
                    ? "bg-[#59F033] text-black"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-black"
                }`}
                aria-expanded={companiesOpen}
              >
                <Building2 size={18} />

                <span className="flex-1 text-left">
                  {isCompany ? "Company" : "Companies"}
                </span>

                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    companiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {companiesOpen && (
                <div className="ml-4 mt-2 space-y-1 border-l border-neutral-200 pl-3">
                  {!isCompany ? (
                    <>
                      <p className="px-2 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                        Your companies
                      </p>

                      {mockCompanies.map((company) => {
                        const active = isActive(company.href);

                        return (
                          <Link
                            key={company.id}
                            href={company.href}
                            title={company.name}
                            className={`flex min-h-10 items-center gap-2 rounded-lg px-2 py-1.5 transition-colors ${
                              active
                                ? "bg-neutral-100 text-black"
                                : "text-neutral-600 hover:bg-neutral-50 hover:text-black"
                            }`}
                          >
                            <span
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ${company.color}`}
                            >
                              {company.initials}
                            </span>

                            <span className="min-w-0 flex-1 truncate text-xs font-medium">
                              {company.name}
                            </span>

                            {company.verified && (
                              <BadgeCheck
                                size={15}
                                className="shrink-0 fill-[#59F033] text-black"
                                aria-label="Verified company"
                                title="Verified company"
                              />
                            )}
                          </Link>
                        );
                      })}

                      <Link
                        href="/dashboard/company/create"
                        className="flex min-h-9 items-center gap-2 rounded-lg px-2 text-xs font-medium text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-black"
                      >
                        <Plus size={15} />
                        <span>Create a company</span>
                      </Link>

                      <Link
                        href="/companies"
                        className="flex min-h-9 items-center gap-2 rounded-lg px-2 text-xs font-medium text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-black"
                      >
                        <Building2 size={15} />
                        <span>Discover companies</span>
                      </Link>
                    </>
                  ) : (
                    companyLinks.map((item) => {
                      const Icon = item.icon;
                      const active = isActive(item.href);

                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={`flex min-h-9 items-center gap-2 rounded-lg px-2.5 text-xs font-medium transition-colors ${
                            active
                              ? "bg-neutral-100 text-black"
                              : "text-neutral-500 hover:bg-neutral-50 hover:text-black"
                          }`}
                        >
                          <Icon size={15} />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          </nav>

          <p className="mb-3 mt-7 px-3 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            Preferences
          </p>

          <Link
            href="/dashboard/settings"
            className={`flex min-h-10 items-center gap-3 rounded-xl px-3 text-sm font-semibold transition-colors ${
              isActive("/dashboard/settings")
                ? "bg-[#59F033] text-black"
                : "text-neutral-600 hover:bg-neutral-50 hover:text-black"
            }`}
          >
            <Settings size={18} />
            <span>Settings</span>
          </Link>
        </div>

        {/* Fixed profile section */}
        <div className="shrink-0 border-t border-neutral-100 bg-white p-3">
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-neutral-50"
          >
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#59F033] text-black">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt={profileName}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              ) : (
                <UserRound size={18} />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-neutral-900">
                {isCompany ? companyName : profileName}
              </p>

              <p className="mt-0.5 text-xs text-neutral-500">
                {isCompany ? "Company account" : "Personal account"}
              </p>
            </div>

            <Settings size={16} className="shrink-0 text-neutral-400" />
          </Link>
        </div>
      </aside>

      {/* Hidden scrollbar */}
      <style jsx global>{`
        .sidebar-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
          overscroll-behavior-y: contain;
        }

        .sidebar-scroll::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
      `}</style>

      {/* Mobile bottom navigation */}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white px-2 pb-[max(8px,env(safe-area-inset-bottom))] pt-2 lg:hidden">
        <div className="mx-auto flex max-w-lg items-stretch justify-around">
          {navigation.slice(0, 4).map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-[10px] font-semibold transition-colors ${
                  active ? "text-black" : "text-neutral-500"
                }`}
              >
                <span
                  className={`flex h-8 w-11 items-center justify-center rounded-xl ${
                    active ? "bg-[#59F033]" : ""
                  }`}
                >
                  <Icon size={19} strokeWidth={active ? 2.4 : 1.8} />
                </span>

                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}

          <Link
            href="/dashboard/profile"
            className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 text-[10px] font-semibold ${
              isActive("/dashboard/profile") ? "text-black" : "text-neutral-500"
            }`}
          >
            <span
              className={`flex h-8 w-11 items-center justify-center overflow-hidden rounded-xl ${
                isActive("/dashboard/profile")
                  ? "bg-[#59F033]"
                  : "bg-neutral-100"
              }`}
            >
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt={profileName}
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full object-cover"
                />
              ) : (
                <UserRound size={19} />
              )}
            </span>

            <span>Profile</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
