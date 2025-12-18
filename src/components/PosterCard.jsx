import React from "react";
import { useNavigate } from "react-router-dom";
import "./PosterCard.css";

export default function PosterCard({ project }) {
  const navigate = useNavigate();
  const membersText = Array.isArray(project.members)
    ? project.members
        .map((m) => m?.nameKr || m?.nameEn || m?.role || "")
        .filter(Boolean)
        .join(", ")
    : project.members || project.teamName || "";

  return (
    <button
      type="button"
      className="project-card"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      <div className="project-thumb">
        <img src={project.thumbnail} alt={project.title} />
      </div>

      <div className="project-body">
        <div className="project-title">{project.title}</div>
        <div className="project-members">{membersText}</div>
      </div>
    </button>
  );
}
