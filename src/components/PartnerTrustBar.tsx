const partners = [
  "COURSERA",
  "DUOLINGO",
  "CODECADEMY",
  "EDX",
  "GOOGLE",
];

export function PartnerTrustBar() {
  return (
    <section
      aria-label="Trusted by companies"
      className="bg-white border-b border-slate-200/80 py-4 px-3"
    >
      <div className="max-w-md mx-auto">
        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 text-center mb-3">
          Trusted by leading teams &amp; universities
        </p>
        <div className="flex items-center justify-between gap-4 overflow-x-auto hide-scrollbar px-2 opacity-70 grayscale">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-xs font-black tracking-tighter text-slate-800"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
