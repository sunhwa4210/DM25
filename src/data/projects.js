import bunkeratThumb from "../assets/img/thumnails/bunkerat.jpg";
import climbyThumb from "../assets/img/thumnails/climby.jpg";
import clockThumb from "../assets/img/thumnails/clock.jpg";
import dalThumb from "../assets/img/thumnails/dal.jpg";
import dayzipThumb from "../assets/img/thumnails/dayzip.jpg";
import dodadaThumb from "../assets/img/thumnails/dodada.png";
import dotThumb from "../assets/img/thumnails/dot.jpg";
import feelEmThumb from "../assets/img/thumnails/feel'em.jpg";
import fourThumb from "../assets/img/thumnails/four.jpg";
import livroomThumb from "../assets/img/thumnails/livroom.jpg";
import muThumb from "../assets/img/thumnails/mu.jpg";
import mufeThumb from "../assets/img/thumnails/mufe.jpg";
import nuboThumb from "../assets/img/thumnails/nubo.jpg";
import presThumb from "../assets/img/thumnails/pres.png";
import rallyThumb from "../assets/img/thumnails/rally.jpg";
import sketchThumb from "../assets/img/thumnails/sketch.jpg";
import talkThumb from "../assets/img/thumnails/talk.png";
import bunkeratCover from "../assets/img/cover/bunkerat_cover.jpg";
import climbyCover from "../assets/img/cover/climby_cover.jpg";
import clockCover from "../assets/img/cover/clock_cover.jpg";
import dalCover from "../assets/img/cover/dal_cover.jpg";
import dayzipCover from "../assets/img/cover/dayzip_cover.jpg";
import dodadaCover from "../assets/img/cover/dodada_cover.jpg";
import dotCover from "../assets/img/cover/dot_cover.jpg";
import feelEmCover from "../assets/img/cover/feel'em_cover.jpg";
import fourCover from "../assets/img/cover/four_cover.jpg";
import livroomCover from "../assets/img/cover/livroom_cover.jpg";
import muCover from "../assets/img/cover/mu_cover.jpg";
import mufeCover from "../assets/img/cover/mufe_cover.jpg";
import nuboCover from "../assets/img/cover/nubo_cover.jpg";
import presCover from "../assets/img/cover/pres_cover.png";
import rallyCover from "../assets/img/cover/rally_cover.jpg";
import sketchCover from "../assets/img/cover/sketch_cover.jpg";
import talkCover from "../assets/img/cover/talk_cover.png";
import bunkeratContent from "../assets/img/contents/bunkerat_content.jpg";
import climbyContent from "../assets/img/contents/climby_content.jpg";
import clockContent from "../assets/img/contents/clock_content.jpg";
import dalContent from "../assets/img/contents/dal_content.jpg";
import dayzipContent from "../assets/img/contents/dayzip_content.jpg";
import dodadaContent from "../assets/img/contents/dodada_content.jpg";
import dotContent from "../assets/img/contents/dot_content.jpeg";
import feelEmContent from "../assets/img/contents/feel'em_content.jpg";
import fourContent from "../assets/img/contents/four_content.jpg";
import livroomContent from "../assets/img/contents/livroom_content.jpg";
import muContent from "../assets/img/contents/mu_content.jpg";
import mufeContent from "../assets/img/contents/mufe_content.jpg";
import nuboContent from "../assets/img/contents/nubo_content.jpg";
import presContent from "../assets/img/contents/pres_content.png";
import rallyContent from "../assets/img/contents/rally_content.jpg";
import sketchContent from "../assets/img/contents/sketch_content.jpg";
import talkContent from "../assets/img/contents/talk_content.png";

export const PROJECTS = [
  {
    id: "p1",
    title: "말뭉치",
    category: "app",
    subDescription: "사회초년생을 위한 어휘력 및 문해력 학습 서비스",
    description: `말뭉치는 비즈니스 대화와 문서 작성에 어려움을 겪는 사회초년생을 위한 멀티 플랫폼 학습 서비스이다.
기본적인 어휘력부터 업무와 일상에서 자주 사용하는 표현, 회의나 보고서에서 요구되는 문장까지 차근차근 기를 수 있도록 앱과 웹을 통해 다양한 학습 경험을 제공한다.
오늘의 학습, 간단한 퀴즈, AI 대화, 긴 글을 읽고 쓰는 활동을 통해 사용자는 자신의 속도에 맞춰 언어 감각을 자연스럽게 확장할 수 있다.
말뭉치는 단순히 지식을 쌓는 데 그치지 않고, 업무와 생활에서 바로 활용할 수 있는 언어 능력을 기르는 것을 목표로 한다.`,
    teamName: "말뭉치",
    members: [
      {
        nameKr: "김예원",
        nameEn: "Yewon Kim",
        role: "Web Full stack",
        email: "ymh20804@naver.com",
        link: "https://github.com/Malmungchi-2025",
      },
      {
        nameKr: "김은진",
        nameEn: "Eunjin Kim",
        role: "designer / PM",
        email: "keunjiin@naver.com",
        link: "",
      },
      {
        nameKr: "송정연",
        nameEn: "Jungyeon Song",
        role: "PM / designer",
        email: "thdwjddus243@naver.com",
        link: "@yeon.pili",
      },
      {
        nameKr: "이가은",
        nameEn: "Gaeun Lee",
        role: "PM/designer",
        email: "gaeunyiya@naver.com",
        link: "",
      },
      {
        nameKr: "채윤지",
        nameEn: "Yunzi Chea",
        role: "Android Full-stack",
        email: "katete051@naver.com",
        link: "https://github.com/KateteDeveloper",
      },
    ],
    thumbnail: talkThumb,
    cover: talkCover,
    content: talkContent,
  },
  {
    id: "p2",
    title: "Day.zip",
    category: "app",
    subDescription: "감정 표현이 어려운 사람을 위한 AI 기반 감정 루틴 일기 앱",
    description: `현대인은 바쁜 일상 속에서 자신의 감정을 놓치기 쉽다. 특히 MZ세대는 자기 돌봄에 대한 관심은 높지만 감정을 말로 풀거나 꾸준히 기록하는 데 어려움을 겪는다.
Day.zip은 이런 문제에서 출발한 감정 루틴 앱이다. 텍스트 대신 시각적이고 감성적인 인터랙션으로 감정을 꺼내 정리하게 돕고, 하루의 기분을 매일 짧게 부담 없이 체크하도록 돕는다.
감정 인식이 일상에 스며들어 자연스러운 회고와 자기 돌봄의 첫걸음을 안내할 것이다.`,
    teamName: "그림이다했조",
    members: [
      {
        nameKr: "권주영",
        nameEn: "Jooyoung Kwon",
        role: "front-end & back-end",
        email: "kwonjy2003@gmail.com",
        link: "https://github.com/jooyumm",
      },
      {
        nameKr: "김선화",
        nameEn: "Sunhwa Kim",
        role: "front-end & back-end",
        email: "sunhwa4210@naver.com",
        link: "https://github.com/sunhwa4210",
      },
      {
        nameKr: "박예은",
        nameEn: "Yeeun Park",
        role: "back-end & front-end",
        email: "pye092699@gmail.com",
        link: "",
      },
      {
        nameKr: "윤다인",
        nameEn: "Dain Yun",
        role: "Product designer",
        email: "yundain69@gmail.com",
        link: "https://www.linkedin.com/in/%EB%8B%A4%EC%9D%B8-%EC%9C%A4-a02601255",
      },
    ],
    thumbnail: dayzipThumb,
    cover: dayzipCover,
    content: dayzipContent,
  },
  {
    id: "p3",
    title: "MUFE",
    category: "app",
    subDescription: "취향 맞춤 뮤직 페스티벌 서비스",
    description: `MUFE(뮤프)는 AI 기반 개인화 알고리즘을 통해 사용자의 음악 취향을 분석하여 페스티벌 현장에서 가장 적합한 공연 타임테이블을 추천하는 iOS 모바일 서비스이다.
페스티벌 전에는 취향 기반 무대 추천을, 현장에서는 공연 시작 전 푸시 알림을, 종료 후에는 공연별 감상 기록을 제공한다.
개인 맞춤형 경험을 큐레이션하여 페스티벌의 순간을 확장한다.`,
    teamName: "기상청",
    members: [
      {
        nameKr: "구름",
        nameEn: "Reum Goo",
        role: "designer",
        email: "rnfma5856@gmail.com",
        link: "https://www.behance.net/9724ad79",
      },
      {
        nameKr: "김솔비",
        nameEn: "Solbi Kim",
        role: "Product Designer",
        email: "sollaabee2501@gmail.com",
        link: "",
      },
      {
        nameKr: "신혜연",
        nameEn: "Hyeyeon Shin",
        role: "iOS Developer",
        email: "shy020916@naver.com",
        link: "https://github.com/hyeyeonie",
      },
      {
        nameKr: "최하늘",
        nameEn: "Haneul Choi",
        role: "Product Designer",
        email: "tkfkd1364@naver.com",
        link: "www.linkedin.com/in/choihaneul",
      },
    ],
    thumbnail: mufeThumb,
    cover: mufeCover,
    content: mufeContent,
  },
  {
    id: "p4",
    title: "Rally",
    category: "app",
    subDescription: "Z세대를 위한 배드민턴 매칭 및 성취 기반 성장 지원 서비스",
    description: `Rally는 경기 전 설렘부터 종료 후 성취까지 배드민턴 경험 전반을 지원하는 서비스이다.
자동 매칭, 웨어러블 기반 점수 기록, 경기 후 성취 피드백을 통해 운동 몰입도를 높인다.`,
    teamName: "GEN",
    members: [
      {
        nameKr: "김규희",
        nameEn: "Kewhee Kim",
        role: "PM, UX/UI Designer",
        email: "kimkewhee1014@naver.com",
        link: "https://github.com/kewheekim",
      },
      {
        nameKr: "이채민",
        nameEn: "Chaemin Lee",
        role: "fullstack",
        email: "coals329@naver.com",
        link: "",
      },
      {
        nameKr: "하규원",
        nameEn: "Kyuwon Ha",
        role: "front-end, back-end",
        email: "kyu10225@naver.com",
        link: "https://github.com/hakyuwon",
      },
      {
        nameKr: "김주원",
        nameEn: "Juwon Kim",
        role: "Graphics · UX/UI Designer",
        email: "juwon7206@naver.com",
        link: "https://github.com/kimjuwon217",
      },
    ],
    thumbnail: rallyThumb,
    cover: rallyCover,
    content: rallyContent,
  },
  {
    id: "p5",
    title: "CLOCKMATE",
    category: "game",
    subDescription: "기후 감수성 증진을 위한 3D 협동 퍼즐 게임",
    description: `CLOCKMATE는 기후 위기로 변화된 세계를 배경으로 한 3D 협동 퍼즐 게임이다.
협동을 통해 환경 문제의 심각성과 공동 해결의 필요성을 자연스럽게 체감하도록 설계되었다.`,
    teamName: "아워즈",
    members: [
      {
        nameKr: "김영주",
        nameEn: "Yeongju Kim",
        role: "designer",
        email: "kmou1467@gmail.com",
        link: "",
      },
      {
        nameKr: "박나리",
        nameEn: "Nari Park",
        role: "designer",
        email: "skfl6603@swu.ac.kr",
        link: "https://www.behance.net/c5e99835",
      },
      {
        nameKr: "임채은",
        nameEn: "Chaeeun Lim",
        role: "developer",
        email: "chaeeunlim106@gmail.com",
        link: "https://github.com/limce106",
      },
      {
        nameKr: "구유나",
        nameEn: "Yuna Koo",
        role: "game developer",
        email: "rndbsk9@swu.ac.kr",
        link: "https://github.com/konguksu",
      },
    ],
    thumbnail: clockThumb,
    cover: clockCover,
    content: clockContent,
  },
  {
    id: "p6",
    title: "Pres.",
    category: "web",
    subDescription: "대학생의 발표 완성도를 위한 AI 피드백 서비스",
    description: `Pres.는 발표 자료 업로드를 기반으로 AI가 대본 생성과 말하기 피드백을 제공하는 서비스이다.
정량적 지표를 통해 발표 역량을 체계적으로 향상시킨다.`,
    teamName: "Hg",
    members: [
      {
        nameKr: "윤지수",
        nameEn: "Jisoo Yoon",
        role: "Designer",
        email: "jsyoon521@gmail.com",
        link: "https://www.behance.net/yoonjisoo2",
      },
      {
        nameKr: "장서윤",
        nameEn: "Seoyun Jang",
        role: "designer",
        email: "jsy020312@gmail.com",
        link: "",
      },
      {
        nameKr: "장현수",
        nameEn: "Hyunsoo Jang",
        role: "back-end",
        email: "jhsoo3811@gmail.com",
        link: "https://github.com/jjjjhs",
      },
      {
        nameKr: "정수지",
        nameEn: "Suji Jeong",
        role: "front-end",
        email: "sujijeong11@gmail.com",
        link: "",
      },
      {
        nameKr: "최보은",
        nameEn: "Boeun Choi",
        role: "PM",
        email: "boeun827@naver.com",
        link: "",
      },
    ],
    thumbnail: presThumb,
    cover: presCover,
    content: presContent,
  },
  {
    id: "p7",
    title: "BUNKERAT",
    category: "game",
    subDescription: "사회 불평등 생존 게임",
    description: `계급 구조가 고착된 벙커 사회를 배경으로 한 디스토피아 생존 게임이다.
청년 세대의 구조적 불평등을 은유적으로 풀어낸다.`,
    teamName: "치즈버스터즈",
    members: [
      {
        nameKr: "김나영",
        nameEn: "Nayoung Kim",
        role: "game designer • PM",
        email: "greenkate0801@gmail.com",
        link: "https://rift-bonobo-600.notion.site/nayoungkimportfolio?source=copy_link",
      },
      {
        nameKr: "문채민",
        nameEn: "Chaemin Moon",
        role: "Game Client Programmer",
        email: "mooncm02@gmail.com",
        link: "https://github.com/muncaem",
      },
      {
        nameKr: "서예진",
        nameEn: "Yejin Seo",
        role: "3D Animator",
        email: "yeeiz636@gmail.com",
        link: "",
      },
      {
        nameKr: "지혜민",
        nameEn: "Hyemin Ji",
        role: "Game Client Programmer",
        email: "hmji0719@gmail.com",
        link: "",
      },
      {
        nameKr: "최서정",
        nameEn: "Seojeong Choi",
        role: "3D Environment Artist",
        email: "Seojeong5674@gmail.com",
        link: "@sj._.modeling",
      },
    ],
    thumbnail: bunkeratThumb,
    cover: bunkeratCover,
    content: bunkeratContent,
  },
  {
    id: "p8",
    title: "SketchLab",
    category: "game",
    subDescription: "연구실 안전교육 모바일 게임",
    description: `대학교 연구 종사자를 위한 연구실 안전 교육 게임으로, 퍼즐과 퀴즈를 통해 안전 수칙을 학습한다.`,
    teamName: "J3",
    members: [
      {
        nameKr: "류민주",
        nameEn: "Minju Ryu",
        role: "designer / pm",
        email: "fbalswn724@naver.com",
        link: "",
      },
      {
        nameKr: "김유정",
        nameEn: "Yoojung Kim",
        role: "designer",
        email: "yoojung8362@gmail.com",
        link: "",
      },
      {
        nameKr: "민서진",
        nameEn: "Seojin Min",
        role: "plan / developer",
        email: "memorydaisy99@gmail.com",
        link: "@22.9md",
      },
    ],
    thumbnail: sketchThumb,
    cover: sketchCover,
    content: sketchContent,
  },
  {
    id: "p9",
    title: "Livroom",
    category: "xr",
    subDescription: "XR로 경험하는 몰입형 프리뷰 도서 서비스",
    description: `책의 도입부를 XR로 체험하며 독서 흥미를 유도하는 몰입형 프리뷰 서비스이다.`,
    teamName: "XR 전도사",
    members: [
      {
        nameKr: "이유림",
        nameEn: "Yurim Lee",
        role: "designer",
        email: "yur510@naver.com",
        link: "",
      },
      {
        nameKr: "조수민",
        nameEn: "Soomin Cho",
        role: "XR Developer",
        email: "ermion0357@gmail.com",
        link: "https://www.linkedin.com/in/soomin-cho-415a8b2b9/",
      },
      {
        nameKr: "전지현",
        nameEn: "Jihyeon Jeon",
        role: "PM / Developer",
        email: "ahala1214@naver.com",
        link: "@j_hyeon_w",
      },
      {
        nameKr: "김도윤",
        nameEn: "Doyun Kim",
        role: "service framework",
        email: "gaori926@gmail.com",
        link: "https://www.linkedin.com/in/doyun-kim-dogari/",
      },
    ],
    thumbnail: livroomThumb,
    cover: livroomCover,
    content: livroomContent,
  },
  {
    id: "p10",
    title: "Nubo",
    category: "app",
    subDescription: "숏폼 저장과 학습을 돕는 AI 기반 지식 저장소",
    description: `숏폼 콘텐츠를 학습 자산으로 전환해주는 AI 기반 지식 관리 서비스이다.`,
    teamName: "Nubo",
    members: [
      {
        nameKr: "고시은",
        nameEn: "sieun ko",
        role: "Front-end",
        email: "sieun1156@naver.com",
        link: "https://github.com/withoutsummer",
      },
      {
        nameKr: "남소빈",
        nameEn: "Sobin Nam",
        role: "designer / PM",
        email: "namsobin@gmail.com",
        link: "https://www.behance.net/sobinnam",
      },
      {
        nameKr: "원다빈",
        nameEn: "Dabin Won",
        role: "back-end",
        email: "ynibad@gmail.com",
        link: "@db.nwn",
      },
      {
        nameKr: "이예소",
        nameEn: "Yeso Lee",
        role: "front-end",
        email: "leeyeso0315@gmail.com",
        link: "",
      },
    ],
    thumbnail: nuboThumb,
    cover: nuboCover,
    content: nuboContent,
  },
  {
    id: "p11",
    title: "달다담",
    category: "game",
    subDescription: "한국 전통 다과 가게 경영 시뮬레이션 게임",
    description: `한국 전통 다과를 소재로 한 힐링형 경영 시뮬레이션 게임이다.`,
    teamName: "네모네모의 꿈",
    members: [
      {
        nameKr: "남윤지",
        nameEn: "Yunji Nam",
        role: "Client Programming",
        email: "njs07080@gmail.com",
        link: "https://github.com/njs07080",
      },
      {
        nameKr: "서선희",
        nameEn: "Seonhee Seo",
        role: "designer",
        email: "garlicmanle@gmail.com",
        link: "@mannle_bbang",
      },
      {
        nameKr: "황세빈",
        nameEn: "Sebin Hwang",
        role: "Client Programming",
        email: "hsebin746@gmail.com",
        link: "",
      },
      {
        nameKr: "강영은",
        nameEn: "Youngeun Kang",
        role: "PM",
        email: "ivy.yekang@gmail.com",
        link: "@nyounguni",
      },
    ],
    thumbnail: dalThumb,
    cover: dalCover,
    content: dalContent,
  },
  {
    id: "p12",
    title: "두다다(DODADA)",
    category: "app",
    subDescription: "국내 프로야구 직관 기록 커뮤니티 서비스",
    description: `야구 직관 경험을 기록·시각화·공유할 수 있는 팬 중심 플랫폼이다.`,
    teamName: "OF9",
    members: [
      {
        nameKr: "김예빈",
        nameEn: "Yebeen Kim",
        role: "back-end",
        email: "kimyebeen125@gmail.com",
        link: "",
      },
      {
        nameKr: "박소연",
        nameEn: "Soyeon Park",
        role: "front-end",
        email: "psy46500@naver.com",
        link: "",
      },
      {
        nameKr: "서혜령",
        nameEn: "Hyeryeong Seo",
        role: "front-end",
        email: "seohr2002@gmail.com",
        link: "",
      },
      {
        nameKr: "이유지",
        nameEn: "YUJI LEE",
        role: "PM & Product Designer",
        email: "612240@naver.com",
        link: "https://www.linkedin.com/in/hzxzu/",
      },
      {
        nameKr: "장세희",
        nameEn: "Seehee Jang",
        role: "PM & Product Designer",
        email: "tpgmltpgml0701@naver.com",
        link: "https://www.linkedin.com/in/seheehee/",
      },
    ],
    thumbnail: dodadaThumb,
    cover: dodadaCover,
    content: dodadaContent,
  },
  {
    id: "p13",
    title: "dot.",
    category: "app",
    subDescription: "MZ 세대의 언어능력 향상을 돕는 독서 커뮤니티",
    description: `쓰기 중심 독서를 통해 언어 감각을 키우는 트렌디한 독서 커뮤니티 서비스이다.`,
    teamName: "dotmakers",
    members: [
      {
        nameKr: "이서연",
        nameEn: "Seoyeon Lee",
        role: "designer",
        email: "mistym2@naver.com",
        link: "@ch5uch5u",
      },
      {
        nameKr: "김나윤",
        nameEn: "Nayun Kim",
        role: "designer",
        email: "archwien5362@gmail.com",
        link: "",
      },
      {
        nameKr: "이희우",
        nameEn: "Heewoo Lee",
        role: "front-end & back-end",
        email: "dlgmldn00@gmail.com",
        link: "",
      },
      {
        nameKr: "조현정",
        nameEn: "Hyunjung Cho",
        role: "PM",
        email: "hyeonjeongjo47@gmail.com",
        link: "https://www.behance.net/hjcho22",
      },
    ],
    thumbnail: dotThumb,
    cover: dotCover,
    content: dotContent,
  },
  {
    id: "p14",
    title: "Climby",
    category: "app",
    subDescription: "등산 성취감 더하기 서비스",
    description: `등산 기록과 헬스 데이터를 결합해 성취감을 높이는 모바일 서비스이다.`,
    teamName: "E1I3",
    members: [
      {
        nameKr: "신한별",
        nameEn: "Hanbyeol Shin",
        role: "Plan / UX Plan",
        email: "tlsgks1249@gmail.com",
        link: "",
      },
      {
        nameKr: "조수현",
        nameEn: "SuHyun Jo",
        role: "front-end/back-end",
        email: "cocoball329@gmail.com",
        link: "",
      },
      {
        nameKr: "한인우",
        nameEn: "Inwoo Han",
        role: "PM / Plan",
        email: "haninwoo0628@naver.com",
        link: "",
      },
      {
        nameKr: "홍은기",
        nameEn: "Eungi Hong",
        role: "designer",
        email: "1023dmsrl@naver.com",
        link: "",
      },
    ],
    thumbnail: climbyThumb,
    cover: climbyCover,
    content: climbyContent,
  },
  {
    id: "p15",
    title: "Feel'em",
    category: "app",
    subDescription: "스마트폰 카메라 필터 제작 및 거래 플랫폼",
    description: `필터 제작과 거래를 중심으로 한 크리에이터 생태계 플랫폼이다.`,
    teamName: "PPT",
    members: [
      {
        nameKr: "박도희",
        nameEn: "Dohee Park",
        role: "designer",
        email: "dohee893@gmail.com",
        link: "@dohee_eeydo",
      },
      {
        nameKr: "변혜빈",
        nameEn: "Hyebeen Byeon",
        role: "back-end",
        email: "hyebeenbyeon@gmail.com",
        link: "https://github.com/hye2021",
      },
      {
        nameKr: "유혜선",
        nameEn: "Hyeseon Yu",
        role: "front-end",
        email: "usunsun38@gmail.com",
        link: "",
      },
    ],
    thumbnail: feelEmThumb,
    cover: feelEmCover,
    content: feelEmContent,
  },
  {
    id: "p16",
    title: "Four footsteps",
    category: "game",
    subDescription: "유기묘 2d 내러티브 어드벤처 게임",
    description:
      "네발자국은 반려동물 유기라는 무거운 주제를 감성적으로 풀어낸 2D 내러티브 어드벤처 게임입니다. 플레이어는 인간과 고양이의 두 시점을 넘나들며, 유기와 책임의 의미를 깊이 체험하게 됩니다. 따뜻한 스토리텔링 선택 기반 시스템을 통해, 작은 선택이 미래를 바꾸는 과정을 경험할 수 있습니다.",
    teamName: "Meowment",
    members: [
      {
        nameKr: "김바다",
        nameEn: "Bada Kim",
        role: "client developer",
        email: "viabe0101@naver.com",
        link: "https://github.com/viabe",
      },
      {
        nameKr: "김채민",
        nameEn: "chaemin Kim",
        role: "client developer / PM",
        email: "z_zen@naver.com",
        link: "https://github.com/zen0113",
      },
      {
        nameKr: "오지은",
        nameEn: "Jieun Oh",
        role: "client developer",
        email: "jieundino@naver.com",
        link: "https://github.com/jieundino/GameProgrammer-Portfolio",
      },
    ],
    thumbnail: fourThumb,
    cover: fourCover,
    content: fourContent,
  },
  {
    id: "p17",
    title: "MU",
    category: "app",
    subDescription: "당신의 성향에 딱 맞춘 비움 서비스",
    description:
      "MU는 효율적인 공간 활용을 목적으로 사용자의 비움 성향에 맞춘 비움 실천 서비스입니다. 한정된 공간을 여유롭게 활용하기 위한 첫 단계 비움. 비워야 공간이 생긴다는 간단한 개념을 바로 실천할 수 있도록 도와드립니다.",
    teamName: "치우개",
    members: [
      {
        nameKr: "김정아",
        nameEn: "Jeonga Kim",
        role: "front-end",
        email: "jeong1117@swu.ac.kr",
        link: "",
      },
      {
        nameKr: "김지안",
        nameEn: "Jian Kim",
        role: "UXUI",
        email: "kja5046@naver.com",
        link: "",
      },
      {
        nameKr: "홍재원",
        nameEn: "Jaewon Hong",
        role: "PM",
        email: "jwjwhvv@gmail.com",
        link: "",
      },
      {
        nameKr: "김윤영",
        nameEn: "Yoonyoung Kim",
        role: "design",
        email: "btobkyy@naver.com",
        link: "",
      },
      {
        nameKr: "이유진",
        nameEn: "Yujin Lee",
        role: "front-end",
        email: "9022976@naver.com",
        link: "https://github.com/TechNing39",
      },
    ],
    thumbnail: muThumb,
    cover: muCover,
    content: muContent,
  },
];




