"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="summits-not-found relative flex h-[100svh] min-h-0 items-center justify-center overflow-hidden bg-white px-5 py-4 font-[Montserrat,sans-serif] text-[#111111]">
      <style jsx>{`
        @keyframes paperFloatOne {
          0%,
          100% {
            transform: translate(0, 0) rotate(-12deg);
          }
          50% {
            transform: translate(-7px, -10px) rotate(-5deg);
          }
        }

        @keyframes paperFloatTwo {
          0%,
          100% {
            transform: translate(0, 0) rotate(17deg);
          }
          50% {
            transform: translate(8px, 9px) rotate(25deg);
          }
        }

        @keyframes paperFloatThree {
          0%,
          100% {
            transform: translate(0, 0) rotate(8deg);
          }
          50% {
            transform: translate(-8px, 8px) rotate(1deg);
          }
        }

        @keyframes paperFloatFour {
          0%,
          100% {
            transform: translate(0, 0) rotate(-20deg);
          }
          50% {
            transform: translate(6px, -8px) rotate(-29deg);
          }
        }

        @keyframes paperAppear {
          from {
            opacity: 0;
            scale: 0.6;
          }
          to {
            opacity: 1;
            scale: 1;
          }
        }

        .paper-one {
          animation: paperAppear 600ms ease-out both,
            paperFloatOne 5s ease-in-out 600ms infinite;
        }

        .paper-two {
          animation: paperAppear 600ms ease-out 150ms both,
            paperFloatTwo 6s ease-in-out 750ms infinite;
        }

        .paper-three {
          animation: paperAppear 600ms ease-out 250ms both,
            paperFloatThree 5.5s ease-in-out 850ms infinite;
        }

        .paper-four {
          animation: paperAppear 600ms ease-out 350ms both,
            paperFloatFour 6.5s ease-in-out 950ms infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .paper-one,
          .paper-two,
          .paper-three,
          .paper-four {
            animation: none;
          }
        }
      `}</style>

      <section className="relative flex max-h-full w-full max-w-2xl flex-col items-center justify-center text-center">
        <Link
          href="/"
          aria-label="Summits home"
          className="mb-8 shrink-0 sm:mb-10"
        >
          <Image
            src="/images/logo.png"
            alt="Summits"
            width={160}
            height={54}
            priority
            className="h-auto w-28 object-contain brightness-0 sm:w-32"
          />
        </Link>

        <div className="relative mb-7 flex shrink-0 items-center justify-center px-7 py-5 sm:mb-8 sm:px-12 sm:py-7">
          <div
            aria-hidden="true"
            className="paper-one absolute -left-1 top-0 h-8 w-11 bg-[#59F033] shadow-[3px_4px_0px_rgba(0,0,0,0.08)] sm:-left-4 sm:h-12 sm:w-16"
            style={{
              clipPath: "polygon(0 0, 100% 12%, 83% 100%, 12% 82%)",
            }}
          />

          <div
            aria-hidden="true"
            className="paper-two absolute -right-1 top-0 h-7 w-9 bg-[#D9FBCF] shadow-[3px_4px_0px_rgba(0,0,0,0.06)] sm:-right-4 sm:h-10 sm:w-12"
            style={{
              clipPath: "polygon(15% 0, 100% 18%, 78% 100%, 0 76%)",
            }}
          />

          <div
            aria-hidden="true"
            className="paper-three absolute bottom-0 left-5 h-6 w-10 bg-[#111111] shadow-[3px_4px_0px_rgba(0,0,0,0.08)] sm:left-10 sm:h-8 sm:w-14"
            style={{
              clipPath: "polygon(0 18%, 82% 0, 100% 85%, 17% 100%)",
            }}
          />

          <div
            aria-hidden="true"
            className="paper-four absolute bottom-0 right-4 h-7 w-7 bg-[#59F033] shadow-[3px_4px_0px_rgba(0,0,0,0.08)] sm:right-8 sm:h-10 sm:w-9"
            style={{
              clipPath: "polygon(10% 0, 100% 20%, 80% 100%, 0 76%)",
            }}
          />

          <div
            aria-hidden="true"
            className="paper-one absolute -left-4 top-1/2 h-4 w-6 bg-[#E7E7E7] sm:-left-10 sm:h-6 sm:w-8"
            style={{
              clipPath: "polygon(0 0, 100% 20%, 70% 100%, 15% 75%)",
            }}
          />

          <div
            aria-hidden="true"
            className="paper-two absolute -right-4 top-1/2 h-5 w-6 bg-[#111111] sm:-right-10 sm:h-7 sm:w-8"
            style={{
              clipPath: "polygon(15% 0, 100% 20%, 80% 100%, 0 75%)",
            }}
          />

          <span className="relative z-10 select-none text-[clamp(96px,19vw,160px)] font-black leading-[0.8] tracking-[-0.11em] text-[#111111]">
            404
          </span>
        </div>

        <h1 className="max-w-xl text-2xl font-bold leading-tight tracking-[-1px] sm:text-4xl sm:tracking-[-2px]">
          Looks like this event has left the room.
        </h1>

        <p className="mt-3 max-w-md text-xs leading-6 text-neutral-500 sm:mt-4 sm:text-sm sm:leading-7">
          The page you are looking for may have moved, been removed, or never
          existed. Let us get you back to something worth showing up for.
        </p>

        <div className="mt-6 flex w-full shrink-0 flex-col justify-center gap-3 sm:mt-7 sm:w-auto sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#59F033] px-8 text-sm font-bold text-black transition-colors duration-200 hover:bg-[#49df24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#59F033] focus-visible:ring-offset-2"
          >
            Explore Summits
          </Link>

          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-neutral-200 bg-white px-8 text-sm font-semibold text-neutral-700 transition-colors duration-200 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2"
          >
            Go back
          </button>
        </div>
      </section>
    </main>
  );
}
