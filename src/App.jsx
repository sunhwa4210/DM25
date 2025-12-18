import "./App.css";
import About from "./pages/about";
import Participants from "./pages/participants";
import Plp from "./pages/plp";
import ProjectDetail from "./pages/projectDetail.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/participants" element={<Participants />} />
      <Route path="/plp" element={<Plp />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
