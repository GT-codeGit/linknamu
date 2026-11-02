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
    <>
      {/* 글래스 카드 뒤로 은은하게 비치는 장식용 빛 */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#FFC9A8]/50 blur-3xl dark:bg-[#7A3E22]/25" />
        <div className="absolute -right-20 bottom-16 h-80 w-80 rounded-full bg-[#FFE3B8]/60 blur-3xl dark:bg-[#5C3A1E]/25" />
      </div>

      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-10 pt-6 sm:px-8">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        <div className="mt-8 sm:mt-12">
          <ProfileHeader name={profile.name} bio={profile.bio} image={profile.image} />
        </div>
        <ul className="mt-12 flex flex-col gap-4 sm:gap-5">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} clicks={hasCounts ? counts[link.id] ?? 0 : undefined} />
            </li>
          ))}
        </ul>
        <footer className="mt-auto pt-16 text-center text-xs tracking-wide text-stone-400 dark:text-stone-500">
          링크나무
        </footer>
      </main>
    </>
  );
}
