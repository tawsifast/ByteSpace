"use client";

import { Avatar, AvatarGroup, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function CourseDiscovery() {
  const tags = [
    { name: "Featured", active: true },
    { name: "Music" },
    { name: "Drawing & Painting" },
    { name: "Marketing" },
    { name: "Animation" },
    { name: "Social Media" },
    { name: "UI/UX Design" },
    { name: "Creative Marketing" },
    { name: "Digital Illustration" },
    { name: "Film & Video" },
    { name: "Crafts" },
    { name: "Freelance & Entrepreneurship" },
    { name: "Graphic Design" },
    { name: "Photography" },
    { name: "Productivity" },
    { name: "Web Development" },
    { name: "Data Science" },
    { name: "Cooking" },
  ];

  const courses = [
    {
      title: "Learn Figma from Basic",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk6Q-J1gRwsDkNIZDGTDNz5bLvsGB7jecYFxPrMFM5JD4C8FBATJDbnwL8D-vsKyyE9ukRc-gU2SMgKJm0H0lY1_xl22bebDbp31kXEjyEC6bFbI4LdN4b9XWCIbjeeA1dfIOK6iFhYz6RcbnObGzhSDtsUNBw-bParsVJJ6rIJeCn_cGP1xfLkh7Fw7hkdvdM8wR0Ck0bLXejNbJ3jU0kDwegQ6hwUDZID2Bt_dqZtWj8Dzoodtv7ig",
      rating: "4.8",
      author: "pumpui studio",
      price: "$25",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      students: "26+",
      avatars: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvxghl-AvU12xSh_amzbYqnFRIBE-ARooKqSbVjre-JASJ4WgGVhi3cQpH95V1HjclfUW7epaiNl2iCSzMQJU-xzeoqgElhN0RjdkoCYC26Jd3BEm0ddwd1FO8ETbfDNqz0JN_15hZ2Q8aPSIXuLtZTswUzBHFbZEiYJ98anhgTeOIp-LpWl2REyUiTpLupI2UmEXvYp6kTf2x7S_JZaeTawHJbKsfrKkY3P6jOyFzByjnRH4OTulHg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3kB_4cbyyaNvYqRDw2bLXb4H2x3YZ1EQt6OY7n6dx5Uo-GHCOfyTiPuOa5WtfRif1yp0pdOVdGbTqhj7_ADpAdjR-A30ZJQZDd0sj0KsjZYgu3F29d6mejKoAEB0q8S-0HC6A-anFbMBhwqUVQJbCNvkYoqlfqbBFceipcQRmcwXXXtOm_GtGVUnH7G4oslNWN1tqAsTIZAV75u3mmXwcroLYFs1dMnGk_LU3n_JMobRPr_Yr5tgw",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBdPewzx2hEbWIA2aa6L3kGmFgxZGbtaCgHLnMtBlOeR4HUwihFPmtucZFYWr64HYjTmhboRcm-ab7MyWrQHiYIF1BekfLlJd_L_VvpPPTGSRnjnjljktLTDIkZOv63vq14XJ7QZh-j34VcnZzK-mspdMD2zFTMC-uN6YuMCmxIgGCeDS6w8bOEotPmjlTLlX6-pgA92wIDh8eV3nsl47Tbfn5KVHbjrEk-RGVZanToQeaYn2_A_HQK6A",
      ],
    },
    {
      title: "Build Digital Asset",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBORgnlxteEKUvkYuZGuYERzPf7PXCK1k6UVsH2haBMXyNi7i15s0y_7rH_5v-1a7uiHdHF9OZi9rWRTRkJEgdZl7MdE-IHrUPNimKU7wh6b1ZA3jYmFgceWQ0ApRcLFXsBuHCtsixNqoOyBrkXQE38s37zZXR7a-3G9nuYIDEQjPcIHGFOVGBHLq73J2FonYEio9reg_j6MY4XKXfCTp8_j1gRo_EMeGRxwu-Jm8O0t2ICcXPnKgrm_w",
      rating: "4.8",
      author: "pumpui studio",
      price: "$25",
      lessons: "12 Lessons",
      duration: "3 hours 10 mins",
      comments: "42 Comments",
      level: "Intermediate",
      students: "18+",
      avatars: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3kB_4cbyyaNvYqRDw2bLXb4H2x3YZ1EQt6OY7n6dx5Uo-GHCOfyTiPuOa5WtfRif1yp0pdOVdGbTqhj7_ADpAdjR-A30ZJQZDd0sj0KsjZYgu3F29d6mejKoAEB0q8S-0HC6A-anFbMBhwqUVQJbCNvkYoqlfqbBFceipcQRmcwXXXtOm_GtGVUnH7G4oslNWN1tqAsTIZAV75u3mmXwcroLYFs1dMnGk_LU3n_JMobRPr_Yr5tgw",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBdPewzx2hEbWIA2aa6L3kGmFgxZGbtaCgHLnMtBlOeR4HUwihFPmtucZFYWr64HYjTmhboRcm-ab7MyWrQHiYIF1BekfLlJd_L_VvpPPTGSRnjnjljktLTDIkZOv63vq14XJ7QZh-j34VcnZzK-mspdMD2zFTMC-uN6YuMCmxIgGCeDS6w8bOEotPmjlTLlX6-pgA92wIDh8eV3nsl47Tbfn5KVHbjrEk-RGVZanToQeaYn2_A_HQK6A",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvxghl-AvU12xSh_amzbYqnFRIBE-ARooKqSbVjre-JASJ4WgGVhi3cQpH95V1HjclfUW7epaiNl2iCSzMQJU-xzeoqgElhN0RjdkoCYC26Jd3BEm0ddwd1FO8ETbfDNqz0JN_15hZ2Q8aPSIXuLtZTswUzBHFbZEiYJ98anhgTeOIp-LpWl2REyUiTpLupI2UmEXvYp6kTf2x7S_JZaeTawHJbKsfrKkY3P6jOyFzByjnRH4OTulHg",
      ],
    },
    {
      title: "The Power of Big Data",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX2ArSJu2HPT8R-tqeY0ScXk7uxWnc_6-rknbJIDR1z9C-SAdp7zzwg7ZVF5zg6s3RsiK8_hVT86IMBwX0I3GBMgAmfAHYOXMMtTkt9D54j75laIWrWuBC8ibaY5A8NpceJud10znfVh_wpp32YTlHLo9qxiGqHDx_P61u4_s5FZGvRKuEtJXOxNq7_iUmvBCTmrMLd2VQFVR9CIA8T_5IbO74Uvjht-DE3gn3FMlkAi-Qg1SpqXkYmw",
      rating: "4.6",
      author: "pumpui studio",
      price: "$25",
      lessons: "20 Lessons",
      duration: "4 hours 5 mins",
      comments: "77 Comments",
      level: "Advanced",
      students: "34+",
      avatars: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBdPewzx2hEbWIA2aa6L3kGmFgxZGbtaCgHLnMtBlOeR4HUwihFPmtucZFYWr64HYjTmhboRcm-ab7MyWrQHiYIF1BekfLlJd_L_VvpPPTGSRnjnjljktLTDIkZOv63vq14XJ7QZh-j34VcnZzK-mspdMD2zFTMC-uN6YuMCmxIgGCeDS6w8bOEotPmjlTLlX6-pgA92wIDh8eV3nsl47Tbfn5KVHbjrEk-RGVZanToQeaYn2_A_HQK6A",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvxghl-AvU12xSh_amzbYqnFRIBE-ARooKqSbVjre-JASJ4WgGVhi3cQpH95V1HjclfUW7epaiNl2iCSzMQJU-xzeoqgElhN0RjdkoCYC26Jd3BEm0ddwd1FO8ETbfDNqz0JN_15hZ2Q8aPSIXuLtZTswUzBHFbZEiYJ98anhgTeOIp-LpWl2REyUiTpLupI2UmEXvYp6kTf2x7S_JZaeTawHJbKsfrKkY3P6jOyFzByjnRH4OTulHg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3kB_4cbyyaNvYqRDw2bLXb4H2x3YZ1EQt6OY7n6dx5Uo-GHCOfyTiPuOa5WtfRif1yp0pdOVdGbTqhj7_ADpAdjR-A30ZJQZDd0sj0KsjZYgu3F29d6mejKoAEB0q8S-0HC6A-anFbMBhwqUVQJbCNvkYoqlfqbBFceipcQRmcwXXXtOm_GtGVUnH7G4oslNWN1tqAsTIZAV75u3mmXwcroLYFs1dMnGk_LU3n_JMobRPr_Yr5tgw",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg",
      ],
    },
    {
      title: "Balancing Productivity an...",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFdZrZrb4WoI2ut0z_4fCezP0U9mZQn_OHn8PLjkmk6gw97T5I4QoeoaYjcSezddn2rUS26sZH2Pij7pmK5FJBbbuTftgJIUSkfDjeMI4rx4TXxHYHGNHP7nn60h_8V6hhr_335QKCrIj4X3mZqxHxV80LKuC_mai13ZngHX54-qLLKwKpmjHejSR8X74_RQhWyJ9FPBkH18Gl9p1BwiNBT4CksHOTiieJEmCwvYIgpux0HT8XFIQmMA",
      rating: "4.5",
      author: "pumpui studio",
      price: "$25",
      lessons: "10 Lessons",
      duration: "1 hour 45 mins",
      comments: "31 Comments",
      level: "Beginner",
      students: "12+",
      avatars: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvxghl-AvU12xSh_amzbYqnFRIBE-ARooKqSbVjre-JASJ4WgGVhi3cQpH95V1HjclfUW7epaiNl2iCSzMQJU-xzeoqgElhN0RjdkoCYC26Jd3BEm0ddwd1FO8ETbfDNqz0JN_15hZ2Q8aPSIXuLtZTswUzBHFbZEiYJ98anhgTeOIp-LpWl2REyUiTpLupI2UmEXvYp6kTf2x7S_JZaeTawHJbKsfrKkY3P6jOyFzByjnRH4OTulHg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3kB_4cbyyaNvYqRDw2bLXb4H2x3YZ1EQt6OY7n6dx5Uo-GHCOfyTiPuOa5WtfRif1yp0pdOVdGbTqhj7_ADpAdjR-A30ZJQZDd0sj0KsjZYgu3F29d6mejKoAEB0q8S-0HC6A-anFbMBhwqUVQJbCNvkYoqlfqbBFceipcQRmcwXXXtOm_GtGVUnH7G4oslNWN1tqAsTIZAV75u3mmXwcroLYFs1dMnGk_LU3n_JMobRPr_Yr5tgw",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBdPewzx2hEbWIA2aa6L3kGmFgxZGbtaCgHLnMtBlOeR4HUwihFPmtucZFYWr64HYjTmhboRcm-ab7MyWrQHiYIF1BekfLlJd_L_VvpPPTGSRnjnjljktLTDIkZOv63vq14XJ7QZh-j34VcnZzK-mspdMD2zFTMC-uN6YuMCmxIgGCeDS6w8bOEotPmjlTLlX6-pgA92wIDh8eV3nsl47Tbfn5KVHbjrEk-RGVZanToQeaYn2_A_HQK6A",
      ],
    },
    {
      title: "Mastering Money Manage...",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvxghl-AvU12xSh_amzbYqnFRIBE-ARooKqSbVjre-JASJ4WgGVhi3cQpH95V1HjclfUW7epaiNl2iCSzMQJU-xzeoqgElhN0RjdkoCYC26Jd3BEm0ddwd1FO8ETbfDNqz0JN_15hZ2Q8aPSIXuLtZTswUzBHFbZEiYJ98anhgTeOIp-LpWl2REyUiTpLupI2UmEXvYp6kTf2x7S_JZaeTawHJbKsfrKkY3P6jOyFzByjnRH4OTulHg",
      rating: "4.5",
      author: "purepearl studio",
      price: "$25",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      students: "26+",
      avatars: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvxghl-AvU12xSh_amzbYqnFRIBE-ARooKqSbVjre-JASJ4WgGVhi3cQpH95V1HjclfUW7epaiNl2iCSzMQJU-xzeoqgElhN0RjdkoCYC26Jd3BEm0ddwd1FO8ETbfDNqz0JN_15hZ2Q8aPSIXuLtZTswUzBHFbZEiYJ98anhgTeOIp-LpWl2REyUiTpLupI2UmEXvYp6kTf2x7S_JZaeTawHJbKsfrKkY3P6jOyFzByjnRH4OTulHg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3kB_4cbyyaNvYqRDw2bLXb4H2x3YZ1EQt6OY7n6dx5Uo-GHCOfyTiPuOa5WtfRif1yp0pdOVdGbTqhj7_ADpAdjR-A30ZJQZDd0sj0KsjZYgu3F29d6mejKoAEB0q8S-0HC6A-anFbMBhwqUVQJbCNvkYoqlfqbBFceipcQRmcwXXXtOm_GtGVUnH7G4oslNWN1tqAsTIZAV75u3mmXwcroLYFs1dMnGk_LU3n_JMobRPr_Yr5tgw",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBdPewzx2hEbWIA2aa6L3kGmFgxZGbtaCgHLnMtBlOeR4HUwihFPmtucZFYWr64HYjTmhboRcm-ab7MyWrQHiYIF1BekfLlJd_L_VvpPPTGSRnjnjljktLTDIkZOv63vq14XJ7QZh-j34VcnZzK-mspdMD2zFTMC-uN6YuMCmxIgGCeDS6w8bOEotPmjlTLlX6-pgA92wIDh8eV3nsl47Tbfn5KVHbjrEk-RGVZanToQeaYn2_A_HQK6A",
      ],
    },
    {
      title: "From Idea to Startup Succ...",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASkg5dsyqWCpFVOyp7C-n0ROXT1h3zPDpLMTyX-NRRy0y34qZcX-wFozZ_YC5GxqbxVIvxYGnKoDFcuaHehvkmar-tGhM42OUnfJns2UzwdlSL2pBREFezHv7WyutKH3W9fC-R6L1ML-pi3rQ1u79W2ZpVvWuhLVQPJtyi6jkIRRsVOANCBUblIbqcvlWyo4SFBpLu2xpNnn0KE0-CDCckj3w6y30etIU27EdgEgZ5OYtMHBwWehwbOw",
      rating: "4.6",
      author: "pumpui studio",
      price: "$25",
      lessons: "14 Lessons",
      duration: "2 hours 50 mins",
      comments: "63 Comments",
      level: "Intermediate",
      students: "22+",
      avatars: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBdPewzx2hEbWIA2aa6L3kGmFgxZGbtaCgHLnMtBlOeR4HUwihFPmtucZFYWr64HYjTmhboRcm-ab7MyWrQHiYIF1BekfLlJd_L_VvpPPTGSRnjnjljktLTDIkZOv63vq14XJ7QZh-j34VcnZzK-mspdMD2zFTMC-uN6YuMCmxIgGCeDS6w8bOEotPmjlTLlX6-pgA92wIDh8eV3nsl47Tbfn5KVHbjrEk-RGVZanToQeaYn2_A_HQK6A",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBcD50QUh3FGCqdMfzQWbeH5816JKHfLzh3swHGLEbAKHe_IMtT8HSNhBr8C82F7qY95smOkqyvhJn1o9-IeO6Sm_IMTqd2cW3h6mn7X5-Z_0wEHgJ4q1V2Uoig6-ItyWus7pDNjEyeUP7Idd8i0m72igUODJLdi81jth_gcG6hSQAXGzQzyDMLuIotHCV3bhVFgeexEPbioUypbp7mSk7jEsP2-Z-IswyiPibziHsYy5x5CzkAF2lOOg",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCDD3kB_4cbyyaNvYqRDw2bLXb4H2x3YZ1EQt6OY7n6dx5Uo-GHCOfyTiPuOa5WtfRif1yp0pdOVdGbTqhj7_ADpAdjR-A30ZJQZDd0sj0KsjZYgu3F29d6mejKoAEB0q8S-0HC6A-anFbMBhwqUVQJbCNvkYoqlfqbBFceipcQRmcwXXXtOm_GtGVUnH7G4oslNWN1tqAsTIZAV75u3mmXwcroLYFs1dMnGk_LU3n_JMobRPr_Yr5tgw",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBEvxghl-AvU12xSh_amzbYqnFRIBE-ARooKqSbVjre-JASJ4WgGVhi3cQpH95V1HjclfUW7epaiNl2iCSzMQJU-xzeoqgElhN0RjdkoCYC26Jd3BEm0ddwd1FO8ETbfDNqz0JN_15hZ2Q8aPSIXuLtZTswUzBHFbZEiYJ98anhgTeOIp-LpWl2REyUiTpLupI2UmEXvYp6kTf2x7S_JZaeTawHJbKsfrKkY3P6jOyFzByjnRH4OTulHg",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white" id="courses">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Discover Your Passion,<br />Build Your Skills
          </h2>
          <p className="mt-4 text-slate-500 text-sm max-w-3xl mx-auto">
            At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different
            fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {tags.map((tag) => (
            <Badge
              key={tag.name}
              className={`h-auto rounded-full border-0 px-4 py-1.5 text-xs font-semibold ${
                tag.active ? "bg-[#ccff00] text-gray-900" : "bg-slate-100 text-slate-600"
              }`}
            >
              {tag.name}
            </Badge>
          ))}
          <span className="px-4 py-1.5 text-xs font-semibold text-blue-600 cursor-pointer">+ More</span>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow flex flex-col overflow-hidden">
              {/* Image Section */}
              <div className="relative w-full h-[190px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                {/* Pills overlaid at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent pt-6 pb-3 px-3">
                  <div className="flex gap-1.5 flex-wrap">
                    <Badge className="h-auto rounded-full border-0 bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-gray-800">{course.lessons}</Badge>
                    <Badge className="h-auto rounded-full border-0 bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-gray-800">{course.duration}</Badge>
                    <Badge className="h-auto rounded-full border-0 bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-gray-800">{course.comments}</Badge>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col flex-1">
                {/* Title + Star */}
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h3 className="font-bold text-slate-900 text-[15px] leading-snug flex-1">{course.title}</h3>
                  <div className="flex items-center gap-0.5 shrink-0">
                    <span className="text-slate-700 text-sm font-bold">{course.rating}</span>
                    <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  </div>
                </div>

                {/* Author in blue */}
                <p className="text-blue-600 text-[11px] font-semibold mb-3">by {course.author}</p>

                {/* Level + Avatars row */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Level pill */}
                  <Badge variant="outline" className="h-auto gap-1 rounded-full border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
                    <svg className="w-3 h-3 fill-current text-slate-500" viewBox="0 0 24 24"><rect x="2" y="14" width="4" height="8" rx="1"/><rect x="10" y="9" width="4" height="13" rx="1"/><rect x="18" y="4" width="4" height="18" rx="1"/></svg>
                    {course.level}
                  </Badge>
                  {/* Overlapping avatar photos */}
                  <div className="flex items-center">
                    <AvatarGroup>
                      {course.avatars.map((av, i) => (
                        <Avatar key={i} size="sm" className="after:hidden">
                          <AvatarImage src={av} alt="student" />
                        </Avatar>
                      ))}
                    </AvatarGroup>
                    <Badge className="ml-1.5 h-auto rounded-full border-0 bg-[#ccff00] px-2 py-0.5 text-[10px] font-bold text-gray-900">{course.students}</Badge>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-auto text-[15px]">
                  <span className="font-extrabold text-blue-600">{course.price}</span>
                  <span className="text-slate-400 font-medium text-xs">/lifetime</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
