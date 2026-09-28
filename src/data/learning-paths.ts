export type LearningPath = {
  label: string;
  courseCount: string;
  icon: "palette" | "code" | "trend" | "barChart" | "robot" | "camera";
};

export const learningPaths: LearningPath[] = [
  { label: "Design", courseCount: "120 Courses", icon: "palette" },
  { label: "Development", courseCount: "210 Courses", icon: "code" },
  { label: "Business", courseCount: "95 Courses", icon: "trend" },
  { label: "Marketing", courseCount: "84 Courses", icon: "barChart" },
  { label: "Data & AI", courseCount: "110 Courses", icon: "robot" },
  { label: "Photo / Video", courseCount: "65 Courses", icon: "camera" },
];
