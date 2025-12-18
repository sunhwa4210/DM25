import React, { useEffect, useRef, useState } from "react";
import "./PosterDissolve.css";
import Poster from "../assets/img/poster.png"; 

export default function PosterDissolve() {
  // 지금 몇 번째 단계인지 (0 → 1 → 2)
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    // 스크롤하면서 어떤 구간에 있는지 알려주는 도구
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx); // 0,1,2로 상태 바꾸기
          }
        });
      },
      { threshold: 0.5 } // 섹션의 50% 이상 보이면 그 구간으로 인식
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="posterDissolve">
      {/* ① 포스터 레이어 3개 (모두 같은 이미지 사용) */}
      <div
        className={`posterLayer layer1 ${
          activeIndex === 0 ? "is-active" : ""
        }`}
        style={{ backgroundImage: `url(${Poster})` }}
      />
      <div
        className={`posterLayer layer2 ${
          activeIndex === 1 ? "is-active" : ""
        }`}
        style={{ backgroundImage: `url(${Poster})` }}
      />
      <div
        className={`posterLayer layer3 ${
          activeIndex === 2 ? "is-active" : ""
        }`}
        style={{ backgroundImage: `url(${Poster})` }}
      />

      {/* ② 스크롤 구간(빈 영역 3장) */}
      <div className="scrollTrack">
        {[0, 1, 2].map((i) => (
          <section
            key={i}
            className="scrollStep"
            data-index={i}
            ref={(el) => (stepRefs.current[i] = el)}
          />
        ))}
      </div>
    </div>
  );
}
