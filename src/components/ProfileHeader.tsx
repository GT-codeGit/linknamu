import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={160}
          height={160}
          className="h-40 w-40 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
          priority
        />
      ) : (
        <div
          aria-hidden
          className="flex h-40 w-40 items-center justify-center rounded-full bg-emerald-100 text-4xl font-bold text-emerald-700 ring-2 ring-gray-200 dark:bg-emerald-900 dark:text-emerald-200 dark:ring-gray-700"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-xl font-bold tracking-widest">{name}</h1>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{bio}</p>
    </header>
  );
}
