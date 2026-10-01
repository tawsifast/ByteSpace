import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="bg-[#0B40E8] relative overflow-hidden" data-purpose="creator-cta-banner">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 py-24 sm:py-32 relative z-10 text-center">
        {/* Decorative Shapes - Placeholders simulating the 3D objects */}
        {/* Top Left Yellow Squiggle */}
        <div className="absolute top-10 left-10 w-24 h-24 hidden md:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="#ccff00" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,20 Q30,-10 50,20 T90,20" />
          </svg>
        </div>
        {/* Top Left White Squiggle */}
        <div className="absolute top-8 left-40 w-16 h-16 hidden md:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,50 Q25,10 40,50 T70,50 T100,50" />
          </svg>
        </div>
        {/* Bottom Left White Cone */}
        <div className="absolute bottom-10 left-0 w-20 h-24 bg-white opacity-90 hidden md:block" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", transform: "rotate(-20deg)" }} />
        {/* Bottom Left Yellow Ring */}
        <div className="absolute bottom-4 left-24 w-32 h-32 border-[20px] border-[#ccff00] rounded-full hidden md:block" style={{ transform: "rotateX(60deg) rotateY(20deg)" }} />

        {/* Top Right Yellow Pyramid */}
        <div className="absolute top-10 right-32 w-20 h-24 bg-[#ccff00] hidden md:block" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", transform: "rotate(15deg)" }} />
        {/* Top Right White Cylinder */}
        <div className="absolute top-10 right-0 w-24 h-40 bg-white rounded-full hidden md:block" style={{ transform: "rotate(30deg) scale(0.8)" }} />
        {/* Bottom Right Yellow Squiggle */}
        <div className="absolute bottom-10 right-20 w-32 h-32 hidden md:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="#ccff00" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10,20 Q30,-20 50,20 T90,20" />
          </svg>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto relative z-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Unlock Your Potential as a<br />Creator with ByteSpace
          </h2>
          <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl mx-auto font-medium">
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a 
            part of a community comprising over 10,000 local and international creators. Utilize our Course Editor and showcase your 
            expertise by publishing your first course on the ByteSpace Course Library.
          </p>
          <Button
            asChild
            variant="ghost"
            className="h-auto rounded-full bg-[#ccff00] px-8 py-3.5 text-sm font-bold text-gray-900 hover:bg-[#ccff00] hover:text-gray-900 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <a href="/register">Join as Creator</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
