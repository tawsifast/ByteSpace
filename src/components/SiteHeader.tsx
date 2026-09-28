import { BrandLogo } from "@/components/BrandLogo";
import { MenuIcon } from "@/components/icons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-brand-blue/95 backdrop-blur-md border-b border-white/10 px-4 py-3 text-white transition-all">
      <div className="max-w-md mx-auto flex items-center justify-between">
        <a
          aria-label="ByteSpace Home"
          className="group"
          href="#"
        >
          <BrandLogo />
        </a>

        <div className="flex items-center gap-2">
          <a
            href="#courses"
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            Sign In
          </a>
          <a
            href="#courses"
            className="text-xs font-bold px-3.5 py-1.5 rounded-full bg-brand-lime hover:bg-brand-limeHover text-slate-950 transition shadow-sm"
          >
            Join Free
          </a>
          <button
            type="button"
            aria-label="Open Navigation Menu"
            className="p-1.5 text-white/80 hover:text-white rounded-lg focus:outline-none"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
