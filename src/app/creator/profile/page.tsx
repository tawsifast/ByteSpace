import CreatorProfilePage from "../[id]/page";

export default function ProfileFallbackPage() {
  const dummyParams = Promise.resolve({
    id: "purepixel-studio",
  });
  return <CreatorProfilePage params={dummyParams} />;
}
