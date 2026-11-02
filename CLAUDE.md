# 링크나무 (Link in Bio 서비스)

## 프로젝트 개요

Linktree처럼 내 모든 링크를 한 페이지에 모아두고
하나의 URL로 공유할 수 있는 서비스입니다.

## 기술 스택

- Next.js 14 (App Router)
- Tailwind CSS
- MongoDB Atlas (클릭 수 저장)
- Vercel (배포)

## 주요 기능

- 프로필 표시 (이름, 소개, 사진)
- 링크 카드 목록
- 다크모드 토글
- 링크 클릭 수 집계

## 코드 규칙

- TypeScript 사용
- 컴포넌트는 src/components/ 아래에 작성
- 환경 변수는 .env.local에 저장 (절대 커밋하지 않음)
- 모바일 우선 반응형 디자인

@wireframe.png 모양에 맞추어서 메인 페이지(src/app/page.tsx)를 교체해 줘.
상단에 원형 프로필 사진과 이름 한 줄 소개,
아래에는 3개의 링크 카드(GitHub, LinkedIn, Blog)를 세로로 배치해 줘.
내용과 사진은 일단 보여 주기용 더미 값으로 채워 두고,
진짜 내용은 나중에 채울 거야.