export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvxghl-AvU12xSh_amzbYqnFRIBE-ARooKqSbVjre-JASJ4WgGVhi3cQpH95V1HjclfUW7epaiNl2iCSzMQJU-xzeoqgElhN0RjdkoCYC26Jd3BEm0ddwd1FO8ETbfDNqz0JN_15hZ2Q8aPSIXuLtZTswUzBHFbZEiYJ98anhgTeOIp-LpWl2REyUiTpLupI2UmEXvYp6kTf2x7S_JZaeTawHJbKsfrKkY3P6jOyFzByjnRH4OTulHg"
    },
    {
      id: 2,
      name: "James L.",
      role: "Lifelong Learner",
      text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its intuitive user experience and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3kB_4cbyyaNvYqRDw2bLXb4H2x3YZ1EQt6OY7n6dx5Uo-GHCOfyTiPuOa5WtfRif1yp0pdOVdGbTqhj7_ADpAdjR-A30ZJQZDd0sj0KsjZYgu3F29d6mejKoAEB0q8S-0HC6A-anFbMBhwqUVQJbCNvkYoqlfqbBFceipcQRmcwXXXtOm_GtGVUnH7G4oslNWN1tqAsTIZAV75u3mmXwcroLYFs1dMnGk_LU3n_JMobRPr_Yr5tgw"
    },
    {
      id: 3,
      name: "Alex R.",
      role: "Inspired Creator",
      text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="reviews">
      {/* Soft gradient background matching screenshot */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-white to-[#ccff00]/30" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header split */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Discover What Our<br />Community Is Saying
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              At ByteSpace, our vibrant community of learners and creators is at the
              heart of what we do. Hear directly from those who have experienced the
              transformative journey of learning and teaching on our platform. Explore
              testimonials that reflect the diverse perspectives of enthusiastic learners
              and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col"
            >
              <div className="mb-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
              
              <div className="mb-4">
                <h4 className="font-extrabold text-lg text-slate-900">{t.name}</h4>
                <p className="text-sm font-semibold text-blue-600">{t.role}</p>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed flex-1 font-medium">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
