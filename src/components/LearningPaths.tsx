import { Card } from "@/components/ui/card";

export function LearningPaths() {
  const paths = [
    { name: "Design", icon: (
      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ) },
    { name: "Development", icon: (
      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ) },
    { name: "IT & Software", icon: (
      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ) },
    { name: "Business", icon: (
      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ) },
    { name: "Marketing", icon: (
      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ) },
    { name: "Photography", icon: (
      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ) },
  ];

  return (
    <section className="py-20 bg-white" id="paths">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-3xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various
            fields, ensuring there is something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Path cards — 6-col grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {paths.map((path, idx) => (
            <Card
              key={idx}
              className="group h-[140px] items-center justify-center gap-0 rounded-3xl border border-slate-100 bg-white p-6 ring-0 shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-[#ccff00] flex items-center justify-center mb-3">
                {path.icon}
              </div>
              <span className="font-bold text-gray-800 text-xs text-center">{path.name}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
