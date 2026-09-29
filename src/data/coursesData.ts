export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  level: "All Levels" | "Beginner" | "Intermediate" | "Advanced";
  instructor: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
  };
  rating: number;
  reviewCount: string;
  studentsCount?: string;
  oldPrice: string;
  price: string;
  priceValue: number;
  thumbnail: string;
  thumbnailAlt: string;
  tag: string;
  lessons: string;
  duration: string;
  comments: string;
  students: string;
  studentAvatars: string[];
  description?: string;
  videoUrl?: string;
  totalLessons?: string;
  totalHours?: string;
  curriculum?: { title: string; preview: boolean }[];
  includes?: string[];
  sneakPeekImages?: string[];
  keyPoints?: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  coursesCount: string;
  category: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

const STUDENT_AVATAR_POOL = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvxghl-AvU12xSh_amzbYqnFRIBE-ARooKqSbVjre-JASJ4WgGVhi3cQpH95V1HjclfUW7epaiNl2iCSzMQJU-xzeoqgElhN0RjdkoCYC26Jd3BEm0ddwd1FO8ETbfDNqz0JN_15hZ2Q8aPSIXuLtZTswUzBHFbZEiYJ98anhgTeOIp-LpWl2REyUiTpLupI2UmEXvYp6kTf2x7S_JZaeTawHJbKsfrKkY3P6jOyFzByjnRH4OTulHg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3kB_4cbyyaNvYqRDw2bLXb4H2x3YZ1EQt6OY7n6dx5Uo-GHCOfyTiPuOa5WtfRif1yp0pdOVdGbTqhj7_ADpAdjR-A30ZJQZDd0sj0KsjZYgu3F29d6mejKoAEB0q8S-0HC6A-anFbMBhwqUVQJbCNvkYoqlfqbBFceipcQRmcwXXXtOm_GtGVUnH7G4oslNWN1tqAsTIZAV75u3mmXwcroLYFs1dMnGk_LU3n_JMobRPr_Yr5tgw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBdPewzx2hEbWIA2aa6L3kGmFgxZGbtaCgHLnMtBlOeR4HUwihFPmtucZFYWr64HYjTmhboRcm-ab7MyWrQHiYIF1BekfLlJd_L_VvpPPTGSRnjnjljktLTDIkZOv63vq14XJ7QZh-j34VcnZzK-mspdMD2zFTMC-uN6YuMCmxIgGCeDS6w8bOEotPmjlTLlX6-pgA92wIDh8eV3nsl47Tbfn5KVHbjrEk-RGVZanToQeaYn2_A_HQK6A",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDFN_pFMvRuL3MKyTBq8e56KyA85ToKCfAGeZcSPkBcWZVr3WdO2TRuyGsBfyDBeIrmSjUI3XWOesCp77h1GxdrqZ4OEIzzVc2YAGc9EQQWU0ZEIIV9wbFRLhAHV1YHvUCUTEVVD40B5cE6g68a-QmV_P0Cf8ofsTflTYTWsQCLmUSAjxR4gHrfcZXnWYsQsBk64iY1fmXGBDlrrJkqukdn4tN8mGXwj7ftvWMB26Ih2OuQEfHCz3_onQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlGocv_MC-V9VethKFV1ApwyRUxYnGBA8TvHWwOldodg-wbbUY0SarUnyCq_VRq3yuhPEWyAGnSpyEHAjuxmUDR9GMDBXKUHg3yeckf_cEZK9T6oCMref4Tmy85MHqa4oLxj7dByjLLyeaIzSacgvntdLiz3PmF_DMKJ3pbV5ZY6Osnq0kjzgc2G0IZN5IdTl4BA-k8PLRokW5E-WJw6ftFjN6NinS-x1QipnpacgiH3UIizN1_CLBcQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDI_Qbt7pyE5W7WrOWep5Yg-7QBzd1uwCaoBlqVEZfKsmP6i584M7AoU3skWoxHowA9mA7RmrfKxkdbbAE5-JEklz7tEiyQYj5WNa8mdmmiJhjQWdrzBrTMwUH3Zj0Wdx4r1uGcBinxzds53OFJkRk_69FX5vOLU_WOyD8mZG3UVhlqIFsWArNLW8CS_6oVqr34sHdnPHcHpit8BRszifvrSk45pusQCktFy-EJBkdnITLSTT6QTa7Lug",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCK-FLPPyKy2ucPVTxiHjfj538iiAoWBjQlPYLi2m3tkKImbhiKfugEIvCon41Rp400Jo6VwhxYacbkV9E76SI3ps7zeQzAI1c5Wc4JXZjUIAyzyCfKDxP3RL4G69UUqQwtipUjyKuwTpivPUz2a0NioHgCxv70IaXxOJoGsWqsc_rm7QxPM9dLx64zMxgK4urrfCFP-9B6O8bpqKupP6MiX5P4gFGZOiekorCcYns_P-Phtf2yPfnSpQ",
];

function pickAvatars(offset: number, count = 4): string[] {
  return Array.from(
    { length: count },
    (_, i) => STUDENT_AVATAR_POOL[(offset + i) % STUDENT_AVATAR_POOL.length]
  );
}

export const COURSE_CATEGORIES = [
  "View All",
  "Design",
  "Web Development",
  "Web Design",
  "Marketing",
  "Architecture",
  "Content Writing",
  "Coaching",
] as const;

export const LEVEL_OPTIONS = [
  "All Level",
  "Beginner",
  "Intermediate",
  "Advanced",
] as const;

export const SORT_OPTIONS = [
  "Sort: Popular",
  "Highest Rated",
  "Price: Low to High",
  "Price: High to Low",
  "Newest",
] as const;

export const DEFAULT_DETAILED_COURSE: Course = {
  id: "build-digital-asset",
  slug: "build-digital-asset-a-comprehensive-guide",
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Secrets of Digital Production with Ayesha Teodosio",
  category: "Development & Design",
  level: "All Levels",
  instructor: {
    name: "Ayesha Teodosio",
    role: "Professional Creator & Lead Instructor",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3kB_4cbyyaNvYqRDw2bLXb4H2x3YZ1EQt6OY7n6dx5Uo-GHCOfyTiPuOa5WtfRif1yp0pdOVdGbTqhj7_ADpAdjR-A30ZJQZDd0sj0KsjZYgu3F29d6mejKoAEB0q8S-0HC6A-anFbMBhwqUVQJbCNvkYoqlfqbBFceipcQRmcwXXXtOm_GtGVUnH7G4oslNWN1tqAsTIZAV75u3mmXwcroLYFs1dMnGk_LU3n_JMobRPr_Yr5tgw",
    bio: "Senior Product Designer & Content Creator with over 8+ years of industry experience guiding 15,000+ global students.",
  },
  rating: 4.9,
  reviewCount: "750 reviews",
  studentsCount: "1,250 Students",
  oldPrice: "$49",
  price: "$25",
  priceValue: 25,
  thumbnail:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDkBX12Z-uK_aYsJpCrjP02j5Irqb5hioXK7WnaxMquv4VtgeVH1u_aAvEfpdSWYCLfv32gKZtrMgzdqH-jkzHY6QR-qaeqJsd9ILBITO2oGFbjZI1WuLOlITzi2dP9Pjrs6IDlIynAccIrM0pZ48KJnuwO6raeheiwU-0-VwUypjRKlA_Z6FzczNnsFwY1lzWTjP0lFbDEqgJy68DXiauNSt9Z5XQdtNVXUyUDJkI38WV9lO85kqCFdg",
  thumbnailAlt: "Ayesha Teodosio student preview thumbnail",
  tag: "Development & Design",
  lessons: "12 Lessons",
  duration: "24 hours",
  comments: "750 Comments",
  students: "1.2k+",
  studentAvatars: pickAvatars(0),
  totalLessons: "12 lessons",
  totalHours: "24 hours",
  description:
    "Build a solid digital foundation with this step-by-step digital asset creation masterclass. Designed for professionals and beginners alike, this course walks you through real-world design systems, asset management workflows, and digital production strategies. You will gain hands-on experience by building industry-grade deliverables from scratch.",
  curriculum: [
    { title: "01 Intelligence & Digital Growth", preview: true },
    { title: "02 Master Tools for Design & Production", preview: true },
    { title: "03 Strategy & Scaling in Digital Canvas", preview: true },
    { title: "04 Layout & Responsive Breakout Systems", preview: false },
    { title: "05 Portfolio Deliverables & Case Studies", preview: false },
    { title: "06 Capstone Final Review & Launch", preview: false },
  ],
  includes: [
    "24 Hours HD Video Content",
    "Weekly Live Q&A Sessions",
    "Verified Certificate of Completion",
    "Lifetime Alumni Community Access",
  ],
  sneakPeekImages: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDk6Q-J1gRwsDkNIZDGTDNz5bLvsGB7jecYFxPrMFM5JD4C8FBATJDbnwL8D-vsKyyE9ukRc-gU2SMgKJm0H0lY1_xl22bebDbp31kXEjyEC6bFbI4LdN4b9XWCIbjeeA1dfIOK6iFhYz6RcbnObGzhSDtsUNBw-bParsVJJ6rIJeCn_cGP1xfLkh7Fw7hkdvdM8wR0Ck0bLXejNbJ3jU0kDwegQ6hwUDZID2Bt_dqZtWj8Dzoodtv7ig",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBFdZrZrb4WoI2ut0z_4fCezP0U9mZQn_OHn8PLjkmk6gw97T5I4QoeoaYjcSezddn2rUS26sZH2Pij7pmK5FJBbbuTftgJIUSkfDjeMI4rx4TXxHYHGNHP7nn60h_8V6hhr_335QKCrIj4X3mZqxHxV80LKuC_mai13ZngHX54-qLLKwKpmjHejSR8X74_RQhWyJ9FPBkH18Gl9p1BwiNBT4CksHOTiieJEmCwvYIgpux0HT8XFIQmMA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAX2ArSJu2HPT8R-tqeY0ScXk7uxWnc_6-rknbJIDR1z9C-SAdp7zzwg7ZVF5zg6s3RsiK8_hVT86IMBwX0I3GBMgAmfAHYOXMMtTkt9D54j75laIWrWuBC8ibaY5A8NpceJud10znfVh_wpp32YTlHLo9qxiGqHDx_P61u4_s5FZGvRKuEtJXOxNq7_iUmvBCTmrMLd2VQFVR9CIA8T_5IbO74Uvjht-DE3gn3FMlkAi-Qg1SpqXkYmw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBORgnlxteEKUvkYuZGuYERzPf7PXCK1k6UVsH2haBMXyNi7i15s0y_7rH_5v-1a7uiHdHF9OZi9rWRTRkJEgdZl7MdE-IHrUPNimKU7wh6b1ZA3jYmFgceWQ0ApRcLFXsBuHCtsixNqoOyBrkXQE38s37zZXR7a-3G9nuYIDEQjPcIHGFOVGBHLq73J2FonYEio9reg_j6MY4XKXfCTp8_j1gRo_EMeGRxwu-Jm8O0t2ICcXPnKgrm_w",
  ],
  keyPoints: [
    "Conceptual Blueprint & Digital Production Systems",
    "Design & Prototyping Assets Mastery",
    "Hands-on Portfolio Deliverables & Case Studies",
    "Workflow Automation & Scalability",
    "High-converting Layout Techniques",
    "Peer Reviews & Live Group Feedback",
    "1-on-1 Instructor Channel Access",
    "Verified Certificate for Resume & LinkedIn",
  ],
};

export const ALL_COURSES: Course[] = [
  DEFAULT_DETAILED_COURSE,
  {
    id: "1",
    slug: "learn-figma-from-scratch-to-advanced-systems",
    title: "Learn Figma from Scratch to Advanced Systems",
    category: "Design",
    level: "Beginner",
    instructor: {
      name: "Michael Zhang",
      role: "Lead Product Designer",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3kB_4cbyyaNvYqRDw2bLXb4H2x3YZ1EQt6OY7n6dx5Uo-GHCOfyTiPuOa5WtfRif1yp0pdOVdGbTqhj7_ADpAdjR-A30ZJQZDd0sj0KsjZYgu3F29d6mejKoAEB0q8S-0HC6A-anFbMBhwqUVQJbCNvkYoqlfqbBFceipcQRmcwXXXtOm_GtGVUnH7G4oslNWN1tqAsTIZAV75u3mmXwcroLYFs1dMnGk_LU3n_JMobRPr_Yr5tgw",
    },
    rating: 4.9,
    reviewCount: "2.4k",
    oldPrice: "$89",
    price: "$49",
    priceValue: 49,
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDk6Q-J1gRwsDkNIZDGTDNz5bLvsGB7jecYFxPrMFM5JD4C8FBATJDbnwL8D-vsKyyE9ukRc-gU2SMgKJm0H0lY1_xl22bebDbp31kXEjyEC6bFbI4LdN4b9XWCIbjeeA1dfIOK6iFhYz6RcbnObGzhSDtsUNBw-bParsVJJ6rIJeCn_cGP1xfLkh7Fw7hkdvdM8wR0Ck0bLXejNbJ3jU0kDwegQ6hwUDZID2Bt_dqZtWj8Dzoodtv7ig",
    thumbnailAlt: "Figma Design course preview",
    tag: "Design",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "2.4k Comments",
    students: "980+",
    studentAvatars: pickAvatars(1),
  },
  {
    id: "2",
    slug: "social-digital-assets-and-brand-strategy",
    title: "Social Digital Assets & Brand Strategy",
    category: "Marketing",
    level: "Intermediate",
    instructor: {
      name: "Sophia Martinez",
      role: "Digital Strategist",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg",
    },
    rating: 4.8,
    reviewCount: "1.9k",
    oldPrice: "$75",
    price: "$39",
    priceValue: 39,
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBORgnlxteEKUvkYuZGuYERzPf7PXCK1k6UVsH2haBMXyNi7i15s0y_7rH_5v-1a7uiHdHF9OZi9rWRTRkJEgdZl7MdE-IHrUPNimKU7wh6b1ZA3jYmFgceWQ0ApRcLFXsBuHCtsixNqoOyBrkXQE38s37zZXR7a-3G9nuYIDEQjPcIHGFOVGBHLq73J2FonYEio9reg_j6MY4XKXfCTp8_j1gRo_EMeGRxwu-Jm8O0t2ICcXPnKgrm_w",
    thumbnailAlt: "Social Digital Assets preview",
    tag: "Marketing",
    lessons: "12 Lessons",
    duration: "3 hours 10 mins",
    comments: "1.9k Comments",
    students: "1.1k+",
    studentAvatars: pickAvatars(2),
  },
  {
    id: "3",
    slug: "the-power-of-big-data-and-machine-learning",
    title: "The Power of Big Data & Machine Learning",
    category: "Web Development",
    level: "Advanced",
    instructor: {
      name: "Dr. Julian Ramos",
      role: "Ex-Google AI Fellow",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdPewzx2hEbWIA2aa6L3kGmFgxZGbtaCgHLnMtBlOeR4HUwihFPmtucZFYWr64HYjTmhboRcm-ab7MyWrQHiYIF1BekfLlJd_L_VvpPPTGSRnjnjljktLTDIkZOv63vq14XJ7QZh-j34VcnZzK-mspdMD2zFTMC-uN6YuMCmxIgGCeDS6w8bOEotPmjlTLlX6-pgA92wIDh8eV3nsl47Tbfn5KVHbjrEk-RGVZanToQeaYn2_A_HQK6A",
    },
    rating: 4.9,
    reviewCount: "1.8k",
    oldPrice: "$110",
    price: "$65",
    priceValue: 65,
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAX2ArSJu2HPT8R-tqeY0ScXk7uxWnc_6-rknbJIDR1z9C-SAdp7zzwg7ZVF5zg6s3RsiK8_hVT86IMBwX0I3GBMgAmfAHYOXMMtTkt9D54j75laIWrWuBC8ibaY5A8NpceJud10znfVh_wpp32YTlHLo9qxiGqHDx_P61u4_s5FZGvRKuEtJXOxNq7_iUmvBCTmrMLd2VQFVR9CIA8T_5IbO74Uvjht-DE3gn3FMlkAi-Qg1SpqXkYmw",
    thumbnailAlt: "Data Science course preview",
    tag: "Development",
    lessons: "20 Lessons",
    duration: "4 hours 5 mins",
    comments: "1.8k Comments",
    students: "2.4k+",
    studentAvatars: pickAvatars(3),
  },
  {
    id: "4",
    slug: "balancing-product-strategy-and-user-needs",
    title: "Balancing Product Strategy & User Needs",
    category: "Web Design",
    level: "Intermediate",
    instructor: {
      name: "Elena Cruz",
      role: "Senior Software Architect",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlGocv_MC-V9VethKFV1ApwyRUxYnGBA8TvHWwOldodg-wbbUY0SarUnyCq_VRq3yuhPEWyAGnSpyEHAjuxmUDR9GMDBXKUHg3yeckf_cEZK9T6oCMref4Tmy85MHqa4oLxj7dByjLLyeaIzSacgvntdLiz3PmF_DMKJ3pbV5ZY6Osnq0kjzgc2G0IZN5IdTl4BA-k8PLRokW5E-WJw6ftFjN6NinS-x1QipnpacgiH3UIizN1_CLBcQ",
    },
    rating: 4.9,
    reviewCount: "3.2k",
    oldPrice: "$95",
    price: "$55",
    priceValue: 55,
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFdZrZrb4WoI2ut0z_4fCezP0U9mZQn_OHn8PLjkmk6gw97T5I4QoeoaYjcSezddn2rUS26sZH2Pij7pmK5FJBbbuTftgJIUSkfDjeMI4rx4TXxHYHGNHP7nn60h_8V6hhr_335QKCrIj4X3mZqxHxV80LKuC_mai13ZngHX54-qLLKwKpmjHejSR8X74_RQhWyJ9FPBkH18Gl9p1BwiNBT4CksHOTiieJEmCwvYIgpux0HT8XFIQmMA",
    thumbnailAlt: "Product Strategy course preview",
    tag: "Web Design",
    lessons: "10 Lessons",
    duration: "1 hour 45 mins",
    comments: "3.2k Comments",
    students: "3.2k+",
    studentAvatars: pickAvatars(4),
  },
  {
    id: "5",
    slug: "mastering-weekly-money-management-and-finance",
    title: "Mastering Weekly Money Management & Finance",
    category: "Coaching",
    level: "All Levels",
    instructor: {
      name: "David Kim",
      role: "Financial Advisory Coach",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3kB_4cbyyaNvYqRDw2bLXb4H2x3YZ1EQt6OY7n6dx5Uo-GHCOfyTiPuOa5WtfRif1yp0pdOVdGbTqhj7_ADpAdjR-A30ZJQZDd0sj0KsjZYgu3F29d6mejKoAEB0q8S-0HC6A-anFbMBhwqUVQJbCNvkYoqlfqbBFceipcQRmcwXXXtOm_GtGVUnH7G4oslNWN1tqAsTIZAV75u3mmXwcroLYFs1dMnGk_LU3n_JMobRPr_Yr5tgw",
    },
    rating: 4.8,
    reviewCount: "1.4k",
    oldPrice: "$69",
    price: "$35",
    priceValue: 35,
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvxghl-AvU12xSh_amzbYqnFRIBE-ARooKqSbVjre-JASJ4WgGVhi3cQpH95V1HjclfUW7epaiNl2iCSzMQJU-xzeoqgElhN0RjdkoCYC26Jd3BEm0ddwd1FO8ETbfDNqz0JN_15hZ2Q8aPSIXuLtZTswUzBHFbZEiYJ98anhgTeOIp-LpWl2REyUiTpLupI2UmEXvYp6kTf2x7S_JZaeTawHJbKsfrKkY3P6jOyFzByjnRH4OTulHg",
    thumbnailAlt: "Finance Coaching preview",
    tag: "Coaching",
    lessons: "14 Lessons",
    duration: "2 hours 50 mins",
    comments: "1.4k Comments",
    students: "1.6k+",
    studentAvatars: pickAvatars(5),
  },
  {
    id: "6",
    slug: "from-zero-to-startup-leader-masterclass",
    title: "From Zero to Startup Leader Masterclass",
    category: "Coaching",
    level: "Intermediate",
    instructor: {
      name: "Sarah Sterling",
      role: "VP of Product & Angel Investor",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK-FLPPyKy2ucPVTxiHjfj538iiAoWBjQlPYLi2m3tkKImbhiKfugEIvCon41Rp400Jo6VwhxYacbkV9E76SI3ps7zeQzAI1c5Wc4JXZjUIAyzyCfKDxP3RL4G69UUqQwtipUjyKuwTpivPUz2a0NioHgCxv70IaXxOJoGsWqsc_rm7QxPM9dLx64zMxgK4urrfCFP-9B6O8bpqKupP6MiX5P4gFGZOiekorCcYns_P-Phtf2yPfnSpQ",
    },
    rating: 4.9,
    reviewCount: "2.1k",
    oldPrice: "$85",
    price: "$45",
    priceValue: 45,
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASkg5dsyqWCpFVOyp7C-n0ROXT1h3zPDpLMTyX-NRRy0y34qZcX-wFozZ_YC5GxqbxVIvxYGnKoDFcuaHehvkmar-tGhM42OUnfJns2UzwdlSL2pBREFezHv7WyutKH3W9fC-R6L1ML-pi3rQ1u79W2ZpVvWuhLVQPJtyi6jkIRRsVOANCBUblIbqcvlWyo4SFBpLu2xpNnn0KE0-CDCckj3w6y30etIU27EdgEgZ5OYtMHBwWehwbOw",
    thumbnailAlt: "Startup Leadership preview",
    tag: "Coaching",
    lessons: "18 Lessons",
    duration: "5 hours 30 mins",
    comments: "2.1k Comments",
    students: "2.1k+",
    studentAvatars: pickAvatars(6),
  },
];

export const COURSES: Course[] = ALL_COURSES.slice(0, 6);

export function getCourseBySlug(slug: string): Course {
  const found = ALL_COURSES.find((c) => c.slug === slug || c.id === slug);
  if (found) {
    return {
      ...DEFAULT_DETAILED_COURSE,
      ...found,
      title: found.title,
      instructor: {
        ...DEFAULT_DETAILED_COURSE.instructor,
        ...found.instructor,
      },
    };
  }
  return DEFAULT_DETAILED_COURSE;
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: "path-1",
    title: "Design",
    coursesCount: "42 Courses",
    category: "Design",
    iconName: "design",
  },
  {
    id: "path-2",
    title: "Development",
    coursesCount: "78 Courses",
    category: "Web Development",
    iconName: "code",
  },
  {
    id: "path-3",
    title: "Data & AI",
    coursesCount: "36 Courses",
    category: "Web Development",
    iconName: "ai",
  },
  {
    id: "path-4",
    title: "Business",
    coursesCount: "29 Courses",
    category: "Coaching",
    iconName: "business",
  },
  {
    id: "path-5",
    title: "Marketing",
    coursesCount: "31 Courses",
    category: "Marketing",
    iconName: "marketing",
  },
  {
    id: "path-6",
    title: "Photography",
    coursesCount: "24 Courses",
    category: "Design",
    iconName: "photography",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      '"The Figma Design Mastery track was unlike any recorded tutorial. The weekly project reviews by senior designers gave me the portfolio polish I needed to crack my first full-time product design job."',
    author: "Sarah Lin",
    role: "UI Designer at Stripe",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      '"Switching from non-tech to full-stack was daunting. ByteSpace’s cohort mentors broke down complex backend logic into crystal clear milestones. Landed three offers inside two months."',
    author: "Alex Morgan",
    role: "Fullstack Eng at Shopify",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFN_pFMvRuL3MKyTBq8e56KyA85ToKCfAGeZcSPkBcWZVr3WdO2TRuyGsBfyDBeIrmSjUI3XWOesCp77h1GxdrqZ4OEIzzVc2YAGc9EQQWU0ZEIIV9wbFRLhAHV1YHvUCUTEVVD40B5cE6g68a-QmV_P0Cf8ofsTflTYTWsQCLmUSAjxR4gHrfcZXnWYsQsBk64iY1fmXGBDlrrJkqukdn4tN8mGXwj7ftvWMB26Ih2OuQEfHCz3_onQ",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      '"As an instructor, the creator dashboard gives me complete freedom. The live interactive tooling makes running live coding workshops seamless. ByteSpace is a total game changer."',
    author: "Liam Vance",
    role: "Course Creator & Dev Lead",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDI_Qbt7pyE5W7WrOWep5Yg-7QBzd1uwCaoBlqVEZfKsmP6i584M7AoU3skWoxHowA9mA7RmrfKxkdbbAE5-JEklz7tEiyQYj5WNa8mdmmiJhjQWdrzBrTMwUH3Zj0Wdx4r1uGcBinxzds53OFJkRk_69FX5vOLU_WOyD8mZG3UVhlqIFsWArNLW8CS_6oVqr34sHdnPHcHpit8BRszifvrSk45pusQCktFy-EJBkdnITLSTT6QTa7Lug",
    rating: 5,
  },
];
