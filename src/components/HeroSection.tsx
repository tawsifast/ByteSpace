import Image from "next/image";
import { SearchIcon } from "@/components/icons";

const heroPhoto =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCm6jmF4ZpbN-pHdlY60gteVhfrteGBOgESe364faAuU7131JxGirqvMo7_8YJWG_Nnn3CKvhK-8_9dPi5HoQsXMfPEHdHvGpu0-28JE_bnG_d-iSJbwsgemqXpbny4IGjTOCoa7XOT4qeUZO1kDWO9o7j-PxFTM3MTqqnFgUIZn9QjCpbE3BrqLdVP_Yqtf02ZNqhDujIQ2pX6N1-0xsceohx0FikZ0U2WUcOCPSSaBWkukPmlANUHRw";

const mentorAvatars = [
  { initials: "JD", className: "bg-blue-500" },
  { initials: "AL", className: "bg-amber-500" },
  { initials: "MS", className: "bg-emerald-500" },
];

export function HeroSection() {
  return (
    <section className="relative bg-brand-blue text-white overflow-hidden pt-7 pb-12 px-4 bg-grid-pattern">
      <div className="absolute -top-6 -left-6 w-20 h-20 shape-ring opacity-40 rotate-12" />
      <div className="absolute top-10 right-4 w-12 h-12 bg-brand-lime rounded-xl rotate-45 opacity-90" />
      <div className="absolute top-44 -left-3 w-14 h-8 bg-brand-lime rounded-full -rotate-12" />
      <div className="absolute top-52 right-2 w-10 h-10 border-4 border-white/60 rounded-full" />

      <div className="max-w-md mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full text-xs font-medium text-brand-lime mb-3">
          <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse" />
          Over 500+ Industry-Verified Courses
        </div>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.18] text-white">
          Get Access to Hundreds <br />
          <span className="text-brand-lime">Courses Available</span>
        </h1>
        <p className="mt-3 text-sm text-blue-100/90 leading-relaxed max-w-xs mx-auto">
          Find your ideal course, get certified, and kickstart your dream career with
          our industry-vetted mentors.
        </p>

        <form action="#courses" className="mt-6 relative max-w-sm mx-auto">
          <div className="relative flex items-center">
            <input
              type="text"
              name="q"
              placeholder="Search for a course, skill..."
              className="w-full pl-11 pr-24 py-3 rounded-full bg-white text-slate-800 placeholder-slate-400 text-sm font-medium shadow-xl focus:outline-none focus:ring-4 focus:ring-brand-lime/40 border-0"
            />
            <div className="absolute left-4 text-slate-400">
              <SearchIcon className="w-4 h-4" />
            </div>
            <button
              type="submit"
              className="absolute right-1.5 px-4 py-2 bg-brand-lime hover:bg-brand-limeHover text-slate-950 font-bold text-xs rounded-full transition-all shadow-sm"
            >
              Search
            </button>
          </div>
        </form>

        <div className="mt-8 relative max-w-xs mx-auto">
          <div className="w-64 h-64 mx-auto rounded-full bg-brand-lime flex items-center justify-center p-3 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-inner relative">
              <Image
                src={heroPhoto}
                alt="Young student with headphones studying"
                fill
                preload
                sizes="256px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="absolute -top-3 -left-4 bg-white text-slate-900 px-3 py-1.5 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-100 animate-bounce duration-1000">
            <div className="flex -space-x-1.5 overflow-hidden">
              {mentorAvatars.map(({ initials, className }) => (
                <span
                  key={initials}
                  className={`inline-block h-6 w-6 rounded-full ring-2 ring-white ${className} text-[10px] text-white font-bold text-center leading-6`}
                >
                  {initials}
                </span>
              ))}
            </div>
            <div className="text-left leading-tight">
              <span className="block text-[10px] text-slate-400 font-bold uppercase">
                Online
              </span>
              <span className="block text-xs font-extrabold text-slate-900">
                70+ Mentors
              </span>
            </div>
          </div>

          <div className="absolute -bottom-3 -right-4 bg-white text-slate-900 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-100 text-left">
            <div className="flex items-center gap-1 text-amber-500 text-xs font-black">
              <span>★</span>
              <span className="text-slate-900 font-extrabold text-sm">4.9</span>
            </div>
            <span className="block text-[10px] font-semibold text-slate-500">
              Overall Rating (95%)
            </span>
          </div>

          <div className="absolute -bottom-5 -left-3 bg-brand-navy text-white px-3 py-1 rounded-full text-[11px] font-bold shadow-lg border border-white/20 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            12k+ Active Learners
          </div>
        </div>
      </div>
    </section>
  );
}
