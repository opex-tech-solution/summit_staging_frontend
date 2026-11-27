"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export default function Forget() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-5 py-12 font-[Montserrat,sans-serif]">
      <section className="w-full max-w-[440px]">
        <Link
          href="/authenticate/signin"
          className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-[#555] transition-colors hover:text-black"
        >
          <ArrowLeft size={17} />
          Back to sign in
        </Link>

        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#59F033]/15">
          <Mail size={27} className="text-black" strokeWidth={1.8} />
        </div>

        {!submitted ? (
          <>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#111] sm:text-4xl">
              Forgot your password?
            </h1>

            <p className="mt-4 text-[15px] leading-7 text-[#737373]">
              No worries. Enter the email address associated with your Summits
              account and we will help you reset your password.
            </p>

            <form onSubmit={handleSubmit} className="mt-9 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#222]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="h-[54px] w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-sm text-black outline-none transition-all placeholder:text-[#a1a1aa] focus:border-[#59F033] focus:ring-2 focus:ring-[#59F033]/20"
                />
              </div>

              <button
                type="submit"
                className="flex h-[54px] w-full items-center justify-center rounded-xl bg-[#59F033] px-5 text-sm font-extrabold text-black transition-colors hover:bg-[#48df24] focus:outline-none focus:ring-2 focus:ring-[#59F033] focus:ring-offset-2"
              >
                Send reset instructions
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-[#737373]">
              Remember your password?{" "}
              <Link
                href="/authenticate/signin"
                className="font-bold text-black underline decoration-[#59F033] decoration-2 underline-offset-4 transition-colors hover:text-[#398b24]"
              >
                Sign in
              </Link>
            </p>
          </>
        ) : (
          <div aria-live="polite">
            <h1 className="text-3xl font-extrabold tracking-tight text-[#111] sm:text-4xl">
              Check your email
            </h1>

            <p className="mt-4 text-[15px] leading-7 text-[#737373]">
              If an account exists for{" "}
              <span className="font-bold text-[#222]">{email}</span>, you can
              receive password reset instructions there.
            </p>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-8 flex h-[54px] w-full items-center justify-center rounded-xl bg-[#59F033] px-5 text-sm font-extrabold text-black transition-colors hover:bg-[#48df24]"
            >
              Try another email
            </button>

            <p className="mt-6 text-center text-sm text-[#737373]">
              <Link
                href="/authenticate/signin"
                className="font-bold text-black underline decoration-[#59F033] decoration-2 underline-offset-4"
              >
                Return to sign in
              </Link>
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
