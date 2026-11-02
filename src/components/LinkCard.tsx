"use client";

import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  clicks?: number;
};

export default function LinkCard({ link, clicks }: Props) {
  const recordClick = () => {
    const body = JSON.stringify({ id: link.id });
    // 새 탭으로 이동해도 요청이 끊기지 않도록 sendBeacon을 우선 사용합니다.
    if (!navigator.sendBeacon?.("/api/clicks", new Blob([body], { type: "application/json" }))) {
      fetch("/api/clicks", { method: "POST", body, keepalive: true }).catch(() => {});
    }
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="relative flex w-full items-center justify-center rounded-3xl border border-white/70 bg-white/45 px-6 py-[18px] text-[15px] font-semibold text-stone-800 shadow-[0_8px_30px_-12px_rgba(140,70,30,0.25)] backdrop-blur-xl transition duration-300 ease-out hover:border-white/90 hover:bg-white/65 hover:shadow-[0_12px_34px_-12px_rgba(140,70,30,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E89A6C]/60 motion-safe:hover:-translate-y-px dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] dark:hover:border-white/20 dark:hover:bg-white/[0.1]"
    >
      <span>{link.title}</span>
      {clicks !== undefined && (
        <span className="absolute right-6 text-xs font-medium tabular-nums text-stone-500 dark:text-stone-400">
          {clicks.toLocaleString()} 클릭
        </span>
      )}
    </a>
  );
}
