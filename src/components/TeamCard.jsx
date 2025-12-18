// src/components/TeamCard/TeamCard.jsx
import React from "react";
import "./TeamCard.css";

function isHttpUrl(value) {
  return typeof value === "string" && /^https?:\/\//i.test(value);
}

function MailIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
      />
    </svg>
  );
}

function LinkIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M3.9 12c0-1.7 1.4-3.1 3.1-3.1h4V7H7C4.2 7 2 9.2 2 12s2.2 5 5 5h4v-1.9H7c-1.7 0-3.1-1.4-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.7 0 3.1 1.4 3.1 3.1S18.7 15.1 17 15.1h-4V17h4c2.8 0 5-2.2 5-5s-2.2-5-5-5"
      />
    </svg>
  );
}

function MemberCard({ member }) {
  const { nameKr, nameEn, role, email, link } = member;

  return (
    <article className="memberCard">
      <div className="memberNames">
        <div className="nameKr">{nameKr}</div>
        <div className="nameEn">{nameEn}</div>
      </div>

      {role && <div className="roleBadge">{role}</div>}

      <div className="memberMeta">
        {email && (
          <div className="metaRow">
            <MailIcon className="metaIcon" />
            <a className="metaLink" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        )}

        {link && (
          <div className="metaRow">
            <LinkIcon className="metaIcon" />
            {isHttpUrl(link) ? (
              <a className="metaLink" href={link} target="_blank" rel="noreferrer">
                {link}
              </a>
            ) : (

              <span className="metaText">{link}</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}


export default function TeamCard({ members = [], projectId = "project" }) {
  if (!Array.isArray(members) || members.length === 0) return null;

  return (
    <div className="memberGrid">
      {members.map((m, idx) => (
        <MemberCard key={m.email || `${projectId}-${m.nameKr}-${m.nameEn}-${idx}`} member={m} />
      ))}
    </div>
  );
}
