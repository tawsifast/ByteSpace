export type Course = {
  slug: string;
  title: string;
  tag: string;
  tagClassName: string;
  thumbnail: string;
  thumbnailAlt: string;
  instructor: {
    name: string;
    initials: string;
    avatarClassName: string;
  };
  rating: string;
  reviewCount: string;
  price: string;
};

export const courses: Course[] = [
  {
    slug: "learn-figma-ui-ux-essentials",
    title: "Learn Figma: UI/UX Essentials",
    tag: "Design",
    tagClassName: "bg-brand-blue",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtL_Z0fRTPZiSQSCW1eeCxLI3vNxPbkfZuKLGM2AxAs2GnrvMs21CHZUigsGY-ovIykpxcwDzM54KNjq_MNlrCVxjFtxc_vS2CZUQU4Mmzh6XIxQcZIjiLxt6Pw3UjCkFYQX8EbJRTS9Qq2CG1IkdI1wB_iQtE2AqRX6xIDafPJdyNrkPBOJHwcxb58WLowCEKj-_ldSE7uK6w7vmlHkwZeRoP1RR35MWDpCnydKc72-ZF1rs80JGLFQ",
    thumbnailAlt: "Figma UI/UX screen design",
    instructor: {
      name: "Sarah Alex",
      initials: "SA",
      avatarClassName: "bg-indigo-500",
    },
    rating: "4.9",
    reviewCount: "1.2k",
    price: "$49",
  },
  {
    slug: "full-stack-web-dev-bootcamp",
    title: "Full Stack Web Dev Bootcamp",
    tag: "Code",
    tagClassName: "bg-emerald-600",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASJE-cPqE-x14ngqO8lYEJTE_x0pUwja5yQSvKawYOipd5aiG93--GWRO9JQ27CIOkPDeNrz3p03luTA20RI7UTlMWj9Fd_3Ov51ZL7bkSQ2PxdxIsz9g-QBFwAzQc9Ywh8ohg4W916kK5nIEtKMv4CizTaQgpwbotpaxtMAdWzeZme8JfteSG6nqSuRibYoZdhzyzWvxx23CFeejfWQzzLaMN3_-w31PaXZxmONZoIfiQv1rrC9MOsw",
    thumbnailAlt: "Code editor with syntax highlighting",
    instructor: {
      name: "Marcus Kim",
      initials: "MK",
      avatarClassName: "bg-emerald-500",
    },
    rating: "4.8",
    reviewCount: "980",
    price: "$59",
  },
  {
    slug: "data-science-big-data-python",
    title: "Data Science & Big Data Python",
    tag: "Data",
    tagClassName: "bg-violet-600",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOeJeeqWswlofz4X0VMkVAv19NFBszFdoICmeJXmt-dsEldPlezLmfAVtkknPf24kzBkhs2f01Dq47O3n7wlfoiSaCtw5kG1Zp-ZnJpROVRYQwpetvZbofrx48J6IjNyDEurMAsAAxImwuo77FkLd7vh7vBmRyFuYmsgOG6fKfmmXr7OOyQTvAXzXjaz1bojLcFyk3gHWt2YiOxxSibbaVpAbA5nlSElnnM6tdzEpO0T0LjefX8HcXTg",
    thumbnailAlt: "Data analytics dashboard",
    instructor: {
      name: "David Thorne",
      initials: "DT",
      avatarClassName: "bg-violet-500",
    },
    rating: "4.9",
    reviewCount: "2.1k",
    price: "$65",
  },
  {
    slug: "mastering-digital-illustration",
    title: "Mastering Digital Illustration",
    tag: "Art",
    tagClassName: "bg-pink-600",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpNumKG4aZfrIALQ5vyv4zMv96Zz_aqHIyuy7mLrsxxrNEeHN3upkQBLnMThjARxWznyFWJ1_IyScGGe9_G1DUETfUIqj2k9kcuxCYso8Y2pA_fMvyXwUf66kSL6rjAv9QRLn2oVUKDtt202cqFYXADMllWxLjmFNZFHrIKusUGHv-YxOCuAbmmS1MRZa0olabNQXnpvYuqp1U-xIQktcfpTOSNqOkz_XVhlSsMIOe4jyDnadISRUtFw",
    thumbnailAlt: "Digital painting and illustration",
    instructor: {
      name: "Elena Lee",
      initials: "EL",
      avatarClassName: "bg-pink-500",
    },
    rating: "4.7",
    reviewCount: "650",
    price: "$39",
  },
  {
    slug: "marketing-growth-strategy",
    title: "Marketing Growth Strategy 2024",
    tag: "Growth",
    tagClassName: "bg-amber-600",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDs4QFMsDDQdEtaW1TbWpam_wFtEpzDnAVmQbYQaJ7Er55EKeZ-CuO6YOrTUcWE4_3iO1wmyFDace34_R4SX6C4gmx2DhrSpuINqjBh6T81jTAi-DizVTIZlmpTCi60AtbmWjh_VXYBHIAuVzNPNImbxueGZpztRnX4Z7tLcKU2KTHBNPwIHKP86vtX4WXJqz1eu7SUVDRy5Cf0GrXth58OmbB25D8jdmXTswacrZLFyvL2hF1czAncCA",
    thumbnailAlt: "Marketing analytics chart",
    instructor: {
      name: "Josh Woods",
      initials: "JW",
      avatarClassName: "bg-amber-500",
    },
    rating: "4.9",
    reviewCount: "1.4k",
    price: "$45",
  },
  {
    slug: "product-management-zero-to-hero",
    title: "Product Management: Zero to Hero",
    tag: "Product",
    tagClassName: "bg-blue-600",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8zkG3hIgw_MKSTSlLx-wrEAQVtNAM5DzSnhoIIOKvgG0aG_nh6WgzqLBDPOGAyioCFVOBy7OFP_V1Jk7qZjgGX2X9bGrPxASKBJFnMdSwqATo06R9hKPi4FD9bTupuvMTBAKuFsD_V41XHgxtNKLMqnUVjktCC0DTQ8PQl6LKbTRZmnVwDLrFPUZ5PoRKk1rKdF5Ygcjt4xH-rRNZ_cUozLYRu1iG_Yu4zR2MKlRHZ_QhPdkKkX1ABQ",
    thumbnailAlt: "Agile product team collaborating",
    instructor: {
      name: "Tara Chen",
      initials: "TC",
      avatarClassName: "bg-cyan-600",
    },
    rating: "4.8",
    reviewCount: "820",
    price: "$55",
  },
];

export const courseCategories = [
  "All / Popular",
  "UI/UX Design",
  "Development",
  "Business",
  "Marketing",
  "Data Science",
  "Photography",
];
