import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PROJECTS } from "../data/projects";
import "./projectDetail.css";
import Back from "../assets/img/left.png"; 
import TeamCard from "../components/TeamCard.jsx";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="project-detail-pd">
        <Header />
        <main className="project-detail-body-pd">
          <div className="project-detail-title-pd">프로젝트를 찾을 수 없습니다.</div>
          <Link className="project-detail-link-pd" to="/plp">
           <img src={Back}/>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="project-detail-pd">
      <Header />
      <main className="project-detail-body-pd">
        {project.cover && (
          <div className="project-detail-cover-pd">
            <img src={project.cover} alt={`${project.title} cover`} />
          </div>
        )}

        <div className="project-detail-info">
          <Link className="project-detail-link" to="/plp">
            <img src={Back}/>
          </Link>
          <div className="project-detail-title">{project.title}</div>

          {/* subDescription */}
          {project.subDescription && (
            <p className="project-detail-subdescription">
              {project.subDescription}
            </p>
          )}

          {/* tag */}
          <div className="project-detail-meta">
            <span className="tag">{project.category}</span>
          </div>

          {/* description */}
          {project.description && (
            <div className="project-detail-description">
              <p>{project.description}</p>
            </div>
          )}
        </div>

        {project.content && (
          <div className="project-detail-content">
            <img src={project.content} alt={`${project.title} content`} />
          </div>
        )}
        
        <div className="project-team-section">
          <div className="project-detail-team">
            <span className="team">Team</span>
            {project.teamName}
          </div>
          <TeamCard members={project.members} projectId={project.id} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
