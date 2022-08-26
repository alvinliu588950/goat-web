import Dashboard from "./dashboard/Dashboard";
import { Router, Routes, Route } from "react-router-dom";
import AgentBucharati from "./pages/AgentBucharati";
import AgentMista from "./pages/AgentMista";
import AgentDio from "./pages/AgentDio";
import AgentJojo from "./pages/AgentJojo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/agentbucharati" element={<AgentBucharati />} />
      <Route path="/agentmista" element={<AgentMista />} />
      <Route path="/agentdio" element={<AgentDio />} />
      <Route path="agentjojo" element={<AgentJojo />} />
    </Routes>
  );
}

export default App;
