import CourseDetailsPage from "../[slug]/page";

export default function DetailsFallbackPage() {
  const dummyParams = Promise.resolve({
    slug: "build-digital-asset-a-comprehensive-guide",
  });
  return <CourseDetailsPage params={dummyParams} />;
}
