export function CtaBanner() {
  return (
    <section
      id="cta"
      className="py-12 px-4 bg-brand-blue text-white relative overflow-hidden bg-grid-pattern"
    >
      <div className="absolute -top-6 -right-6 w-24 h-24 shape-ring opacity-30" />
      <div className="absolute bottom-4 left-3 w-8 h-8 bg-brand-lime rotate-12 rounded-lg" />

      <div className="max-w-md mx-auto text-center relative z-10">
        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[11px] font-bold text-brand-lime mb-3">
          Ready for a transformation?
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
          Unlock Your Potential: <br />
          <span className="text-brand-lime">Go Greater with ByteSpace</span>
        </h2>
        <p className="mt-3 text-xs text-blue-100 max-w-xs mx-auto leading-relaxed">
          Join over 12,000+ engineers, designers, and managers upgrading their
          career path every single day.
        </p>

        <div className="mt-6 flex flex-col gap-2.5 max-w-xs mx-auto">
          <a
            href="#courses"
            className="w-full py-3.5 bg-brand-lime hover:bg-brand-limeHover text-slate-950 font-black text-sm rounded-full shadow-lg transition transform active:scale-95 text-center"
          >
            Get Started Now
          </a>
          <span className="text-[10px] text-blue-200">
            No credit card required • 14-day free trial
          </span>
        </div>
      </div>
    </section>
  );
}
