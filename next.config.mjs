/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 프로필 사진에 쓰는 외부 이미지 호스트
    remotePatterns: [{ protocol: "https", hostname: "placehold.co" }],
  },
};

export default nextConfig;
