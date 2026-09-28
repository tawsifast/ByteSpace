export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  avatarAlt: string;
  borderClassName: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Junior UI Designer at Stripe",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUcrwHs4tqFL7CaZCK53YQI8byfS_kwftrLp2IqVzihBF-0ybYkkurIajwWavsODxfGltmMRI1xBs_2bKwmfoJMa1Lr7w3k_kGzqE3CjIzJdUJxVtE8e_OboNe-KLXMhC3iidR4HAvK5Xwa3p10LJeRtnsSDvuaR4JnQya6i3xNnt3zx9dRTU26wJ1n4nSxaF02185P9kiiArTgQbbUxwbqG_p7T0ZugSdQHRhUQbikInzZazEHIHLuQ",
    avatarAlt: "Sarah Jenkins profile",
    borderClassName: "border-brand-lime",
    quote:
      "The Figma design cohort literally got me hired within 2 months! The mentor reviews were honest, actionable, and pushed my portfolio to senior standards.",
  },
  {
    name: "Alex Morgan",
    role: "Fullstack Engineer at Shopify",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDzFhAnzBcMNa3U2l0SaDzqoQVVgA5OcK-MMVdQz1bn_mucV0ABbjPqrGVBDhYqiHAxoVJPZ0SHqJFG7KmWKRkekm3CzydLFLya4xNJD2CDZxjA2-ZRe25HRxOrgU5kU3muPa5x75OHsaBRgpFaIsm0RtW-ZuL0VqYN3P39xJR2kZB9oE1PCyqKMIPgcI_Il1qupUW7RnN4meWHRQEmQF_nqoRN2ApqpS2KK9c-sdGXOUclxsRVIscm3g",
    avatarAlt: "Alex Morgan profile",
    borderClassName: "border-brand-blue",
    quote:
      "ByteSpace breaks complex system design topics down into intuitive steps. Best investment I've made in my career since college.",
  },
  {
    name: "Liam Vance",
    role: "Product Lead",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8XHdcydSV2cDlxfR2KqFJh5QWDnuyZ6TabtwkkRXwsjjYUIa2k9gm3GJP4i_hJx3BCBymTm7OyAhd0f51XgSCpRyqnl7zA_ZFo_SNzMFqb5YAgmPewZYdMOZLE-Hu0hQabr2wCxig1AN6jTX646fzwSTogJKW0VxnMnczR09joAUuUTf12p4cVPBAA-e3P5MIurJ6e8YjGp6AjH0yglve2YJYeKhhK80_jHDlZqv1TPNi9YezvxmBTg",
    avatarAlt: "Liam Vance profile",
    borderClassName: "border-emerald-400",
    quote:
      "The community support in the Discord server alongside the lessons is second to none. Whenever I was stuck, a mentor answered in 10 minutes.",
  },
];
