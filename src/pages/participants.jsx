import React, { useMemo, useState } from "react";
import Header from"../components/Header";
import { PROJECTS } from "../data/projects";
import ParticipantsCard from "../components/ParticipantsCard.jsx";
import "./participants.css";
import Footer from "../components/Footer";

export default function Participants() {
  // 프로젝트 데이터에서 members 평탄화 + 프로젝트 정보 포함
  const dataSet = useMemo(() => {
    const list = PROJECTS.flatMap((proj) => {
      const members = Array.isArray(proj.members) ? proj.members : [];
      return members.map((m) => ({
        nameKr: m.nameKr || "",
        nameEn: m.nameEn || "",
        role: m.role || "",
        email: m.email || "",
        link: m.link || "",

        projectId: proj.id,
        projectTitle: proj.title,
        teamName: proj.teamName || "",
        projectThumbnail: proj.thumbnail || proj.cover || proj.content,
      }));
    });

    return list.slice(0, 70); // participant = data_set[:70]
  }, []);

  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="participants">
      <Header />

      <div className="part-content">
        <div className="part-title">(Participants)</div>
        <div className="part-subtitle">participant = data_set[:70]</div>

        {/* 팀원 카드 그리드 */}
        <div className="participants-grid">
          {dataSet.map((p, idx) => (
            <ParticipantsCard
              key={`${p.email || `${p.nameKr}-${p.nameEn}`}-${p.projectId}-${idx}`}
              participant={p}
              expanded={expandedId === `${p.email || `${p.nameKr}-${p.nameEn}`}-${p.projectId}-${idx}`}
              onToggle={() => {
                const id = `${p.email || `${p.nameKr}-${p.nameEn}`}-${p.projectId}-${idx}`;
                setExpandedId((prev) => (prev === id ? null : id));
              }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
