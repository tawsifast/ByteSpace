import Image from "next/image";

const studioPhoto =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAly7xJCHmFhNqkWlqKB1C5lWhNlR-JP96jIgtR82DV34mLRNb8aLC6if0-bjVhWVRMDfLuJovDVOHEzID-_LYehrdMhmG2aY0zmEyJj4O1TPQ3sKZJdud1Vbl66p0WOyxrTmOprbx2szA7z6R0KwuQL9_EvSMvnnV8qQYVtep3sgra10QYXoCe3vwD2rLajRHRLmUkYL3BCh3-BW6FQFu_HeBAUGYX2yKLqrv7Hqnyw4An5t-CQ3naVw";

const features = [
  "Interactive Live Q&A Sessions",
  "Automated Progress Tracking & Quizzes",
  "Dedicated 1-on-1 Mentor Channels",
  "Lifetime Access & Cloud Resources",
];

export function InstructorSection() {
  return (
    <section className="py-10 px-4 bg-slate-50">
      <div className="max-w-md mx-auto">
        <div className="relative bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm">
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-brand-navy relative mb-5">
            <Image
              src={studioPhoto}
              alt="Instructor teaching online with headset"
              fill
              sizes="(max-width: 448px) 88vw, 360px"
              className="object-cover"
            />
            <div className="absolute top-3 left-3 bg-brand-blue text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
              Instructor Studio
            </div>
            <div className="absolute bottom-3 right-3 bg-brand-lime text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg">
              99.4% Student Satisfaction
            </div>
          </div>

          <h2 className="text-xl font-extrabold text-slate-900 leading-snug">
            Create &amp; Manage Courses Easily
          </h2>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            Whether you are a solo creator or an enterprise academy, ByteSpace
            delivers turn-key tools to monetize and mentor effortlessly.
          </p>

          <ul className="mt-4 space-y-2.5 text-xs text-slate-700 font-semibold">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-brand-softLime text-brand-navy flex items-center justify-center text-[10px] font-black">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <a
              href="#cta"
              className="inline-flex items-center justify-center w-full py-2.5 bg-brand-blue hover:bg-brand-darkblue text-white text-xs font-bold rounded-xl transition"
            >
              Become an Instructor →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
