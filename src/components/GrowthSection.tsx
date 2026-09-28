import Image from "next/image";

const graduationPhoto =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDWiVWx-RONPDirefp9L3pDZyoP_NuzCipvZmIp4bwyxyVGUmTR1SchJUVkPNzgdXFxV5ApKOz0hhCE7aT_sRRZfT-7uFRoU62TFqAqO1cedw8Vyd6cWBoimb6S-ytgu2Prz_3KhVVVMeyfeEZm3MLXSrwjpWpi_5EWBR5f_ibZxT_bBBb25Tj3j-tC-EMO2Z-TJNEsIc8bRuG0hh9bdz6HeL1Rm8n-zR4eg9K4bGNuIeEJG3nU6TrppQ";

const metrics = [
  { value: "12K+", label: "Graduates", className: "text-brand-blue" },
  { value: "70+", label: "Top Mentors", className: "text-slate-900" },
  { value: "1K+", label: "Live Hours", className: "text-brand-navy" },
];

export function GrowthSection() {
  return (
    <section className="py-10 px-4 bg-gradient-to-b from-white to-lime-50/40 relative overflow-hidden">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-wider">
            Fast-Track Your Ambition
          </span>
          <h2 className="text-2xl font-black text-slate-900 mt-1 leading-snug">
            Your Path to Professional <br />
            <span className="text-brand-blue">Growth Starts Here!</span>
          </h2>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Gain recognized credentials and build real world capstone projects
            vetted by seasoned leaders from top tech firms.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2.5 py-4 border-y border-slate-200/70 mb-6 bg-white/70 backdrop-blur-sm rounded-2xl px-2">
          {metrics.map(({ value, label, className }, index) => (
            <div
              key={label}
              className={`text-center ${index === 1 ? "border-x border-slate-200" : ""}`}
            >
              <span className={`block text-xl font-extrabold ${className}`}>
                {value}
              </span>
              <span className="text-[10px] font-semibold text-slate-500">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="relative bg-white rounded-3xl p-3 border border-slate-200 shadow-xl overflow-hidden">
          <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-slate-900">
            <Image
              src={graduationPhoto}
              alt="Students collaborating happily"
              fill
              sizes="(max-width: 448px) 92vw, 400px"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center text-slate-950 font-black text-xs">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">
                    Accredited Certificate
                  </p>
                  <p className="text-[10px] text-slate-300">
                    Shareable directly to LinkedIn
                  </p>
                </div>
              </div>
              <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold">
                Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
