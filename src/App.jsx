import './App.css'
import About from './pages/about'
import Participants from './pages/participants'
import Pdp from './pages/pdp'
import Plp from './pages/plp'
import ProjectDetail from './pages/projectDetail.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
  
    <Routes>
      <Route path="/" element={<About />}> </Route>
      <Route path="/participants" element={<Participants/>}></Route>
      <Route path="/pdp" element={<Pdp/>}></Route>
      <Route path="/plp" element={<Plp/>}></Route>
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    
  )
}

export default App
