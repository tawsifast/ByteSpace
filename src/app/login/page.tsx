"use client";

import { useState, FormEvent } from "react";
import { AuthLayout } from "@/components/AuthLayout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; auth?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email address";
    if (!password) e.password = "Password is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate async login
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1400);
  };

  if (success) {
    return (
      <AuthLayout
        panelHeading="Sign in with ease"
        panelSubtext="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      >
        <div className="text-center py-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-lime rounded-full mb-6 mx-auto">
            <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Welcome back! 👋</h2>
          <p className="text-slate-500 text-sm mb-8">
            You are signed in. Ready to continue learning?
          </p>
          <a
            href="/courses"
            id="login-success-cta"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-brand-darkblue transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Go to Courses
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      panelHeading="Sign in with ease"
      panelSubtext="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      {/* Eyebrow */}
      <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">
        Sign In
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-1">
        Welcome <span className="text-brand-blue">Back</span>
      </h1>
      <p className="text-slate-400 text-sm mb-8">
        Sign in to access your courses and continue learning.
      </p>

      {/* Auth error */}
      {errors.auth && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-medium rounded-xl px-4 py-3 mb-5 flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {errors.auth}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5" id="login-form">
        {/* Email */}
        <div>
          <label htmlFor="login-email" className="block text-sm font-semibold text-slate-700 mb-1.5">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            placeholder="email@example.com"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full border rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 transition ${
              errors.email
                ? "border-red-400 focus:ring-red-300 bg-red-50"
                : "border-slate-200 focus:ring-brand-blue/30 focus:border-brand-blue bg-white"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="login-password" className="block text-sm font-semibold text-slate-700">
              Password
            </label>
            <a
              href="#"
              id="login-forgot-password"
              className="text-xs text-brand-blue hover:underline font-medium"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border rounded-xl px-4 py-3 pr-11 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 transition ${
                errors.password
                  ? "border-red-400 focus:ring-red-300 bg-red-50"
                  : "border-slate-200 focus:ring-brand-blue/30 focus:border-brand-blue bg-white"
              }`}
            />
            <button
              type="button"
              id="login-toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors.password}
            </p>
          )}
        </div>

        {/* Remember me */}
        <label className="flex items-center gap-2.5 cursor-pointer group" htmlFor="login-remember">
          <div
            onClick={() => setRememberMe(!rememberMe)}
            className={`w-4.5 h-4.5 rounded border-2 flex items-center justify-center transition-all ${
              rememberMe ? "bg-brand-blue border-brand-blue" : "border-slate-300 group-hover:border-brand-blue"
            }`}
            role="checkbox"
            aria-checked={rememberMe}
            id="login-remember"
            tabIndex={0}
            onKeyDown={(e) => e.key === " " && setRememberMe(!rememberMe)}
          >
            {rememberMe && (
              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <span className="text-sm text-slate-600">Remember me for 30 days</span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          id="login-submit"
          disabled={loading}
          className="w-full bg-brand-lime text-slate-900 font-bold py-3.5 rounded-xl text-sm hover:bg-brand-limehover transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01]"
        >
          {loading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Signing in…
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-slate-100" />
        <span className="text-xs text-slate-400 font-medium">or continue with</span>
        <div className="flex-1 h-px bg-slate-100" />
      </div>

      {/* Social buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          id="login-facebook"
          type="button"
          className="flex items-center justify-center gap-2.5 border border-slate-200 rounded-xl py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          Facebook
        </button>
        <button
          id="login-google"
          type="button"
          className="flex items-center justify-center gap-2.5 border border-slate-200 rounded-xl py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Google
        </button>
      </div>

      {/* Register link */}
      <p className="text-center text-sm text-slate-500 mt-8">
        Don&apos;t have an account?{" "}
        <a
          href="/register"
          id="login-register-link"
          className="text-brand-blue font-bold hover:underline"
        >
          Create one
        </a>
      </p>
    </AuthLayout>
  );
}
