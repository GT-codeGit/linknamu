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
      className="relative flex w-full items-center justify-center rounded-2xl border border-gray-300 bg-white px-5 py-4 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
    >
      <span>{link.title}</span>
      {clicks !== undefined && (
        <span className="absolute right-5 text-xs text-gray-500 dark:text-gray-400">{clicks.toLocaleString()} 클릭</span>
      )}
    </a>
  );
}
