"use client";

import { useState, useMemo, FormEvent } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CourseCard } from "@/components/CourseCard";
import {
  ALL_COURSES,
  COURSE_CATEGORIES,
  LEVEL_OPTIONS,
  SORT_OPTIONS,
} from "@/data/coursesData";

const ITEMS_PER_PAGE = 6;

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("View All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All Level");
  const [selectedSort, setSelectedSort] = useState<string>("Sort: Popular");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      // Category filter
      if (activeCategory !== "View All" && course.category !== activeCategory) {
        return false;
      }
      // Level filter
      if (selectedLevel !== "All Level" && course.level !== selectedLevel) {
        return false;
      }
      // Search filter
      if (
        searchQuery.trim() &&
        !course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !course.category.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (selectedSort === "Highest Rated") {
        return b.rating - a.rating;
      }
      if (selectedSort === "Price: Low to High") {
        return a.priceValue - b.priceValue;
      }
      if (selectedSort === "Price: High to Low") {
        return b.priceValue - a.priceValue;
      }
      if (selectedSort === "Newest") {
        return Number(b.id) - Number(a.id);
      }
      // Sort: Popular default
      return b.rating * Number(b.id) - a.rating * Number(a.id);
    });
  }, [activeCategory, selectedLevel, searchQuery, selectedSort]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / ITEMS_PER_PAGE));
  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
    setCurrentPage(1);
  };

  return (
    <>
      <SiteHeader />
      <main className="bg-slate-50 min-h-screen pb-24">
        {/* Hero Header Section */}
        <section className="bg-brand-blue bg-grid-pattern pt-12 pb-16 px-4 text-center text-white relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Find Your Next Course
            </h1>
            <p className="mt-3 text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto font-medium">
              Browse top-rated courses taught by industry veterans and master
              in-demand skills.
            </p>

            {/* Search Input Bar */}
            <div className="mt-8 max-w-xl mx-auto">
              <form
                onSubmit={handleSearchSubmit}
                className="relative flex items-center bg-white rounded-full p-2 shadow-2xl"
              >
                <div className="pl-4 text-slate-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <input
                  className="w-full bg-transparent border-0 text-slate-800 placeholder-slate-400 text-sm sm:text-base focus:ring-0 px-3 py-2 outline-none"
                  placeholder="Search courses, skills, or mentors..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                <button
                  className="bg-brand-lime hover:bg-brand-limehover text-slate-950 font-bold px-7 py-3 rounded-full text-sm transition-colors shrink-0 shadow"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Filter Toolbar & Category Navigation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          {/* Top Control Bar: Filter Info, Level Selector & Sort Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
              <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Filter ({filteredCourses.length} Courses)</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Level Dropdown */}
              <select
                value={selectedLevel}
                onChange={(e) => handleLevelChange(e.target.value)}
                className="bg-white border border-slate-200 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm cursor-pointer"
              >
                {LEVEL_OPTIONS.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>

              {/* Sort Dropdown */}
              <select
                value={selectedSort}
                onChange={(e) => handleSortChange(e.target.value)}
                className="bg-white border border-slate-200 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm cursor-pointer"
              >
                {SORT_OPTIONS.map((sortOpt) => (
                  <option key={sortOpt} value={sortOpt}>
                    {sortOpt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
            {COURSE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={
                    isActive
                      ? "bg-brand-lime text-slate-950 font-extrabold px-5 py-2 rounded-full text-xs sm:text-sm shrink-0 shadow-sm transition hover:brightness-95"
                      : "bg-white text-slate-600 font-semibold px-4 py-2 rounded-full text-xs sm:text-sm hover:bg-slate-100 hover:text-slate-900 transition border border-slate-200 shrink-0"
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        {/* Course Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {paginatedCourses.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-2xl text-slate-400 mb-4">
                🔍
              </div>
              <h3 className="text-xl font-bold text-slate-900">No courses found</h3>
              <p className="text-slate-500 text-sm mt-2 max-w-sm mx-auto">
                Try adjusting your search query, level filter, or selected category pill.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("View All");
                  setSelectedLevel("All Level");
                  setSearchQuery("");
                }}
                className="mt-6 bg-brand-blue text-white font-bold text-xs px-6 py-2.5 rounded-full hover:bg-brand-darkblue transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </section>

        {/* Pagination Controls Bar */}
        {filteredCourses.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex items-center justify-center">
            <nav className="inline-flex items-center gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition text-sm font-bold"
                aria-label="Previous page"
              >
                ‹
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                const isCurrent = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={
                      isCurrent
                        ? "w-9 h-9 rounded-xl bg-brand-blue text-white font-black text-sm shadow"
                        : "w-9 h-9 rounded-xl text-slate-700 hover:bg-slate-100 transition font-bold text-sm"
                    }
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition text-sm font-bold"
                aria-label="Next page"
              >
                ›
              </button>
            </nav>
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
