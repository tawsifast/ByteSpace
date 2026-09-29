"use client";

import { useState, use } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CourseCard } from "@/components/CourseCard";
import { COURSES } from "@/data/coursesData";

export default function CreatorProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(1250);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowersCount((prev) => prev + 1);
    }
  };

  const creatorInfo = {
    name: "PurePixel Studio",
    badge: "Creator",
    handle: "Product & UI/UX Designer",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg",
    bio: "Welcome to the creative studio of PurePixel Studio. Here, high-impact framework templates, assets, and design systems are created, curated, and taught directly to students worldwide. Explore my course portfolio showcasing digital production systems, design workflows, interactive prototypes, and production-ready UI kits.",
    productsCount: COURSES.length,
  };

  return (
    <>
      <SiteHeader />
      <main className="bg-slate-50 min-h-screen pb-24">
        {/* Creator Blue Hero Header Section */}
        <section className="bg-brand-blue bg-grid-pattern pt-12 pb-16 px-4 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Identity Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={creatorInfo.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover ring-4 ring-white/30 shadow-2xl"
                src={creatorInfo.avatar}
              />
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    {creatorInfo.name}
                  </h1>
                  <span className="bg-brand-lime text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {creatorInfo.badge}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-white/85 font-medium mt-1">
                  {creatorInfo.handle}
                </p>
              </div>
            </div>

            {/* Creator Bio Paragraph */}
            <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-4xl font-normal mb-8">
              {creatorInfo.bio}
            </p>

            {/* Stat Badges & Follow Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 text-xs font-bold text-white flex items-center gap-2">
                  <span>{creatorInfo.productsCount} Products</span>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 text-xs font-bold text-white flex items-center gap-2">
                  <span>{followersCount.toLocaleString()} Followers</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleFollowToggle}
                className={
                  isFollowing
                    ? "bg-white text-slate-900 font-extrabold px-8 py-2.5 rounded-full text-sm transition shadow-lg"
                    : "bg-brand-lime hover:bg-brand-limehover text-slate-950 font-extrabold px-8 py-2.5 rounded-full text-sm transition shadow-lg active:scale-95"
                }
              >
                {isFollowing ? "Following ✓" : "Follow"}
              </button>
            </div>
          </div>
        </section>

        {/* Creator Published Courses Catalog Controls */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="bg-white border border-slate-200 text-slate-800 text-xs font-bold px-4 py-2 rounded-full shadow-sm flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span>Filter</span>
              </button>

              <button
                type="button"
                className="bg-white border border-slate-200 text-slate-800 text-xs font-bold px-4 py-2 rounded-full shadow-sm flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Grid</span>
              </button>

              <button
                type="button"
                className="bg-white border border-slate-200 text-slate-800 text-xs font-bold px-4 py-2 rounded-full shadow-sm hidden sm:inline-flex items-center gap-1.5"
              >
                <span>Category</span>
              </button>
            </div>

            <span className="text-xs font-extrabold text-slate-500 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
              {COURSES.length} Courses Published
            </span>
          </div>
        </section>

        {/* Course Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                author={creatorInfo.name}
              />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
