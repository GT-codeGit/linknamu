import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";
import { getClickCounts } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export default async function Home() {
  // DB가 설정되지 않았거나 연결에 실패해도 페이지는 그대로 보여줍니다.
  const counts = await getClickCounts().catch(() => ({}) as Record<string, number>);
  const hasCounts = !!process.env.MONGODB_URI;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-6">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <div className="mt-4">
        <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
      </div>
      <ul className="mt-12 flex flex-col gap-6">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} clicks={hasCounts ? counts[link.id] ?? 0 : undefined} />
          </li>
        ))}
      </ul>
      <footer className="mt-auto pt-12 text-center text-xs text-gray-400">링크나무</footer>
    </main>
  );
}
