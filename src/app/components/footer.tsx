"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/",
    },
  ];

  return (
    <footer className="bg-[#10120F] text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Summits home"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/images/logo.png"
                alt="Summits logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />

              <span className="text-3xl font-bold tracking-tight">summits</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              A better way for companies to create events, bring communities
              together, and turn moments into meaningful connections.
            </p>

            <div className="mt-7 flex flex-col gap-4">
              <a
                href="mailto:hello@summits.com"
                className="inline-flex w-fit items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#59F033]"
              >
                <Mail size={17} />
                <span>hello@summits.com</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={17} />
                <span>Built for people everywhere</span>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="mb-6 text-sm font-semibold text-white">Explore</h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/events"
                  className="text-sm text-white/55 transition-colors hover:text-[#59F033]"
                >
                  Discover events
                </Link>
              </li>

              <li>
                <Link
                  href="/signin"
                  className="text-sm text-white/55 transition-colors hover:text-[#59F033]"
                >
                  Host an event
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/55 transition-colors hover:text-[#59F033]"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-semibold text-white">
              Your account
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/signin"
                  className="text-sm text-white/55 transition-colors hover:text-[#59F033]"
                >
                  Sign in
                </Link>
              </li>

              <li>
                <Link
                  href="/signin"
                  className="text-sm text-white/55 transition-colors hover:text-[#59F033]"
                >
                  Get started
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-semibold text-white">Follow us</h3>

            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-sm text-white/55 transition-colors hover:text-[#59F033]"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-white/10 pt-7 sm:mt-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/40">
              © {currentYear} Summits. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/privacy"
                className="text-xs text-white/40 transition-colors hover:text-white"
              >
                Privacy policy
              </Link>

              <Link
                href="/terms"
                className="text-xs text-white/40 transition-colors hover:text-white"
              >
                Terms of service
              </Link>

              <Link
                href="/contact"
                className="text-xs text-white/40 transition-colors hover:text-white"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
