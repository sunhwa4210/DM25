import { useState, useEffect } from "react";

export function useMediaQuery(query) {
  // 현재 화면이 query를 만족하는지 계산하는 함수
  const getMatches = (query) => {
    // SSR 대비용 (혹시 window 없는 환경에서 에러 방지)
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  // 초기값을 useState에서 바로 계산
  const [matches, setMatches] = useState(() => getMatches(query));

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);

    // 외부 시스템(window.matchMedia)의 변화에 반응하는 콜백
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    // 리스너 등록
    mediaQuery.addEventListener("change", handleChange);

    // 정리
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
