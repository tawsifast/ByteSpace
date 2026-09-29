"use client";

import { useState, FormEvent } from "react";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; password?: string }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!fullName.trim()) e.fullName = "Full name is required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email address";
    if (password.length < 8) e.password = "Password must be at least 8 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1600);
  };

  return (
    <div className="relative min-h-screen bg-[#0040FF] text-white overflow-hidden font-sans flex flex-col justify-between px-6 py-6 lg:px-16 lg:py-10">
      
      {/* ব্যাকগ্রাউন্ড ব্লু গ্রিড লাইন ইফেক্ট */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />

      {/* লোগো */}
      <div className="relative z-10 flex items-center">
        <div className="w-10 h-10 rounded-xl bg-[#ccff00] flex items-center justify-center font-black text-blue-900 text-xl shadow-md">
          b
        </div>
      </div>

      {/* মূল কন্টেন্ট লেআউট (দুই কলাম) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto">
        
        {/* বাঁ পাশের সেকশন: টেক্সট এবং ফ্লোটিং কোর্স কার্ডসমূহ */}
        <div className="lg:col-span-6 space-y-6">
          <div className="max-w-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 tracking-tight text-white">Sign up and come in</h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed opacity-90">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost!
            </p>
          </div>

          {/* ফ্লোটিং কার্ড ও ইল্যুস্ট্রেশন গ্রাফিক্স */}
          <div className="relative h-72 sm:h-80 w-full mt-2">
            
            {/* ব্যাকগ্রাউন্ড কোর্স কার্ড (Build Digital...) */}
            <div className="absolute left-8 top-12 z-10 bg-white/80 backdrop-blur-sm text-slate-900 p-4 rounded-3xl shadow-xl w-64 transform -rotate-6 scale-90 pointer-events-none">
              <div className="h-20 bg-slate-200 rounded-2xl mb-2" />
              <div className="h-3 bg-slate-300 rounded w-3/4 mb-1" />
              <div className="h-2 bg-slate-200 rounded w-1/2" />
            </div>

            {/* মূল ফ্লোটিং কোর্স কার্ড (The Power of Big Data) */}
            <div className="absolute left-2 top-2 z-20 bg-white text-slate-900 p-4 rounded-[2rem] shadow-2xl w-72 sm:w-80 border border-slate-100">
              <div className="bg-slate-900 rounded-2xl h-28 mb-3 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 p-3 flex flex-col justify-between">
                  <div className="flex justify-between text-[10px] text-white">
                    <span className="bg-white/20 px-2 py-0.5 rounded-md">17 Lessons</span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-md">3 hours 18 mins</span>
                  </div>
                  <div className="text-white font-bold text-xs">Analytics Dashboard UI</div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">the Power of Big Data</h4>
                  <p className="text-[10px] text-slate-500">by pytepearl studio</p>
                </div>
                <span className="text-xs font-bold text-slate-900 flex items-center gap-0.5">4.5 <span className="text-amber-400">★</span></span>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
                <span className="text-xs font-bold text-blue-600">$25 <span className="text-[10px] text-slate-400 font-normal">lifetime</span></span>
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-pink-400 border border-white" />
                  <div className="w-5 h-5 rounded-full bg-purple-400 border border-white" />
                  <div className="w-5 h-5 rounded-full bg-blue-400 border border-white" />
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white text-[8px] flex items-center justify-center font-bold">25+</div>
                </div>
              </div>
            </div>

            {/* লাইম গ্রিন হ্যাপি স্টুডেন্টস কার্ড */}
            <div className="absolute left-28 bottom-0 z-30 bg-[#ccff00] text-slate-900 p-3.5 rounded-2xl shadow-2xl w-48">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-extrabold text-slate-900">Happy Students</span>
                <span className="text-[10px] font-bold text-slate-700">4.4 ⭐</span>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <div className="flex -space-x-2">
                  <div className="w-5 h-5 rounded-full bg-slate-800 border border-white" />
                  <div className="w-5 h-5 rounded-full bg-blue-700 border border-white" />
                  <div className="w-5 h-5 rounded-full bg-pink-600 border border-white" />
                </div>
                <span className="text-[9px] font-extrabold bg-slate-900 text-white px-1.5 py-0.5 rounded-full ml-auto">2k+</span>
              </div>
            </div>

            {/* ডেকোরেটিভ রিং (Lime Ring) */}
            <div className="absolute left-20 top-0 w-10 h-10 rounded-full border-4 border-[#ccff00] bg-transparent transform -rotate-12 z-20 pointer-events-none" />

            {/* ডেকোরেটিভ জিগজ্যাগ/স্কিগল */}
            <div className="absolute right-10 bottom-8 w-12 h-8 bg-white rounded-xl shadow-lg z-20 pointer-events-none flex items-center justify-center text-xs font-bold text-slate-400">~</div>

            {/* ডেকোরেটিভ পিরামিড/ট্রাইএঙ্গেল */}
            <div className="absolute left-2 -bottom-2 w-10 h-10 bg-[#ccff00] transform rotate-45 rounded-sm shadow-lg z-10 pointer-events-none" />

          </div>
        </div>

        {/* ডান পাশের হোয়াইট কার্ড ও রেজিস্ট্রেশন ফর্ম */}
        <div className="lg:col-span-6 bg-white text-slate-900 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl">
          
          <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-1">
            Create an Account
          </p>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-8">
            Welcome to <span className="text-blue-600">ByteSpace</span>
          </h1>

          {success ? (
            <div className="text-center py-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ccff00] rounded-full mb-6 mx-auto shadow-md">
                <svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">You're in! 🎉</h2>
              <p className="text-slate-500 text-sm mb-8">Your account has been created successfully.</p>
              <a
                href="/courses"
                className="inline-flex items-center gap-2 bg-[#0040FF] text-white font-bold px-8 py-3.5 rounded-full text-sm hover:bg-blue-700 transition shadow-lg"
              >
                Browse Courses
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Full Name</label>
                <input
                  type="text"
                  placeholder="Jamie Davis"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600 transition"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600 transition"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600 transition"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ccff00] hover:bg-[#b8f000] text-slate-900 font-extrabold py-3.5 rounded-xl text-sm transition shadow-md mt-4 flex items-center justify-center cursor-pointer"
              >
                {loading ? "Creating your account..." : "Continue"}
              </button>

              {/* Login Link */}
              <p className="text-center text-sm text-slate-500 mt-6">
                Already have an account?{" "}
                <a href="/login" className="text-blue-600 font-bold hover:underline">
                  Login
                </a>
              </p>

            </form>
          )}

        </div>

      </div>

      {/* ফুটার */}
      <div className="relative z-10 text-xs text-blue-200 opacity-60 text-center">
        © ByteSpace Inc. All rights reserved.
      </div>

    </div>
  );
}