import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { getClickCounts, incrementClick } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json(await getClickCounts());
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "failed to load counts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const { id } = (await req.json().catch(() => ({}))) as { id?: string };
  // 등록된 링크만 집계해서 임의의 키가 쌓이지 않도록 합니다.
  if (!id || !profile.links.some((l) => l.id === id)) {
    return NextResponse.json({ error: "unknown link" }, { status: 400 });
  }
  try {
    const saved = await incrementClick(id);
    return NextResponse.json({ ok: true, saved });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "failed to record click" }, { status: 500 });
  }
}
