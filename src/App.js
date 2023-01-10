import Dashboard from "dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Agent from "agents/Agent";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/:name" element={<Agent />} />
    </Routes>
  );
}

export default App;
