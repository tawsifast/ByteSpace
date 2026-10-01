"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * ByteSpace — "Create an Account" page.
 *
 * Tailwind-only, no extra UI library required. Uses two custom fonts:
 *   - Space Grotesk (headings)
 *   - Inter (body)
 * Load them however your project usually loads fonts, e.g. in Next.js:
 *   import { Space_Grotesk, Inter } from "next/font/google";
 * or via a <link> tag to Google Fonts in your root HTML head, then set
 *   font-family: 'Space Grotesk', ...  /  'Inter', ...
 * on the classes below (replace font-display / font-body with your
 * actual Tailwind font-family utilities, or extend tailwind.config.js:
 *   fontFamily: { display: ["Space Grotesk", "sans-serif"], body: ["Inter", "sans-serif"] }
 */

const LIME = "#c6f432";
const BLUE = "#2b2ee0";

function MiniCourseCard({ className = "" }) {
  return (
    <div
      className={`absolute w-[190px] rounded-2xl bg-white p-2 shadow-[0_16px_30px_rgba(10,12,70,0.25)] ${className}`}
    >
      <div className="relative h-[78px] overflow-hidden rounded-[9px] bg-gradient-to-br from-[#0e2230] to-[#123044]">
        <div className="absolute bottom-1.5 left-1.5 flex gap-1">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((b) => (
            <span
              key={b}
              className="rounded-full bg-[rgba(235,236,240,0.8)] px-1.5 py-0.5 text-[6.5px] font-bold text-slate-900"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
      <div className="px-0.5 pt-1.5">
        <div className="flex justify-between text-[11px] font-extrabold text-slate-900">
          the Power of Big Data
          <span className="text-[9px] font-bold">4.5 ★</span>
        </div>
        <div className="mb-1.5 mt-0.5 text-[8px] text-slate-400">
          by <b className="text-[#2b2ee0]">purepearl studio</b>
        </div>
        <div className="mb-1.5 flex items-center gap-1">
          <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[7px] font-bold text-slate-900">
            Beginner
          </span>
          <div className="flex">
            {["#ffb3c6", "#c9b8ff", "#8ad1ff"].map((c, i) => (
              <span
                key={c}
                className="-ml-1.5 h-[13px] w-[13px] rounded-full border-[1.4px] border-white first:ml-0"
                style={{ background: c }}
              />
            ))}
          </div>
          <span className="-ml-1.5 flex h-[13px] w-[13px] items-center justify-center rounded-full border-[1.4px] border-white text-[5.5px] font-extrabold" style={{ background: LIME }}>
            26+
          </span>
        </div>
        <div className="text-[10px] font-extrabold" style={{ color: BLUE }}>
          $25<span className="font-medium text-slate-400"> /lifetime</span>
        </div>
      </div>
    </div>
  );
}

function BackCard({ className = "" }) {
  return (
    <div className={`absolute w-[150px] rounded-2xl bg-white p-2 shadow-[0_16px_30px_rgba(10,12,70,0.25)] opacity-90 ${className}`}>
      <div className="h-[78px] rounded-[9px] bg-gradient-to-br from-[#dfe3ea] to-[#c7ccd6]" />
      <div className="px-0.5 pt-1.5">
        <div className="text-[11px] font-extrabold text-slate-900">Build Digit…</div>
        <div className="mb-1.5 mt-0.5 text-[8px] text-slate-400">
          by <b className="text-[#2b2ee0]">purepearl studio</b>
        </div>
        <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[7px] font-bold text-slate-900">
          Beginner
        </span>
        <div className="mt-1.5 text-[10px] font-extrabold" style={{ color: BLUE }}>
          $25<span className="font-medium text-slate-400"> /lifetime</span>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ className = "" }) {
  return (
    <div
      className={`absolute w-[168px] rounded-2xl p-2.5 shadow-[0_16px_30px_rgba(10,12,70,0.25)] ${className}`}
      style={{ background: LIME }}
    >
      <div className="text-[10px] font-extrabold text-slate-900">Happy Students</div>
      <div className="mb-1.5 mt-0.5 flex items-center gap-1 text-[8px] font-bold text-slate-900">
        4.5 (240) ★
      </div>
      <div className="flex items-center">
        {["#ffb3c6", "#c9b8ff", "#8ad1ff", "#ffd873"].map((c) => (
          <span
            key={c}
            className="-ml-1.5 h-[17px] w-[17px] rounded-full border-[1.4px] first:ml-0"
            style={{ background: c, borderColor: LIME }}
          />
        ))}
        <span className="ml-1.5 text-[7.5px] font-extrabold text-slate-900">2k+</span>
      </div>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Field({ id, label, type = "text", placeholder, value, onChange }: FieldProps) {
  return (
    <div className="mb-4">
      <Label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-slate-900">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-auto w-full rounded-xl border border-slate-100 bg-slate-100 px-4 py-3 text-[13.5px] text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#2b2ee0] focus:bg-white"
      />
    </div>
  );
}

export default function RegisterPage() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });

  function update(field: "fullName" | "email" | "password") {
    return (e: ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Wire this up to your real sign-up request.
    console.log("Register:", form);
  }

  return (
    <div
      className="min-h-dvh"
      style={{
        backgroundColor: BLUE,
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.08) 1px,transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    >
      <div className="mx-auto grid min-h-dvh max-w-[1180px] grid-cols-1 items-center gap-5 px-[6vw] py-10 md:grid-cols-[1.1fr_1fr]">
        {/* Left: pitch + card collage */}
        <div>
          <svg viewBox="0 0 30 30" className="h-[30px] w-[30px]">
            <path
              d="M4 2h10c6 0 10 3.5 10 8 0 3-1.6 5-4 6.2C23 17.4 25 20 25 23.5 25 27.5 21.5 30 15.5 30H4z"
              fill={LIME}
            />
            <rect x="9" y="7" width="7" height="6" rx="2" fill={BLUE} />
            <rect x="9" y="16" width="9" height="7" rx="2" fill={BLUE} />
          </svg>

          <h1 className="mt-6 text-base font-semibold text-white">Sign up and come in</h1>
          <p className="mb-8 mt-2.5 max-w-xs text-[13px] leading-relaxed text-[#d7d9ff]">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no
            cost.
          </p>

          <div className="relative h-[300px] max-w-[360px]">
            <svg viewBox="0 0 90 90" className="absolute -left-6 top-[230px] z-0 w-[84px]">
              <polygon points="4,86 86,86 20,8" fill={LIME} />
            </svg>
            <svg viewBox="0 0 60 60" className="absolute -left-2 top-[34px] z-[2] w-[54px]">
              <circle cx="30" cy="30" r="20" fill="none" stroke={LIME} strokeWidth="13" />
            </svg>
            <svg
              viewBox="0 0 80 70"
              fill="none"
              stroke="#fff"
              strokeWidth="9"
              strokeLinecap="round"
              className="absolute left-[214px] top-[146px] z-[2] w-[70px]"
            >
              <path d="M10 10c30-6 46 8 24 18S6 42 34 50s36 16 36 16" />
            </svg>

            <BackCard className="left-0 top-[52px] z-[1] " />
            <MiniCourseCard className="left-[62px] top-0 z-[3]" />
            <TestimonialCard className="left-[92px] top-[196px] z-[4]" />
          </div>
        </div>

        {/* Right: form card */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[380px] rounded-[28px] bg-white px-9 py-10 shadow-[0_30px_60px_rgba(8,10,60,0.3)]"
          >
            <div className="mb-2 text-[12.5px] font-semibold" style={{ color: BLUE }}>
              Create an Account
            </div>
            <h2 className="mb-6 text-[27px] font-bold leading-tight text-slate-900">
              Welcome to
              <br />
              ByteSpace
            </h2>

            <Field
              id="fullName"
              label="Full Name"
              placeholder="Jamie Davis"
              value={form.fullName}
              onChange={update("fullName")}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              placeholder="designer@example.com"
              value={form.email}
              onChange={update("email")}
            />
            <Field
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={update("password")}
            />

            <div className="mt-6 flex justify-end">
              <Button
                type="submit"
                variant="ghost"
                className="h-auto rounded-full px-7 py-3 text-[13.5px] font-bold text-slate-900 hover:text-slate-900"
                style={{ background: LIME }}
              >
                Continue
              </Button>
            </div>

            <p className="mt-6 text-center text-[12.5px] text-slate-400">
              Already have an account?{" "}
              <a href="#" className="font-semibold" style={{ color: BLUE }}>
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}