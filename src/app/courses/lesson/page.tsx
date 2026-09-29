import CourseDetailsPage from "../[slug]/page";

export default function LessonFallbackPage() {
  const dummyParams = Promise.resolve({
    slug: "build-digital-asset-a-comprehensive-guide",
  });
  const dummySearchParams = Promise.resolve({
    tab: "lessons",
  });
  return <CourseDetailsPage params={dummyParams} searchParams={dummySearchParams} />;
}
