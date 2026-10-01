"use client";

import { useState, useMemo, FormEvent } from "react";
import { FilterIcon, SearchIcon } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
                  <SearchIcon className="w-5 h-5" />
                </div>
                <Input
                  className="h-auto w-full rounded-full border-0 bg-transparent px-3 py-2 text-sm sm:text-base text-slate-800 shadow-none placeholder:text-slate-400 outline-none focus-visible:border-0 focus-visible:ring-0"
                  placeholder="Search courses, skills, or mentors..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
                <Button
                  className="h-auto shrink-0 rounded-full bg-brand-lime px-7 py-3 text-sm font-bold text-slate-950 shadow hover:bg-brand-limehover hover:text-slate-950"
                  type="submit"
                  variant="ghost"
                >
                  Search
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Filter Toolbar & Category Navigation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          {/* Top Control Bar: Filter Info, Level Selector & Sort Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2 text-slate-700 text-sm font-semibold">
              <FilterIcon className="w-5 h-5 text-slate-500" />
              <span>Filter ({filteredCourses.length} Courses)</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Level Dropdown */}
              <Select value={selectedLevel} onValueChange={handleLevelChange}>
                <SelectTrigger className="h-auto w-auto rounded-full border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm cursor-pointer focus-visible:border-slate-200 focus-visible:ring-2 focus-visible:ring-brand-blue">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LEVEL_OPTIONS.map((lvl) => (
                    <SelectItem key={lvl} value={lvl}>
                      {lvl}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort Dropdown */}
              <Select value={selectedSort} onValueChange={handleSortChange}>
                <SelectTrigger className="h-auto w-auto rounded-full border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm cursor-pointer focus-visible:border-slate-200 focus-visible:ring-2 focus-visible:ring-brand-blue">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SORT_OPTIONS.map((sortOpt) => (
                    <SelectItem key={sortOpt} value={sortOpt}>
                      {sortOpt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
            {COURSE_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <Button
                  key={cat}
                  type="button"
                  variant="ghost"
                  onClick={() => handleCategoryChange(cat)}
                  className={
                    isActive
                      ? "h-auto shrink-0 rounded-full border-0 bg-brand-lime px-5 py-2 text-xs sm:text-sm font-extrabold text-slate-950 shadow-sm hover:bg-brand-lime hover:text-slate-950 hover:brightness-95"
                      : "h-auto shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }
                >
                  {cat}
                </Button>
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
              <Button
                variant="ghost"
                onClick={() => {
                  setActiveCategory("View All");
                  setSelectedLevel("All Level");
                  setSearchQuery("");
                }}
                className="mt-6 h-auto rounded-full bg-brand-blue px-6 py-2.5 text-xs font-bold text-white hover:bg-brand-darkblue hover:text-white"
              >
                Reset Filters
              </Button>
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
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="size-9 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-40"
                aria-label="Previous page"
              >
                ‹
              </Button>

              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                const isCurrent = pageNum === currentPage;
                return (
                  <Button
                    key={pageNum}
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setCurrentPage(pageNum)}
                    className={
                      isCurrent
                        ? "size-9 rounded-xl bg-brand-blue text-sm font-black text-white shadow hover:bg-brand-blue hover:text-white"
                        : "size-9 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-700"
                    }
                  >
                    {pageNum}
                  </Button>
                );
              })}

              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="size-9 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-40"
                aria-label="Next page"
              >
                ›
              </Button>
            </nav>
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
