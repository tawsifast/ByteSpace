import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace - Get Access to Hundreds Courses Available",
  description:
    "Find your ideal course, get certified, and kickstart your dream career with our industry-vetted mentors. Over 500+ courses across design, development, data, business and more.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E4DF9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased font-sans`}>
      <body className="min-h-full flex flex-col overflow-x-hidden text-slate-800 selection:bg-brand-lime selection:text-black">
        {children}
      </body>
    </html>
  );
}
