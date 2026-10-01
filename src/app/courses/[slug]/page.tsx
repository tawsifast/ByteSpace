"use client";

import { useState, use, useEffect } from "react";
import Image from "next/image";
import { CheckIcon, PlayIcon, Share2Icon } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getCourseBySlug, Course } from "@/data/coursesData";

export default function CourseDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ tab?: string }>;
}) {
  const resolvedParams = use(params);
  const resolvedSearchParams = searchParams ? use(searchParams) : undefined;

  const course: Course = getCourseBySlug(resolvedParams.slug);

  const [activeTab, setActiveTab] = useState<"about" | "lessons" | "reviews">(
    "about",
  );
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [starFilter, setStarFilter] = useState<number | "All">("All");

  useEffect(() => {
    if (resolvedSearchParams?.tab === "lessons") {
      setActiveTab("lessons");
    } else if (resolvedSearchParams?.tab === "reviews") {
      setActiveTab("reviews");
    }
  }, [resolvedSearchParams]);

  const handleShare = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleEnroll = () => {
    setEnrolled(true);
    setTimeout(() => setEnrolled(false), 4000);
  };

  const handleMessageTeacher = () => {
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3500);
  };

  const modulesList = [
    {
      title: "Module 1: Introduction to Digital Assets",
      desc: "A broad perspective on digital assets and their importance in modern product development. Learn the basic framework of asset types, licensing, and production lifecycle.",
    },
    {
      title: "Module 2: Design Systems & Architecture",
      desc: "Master the key pillars of reusable design tokens, component architecture, color palettes, and typography hierarchy for scalable digital product suites.",
    },
    {
      title: "Module 3: Asset Creation & Prototyping",
      desc: "Hands-on design creation using Figma and vector tools. Create high-fidelity interactive prototypes ready for developer handoff and user testing.",
    },
    {
      title: "Module 4: Asset Optimization & Exporting",
      desc: "Prepare assets for production release. Master SVG compression, responsive image sets, sprite generation, and exporting design specs for web and mobile frameworks.",
    },
    {
      title: "Module 5: Asset Governance & Systems",
      desc: "Maintain consistency at scale. Learn how to version control design assets, manage asset libraries, and collaborate seamlessly with cross-functional engineering teams.",
    },
    {
      title: "Module 6: Deploying Digital Assets for High-Performance",
      desc: "Publish and deploy assets using modern CDN distribution tools. Learn asset loading optimization, caching strategies, and performance monitoring across devices.",
    },
  ];

  const reviewItems = [
    {
      id: "r1",
      author: "PurePixel Studio",
      role: "UI/UX Designer",
      timeAgo: "1 week ago",
      rating: 5,
      comment:
        "This course provided clear insights on how to manage and construct reusable digital asset workflows. The balance of video tutorials, practical labs, and live mentoring feedback from Ayesha made this my best investment!",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg",
    },
    {
      id: "r2",
      author: "Adam Tomas",
      role: "Brand Strategist",
      timeAgo: "2 weeks ago",
      rating: 5,
      comment:
        "The modules transformed my team's approach to digital asset design. From file optimization to library governance, the curriculum is structured and highly actionable. Highly recommend for any creative lead!",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDFN_pFMvRuL3MKyTBq8e56KyA85ToKCfAGeZcSPkBcWZVr3WdO2TRuyGsBfyDBeIrmSjUI3XWOesCp77h1GxdrqZ4OEIzzVc2YAGc9EQQWU0ZEIIV9wbFRLhAHV1YHvUCUTEVVD40B5cE6g68a-QmV_P0Cf8ofsTflTYTWsQCLmUSAjxR4gHrfcZXnWYsQsBk64iY1fmXGBDlrrJkqukdn4tN8mGXwj7ftvWMB26Ih2OuQEfHCz3_onQ",
    },
    {
      id: "r3",
      author: "Emily Parker",
      role: "Product Designer",
      timeAgo: "1 month ago",
      rating: 5,
      comment:
        "The project reviews were invaluable. Ayesha provided detailed, constructive feedback on my asset library structure, component naming, and token setup. A 10/10 experience!",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDI_Qbt7pyE5W7WrOWep5Yg-7QBzd1uwCaoBlqVEZfKsmP6i584M7AoU3skWoxHowA9mA7RmrfKxkdbbAE5-JEklz7tEiyQYj5WNa8mdmmiJhjQWdrzBrTMwUH3Zj0Wdx4r1uGcBinxzds53OFJkRk_69FX5vOLU_WOyD8mZG3UVhlqIFsWArNLW8CS_6oVqr34sHdnPHcHpit8BRszifvrSk45pusQCktFy-EJBkdnITLSTT6QTa7Lug",
    },
    {
      id: "r4",
      author: "Rosalyn Simmons",
      role: "Frontend Developer",
      timeAgo: "1 month ago",
      rating: 5,
      comment:
        "The breakdown of SVG optimization and CSS/design token export was particularly helpful. This bridged the gap between our design system and front-end code repository seamlessly.",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3kB_4cbyyaNvYqRDw2bLXb4H2x3YZ1EQt6OY7n6dx5Uo-GHCOfyTiPuOa5WtfRif1yp0pdOVdGbTqhj7_ADpAdjR-A30ZJQZDd0sj0KsjZYgu3F29d6mejKoAEB0q8S-0HC6A-anFbMBhwqUVQJbCNvkYoqlfqbBFceipcQRmcwXXXtOm_GtGVUnH7G4oslNWN1tqAsTIZAV75u3mmXwcroLYFs1dMnGk_LU3n_JMobRPr_Yr5tgw",
    },
  ];

  const filteredReviews =
    starFilter === "All"
      ? reviewItems
      : reviewItems.filter((r) => r.rating === starFilter);

  return (
    <>
      <SiteHeader />
      <main className="bg-slate-50 min-h-screen pb-24">
        {/* Toast Alerts */}
        {copiedLink && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-bounce">
            <span className="w-8 h-8 rounded-full bg-brand-lime text-slate-950 flex items-center justify-center font-bold text-sm">
              ✓
            </span>
            <div>
              <p className="text-xs font-bold text-brand-lime">Link Copied!</p>
              <p className="text-xs text-slate-200">
                Shareable course URL copied to clipboard.
              </p>
            </div>
          </div>
        )}

        {/* Enrollment Toast */}
        {enrolled && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-bounce">
            <span className="w-8 h-8 rounded-full bg-brand-lime text-slate-950 flex items-center justify-center font-bold text-sm">
              🎉
            </span>
            <div>
              <p className="text-xs font-bold text-brand-lime">
                Welcome to the Course!
              </p>
              <p className="text-xs text-slate-200">
                You are enrolled in {course.title}.
              </p>
            </div>
          </div>
        )}

        {/* Teacher Message Toast */}
        {messageSent && (
          <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-bounce">
            <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
              💬
            </span>
            <div>
              <p className="text-xs font-bold text-white">Message Sent!</p>
              <p className="text-xs text-slate-300">
                Instructor {course.instructor.name} will reply shortly.
              </p>
            </div>
          </div>
        )}

        {/* Top Hero Section (Brand Blue Background with Grid Pattern) */}
        <section className="bg-brand-blue bg-grid-pattern pt-10 pb-20 px-4 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Bar: Title & Subtitle + Share Button */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              <div className="max-w-3xl">
                <span className="inline-block bg-white/10 backdrop-blur border border-white/20 text-brand-lime text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  {course.tag}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  {course.title}
                </h1>
                <p className="mt-3 text-base sm:text-lg text-white/85 font-medium leading-relaxed">
                  {course.subtitle ||
                    `Unlock the Secrets of Digital Production with ${course.instructor.name}`}
                </p>
              </div>

              <Button
                type="button"
                variant="ghost"
                onClick={handleShare}
                className="h-auto self-start gap-2 rounded-full bg-brand-lime px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg hover:bg-brand-limehover hover:text-slate-950"
              >
                <Share2Icon className="w-4 h-4" />
                <span>Share</span>
              </Button>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Badge className="h-auto gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white backdrop-blur [&>svg]:size-4!">
                <svg
                  className="w-4 h-4 text-brand-lime"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span>{course.studentsCount || "1,250 Students"}</span>
              </Badge>

              <Badge className="h-auto gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white backdrop-blur [&>svg]:size-4!">
                <svg
                  className="w-4 h-4 text-amber-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>
                  {course.rating} ({course.reviewCount})
                </span>
              </Badge>

              <Badge className="h-auto gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white backdrop-blur [&>svg]:size-4!">
                <svg
                  className="w-4 h-4 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span>100% Guaranteed</span>
              </Badge>
            </div>

            {/* Video Preview Player (Left) & Sidebar Container Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Video Player Box */}
              <div className="lg:col-span-7">
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border-4 border-white/20 shadow-2xl group cursor-pointer">
                  {isPlayingVideo ? (
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Course Intro Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <Image
                        alt="Course video preview poster"
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover group-hover:scale-105 transition duration-500 opacity-90"
                        src={course.thumbnail}
                      />
                      <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition flex items-center justify-center">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => setIsPlayingVideo(true)}
                          className="size-16 sm:size-20 rounded-full bg-brand-lime text-slate-950 shadow-2xl hover:bg-brand-lime hover:text-slate-950 group-hover:scale-110 transition duration-300"
                          aria-label="Play introduction video"
                        >
                          <PlayIcon className="w-8 h-8 fill-current ml-1" />
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Course Purchase Sidebar Box (Right) */}
              <div className="lg:col-span-5 relative z-20">
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 lg:absolute lg:inset-x-0 lg:top-0">
                  <h3 className="text-xl font-extrabold text-slate-900 pb-4 border-b border-slate-100 flex items-center justify-between">
                    <span>{course.totalLessons || "12 lessons"}</span>
                    <span className="text-xs font-bold text-slate-400">
                      ({course.totalHours || "24 hours"})
                    </span>
                  </h3>

                  {/* Curriculum Accordion Preview */}
                  <div className="py-4 space-y-3">
                    {course.curriculum?.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-lime transition text-xs font-semibold"
                      >
                        <span className="text-slate-800 line-clamp-1">
                          {item.title}
                        </span>
                        {item.preview ? (
                          <span className="text-brand-blue font-bold text-[11px] hover:underline cursor-pointer shrink-0">
                            Preview
                          </span>
                        ) : (
                          <span className="text-slate-400 text-[10px] shrink-0">
                            Locked
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-medium mb-6">
                    Get 1-on-1 mentorship, portfolio reviews &amp; lifetime
                    updates with this purchase.
                  </p>

                  {/* Price Header */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-black text-brand-blue">
                      {course.price}
                    </span>
                    <span className="text-sm text-slate-400 font-semibold line-through">
                      {course.oldPrice}
                    </span>
                    <span className="text-xs text-slate-500 font-bold ml-auto uppercase tracking-wide">
                      / Course
                    </span>
                  </div>

                  {/* Enroll Button */}
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={handleEnroll}
                    className="mb-8 h-auto w-full rounded-full bg-brand-lime py-4 text-base font-black text-slate-950 shadow-lg hover:bg-brand-limehover hover:text-slate-950 hover:shadow-xl active:scale-95"
                  >
                    Enroll Now
                  </Button>

                  {/* Course Includes List */}
                  <div className="pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      This course includes
                    </h4>
                    <ul className="space-y-3 text-xs font-semibold text-slate-700">
                      {course.includes?.map((inc, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                            <CheckIcon className="w-3 h-3" />
                          </span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructor Bio Box */}
                  <div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-12 shadow-sm ring-2 ring-white after:hidden">
                        <AvatarImage
                          alt={course.instructor.name}
                          src={course.instructor.avatar}
                        />
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 leading-tight">
                          {course.instructor.name}
                        </h4>
                        <p className="text-xs text-brand-blue font-medium">
                          {course.instructor.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                      {course.instructor.bio ||
                        "Senior Product Designer & Content Creator with over 8+ years of industry experience."}
                    </p>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={handleMessageTeacher}
                      className="mt-4 h-auto w-full rounded-xl border border-slate-200 bg-white py-2 text-xs font-bold text-slate-800 shadow-sm hover:bg-slate-100 hover:text-slate-800"
                    >
                      Teacher Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Tabs & Main Body */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          {/* Nav Tabs */}
          <div className="flex items-center gap-3 pb-4 border-b border-slate-200 mb-8">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setActiveTab("about")}
              className={
                activeTab === "about"
                  ? "h-auto rounded-full border-0 bg-brand-lime px-6 py-2.5 text-sm font-extrabold text-slate-950 shadow-sm hover:bg-brand-lime hover:text-slate-950"
                  : "h-auto rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-600"
              }
            >
              About
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setActiveTab("lessons")}
              className={
                activeTab === "lessons"
                  ? "h-auto rounded-full border-0 bg-brand-lime px-6 py-2.5 text-sm font-extrabold text-slate-950 shadow-sm hover:bg-brand-lime hover:text-slate-950"
                  : "h-auto rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-600"
              }
            >
              Lessons
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setActiveTab("reviews")}
              className={
                activeTab === "reviews"
                  ? "h-auto rounded-full border-0 bg-brand-lime px-6 py-2.5 text-sm font-extrabold text-slate-950 shadow-sm hover:bg-brand-lime hover:text-slate-950"
                  : "h-auto rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-600"
              }
            >
              Reviews
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-10">
              {/* TAB 1: ABOUT */}
              {activeTab === "about" && (
                <>
                  {/* Description Box */}
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                      Description
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {course.description}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      Throughout this curriculum, you will work hands-on with
                      real-world project briefs, build component design
                      libraries, and learn how to optimize workflow performance
                      for high-growth tech products.
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      By completing the capstone deliverables, you will produce
                      portfolio-ready work evaluated directly by verified
                      industry mentors.
                    </p>
                  </div>

                  {/* Sneak Peek Gallery */}
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                      Sneak Peek
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {course.sneakPeekImages?.map((imgUrl, i) => (
                        <div
                          key={i}
                          className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-md transition"
                        >
                          <Image
                            alt={`Sneak peek screenshot ${i + 1}`}
                            fill
                            sizes="(max-width: 640px) 50vw, 25vw"
                            className="object-cover hover:scale-105 transition duration-300"
                            src={imgUrl}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Points / Learning Outcomes */}
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                      Key Points
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {course.keyPoints?.map((pt, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm text-xs font-bold text-slate-800"
                        >
                          <span className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0 mt-0.5">
                            <CheckIcon className="w-3 h-3" />
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {/* TAB 2: LESSONS / MODULES */}
              {activeTab === "lessons" && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                      Explore The Modules
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                      This course is structured into actionable modules to take
                      you from foundational concepts to building
                      production-ready digital assets.
                    </p>
                  </div>

                  {/* Modules List with Lime Play Badges */}
                  <div className="space-y-4">
                    {modulesList.map((mod, i) => (
                      <div
                        key={i}
                        className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm flex items-start gap-4 hover:shadow-md transition group"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-brand-lime text-slate-950 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition">
                          <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-base text-slate-900 leading-snug group-hover:text-brand-blue transition">
                            {mod.title}
                          </h4>
                          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-medium">
                            {mod.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Lesson Artifacts */}
                  <div className="pt-6 border-t border-slate-200">
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                      Lesson Artifacts
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Access downloadable project templates, Figma component
                      libraries, style guides, and design checklists for each
                      module to reinforce your practical skills.
                    </p>
                  </div>

                  {/* Lesson Readiness Progress Bar */}
                  <div className="pt-6 border-t border-slate-200">
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                      Lesson Readiness Progress
                    </h3>
                    <p className="text-slate-600 text-xs mb-4">
                      Join over 1,250+ students who have completed these modules
                      with high satisfaction.
                    </p>
                    <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-700">
                          Satisfaction Rating
                        </span>
                        <span className="text-lg font-black text-brand-blue">
                          99%
                        </span>
                      </div>
                      <Progress
                        value={99}
                        className="h-3 rounded-full bg-slate-100 [&_[data-slot=progress-indicator]]:bg-brand-lime"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: REVIEWS */}
              {activeTab === "reviews" && (
                <div className="space-y-10">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                      What Learners Are Saying
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                      Discover why thousands of students love this course. Read
                      verified feedback from designers, developers, and industry
                      practitioners who built real-world digital asset
                      workflows.
                    </p>
                  </div>

                  {/* Rating Summary Card Box */}
                  <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center gap-8">
                    {/* Left Box: Average Score */}
                    <div className="bg-brand-lime text-slate-950 p-6 rounded-2xl text-center w-full sm:w-36 shrink-0 shadow-md">
                      <span className="block text-xs font-black uppercase tracking-wider text-slate-800">
                        Ratings
                      </span>
                      <span className="block text-4xl font-black text-slate-950 mt-1">
                        4.7
                      </span>
                      <div className="flex justify-center text-amber-500 text-xs mt-1">
                        ★★★★★
                      </div>
                    </div>

                    {/* Right Box: Star Rating Breakdown Bars */}
                    <div className="flex-1 w-full space-y-2.5 text-xs font-bold text-slate-700">
                      {/* 5 Stars */}
                      <div className="flex items-center gap-3">
                        <div className="flex text-amber-400 text-xs shrink-0">
                          ★★★★★
                        </div>
                        <Progress value={75} className="h-2.5 flex-1 rounded-full bg-slate-100 [&_[data-slot=progress-indicator]]:bg-brand-lime" />
                        <span className="text-slate-400 text-[11px] w-8 text-right">
                          75%
                        </span>
                      </div>
                      {/* 4 Stars */}
                      <div className="flex items-center gap-3">
                        <div className="flex text-amber-400 text-xs shrink-0">
                          ★★★★☆
                        </div>
                        <Progress value={18} className="h-2.5 flex-1 rounded-full bg-slate-100 [&_[data-slot=progress-indicator]]:bg-brand-lime" />
                        <span className="text-slate-400 text-[11px] w-8 text-right">
                          18%
                        </span>
                      </div>
                      {/* 3 Stars */}
                      <div className="flex items-center gap-3">
                        <div className="flex text-amber-400 text-xs shrink-0">
                          ★★★☆☆
                        </div>
                        <Progress value={5} className="h-2.5 flex-1 rounded-full bg-slate-100 [&_[data-slot=progress-indicator]]:bg-brand-lime" />
                        <span className="text-slate-400 text-[11px] w-8 text-right">
                          5%
                        </span>
                      </div>
                      {/* 2 Stars */}
                      <div className="flex items-center gap-3">
                        <div className="flex text-amber-400 text-xs shrink-0">
                          ★★☆☆☆
                        </div>
                        <Progress value={2} className="h-2.5 flex-1 rounded-full bg-slate-100 [&_[data-slot=progress-indicator]]:bg-brand-lime" />
                        <span className="text-slate-400 text-[11px] w-8 text-right">
                          2%
                        </span>
                      </div>
                      {/* 1 Star */}
                      <div className="flex items-center gap-3">
                        <div className="flex text-amber-400 text-xs shrink-0">
                          ★☆☆☆☆
                        </div>
                        <Progress value={1} className="h-2.5 flex-1 rounded-full bg-slate-100 [&_[data-slot=progress-indicator]]:bg-brand-lime" />
                        <span className="text-slate-400 text-[11px] w-8 text-right">
                          1%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Individual Reviews Section & Star Filter Pills */}
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-4">
                      Individual Reviews
                    </h4>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
                      {(["All", 5, 4, 3, 2, 1] as const).map((star) => {
                        const isActive = starFilter === star;
                        return (
                          <Button
                            key={String(star)}
                            type="button"
                            variant="ghost"
                            onClick={() => setStarFilter(star)}
                            className={
                              isActive
                                ? "h-auto rounded-full border-0 bg-brand-lime px-4 py-1.5 text-xs font-bold text-slate-950 shadow-sm hover:bg-brand-lime hover:text-slate-950"
                                : "h-auto rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-600"
                            }
                          >
                            {star === "All" ? "All rating" : `★ ${star}`}
                          </Button>
                        );
                      })}
                    </div>

                    {/* Review Cards List */}
                    <div className="space-y-4">
                      {filteredReviews.length === 0 ? (
                        <p className="text-xs text-slate-500 py-6 text-center bg-white rounded-2xl border border-slate-200">
                          No reviews found for this star filter.
                        </p>
                      ) : (
                        filteredReviews.map((rev) => (
                          <div
                            key={rev.id}
                            className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-3 hover:shadow-md transition"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Avatar className="size-10 ring-2 ring-slate-100 after:hidden">
                                  <AvatarImage alt={rev.author} src={rev.avatar} />
                                </Avatar>
                                <div>
                                  <h5 className="font-bold text-sm text-slate-900">
                                    {rev.author}
                                  </h5>
                                  <p className="text-[11px] text-slate-400 font-medium">
                                    {rev.role}
                                  </p>
                                </div>
                              </div>
                              <span className="text-[11px] text-slate-400 font-medium">
                                {rev.timeAgo}
                              </span>
                            </div>

                            <div className="flex items-center text-amber-400 text-xs">
                              {Array.from({ length: rev.rating }).map(
                                (_, idx) => (
                                  <span key={idx}>★</span>
                                ),
                              )}
                            </div>

                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                              &ldquo;{rev.comment}&rdquo;
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
