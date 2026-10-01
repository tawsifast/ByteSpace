"use client";

import { useState, use } from "react";
import Image from "next/image";
import { FilterIcon, LayoutGridIcon } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CourseCard } from "@/components/CourseCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
              <Image
                alt={creatorInfo.name}
                width={96}
                height={96}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover ring-4 ring-white/30 shadow-2xl"
                src={creatorInfo.avatar}
              />
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    {creatorInfo.name}
                  </h1>
                  <Badge className="h-auto rounded-full bg-brand-lime px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-950 shadow-sm">
                    {creatorInfo.badge}
                  </Badge>
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
                <Badge className="h-auto rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold text-white backdrop-blur">
                  <span>{creatorInfo.productsCount} Products</span>
                </Badge>
                <Badge className="h-auto rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-bold text-white backdrop-blur">
                  <span>{followersCount.toLocaleString()} Followers</span>
                </Badge>
              </div>

              <Button
                type="button"
                variant="ghost"
                onClick={handleFollowToggle}
                className={
                  isFollowing
                    ? "h-auto rounded-full bg-white px-8 py-2.5 text-sm font-extrabold text-slate-900 shadow-lg hover:bg-white hover:text-slate-900"
                    : "h-auto rounded-full bg-brand-lime px-8 py-2.5 text-sm font-extrabold text-slate-950 shadow-lg hover:bg-brand-limehover hover:text-slate-950 active:scale-95"
                }
              >
                {isFollowing ? "Following ✓" : "Follow"}
              </Button>
            </div>
          </div>
        </section>

        {/* Creator Published Courses Catalog Controls */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
          <div className="flex items-center justify-between pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="ghost"
                className="h-auto gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm hover:bg-white hover:text-slate-800"
              >
                <FilterIcon className="w-4 h-4 text-slate-500" />
                <span>Filter</span>
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="h-auto gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm hover:bg-white hover:text-slate-800"
              >
                <LayoutGridIcon className="w-4 h-4 text-slate-500" />
                <span>Grid</span>
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="hidden h-auto gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm hover:bg-white hover:text-slate-800 sm:inline-flex"
              >
                <span>Category</span>
              </Button>
            </div>

            <Badge className="h-auto rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-extrabold text-slate-500 shadow-sm">
              {COURSES.length} Courses Published
            </Badge>
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
