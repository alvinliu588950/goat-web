import Dashboard from "./dashboard/Dashboard";
import { Router, Routes, Route } from "react-router-dom";
import Agent from "./pages/Agent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="agent/:name" element={<Agent />} />
    </Routes>
  );
}

export default App;
