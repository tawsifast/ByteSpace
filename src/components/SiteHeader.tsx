"use client";

import { useState } from "react";
import { MenuIcon, ShoppingBagIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header
      className="bg-brand-blue sticky top-0 z-50 transition-all"
      data-purpose="site-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          aria-label="ByteSpace Home"
          className="flex items-center gap-2 group focus:outline-none"
          href="/"
        >
          <div className="w-8 h-8 rounded-lg bg-[#ccff00] flex items-center justify-center font-black text-blue-900 text-xl -rotate-6">b</div>
          <span className="text-xl font-bold tracking-tight text-white">
            byteSpace
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <a className="hover:text-white transition-colors text-white" href="/">
            Home
          </a>
          <a className="hover:text-white transition-colors" href="/courses">
            Courses
          </a>
          <a
            className="hover:text-white transition-colors"
            href="/creator/profile"
          >
            Creator
          </a>
        </nav>

        {/* Auth Action Buttons & Cart */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <a
              className="text-sm font-medium text-white hover:opacity-80 transition-opacity"
              href="/login"
            >
              Sign In
            </a>
            <Button
              asChild
              variant="ghost"
              className="h-auto rounded-full bg-[#ccff00] px-6 py-2 text-sm font-semibold text-blue-900 hover:bg-[#b3e600] hover:text-blue-900"
            >
              <a href="/register">Join Us</a>
            </Button>
          </div>

          {/* Cart / Bag Icon */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setCartCount((prev) => (prev + 1) % 5)}
            className="relative h-auto w-auto p-0 text-white hover:bg-transparent hover:text-white hover:opacity-80 transition flex items-center justify-center"
            aria-label="Shopping Cart"
          >
            <ShoppingBagIcon className="size-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#ccff00] text-slate-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>

          {/* Mobile menu toggle */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden size-10 p-2 rounded-lg text-white hover:bg-white/10 hover:text-white"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <XIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-navy border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-sm font-medium text-white/90">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-lime transition"
              href="/"
            >
              Home
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-lime transition"
              href="/courses"
            >
              Courses
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-brand-lime transition"
              href="/creator/profile"
            >
              Creator
            </a>
          </nav>
          <div className="pt-3 border-t border-white/10 flex items-center justify-between px-3">
            <a
              className="text-sm font-semibold text-white hover:text-brand-lime"
              href="/login"
            >
              Sign In
            </a>
            <a
              className="bg-brand-lime text-slate-950 hover:bg-brand-limehover px-4 py-2 rounded-full text-xs font-bold shadow-md"
              href="/register"
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
