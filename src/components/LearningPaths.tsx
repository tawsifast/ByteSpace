import { LearningPathIcon } from "@/components/icons";
import { learningPaths } from "@/data/learning-paths";

export function LearningPaths() {
  return (
    <section
      aria-labelledby="paths-heading"
      className="py-8 px-4 bg-white border-y border-slate-200/80"
    >
      <div className="max-w-md mx-auto text-center">
        <h2 id="paths-heading" className="text-xl font-extrabold text-slate-900">
          Explore Diverse Learning Paths
        </h2>
        <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
          Structured tracks tailored for fast career pivots and deep technical
          mastery.
        </p>

        <div className="grid grid-cols-3 gap-3 mt-6">
          {learningPaths.map(({ label, courseCount, icon }) => (
            <a
              key={label}
              href="#courses"
              className="group p-3 rounded-2xl bg-slate-50 hover:bg-brand-softLime/40 border border-slate-100 flex flex-col items-center transition"
            >
              <div className="w-12 h-12 rounded-full bg-brand-softLime flex items-center justify-center text-slate-900 mb-2 group-hover:scale-110 transition-transform">
                <LearningPathIcon name={icon} className="w-6 h-6 text-brand-navy" />
              </div>
              <span className="text-xs font-bold text-slate-800">{label}</span>
              <span className="text-[10px] text-slate-400">{courseCount}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
