import React from "react";
import { useNavigate } from "react-router-dom";
import "./ParticipantsCard.css";
import Link from "../assets/img/link.png"
function isHttpUrl(value) {
  return typeof value === "string" && /^https?:\/\//i.test(value);
}

function normalizeLink(link) {
  if (!link) return "";
  const trimmed = String(link).trim();

  const httpMatch = trimmed.match(/https?:\/\/\S+/i);
  if (httpMatch) return httpMatch[0];

  const parenMatch = trimmed.match(/\((https?:\/\/[^)]+)\)/i);
  if (parenMatch) return parenMatch[1];

  if (isHttpUrl(trimmed)) return trimmed;

  return trimmed;
}

export default function ParticipantsCard({ participant, expanded = false, onToggle }) {
  const {
    nameKr,
    nameEn,
    role,
    email,
    link,
    projectThumbnail,
    projectTitle,
    teamName,
    projectId,
  } = participant;

  const safeLink = normalizeLink(link);
  const canClickLink = isHttpUrl(safeLink);

  const headerBlock = (
    <>
      <div className="pc-nameKr">{nameKr}</div>
      <div className="pc-nameEn">{nameEn}</div>
      <div className="pc-role">{role}</div>
    </>
  );

  const handleToggle = () => {
    if (onToggle) onToggle();
  };

  const navigate = useNavigate();

  const goProject = (e) => {
    e.stopPropagation();
    if (projectId) {
      navigate(`/projects/${projectId}`);
    }
  };

  return (
    <article
      className={`participants-card ${expanded ? "expanded" : ""}`}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
    >
      {!expanded && headerBlock}

      {expanded && (
        <div className="pc-details">
          <div className="pc-header">{headerBlock}</div>

          {(email || safeLink) && (
            <div className="pc-meta">
              {email && <div className="pc-row">{email}</div>}
              {safeLink && (
                <div className="pc-row">
                  {canClickLink ? (
                    <a href={safeLink} target="_blank" rel="noreferrer">
                      {safeLink}
                    </a>
                  ) : (
                    <span>{safeLink}</span>
                  )}
                </div>
              )}
            </div>
          )}

          {projectThumbnail && (
            <div className="pc-thumb">
              <img src={projectThumbnail} alt={`${projectTitle || "project"} thumbnail`} />
            </div>
          )}

          {(projectTitle || teamName) && (
            <div className="pc-project">
              {projectTitle && <div className="pc-projectTitle">{projectTitle}</div>}
              <button className="participants-project-detail" type="button" onClick={goProject}>
                <img src={Link} alt="프로젝트 상세로 이동" height={20} width={20} />
              </button>
            </div>
            
          )}
        </div>
      )}
    </article>
  );
}
