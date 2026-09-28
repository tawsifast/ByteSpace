import Image from "next/image";
import { StarRating } from "@/components/icons";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-10 px-4 bg-slate-50"
    >
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
            Testimonials
          </span>
          <h2
            id="testimonials-heading"
            className="text-2xl font-black text-slate-900 mt-1"
          >
            Discover What Our Community Is Saying
          </h2>
        </div>

        <div className="space-y-3.5">
          {testimonials.map(
            ({ name, role, avatar, avatarAlt, borderClassName, quote }) => (
              <figure
                key={name}
                className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <Image
                    src={avatar}
                    alt={avatarAlt}
                    width={40}
                    height={40}
                    className={`w-10 h-10 rounded-full object-cover border-2 ${borderClassName}`}
                  />
                  <div>
                    <figcaption className="text-xs font-bold text-slate-900">
                      {name}
                    </figcaption>
                    <p className="text-[10px] text-slate-400">{role}</p>
                  </div>
                  <StarRating />
                </div>
                <blockquote className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              </figure>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
