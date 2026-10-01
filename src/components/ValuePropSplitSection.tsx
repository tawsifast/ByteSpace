import Image from "next/image";
import { CheckIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function ValuePropSplitSection() {
  return (
    <section className="py-20 bg-white overflow-hidden relative" id="about">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-[#ccff00] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ccff00] rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 space-y-32 relative z-10">

        {/* ── Row 1: Your Path to Professional Growth ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — Left */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md mb-8">
              ByteSpace is a curated selection of courses and tools to help you 
              supercharge your technical skills journey. Whether you are looking to acquire specific skills, gain
              industry insights, or embark on a new career journey, you have the resources you need.
            </p>

            {/* Stats bar */}
            <div className="flex items-center gap-10">
              <div>
                <p className="text-3xl font-extrabold text-blue-600">12K</p>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Students</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">70+</p>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-blue-600">10</p>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Awards</p>
              </div>
            </div>
          </div>

          {/* Image — Right */}
          <div className="relative">
            <div className="relative z-10 flex justify-center">
              <Image
                src="/29a52a24e51266edcd7d57d73392ee5fc4833220.png"
                alt="Student learning"
                width={380}
                height={450}
                className="object-contain drop-shadow-xl"
              />
            </div>

            {/* Floating Card: Course */}
            <div className="absolute top-10 -left-12 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 w-56">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk6Q-J1gRwsDkNIZDGTDNz5bLvsGB7jecYFxPrMFM5JD4C8FBATJDbnwL8D-vsKyyE9ukRc-gU2SMgKJm0H0lY1_xl22bebDbp31kXEjyEC6bFbI4LdN4b9XWCIbjeeA1dfIOK6iFhYz6RcbnObGzhSDtsUNBw-bParsVJJ6rIJeCn_cGP1xfLkh7Fw7hkdvdM8wR0Ck0bLXejNbJ3jU0kDwegQ6hwUDZID2Bt_dqZtWj8Dzoodtv7ig" alt="Course" className="w-12 h-12 rounded-lg object-cover" />
              <div>
                <p className="text-xs font-bold text-gray-900">Learn Figma from Basic</p>
                <p className="text-[9px] text-gray-500">by pumpui studio</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-blue-600 text-[10px] font-bold">$25</span>
                </div>
              </div>
            </div>

            {/* Floating Card: Success Rate */}
            <div className="absolute top-24 -right-8 z-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 w-40 text-left">
              <p className="text-[10px] font-semibold text-gray-500 mb-1">Success Rate:</p>
              <p className="text-3xl font-black text-gray-900 leading-none">55%</p>
              <Progress
                value={55}
                className="mt-2 h-1.5 rounded-full bg-gray-100 [&_[data-slot=progress-indicator]]:bg-[#ccff00]"
              />
            </div>

            {/* Decorative Zigzag */}
            <div className="absolute top-10 right-0 text-[#ccff00] rotate-45 w-16 h-16 -z-10">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10,50 Q25,10 40,50 T70,50 T100,50" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Row 2: Create & Manage Courses ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image — Left */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 flex justify-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByZplS_MvG28_ifQxgt9tyOyLMksT2SFgEhjxg_V1sCiICx33HshZ-wcO-NLSsWXffRExXErhxV5pxb94JBZGZKuei0ukluwZhEGdgulm-gFAtS7g75bJadPJ44ulPlI-Pe60_Pcuzi80cVrfTWbXLUr6lHjZt0uki7AbEiRYTTAeTQvdL7dpxvZED4vwPL5PR2Pfj-6hYCpBe43azrZvPZQK4RCfc6YrDlH1ujSVssUxHPowIwUyoiw"
                alt="Girl with tablet"
                className="w-full max-w-[380px] h-auto object-cover drop-shadow-xl"
              />
            </div>

            {/* Floating Card: Total Revenue */}
            <div className="absolute top-10 left-0 z-20 bg-blue-600 p-4 rounded-2xl shadow-xl w-44 text-left border border-white/20">
              <div className="flex justify-between items-center mb-1">
                <p className="text-[10px] text-white/80 font-medium">Total Revenue</p>
                <Badge className="h-auto rounded-full border-0 bg-white/20 px-1.5 py-0.5 text-[9px] text-white">+4.5%</Badge>
              </div>
              <p className="text-xl font-bold text-white">$120.20</p>
            </div>

            {/* Floating Card: My Course */}
            <div className="absolute top-36 left-0 z-20 bg-white p-4 rounded-2xl shadow-xl w-44 text-left border border-slate-100">
              <div className="flex justify-between items-center mb-1">
                <p className="text-[10px] text-gray-500 font-medium">My Course</p>
                <Badge className="h-auto rounded-full border-0 bg-[#ccff00] px-1.5 py-0.5 text-[9px] font-bold text-gray-900">New</Badge>
              </div>
              <p className="text-xl font-bold text-gray-900">$1,200.20</p>
            </div>

            {/* Floating Card: Happy Students */}
            <div className="absolute bottom-10 right-4 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 w-48 text-left">
              <p className="text-xs font-bold mb-2 text-gray-900">Happy Students</p>
              <div className="flex items-center justify-between">
                <AvatarGroup>
                  <Avatar size="sm" className="after:hidden"><AvatarFallback className="bg-pink-400" /></Avatar>
                  <Avatar size="sm" className="after:hidden"><AvatarFallback className="bg-purple-400" /></Avatar>
                  <Avatar size="sm" className="after:hidden"><AvatarFallback className="bg-blue-400" /></Avatar>
                  <Avatar size="sm" className="after:hidden"><AvatarFallback className="bg-orange-400" /></Avatar>
                </AvatarGroup>
                <Badge className="h-auto rounded-full border-0 bg-[#ccff00] px-2 py-1 text-[10px] font-bold text-gray-900">15k+</Badge>
              </div>
            </div>

            {/* Decorative Zigzag */}
            <div className="absolute top-20 right-0 text-[#ccff00] -rotate-12 w-20 h-20 -z-10">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10,50 Q25,10 40,50 T70,50 T100,50" />
              </svg>
            </div>
          </div>

          {/* Text — Right */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Create & Manage<br />Courses Easily.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md mb-8">
              ByteSpace equips individuals to actively build, curate, update,
              and administrate comprehensive courses.
            </p>
            {/* Feature list */}
            <ul className="space-y-3">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Active Community",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
