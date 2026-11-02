export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  // public/ 아래 이미지 경로. 비워두면 이름 첫 글자로 아바타를 표시합니다.
  image?: string;
  links: LinkItem[];
};

// TODO: 보여 주기용 더미 값입니다. 실제 이름·소개·사진·링크로 교체하세요.
export const profile: Profile = {
  name: "김길동",
  bio: "세계 최강 바이브코더",
  image: "/profile-placeholder.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://velog.io" },
  ],
};
