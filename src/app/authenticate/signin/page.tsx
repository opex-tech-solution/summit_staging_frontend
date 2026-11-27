"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleSignIn = () => {
    window.location.href = "/api/auth/google";
  };

  const handleSignin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message || "Unable to sign in. Check your details and try again."
        );
        return;
      }

      window.location.href = data.redirectUrl || "/dashboard";
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-[100svh] overflow-hidden bg-white font-sans text-[#111111]">
      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        <section className="relative hidden h-full overflow-hidden bg-[#111111] lg:block">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=90"
            alt="Friends enjoying an experience together"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col justify-between p-8 xl:p-12">
            <Link href="/" aria-label="Summits home" className="w-fit">
              <Image
                src="/images/logo.png"
                alt="Summits"
                width={160}
                height={52}
                priority
                className="h-auto w-32 brightness-0 invert xl:w-36"
              />
            </Link>

            <div className="max-w-lg pb-2">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#59F033]" />
                <span className="text-sm font-medium text-white/90">
                  Life is better together
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.08] tracking-[-0.055em] text-white xl:text-6xl">
                Find your
                <br />
                people. Make
                <br />
                your moments.
              </h1>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/80 xl:text-base xl:leading-7">
                Discover events worth leaving home for, meet new people, and
                make memories that stay with you.
              </p>
            </div>

            <p className="text-xs text-white/70">
              © {new Date().getFullYear()} Summits. All rights reserved.
            </p>
          </div>
        </section>

        <section className="flex h-full min-h-0 flex-col px-5 py-4 sm:px-8 sm:py-5 lg:px-10 xl:px-16">
          <header className="flex shrink-0 items-center">
            <Link href="/" aria-label="Summits home" className="lg:hidden">
              <Image
                src="/images/logo.png"
                alt="Summits"
                width={140}
                height={46}
                priority
                className="h-auto w-28"
              />
            </Link>
          </header>

          <div className="mx-auto flex w-full max-w-[420px] flex-1 flex-col justify-center py-3">
            <div className="mb-5">
              <h2 className="text-3xl font-bold tracking-[-0.045em] sm:text-4xl">
                Welcome back.
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#777777]">
                Sign in to your Summits account and see what is happening.
              </p>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex h-12 w-full shrink-0 items-center gap-2 rounded-xl border border-[#E5E5E5] bg-white px-3 text-sm font-semibold text-[#171717] transition-colors hover:bg-[#F8F8F8] sm:gap-3 sm:px-4"
            >
              <svg
                viewBox="0 0 48 48"
                className="h-5 w-5 shrink-0"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z"
                />
                <path
                  fill="#34A853"
                  d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
                />
                <path
                  fill="#FBBC05"
                  d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z"
                />
                <path
                  fill="#EA4335"
                  d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8A19.4 19.4 0 0 0 24 4 20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12Z"
                />
              </svg>

              <span className="min-w-0 flex-1 whitespace-nowrap text-center">
                Continue with Google
              </span>

              <span className="shrink-0 rounded-md bg-[#F0F7EB] px-2 py-1 text-[9px] font-bold text-[#347A24] sm:text-[10px]">
                Recommended
              </span>
            </button>

            <div className="my-4 flex shrink-0 items-center gap-3">
              <div className="h-px flex-1 bg-[#EAEAEA]" />
              <span className="whitespace-nowrap text-[10px] font-medium tracking-wide text-[#999999]">
                OR SIGN IN WITH EMAIL
              </span>
              <div className="h-px flex-1 bg-[#EAEAEA]" />
            </div>

            <form onSubmit={handleSignin} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-[#222222]"
                >
                  Email address
                </label>

                <div className="flex h-12 items-center gap-3 rounded-xl border border-[#E5E5E5] px-4 transition-colors focus-within:border-[#59F033] focus-within:ring-2 focus-within:ring-[#59F033]/15">
                  <Mail
                    size={18}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#999999]"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className="h-full w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-[#AAAAAA]"
                  />
                </div>
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-[#222222]"
                  >
                    Password
                  </label>

                  <Link
                    href="/authenticate/forget"
                    className="text-xs font-semibold text-[#555555] transition-colors hover:text-[#378B22]"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="flex h-12 items-center gap-3 rounded-xl border border-[#E5E5E5] px-4 transition-colors focus-within:border-[#59F033] focus-within:ring-2 focus-within:ring-[#59F033]/15">
                  <Lock
                    size={18}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#999999]"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    className="h-full w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-[#AAAAAA]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="shrink-0 text-[#999999] transition-colors hover:text-[#111111]"
                  >
                    {showPassword ? (
                      <EyeOff size={18} strokeWidth={1.8} />
                    ) : (
                      <Eye size={18} strokeWidth={1.8} />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 px-3 py-2 text-xs leading-5 text-red-600"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex h-12 w-full items-center justify-center rounded-xl bg-[#59F033] px-5 text-sm font-bold text-black transition-colors hover:bg-[#4BE526] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

              <Link
                href="/authenticate/signup"
                className="flex h-12 w-full items-center justify-center rounded-xl border border-[#E5E5E5] bg-[#F3F4F6] px-5 text-sm font-bold text-[#444444] transition-colors hover:border-[#D1D5DB] hover:bg-[#E9EAEC]"
              >
                Create account
              </Link>
            </form>

            <p className="mt-4 text-center text-[11px] leading-5 text-[#888888]">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="font-semibold text-[#333333] underline underline-offset-2 hover:text-[#378B22]"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-semibold text-[#333333] underline underline-offset-2 hover:text-[#378B22]"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="shrink-0 pb-1 text-center text-[10px] text-[#999999] lg:hidden">
            © {new Date().getFullYear()} Summits. All rights reserved.
          </div>
        </section>
      </div>
    </main>
  );
}
