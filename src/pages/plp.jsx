import React, { useMemo, useState } from "react";
import Header from "../components/Header.jsx";
import "./plp.css";
import PosterCard from "../components/PosterCard.jsx";
import { PROJECTS } from "../data/projects";
import Footer from "../components/Footer";

const TABS = [
  { key: "all", label: "ALL", title: "Projects(All)" },
  { key: "game", label: "Game", title: "Projects(Game)" },
  { key: "xr", label: "XR", title: "Projects(XR)" },
  { key: "app", label: "APP", title: "Projects(APP)" },
  { key: "web", label: "WEB", title: "Projects(WEB)" },
];

export default function Plp() {

  const [activeKey, setActiveKey] = useState("all");

  const activeTab = useMemo(
    () => TABS.find((tab) => tab.key === activeKey),
    [activeKey, TABS]
  );

  const filteredProjects = useMemo(() => {
    if (activeKey === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeKey);
  }, [activeKey]);

  return (
    <>
      <div className="plp-page">
        <Header />

        <main className="plp-content">
          <div className="plp-title">{activeTab?.title}</div>
          <div className="sub-title">project = data_set[:{filteredProjects.length}]</div>

          <div className="tab-list">
            {TABS.map((tab) => {
              const isActive = tab.key === activeKey;
              return (
                <button
                  key={tab.key}
                  className={`tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => setActiveKey(tab.key)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <section className="tab-content">
            {activeKey === "all" && <AllPanel projects={filteredProjects} />}
            {activeKey === "game" && <GamePanel projects={filteredProjects} />}
            {activeKey === "xr" && <XrPanel projects={filteredProjects} />}
            {activeKey === "app" && <AppPanel projects={filteredProjects} />}
            {activeKey === "web" && <WebPanel projects={filteredProjects} />}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

function AllPanel({ projects }) {
  return (
    <div className="poster-grid">
      {projects.map((p) => (
        <PosterCard key={p.id} project={p} />
      ))}
    </div>
  );
}

function GamePanel({ projects }) {
  return (
    <div className="poster-grid">
      {projects.map((p) => (
        <PosterCard key={p.id} project={p} />
      ))}
    </div>
  );
}

function XrPanel({ projects }) {
  return (
    <div className="poster-grid">
      {projects.map((p) => (
        <PosterCard key={p.id} project={p} />
      ))}
    </div>
  );
}

function AppPanel({ projects }) {
  return (
    <div className="poster-grid">
      {projects.map((p) => (
        <PosterCard key={p.id} project={p} />
      ))}
    </div>
  );
}

function WebPanel({ projects }) {
  return (
    <div className="poster-grid">
      {projects.map((p) => (
        <PosterCard key={p.id} project={p} />
      ))}
    </div>
  );
}
