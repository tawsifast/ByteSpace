import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-100 pt-16 pb-8" data-purpose="site-footer">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 pb-14 border-b border-slate-100">

          {/* Left: Brand + Newsletter */}
          <div className="w-full lg:w-[38%] shrink-0">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 bg-[#ccff00] rounded-sm flex items-center justify-center font-black text-slate-900 text-base leading-none">
                b
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">ByteSpace</span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter input */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 h-auto rounded-full border-slate-200 bg-white px-5 py-3 text-sm shadow-none text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-400 focus-visible:border-blue-400 focus-visible:ring-0"
              />
              <Button
                type="button"
                variant="ghost"
                className="h-auto rounded-full bg-[#ccff00] px-7 py-3 text-sm font-bold text-slate-900 hover:bg-[#b3e600] hover:text-slate-900"
              >
                Search
              </Button>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed max-w-xs">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right: Link columns */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {/* Column 1 */}
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Featured Courses</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Featured Categories</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Business</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">IT</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Design</a></li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Development</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Marketing</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Photography</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Finance</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Sport</a></li>
            </ul>

            {/* Column 3 */}
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Become a Creator</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Affiliate Programs</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Help</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">About</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
