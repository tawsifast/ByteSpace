"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LIME = "#c6f432";
const BLUE = "#2b2ee0";

function MiniCourseCard({ className = "" }: { className?: string }) {
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
          <span
            className="-ml-1.5 flex h-[13px] w-[13px] items-center justify-center rounded-full border-[1.4px] border-white text-[5.5px] font-extrabold"
            style={{ background: LIME }}
          >
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

function BackCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute w-[150px] rounded-2xl bg-white p-2 shadow-[0_16px_30px_rgba(10,12,70,0.25)] opacity-90 ${className}`}
    >
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

function TestimonialCard({ className = "" }: { className?: string }) {
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
  error?: string;
  autoComplete?: string;
  trailing?: ReactNode;
};

function Field({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
  trailing,
}: FieldProps) {
  return (
    <div className="mb-4">
      <Label htmlFor={id} className="mb-1.5 block text-xs font-semibold text-slate-900">
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`h-auto w-full rounded-xl border px-4 py-3 text-[13.5px] text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white ${
            error
              ? "border-red-400 bg-red-50 focus:border-red-400"
              : "border-slate-100 bg-slate-100 focus:border-[#2b2ee0]"
          } ${trailing ? "pr-11" : ""}`}
        />
        {trailing && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
            {trailing}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-[11px] font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  function update(field: "email" | "password") {
    return (e: ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  const validate = () => {
    const e: typeof errors = {};
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.password) e.password = "Password is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate async login
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1400);
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
          <Link href="/" aria-label="ByteSpace Home">
            <svg viewBox="0 0 30 30" className="h-[30px] w-[30px]">
              <path
                d="M4 2h10c6 0 10 3.5 10 8 0 3-1.6 5-4 6.2C23 17.4 25 20 25 23.5 25 27.5 21.5 30 15.5 30H4z"
                fill={LIME}
              />
              <rect x="9" y="7" width="7" height="6" rx="2" fill={BLUE} />
              <rect x="9" y="16" width="9" height="7" rx="2" fill={BLUE} />
            </svg>
          </Link>

          <h1 className="mt-6 text-base font-semibold text-white">Sign in and continue</h1>
          <p className="mb-8 mt-2.5 max-w-xs text-[13px] leading-relaxed text-[#d7d9ff]">
            The sign-in process is quick and secure, giving you instant access
            to your enrolled courses, saved progress, and learning materials.
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

            <BackCard className="left-0 top-[52px] z-[1] -rotate-[7deg]" />
            <MiniCourseCard className="left-[62px] top-0 z-[3]" />
            <TestimonialCard className="left-[92px] top-[196px] z-[4]" />
          </div>
        </div>

        {/* Right: form card */}
        <div className="flex justify-center">
          {success ? (
            <div className="w-full max-w-[380px] rounded-[28px] bg-white px-9 py-12 text-center shadow-[0_30px_60px_rgba(8,10,60,0.3)]">
              <div
                className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: LIME }}
              >
                <svg
                  className="h-8 w-8 text-slate-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="mb-2 text-2xl font-bold text-slate-900">Welcome back!</h2>
              <p className="mb-8 text-[13px] text-slate-400">
                You are signed in. Ready to continue learning?
              </p>
              <Button
                asChild
                variant="ghost"
                className="h-auto gap-2 rounded-full px-7 py-3 text-[13.5px] font-bold text-slate-900 hover:text-slate-900"
                style={{ background: LIME }}
              >
                <a href="/courses" id="login-success-cta">
                  Go to Courses
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              id="login-form"
              className="w-full max-w-[380px] rounded-[28px] bg-white px-9 py-10 shadow-[0_30px_60px_rgba(8,10,60,0.3)]"
            >
              <div className="mb-2 text-[12.5px] font-semibold" style={{ color: BLUE }}>
                Sign In
              </div>
              <h2 className="mb-6 text-[27px] font-bold leading-tight text-slate-900">
                Welcome
                <br />
                Back
              </h2>

              <Field
                id="login-email"
                label="Email"
                type="email"
                placeholder="designer@example.com"
                autoComplete="email"
                value={form.email}
                onChange={update("email")}
                error={errors.email}
              />

              <Field
                id="login-password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
                value={form.password}
                onChange={update("password")}
                error={errors.password}
                trailing={
                  <Button
                    type="button"
                    variant="ghost"
                    id="login-toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    className="h-auto w-auto p-0 text-slate-400 hover:bg-transparent hover:text-slate-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    )}
                  </Button>
                }
              />

              <div className="mb-4 flex items-center justify-between">
                <Label
                  className="group flex cursor-pointer items-center gap-2 text-xs font-normal text-slate-500"
                  htmlFor="login-remember"
                >
                  <Checkbox
                    id="login-remember"
                    checked={rememberMe}
                    onCheckedChange={(value) => setRememberMe(value === true)}
                    className="size-4 rounded border-2 border-slate-300 data-[state=checked]:border-[#2b2ee0] data-[state=checked]:bg-[#2b2ee0] data-[state=checked]:text-white group-hover:border-[#2b2ee0]"
                  />
                  <span className="text-xs text-slate-500">Remember me</span>
                </Label>
                <a
                  href="#"
                  id="login-forgot-password"
                  className="text-xs font-semibold hover:underline"
                  style={{ color: BLUE }}
                >
                  Forgot password?
                </a>
              </div>

              <div className="mt-6 flex justify-end">
                <Button
                  type="submit"
                  variant="ghost"
                  id="login-submit"
                  disabled={loading}
                  className="h-auto gap-2 rounded-full px-7 py-3 text-[13.5px] font-bold text-slate-900 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
                  style={{ background: LIME }}
                >
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Signing in…
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </div>

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-100" />
                <span className="text-xs font-medium text-slate-400">
                  or continue with
                </span>
                <div className="h-px flex-1 bg-slate-100" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  id="login-facebook"
                  type="button"
                  variant="outline"
                  className="h-auto gap-2.5 rounded-xl border border-slate-100 bg-slate-100 py-3 text-sm font-semibold text-slate-700 hover:border-[#2b2ee0] hover:bg-white hover:text-slate-700"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
                <Button
                  id="login-google"
                  type="button"
                  variant="outline"
                  className="h-auto gap-2.5 rounded-xl border border-slate-100 bg-slate-100 py-3 text-sm font-semibold text-slate-700 hover:border-[#2b2ee0] hover:bg-white hover:text-slate-700"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </Button>
              </div>

              <p className="mt-6 text-center text-[12.5px] text-slate-400">
                Don&apos;t have an account?{" "}
                <a
                  href="/register"
                  id="login-register-link"
                  className="font-semibold"
                  style={{ color: BLUE }}
                >
                  Register
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
