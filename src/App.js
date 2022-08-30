import { Routes, Route } from "react-router-dom";
import Dashboard from "dashboard/Dashboard";
import Agent from "agent/Agent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="agent/:name" element={<Agent />} />
    </Routes>
  );
}

export default App;
