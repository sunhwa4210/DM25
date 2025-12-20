// src/pages/about.jsx
import React, { useEffect, useRef, useState } from "react";
import lottieWeb from "lottie-web";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./about.css";

import Poster from "../assets/img/poster.png";
import PosterWhite from "../assets/img/posterWhite.png";
import BottomIcon from "../assets/img/bottom.svg";
import particlesDefaultWhite from "../assets/particle/particles-default-white.json";
import particlesDefaultBlue from "../assets/particle/particles-default-blue.json";
import particlesExclusion from "../assets/particle/particles-exclusion.json";

function InfoContent() {
  return (
    <div className="info-columns">
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
          begins from this idea. Though it may seem meaningless, we've found in this state the potential for new
          beginnings. We questioned, explored, and redefined ourselves through the creation of new forms and meanings.
          This exhibition reflects that journey—where undefined ideas come together, empty spaces gain meaning, and the
          process becomes as important as the result. Through this, possibility takes on a new meaning. We hope that
          meaning reaches you.
        </div>

        {/* Professors */}
        <div className="professor">
          <div className="prof-card">
            <div className="pName">Prof. 이기한</div>
            <div className="pText">
              여러분의 뜨거운 열정과 깊은 고민이 담긴 멋진 결실을 마주하고 있습니다. 지난 시간 동안 문제를
              자신만의 시각으로 정의하고, 그것을 해결하기 위해 밤낮없이 몰두하는 강인함을 보여주었습니다. 이 강인한
              모습이야말로 여러분의 가장 큰 무기입니다. 졸업 후 마주할 세상은 지금보다 더 크고 어려움이 있겠지만, 이
              전시를 준비하며 보여준 에너지와 멈추지 않는 탐구심을 변함없이 간직하시기를 바랍니다. 여러분은 이미
              스스로에게 높은 기준을 제시하고, 그것을 달성해내는 훌륭한 습관을 가졌습니다. 이 소중한 습관과 지금의
              빛나는 열정을 그대로 유지하며 나아간다면, 여러분이 꿈꾸는 모든 길은 성공으로 이어질 것입니다.
            </div>
          </div>

          <div className="prof-card">
            <div className="pName">Prof. 고혜영</div>
            <div className="pText">
벌써 지금 이제 전시를 하는 친구들은 4년 최소 4년의 과정을 지금 거의 달려온 거네. 
아마 그 사이에 고민도 되게 많았을 거고 본인이 뭘 해야 될까 그리고 또 앞으로 우리 사회가 지금 이미 1학년 때 들어왔을 때부터 지금과 비교를 해도 너무 기술 환경이나 산업이나 사회도 그렇고 많이 변해 있거든요. 아마 그리고 지금 1학년들이 그때 코로나 때 입학하지 않았나. 그랬었죠. <br></br><br></br>

그러니까 제가 제일 걱정했던 게 코로나 때문에 수업을 한 번도 이렇게 대면을 하지 못했던 친구들이 학교에 잘 적응할 수 있을까 이런 걱정도 많이 했었는데 다행히 또 졸업할 때 이렇게 모든 게 다 풀려가지고 학생들이 이제 좀 자유롭게 뭔가 할 수 있는 건 참 좋은 것 같다는 생각이 들고 감사하게 생각하고 아마 어쨌든 코로나부터 다양한 환경들을 많이 겪어가지고 힘들게 지금 왔지만은 사실은 내가 힘들었던 것만큼 내가 할 수 있는 게 더 많아질 거다. 그리고 특히 이번에 졸전하면서도 해결해야 될 문제들이 한두 가지가 아니었을 거예요. 그냥 단순 개발의 문제가 아니라 지금 기획서도 써야죠. 논문도 써야 되고 전시를 하려니까 디자인도 해야 되고 여러 가지 문제점들이 여러 가지 해야 될 일들이 있는데 이런 것들을 어렵지만 해낼 때 이 사람들은 성장한다. <br></br><br></br>

그래서 제가 저는 제가 항상 모토로 삼는 게 뭐냐 하면 내가 하는 모든 경험 많은 실패를 포함해서 모든 경험은 하나도 버릴 게 없다라는 거, 그게 제가 생각하는 가장 큰, 항상 새겨서 생각하는 건데 우리 학생들이 지금까지 엄청 다양한 경험들을 해왔고 다양한 분야를 공부해 왔는데 이게 정말로 본인들한테는 엄청난 경쟁력이 될 거고 지금은 학교 안에 있기 때문에 우리가 외부랑 비교를 못해서 그렇지 이 졸전을 끝내고 아마 사회에 나가게 되면 정말로 인정받고 또 환영받는 사람이 될 거다라는 생각이 듭니다. 진짜예요.  그래서 그래서 학생들에게 좀 그런 희망적인 이제 우리한테 이제 꽃길이 기다리고 있다. 그러니까 좀 즐거운 마음으로 마지막까지 최선을 다했으면 좋겠다라고 얘기해 주시면 좋겠습니다.
            </div>
          </div>

          <div className="prof-card">
            <div className="pName">Prof. 강승석</div>
            <div className="pText">
입학을 하며 뿌린 씨앗들을 4년의 보살핌과 주변과 환경의 도움으로 
드디어 추수하는 계절이 왔습니다.
그 열매들을 최종 발표를 통해 보면서 잘 자란 곡식들이라는 생각을 했습니다.
풍요로운 수확을 잘 즐기시고, 졸업 이후 새로운 해에 맞이하게 될 세상이라는 환경에서도
좋은 씨앗을 뿌리시고 경험이라는 거름도 활용하면서 정성껏 가꾸어 나갈 수 있기를 소망합니다.
지금까지 모두들 수고 많이 하셨고 앞으로의 여정에서도 좋은 만남과 계속되는 배움이 함께 하기를 기원합니다.
            </div>
          </div>

                    <div className="prof-card">
            <div className="pName">Prof. 최종인</div>
            <div className="pText">
두 학기에 걸친 긴 작업을 마무리 하고 졸업 전시를 하게 된 여러분들 모두 수고하셨습니다.
졸업 작품을 만들기 위해 맨 땅에 해딩하며 고군분투 했을 여러분들의 모습이 눈에 선합니다.
이제 그 노력의 결과물이 나왔으니 그간의 회포를 풀고 서로를 축하해주는 자리가 되었으면 합니다.
졸업 전시에 참여한다는 것은 자신의 노력을 인정 받았음과 동시에 졸업 자격을 얻었음을 의미합니다.
졸업까지 남아있는 시간을 사회로 진출하기 위한 시간으로 효율적으로 사용하시길 바랍니다.
여러분들이 사회에 진출하면 학과 특성상 매우 다양한 곳에서 활약하며 경험을 쌓아나갈 것입니다.
때로는 낯설고 힘든 시간을 맞이할 수 있습니다만, 서로간에 힘이 되어주는 동료 및 선후배들이 되시길 바랍니다.
다시 한번 졸업 전시회를 성공적으로 준비한 예비 졸업생 여러분들과 학생들을 위해 헌신하신 교수님들께도 감사의 말씀을 전합니다.
여러분들의 앞날에 무궁한 발전과 행운이 가득하기를 기원합니다.
머나먼 이국 땅에서 최종인 드림
            </div>
          </div>

                    <div className="prof-card">
            <div className="pName">Prof. 박수이</div>
            <div className="pText">
졸업전을 진심으로 축하해요.
여기까지 오는 시간 동안 여러분 각자에게 쉽지 않은 순간들이 분명 있었을 텐데, 그 모든 시간을 버텨내고 오늘 이 자리에 선 여러분이 정말 자랑스럽습니다. 끝까지 곁에서 함께하지 못한 미안함은 마음 남아 있지만, 그럼에도 저는 지금 이 순간의 여러분이 너무나 대견하고 고맙습니다. 앞으로 어떤 길을 가든, 스스로를 조금 더 아껴주시며 “나는 꽤 잘 해내고 있구나” 하고 느끼며 살아가길 바랍니다.
여러분의 새로운 시작을 진심으로 축복하며, 언제나 응원의 마음으로 함께하겠습니다.
            </div>
          </div>


        </div>

        {/* 교수진 + 졸업전시준비위원회 */}
        <div className="credits">
          <div className="credits-block">
            <div className="credits-title">교수진</div>
            <div className="credits-names">
              <span>이기한</span>
              <span>고혜영</span>
              <span>최종인</span>
              <span>박수이</span>
            </div>
          </div>

          <div className="credits-block">
            <div className="credits-title">졸업전시준비위원회</div>

            <div className="committee-list">
              <div className="committee-row">
                <div className="committee-role">위원장</div>
                <div className="committee-names">한인우</div>
              </div>

              <div className="committee-row">
                <div className="committee-role">부위원장</div>
                <div className="committee-names">이서연</div>
              </div>

              <div className="committee-row">
                <div className="committee-role">기획팀</div>
                <div className="committee-names">장세희&nbsp;&nbsp;&nbsp;김채민&nbsp;&nbsp;&nbsp;홍재원</div>
              </div>

              <div className="committee-row">
                <div className="committee-role">재정팀</div>
                <div className="committee-names">윤지수&nbsp;&nbsp;&nbsp;김은진</div>
              </div>

              <div className="committee-row">
                <div className="committee-role">홍보팀</div>
                <div className="committee-names">최서정&nbsp;&nbsp;&nbsp;남소빈</div>
              </div>

              <div className="committee-row">
                <div className="committee-role">그래픽팀</div>
                <div className="committee-names">김나윤&nbsp;&nbsp;&nbsp;구름&nbsp;&nbsp;&nbsp;이유림</div>
              </div>

              <div className="committee-row">
                <div className="committee-role">온라인 전시팀</div>
                <div className="committee-names">김선화&nbsp;&nbsp;&nbsp;이채민</div>
              </div>

              <div className="committee-row">
                <div className="committee-role">전시조성팀</div>
                <div className="committee-names">
                  박도희&nbsp;&nbsp;&nbsp;강영은&nbsp;&nbsp;&nbsp;구유나&nbsp;&nbsp;&nbsp;류민주
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT COLUMN 닫힘 */}
    </div>
  );
}

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);
  const infoSectionRef = useRef(null);
  const [infoVisible, setInfoVisible] = useState(false);
  // 파티클 컨테이너
  const mainParticleRef = useRef(null);
  const mainExclusionRef = useRef(null);
  const subParticleRef = useRef(null);
  const subExclusionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number(entry.target.dataset.index);
          setActiveIndex(idx);
        });
      },
      { threshold: 0.55 }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 인포 섹션 등장 감지 -> 파티클 숨김
  useEffect(() => {
  const load = (container, data, blend) => {
    if (!container) return null;

    container.innerHTML = "";

    const anim = lottieWeb.loadAnimation({
      container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice", // ✅ 화면 꽉 채우기(잘림 허용)
      },
    });

    if (blend) container.style.mixBlendMode = blend;

    // ✅ 배포에서 첫 렌더 타이밍 보정
    requestAnimationFrame(() => anim.resize());
    setTimeout(() => anim.resize(), 50);

    return anim;
  };

  const a1 = load(mainParticleRef.current, particlesDefaultWhite);
  const a2 = load(mainExclusionRef.current, particlesExclusion, "exclusion");
  const b1 = load(subParticleRef.current, particlesDefaultBlue);
  const b2 = load(subExclusionRef.current, particlesExclusion, "exclusion");

  const anims = [a1, a2, b1, b2].filter(Boolean);

  const onResize = () => anims.forEach((a) => a.resize && a.resize());
  window.addEventListener("resize", onResize);

  // ✅ 마운트 직후에도 한 번 더
  onResize();

  return () => {
    window.removeEventListener("resize", onResize);
    anims.forEach((a) => a?.destroy?.());
  };
}, []);


  return (
    <>
      <Header />

      <main className="aboutWrap">
        {/* 단계별 배경 */}
        <div
          className={`aboutBg ${
            activeIndex === 0 ? "bg-blue" : activeIndex === 1 ? "bg-white" : "bg-gray"
          }`}
        />

        {/* 고정 무대(포스터) */}
        <div className={`stageFixed ${activeIndex === 2 ? "lift" : ""}`}>
          {/* 0단계: 파란 포스터 */}
          <div
            className={`posterLayer ${activeIndex === 0 ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${Poster})` }}
          />

          {/* 1~2단계: 흰 포스터 */}
          <div
            className={`posterLayer ${activeIndex >= 1 ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${PosterWhite})` }}
          />

          {/* 파티클 오버레이 (Case A) */}
          <div className="particle-global">
            <div
              className="particle-layer"
              style={{ opacity: infoVisible ? 0 : activeIndex === 0 ? 1 : 0 }}
            >
              <div className="particle-canvas" ref={mainParticleRef} />
              <div className="particle-canvas exclusion" ref={mainExclusionRef} />
            </div>
            <div
              className="particle-layer"
              style={{ opacity: infoVisible ? 0 : activeIndex >= 1 ? 1 : 0 }}
            >
              <div className="particle-canvas" ref={subParticleRef} />
              <div className="particle-canvas exclusion" ref={subExclusionRef} />
            </div>
          </div>

          {/* 스크롤 안내 아이콘 (1~2 단계에서 표시) */}
          {(activeIndex === 0 || activeIndex === 1) && (
            <div className="scroll-hint">
              <img src={BottomIcon} alt="scroll down" />
            </div>
          )}
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

        {/* 인포 섹션: 포스터 이후 본문 영역 */}
        <section className="info-section" ref={infoSectionRef}>
          <InfoContent />
        </section>
      </main>

      <Footer />
    </>
  );
}
