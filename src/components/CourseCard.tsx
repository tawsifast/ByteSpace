import Link from "next/link";
import type { Course } from "@/data/coursesData";

type CourseCardProps = {
  course: Course;
  author?: string;
};

export function CourseCard({ course, author }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow flex flex-col overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative w-full h-[190px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={course.thumbnail}
          alt={course.thumbnailAlt}
          className="w-full h-full object-cover"
        />
        {/* Pills overlaid at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent pt-6 pb-3 px-3">
          <div className="flex gap-1.5 flex-wrap">
            <span className="bg-white/90 text-gray-800 text-[10px] font-semibold px-2.5 py-1 rounded-full">
              {course.lessons}
            </span>
            <span className="bg-white/90 text-gray-800 text-[10px] font-semibold px-2.5 py-1 rounded-full">
              {course.duration}
            </span>
            <span className="bg-white/90 text-gray-800 text-[10px] font-semibold px-2.5 py-1 rounded-full">
              {course.comments}
            </span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title + Star */}
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="font-bold text-slate-900 text-[15px] leading-snug flex-1">
            {course.title}
          </h3>
          <div className="flex items-center gap-0.5 shrink-0">
            <span className="text-slate-700 text-sm font-bold">
              {course.rating}
            </span>
            <svg
              className="w-3.5 h-3.5 text-amber-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* Author in blue */}
        <p className="text-blue-600 text-[11px] font-semibold mb-3">
          by {author ?? course.instructor.name}
        </p>

        {/* Level + Avatars row */}
        <div className="flex items-center gap-3 mb-4">
          {/* Level pill */}
          <span className="flex items-center gap-1 border border-slate-200 text-slate-600 text-[11px] font-semibold px-2.5 py-1 rounded-full">
            <svg
              className="w-3 h-3 fill-current text-slate-500"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="14" width="4" height="8" rx="1" />
              <rect x="10" y="9" width="4" height="13" rx="1" />
              <rect x="18" y="4" width="4" height="18" rx="1" />
            </svg>
            {course.level}
          </span>
          {/* Overlapping avatar photos */}
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {course.studentAvatars.map((avatar, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={avatar}
                  alt={`Enrolled student ${i + 1}`}
                  className="w-6 h-6 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="ml-1.5 bg-[#ccff00] text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
              {course.students}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-auto text-[15px]">
          <span className="font-extrabold text-blue-600">{course.price}</span>
          <span className="text-slate-400 font-medium text-xs">/lifetime</span>
        </div>
      </div>
    </Link>
  );
}
