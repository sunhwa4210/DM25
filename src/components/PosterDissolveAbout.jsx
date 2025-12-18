import React, { useEffect, useRef, useState } from "react";
import "./PosterDissolveAbout.css";
import Poster from "../assets/img/poster.png";
import PosterWhite from "../assets/img/posterWhite.png";

function InfoContent() {
  return (
    <div className="info-columns">
      {/* 여기에는 너 About.jsx에 있던 InfoContent 그대로 붙여넣기 */}
      {/* LEFT COLUMN */}
      <div className="info-col info-left">
        <div className="info-chip">(Info)</div>
        <p>서울여자대학교 디지털미디어학과</p>
        <p>제8회 졸업전시회</p>
        <p>Seoul Women’s University</p>
        <p>Digital Media Design and Applications</p>
        <p>The 8th Graduation Exhibition</p>

        <div className="info-chip">(Title)</div>
        <p>&lt;NULL&gt; is not Empty</p>
        <p>: 무엇이든 될 수 있는 상태</p>

        <div className="info-chip">(Date)</div>
        <p>2025.12.19 - 12.22</p>
        <p>Fri - Sun 10:00 - 18:00</p>
        <p>Mon 10:00 - 13:00</p>
        <p>* Opening Fri 15:00</p>

        <div className="info-chip">(Location)</div>
        <p>언더스탠드에비뉴 아트스탠드</p>
        <p>서울특별시 성동구 뚝섬로 63</p>
        <p>대한민국</p>
        <p>Understand Avenue Artstand,</p>
        <p>63, Wangsimni-ro, Seongdong-gu,</p>
        <p>Seoul, Republic of Korea</p>

        <div className="info-chip">(Online Exhibition)</div>
        <p>www.swudm25.com</p>
        <p>IG @swu_dm_2025</p>
      </div>

      {/* RIGHT COLUMN */}
      <div className="info-col info-right">
        <div className="info-content-title">
          서울여자대학교 디지털미디어학과 제8회 졸업전시회 &lt;NULL is not Empty&gt; : 무엇이든 될 수 있는 상태
        </div>

        <div className="info-content-text">
          NULL’이란 프로그래밍에서 변수가 선언되었지만 아직 어떤 값도 참조하지 않는 상태를 의미한다. 이는 단순한
          공허가 아니라, 아직 정의되지 않았기에 “무엇이든 될 수 있는 상태”로 이해할 수 있다. 졸업을 거쳐 다음
          단계로 나아가고 있는 지금의 우리는 이와 닮아 있다. 아직 어떤 이름도 붙지 않았고, 어떤 위치에도 고정되지
          않았기에, 어떤 이름이든 가질 수 있고 어떤 형태로도 확장될 수 있다. &lt;NULL is not empty&gt;는 이러한
          ‘NULL’의 상태에서 출발한다. 겉보기에 값이 없는 듯 보이지만, 그 속에서 우리는 새로운 시작을 발견했다.
          각자의 방식으로 잠재력에 대해 질문하고, 할당될 수 있는 객체들을 탐색하며, 새로운 형태와 의미를
          만들어가는 과정을 통해 우리는 스스로를 다시 정의해 왔다. 그렇게 도출된 다양한 가능성 속에서 전시는
          완성된다. 각자의 시간과 해석을 바탕으로 정의되지 않은 것들이 서로 연결되고, 공백처럼 보이는 자리들이
          의미로 채워지며, 하나의 결과를 이루는 과정을 이 전시에 담았다. 그 여정을 통해, 가능성은 새로운 정의로
          남게 되었다. 그 새로운 정의가 전달되기를 기대한다.
        </div>

        <div className="info-content-text">
          In programming, 'NULL' refers to a variable that has been declared but doesn't yet hold a value. It's not
          simply empty—it's undefined, full of potential to become anything. As recent graduates, we find ourselves in a
          similar state. Without fixed roles or identities, we are open to endless possibilities. "NULL is not empty"
          begins from this idea...
        </div>

        {/* Professors ... (너가 가진 부분 그대로) */}

        {/* credits ... (너가 가진 부분 그대로) */}
      </div>
    </div>
  );
}

export default function PosterDissolveAbout() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.55 }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="aboutDissolve">
      {/* 배경색도 단계별로 하드컷 */}
      <div
        className={`aboutBg ${activeIndex === 0 ? "bg-blue" : ""} ${
          activeIndex === 1 ? "bg-white" : ""
        } ${activeIndex === 2 ? "bg-gray" : ""}`}
      />

      {/* 포스터 스테이지(고정) */}
      <div className={`aboutStage ${activeIndex === 2 ? "stage-lift" : ""}`}>
        {/* 0단계: 파랑 */}
        <div
          className={`posterLayer ${activeIndex === 0 ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${Poster})` }}
        />
        {/* 1~2단계: 흰 포스터 */}
        <div
          className={`posterLayer ${activeIndex >= 1 ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${PosterWhite})` }}
        />

        {/* 2단계: InfoContent 오버레이 */}
        <div className={`infoOverlay ${activeIndex === 2 ? "is-active" : ""}`}>
          <InfoContent />
        </div>
      </div>

      {/* 스크롤 트랙(3장) */}
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
