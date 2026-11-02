export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 아래 경로 또는 next.config.mjs에 허용된 외부 URL. 비워두면 이름 첫 글자로 아바타를 표시합니다.
  image?: string;
  links: LinkItem[];
};

// TODO: 보여 주기용 더미 값입니다. 실제 이름·소개·사진·링크로 교체하세요.
export const profile: Profile = {
  name: "김길동",
  bio: "AI 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  image: "/profile.png",
  links: [
    { id: "github", title: "🐙 깃허브", url: "https://github.com" },
    { id: "blog", title: "✍️ 블로그", url: "https://blog.naver.com/" },
    { id: "email", title: "📩 이메일", url: "https://www.naver.com/" },
  ],
};
