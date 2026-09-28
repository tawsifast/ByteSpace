import { LayersIcon } from "@/components/icons";

type BrandLogoProps = {
  size?: "sm" | "md";
  tone?: "onBlue" | "onLight";
  className?: string;
};

const sizeStyles = {
  sm: { mark: "w-7 h-7", icon: "w-4 h-4" },
  md: { mark: "w-8 h-8", icon: "w-5 h-5" },
} as const;

const toneStyles = {
  onBlue: { text: "text-white", accent: "text-brand-lime" },
  onLight: { text: "text-slate-900", accent: "text-brand-blue" },
} as const;

export function BrandLogo({
  size = "md",
  tone = "onBlue",
  className = "",
}: BrandLogoProps) {
  const { mark, icon } = sizeStyles[size];
  const { text, accent } = toneStyles[tone];

  return (
    <span className={`flex items-center gap-2 font-bold tracking-tight ${text} ${className}`}>
      <span
        className={`${mark} rounded-lg bg-brand-lime flex items-center justify-center font-black shadow-sm transition-transform group-hover:scale-105`}
      >
        <LayersIcon className={`${icon} text-slate-950`} strokeWidth={3} />
      </span>
      <span className="font-extrabold tracking-tight">
        Byte<span className={accent}>Space</span>
      </span>
    </span>
  );
}
