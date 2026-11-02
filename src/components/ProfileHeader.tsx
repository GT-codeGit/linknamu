import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

// 흰 테두리 + 따뜻한 그림자로 사진이 배경 위에 살짝 떠 보이게 합니다.
const avatarClass =
  "h-32 w-32 rounded-full ring-4 ring-white/80 shadow-[0_18px_40px_-12px_rgba(140,70,30,0.45)] sm:h-36 sm:w-36 dark:ring-white/10 dark:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.7)]";

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={144}
          height={144}
          className={`${avatarClass} object-cover`}
          priority
        />
      ) : (
        <div
          aria-hidden
          className={`${avatarClass} flex items-center justify-center bg-gradient-to-br from-[#FFD9BF] to-[#F6B48F] text-4xl font-bold text-white`}
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">{name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">{bio}</p>
    </header>
  );
}
