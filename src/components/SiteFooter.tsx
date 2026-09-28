import { BrandLogo } from "@/components/BrandLogo";
import { LinkedInIcon, TwitterIcon, YouTubeIcon } from "@/components/icons";

const footerColumns = [
  {
    heading: "Programs",
    links: [
      { label: "UI/UX Design", href: "#courses" },
      { label: "Full Stack Dev", href: "#courses" },
      { label: "Data & AI", href: "#courses" },
      { label: "Product Mgmt", href: "#courses" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Mentors", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
];

const socials = [
  { label: "Twitter", Icon: TwitterIcon },
  { label: "LinkedIn", Icon: LinkedInIcon },
  { label: "YouTube", Icon: YouTubeIcon },
];

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-10 pb-8 px-4 text-slate-600">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <a href="#" aria-label="ByteSpace Home" className="inline-block mb-3">
            <BrandLogo size="sm" tone="onLight" className="text-xl" />
          </a>
          <p className="text-xs text-slate-500 mb-4 leading-relaxed">
            Empowering the next generation of digital builders with accessible,
            mentor-led education.
          </p>

          <form className="flex items-center gap-1.5">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full text-xs px-3.5 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 text-slate-800 placeholder-slate-400"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-brand-lime hover:bg-brand-limeHover text-slate-950 font-bold text-xs rounded-full shrink-0 shadow-sm transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 text-xs">
          {footerColumns.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="font-bold text-slate-900 text-xs mb-2.5">
                {heading}
              </h3>
              <ul className="space-y-2 text-[11px] text-slate-500">
                {links.map((link) => (
                  <li key={link.label}>
                    <a className="hover:text-brand-blue" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-100 mt-8 pt-6 flex flex-col items-center justify-between gap-3 text-center">
          <p className="text-[10px] text-slate-400">
            &copy; {new Date().getFullYear()} ByteSpace, Inc. All rights reserved.
            Built for mobile.
          </p>
          <div className="flex items-center gap-3 text-slate-400">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="hover:text-brand-blue"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
