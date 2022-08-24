import Dashboard from "dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Agent from "agents/Agent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="agent/:name" element={<Agent />} />
    </Routes>
  );
}

export default App;
