import CourseDetailsPage from "../[slug]/page";

export default function ReviewsFallbackPage() {
  const dummyParams = Promise.resolve({
    slug: "build-digital-asset-a-comprehensive-guide",
  });
  const dummySearchParams = Promise.resolve({
    tab: "reviews",
  });
  return <CourseDetailsPage params={dummyParams} searchParams={dummySearchParams} />;
}
