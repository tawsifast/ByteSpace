import Image from "next/image";
import { BookmarkIcon } from "@/components/icons";
import { courseCategories, courses } from "@/data/courses";

export function CourseDiscovery() {
  return (
    <section
      aria-labelledby="discover-heading"
      id="courses"
      className="py-10 px-4 max-w-md mx-auto"
    >
      <div className="text-center mb-6">
        <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full mb-2">
          Curated Catalog
        </span>
        <h2
          id="discover-heading"
          className="text-2xl font-black text-slate-900 leading-tight"
        >
          Discover Your Passion, <br />
          Build Your Skills
        </h2>
        <p className="mt-2 text-xs text-slate-500 leading-relaxed">
          Explore high-impact courses taught by vetted practitioners.
        </p>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2 mb-6 -mx-4 px-4 text-xs font-bold">
        {courseCategories.map((category, index) => (
          <button
            key={category}
            type="button"
            aria-pressed={index === 0}
            className={
              index === 0
                ? "px-4 py-2 rounded-full bg-brand-lime text-slate-950 shadow-sm shrink-0 font-extrabold"
                : "px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 shrink-0 transition"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3.5">
        {courses.map((course) => (
          <article
            key={course.slug}
            className="bg-white rounded-2xl p-2.5 shadow-sm border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition"
          >
            <div>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100 mb-2.5">
                <Image
                  src={course.thumbnail}
                  alt={course.thumbnailAlt}
                  fill
                  sizes="(max-width: 448px) 45vw, 200px"
                  className="object-cover"
                />
                <span
                  className={`absolute top-1.5 left-1.5 ${course.tagClassName} text-white text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase`}
                >
                  {course.tag}
                </span>
                <button
                  type="button"
                  aria-label={`Bookmark ${course.title}`}
                  className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-700 shadow-sm"
                >
                  <BookmarkIcon className="w-3 h-3" />
                </button>
              </div>

              <h3 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                {course.title}
              </h3>

              <div className="flex items-center gap-1.5 mt-2">
                <div
                  className={`w-4 h-4 rounded-full ${course.instructor.avatarClassName} text-[8px] text-white flex items-center justify-center font-bold`}
                >
                  {course.instructor.initials}
                </div>
                <span className="text-[10px] text-slate-500 font-medium truncate">
                  {course.instructor.name}
                </span>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center text-[10px] font-bold text-amber-500">
                ★ {course.rating}{" "}
                <span className="text-slate-400 font-normal ml-0.5">
                  ({course.reviewCount})
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-extrabold text-brand-blue">
                  {course.price}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a
          href="#courses"
          className="block w-full py-3 bg-white border border-slate-300 font-bold text-xs rounded-xl text-slate-800 shadow-sm hover:bg-slate-50 active:scale-95 transition"
        >
          Browse All 500+ Courses →
        </a>
      </div>
    </section>
  );
}
