"use client";

import Image from "next/image";
import { ReactNode } from "react";

const COURSE_PREVIEWS = [
  {
    title: "The Power of Big Data & AI",
    category: "Development",
    rating: 4.9,
    students: "1.8k",
    price: "$65",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAX2ArSJu2HPT8R-tqeY0ScXk7uxWnc_6-rknbJIDR1z9C-SAdp7zzwg7ZVF5zg6s3RsiK8_hVT86IMBwX0I3GBMgAmfAHYOXMMtTkt9D54j75laIWrWuBC8ibaY5A8NpceJud10znfVh_wpp32YTlHLo9qxiGqHDx_P61u4_s5FZGvRKuEtJXOxNq7_iUmvBCTmrMLd2VQFVR9CIA8T_5IbO74Uvjht-DE3gn3FMlkAi-Qg1SpqXkYmw",
  },
  {
    title: "Build Digital Asset: A Comprehensive Guide",
    category: "Design",
    rating: 4.9,
    students: "1.2k",
    price: "$25",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkBX12Z-uK_aYsJpCrjP02j5Irqb5hioXK7WnaxMquv4VtgeVH1u_aAvEfpdSWYCLfv32gKZtrMgzdqH-jkzHY6QR-qaeqJsd9ILBITO2oGFbjZI1WuLOlITzi2dP9Pjrs6IDlIynAccIrM0pZ48KJnuwO6raeheiwU-0-VwUypjRKlA_Z6FzczNnsFwY1lzWTjP0lFbDEqgJy68DXiauNSt9Z5XQdtNVXUyUDJkI38WV9lO85kqCFdg",
  },
];

const STUDENT_AVATARS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDFN_pFMvRuL3MKyTBq8e56KyA85ToKCfAGeZcSPkBcWZVr3WdO2TRuyGsBfyDBeIrmSjUI3XWOesCp77h1GxdrqZ4OEIzzVc2YAGc9EQQWU0ZEIIV9wbFRLhAHV1YHvUCUTEVVD40B5cE6g68a-QmV_P0Cf8ofsTflTYTWsQCLmUSAjxR4gHrfcZXnWYsQsBk64iY1fmXGBDlrrJkqukdn4tN8mGXwj7ftvWMB26Ih2OuQEfHCz3_onQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlGocv_MC-V9VethKFV1ApwyRUxYnGBA8TvHWwOldodg-wbbUY0SarUnyCq_VRq3yuhPEWyAGnSpyEHAjuxmUDR9GMDBXKUHg3yeckf_cEZK9T6oCMref4Tmy85MHqa4oLxj7dByjLLyeaIzSacgvntdLiz3PmF_DMKJ3pbV5ZY6Osnq0kjzgc2G0IZN5IdTl4BA-k8PLRokW5E-WJw6ftFjN6NinS-x1QipnpacgiH3UIizN1_CLBcQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDI_Qbt7pyE5W7WrOWep5Yg-7QBzd1uwCaoBlqVEZfKsmP6i584M7AoU3skWoxHowA9mA7RmrfKxkdbbAE5-JEklz7tEiyQYj5WNa8mdmmiJhjQWdrzBrTMwUH3Zj0Wdx4r1uGcBinxzds53OFJkRk_69FX5vOLU_WOyD8mZG3UVhlqIFsWArNLW8CS_6oVqr34sHdnPHcHpit8BRszifvrSk45pusQCktFy-EJBkdnITLSTT6QTa7Lug",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCK-FLPPyKy2ucPVTxiHjfj538iiAoWBjQlPYLi2m3tkKImbhiKfugEIvCon41Rp400Jo6VwhxYacbkV9E76SI3ps7zeQzAI1c5Wc4JXZjUIAyzyCfKDxP3RL4G69UUqQwtipUjyKuwTpivPUz2a0NioHgCxv70IaXxOJoGsWqsc_rm7QxPM9dLx64zMxgK4urrfCFP-9B6O8bpqKupP6MiX5P4gFGZOiekorCcYns_P-Phtf2yPfnSpQ",
];

interface AuthLayoutProps {
  children: ReactNode;
  panelHeading: string;
  panelSubtext: string;
}

export function AuthLayout({ children, panelHeading, panelSubtext }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* ─── Left Marketing Panel ─── */}
      <div className="relative lg:w-[52%] xl:w-[55%] bg-brand-blue flex flex-col overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        {/* Glow blobs */}
        <div
          className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #CCFF00 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-10 -right-20 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #CCFF00 0%, transparent 70%)" }}
        />

        {/* Diamond accents */}
        <div
          className="absolute bottom-24 left-8 w-9 h-9 bg-brand-lime opacity-80 pointer-events-none"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
        <div
          className="absolute top-1/3 right-12 w-5 h-5 bg-brand-lime opacity-60 pointer-events-none"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
        <div
          className="absolute top-1/4 left-1/3 w-3 h-3 bg-brand-lime opacity-40 pointer-events-none"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />

        {/* Top: Logo */}
        <div className="relative z-10 px-8 pt-8 lg:px-12 lg:pt-10">
          <a href="/" className="inline-flex items-center gap-2.5 group" aria-label="ByteSpace Home">
            <div className="w-10 h-10 rounded-xl bg-brand-lime flex items-center justify-center font-black text-slate-900 text-xl shadow-md group-hover:scale-105 transition-transform">
              B
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Byte<span className="text-brand-lime">Space</span>
            </span>
          </a>
        </div>

        {/* Middle: Marketing copy + course cards */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 lg:px-12 py-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-3 max-w-xs">
            {panelHeading}
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-10">
            {panelSubtext}
          </p>

          {/* Course preview cards */}
          <div className="space-y-3 max-w-sm">
            {COURSE_PREVIEWS.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-3 hover:bg-white/15 transition-all duration-200 cursor-default"
                style={{ transform: i === 1 ? "translateX(18px)" : "translateX(0px)" }}
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-white/10">
                  <Image src={c.thumbnail} alt={c.title} width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs font-semibold leading-tight truncate">{c.title}</p>
                  <p className="text-white/50 text-[10px] mt-0.5">{c.category}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-0.5">
                      <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-white/70 text-[10px] font-medium">{c.rating}</span>
                    </div>
                    <span className="text-white/30 text-[10px]">•</span>
                    <span className="text-white/50 text-[10px]">{c.students} students</span>
                  </div>
                </div>
                <span className="text-brand-lime text-xs font-bold flex-shrink-0">{c.price}</span>
              </div>
            ))}
          </div>

          {/* Student avatars */}
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-2.5">
              {STUDENT_AVATARS.map((avatar, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-blue overflow-hidden">
                  <Image src={avatar} alt={`Student ${i + 1}`} width={32} height={32} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-white text-xs font-semibold">20,000+ Students</p>
              <p className="text-white/50 text-[10px]">Already learning with ByteSpace</p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Right Form Panel ─── */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-12 lg:px-12 xl:px-20">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
