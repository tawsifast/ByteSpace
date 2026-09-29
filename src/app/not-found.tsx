"use client";

import { useState, FormEvent } from "react";

export default function NotFoundPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div
      className="font-sans antialiased text-gray-900 min-h-screen flex flex-col justify-between"
      style={{ backgroundColor: "#0238FA" }}
    >
      {/* ────────── Header ────────── */}
      <header
        className="w-full border-b border-white/10 relative z-20"
        style={{
          backgroundColor: "#0238FA",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            aria-label="ByteSpace Home"
            className="flex items-center gap-2 group"
            href="/"
            id="not-found-logo"
          >
            <div className="w-7 h-7 rounded-sm flex items-center justify-center font-black text-black text-lg select-none" style={{ backgroundColor: "#D2FF00" }}>
              b
            </div>
            <span className="text-white font-bold text-xl tracking-tight">ByteSpace</span>
          </a>

          {/* Primary Nav */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-9">
            {["Home", "Courses", "About"].map((label) => (
              <a
                key={label}
                href={label === "Home" ? "/" : label === "Courses" ? "/courses" : "/#about"}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-6">
            <a
              href="/login"
              id="not-found-signin"
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              Sign In
            </a>
            <a
              href="/register"
              id="not-found-join"
              className="text-sm font-medium text-white hover:text-white/80 transition-colors"
            >
              Join Free
            </a>
            <a
              href="/courses"
              aria-label="Shopping Cart"
              className="text-white hover:text-[#D2FF00] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* ────────── 404 Hero ────────── */}
      <main
        className="flex-grow flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden select-none"
        data-purpose="404-hero"
        style={{
          backgroundColor: "#0238FA",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      >
        {/* Giant gradient 404 */}
        <h1
          className="font-black leading-none tracking-tight select-none"
          style={{
            fontSize: "clamp(140px, 20vw, 260px)",
            background: "linear-gradient(180deg, #D4FF00 20%, rgba(212,255,0,0.3) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        {/* Headline & Subtext */}
        <div className="max-w-2xl mx-auto mt-2 space-y-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The page you are looking
            <br className="hidden sm:inline" /> for doesn&apos;t exist
          </h2>
          <p className="text-white/70 text-sm sm:text-base font-normal max-w-lg mx-auto leading-relaxed">
            The link you followed may be broken or the page may have been removed.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="/"
            id="not-found-back-home"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-gray-900 font-semibold text-sm transition-all duration-200 shadow-lg active:scale-95 hover:opacity-90"
            style={{ backgroundColor: "#D2FF00" }}
          >
            Back to Home
          </a>
        </div>
      </main>

      {/* ────────── Footer ────────── */}
      <footer className="bg-white text-gray-600 pt-16 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Top Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-100">

            {/* Brand + Newsletter */}
            <div className="lg:col-span-5 pr-0 lg:pr-8">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-6 h-6 rounded-sm flex items-center justify-center font-black text-black text-sm select-none"
                  style={{ backgroundColor: "#D2FF00" }}
                >
                  b
                </div>
                <span className="text-gray-900 font-bold text-lg tracking-tight">ByteSpace</span>
              </div>
              <p className="text-sm text-gray-500 mb-6 max-w-md">
                Empowering self-developers with open source curriculum and tracks.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-2xl px-4 py-3 text-sm font-medium max-w-md">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thank you for subscribing!
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex items-center max-w-md gap-2"
                  id="not-found-newsletter-form"
                >
                  <input
                    id="not-found-email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 text-gray-800 placeholder-gray-400"
                    style={{ "--tw-ring-color": "#D2FF00" } as React.CSSProperties}
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-gray-900 font-semibold text-sm rounded-full transition-colors whitespace-nowrap hover:opacity-90"
                    style={{ backgroundColor: "#D2FF00" }}
                  >
                    Submit
                  </button>
                </form>
              )}

              <p className="text-[11px] text-gray-400 mt-3 max-w-sm leading-relaxed">
                By submitting your email you agree to receive ByteSpace newsletters and educational updates.
              </p>
            </div>

            {/* Popular Courses */}
            <div className="lg:col-span-2 sm:col-span-4 col-span-6">
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Popular Courses
              </h3>
              <ul className="space-y-3 text-sm">
                {["Python Bootcamp", "Web Development", "DevOps", "Data Science", "Design"].map((item) => (
                  <li key={item}>
                    <a href="/courses" className="hover:text-gray-900 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ByteSpace */}
            <div className="lg:col-span-2 sm:col-span-4 col-span-6">
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                ByteSpace
              </h3>
              <ul className="space-y-3 text-sm">
                {["About Us", "Programs", "Scholarship", "Mentors", "Careers"].map((item) => (
                  <li key={item}>
                    <a href="/#about" className="hover:text-gray-900 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community & Legal */}
            <div className="lg:col-span-3 sm:col-span-4 col-span-12">
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Community &amp; Legal
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Community Forum",
                  "Student Projects",
                  "Privacy Policy",
                  "Terms of Service",
                  "Help Center",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-900 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
            <div>© 2024 ByteSpace Inc. All rights reserved.</div>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Use", "Security"].map((item) => (
                <a key={item} href="#" className="hover:text-gray-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
