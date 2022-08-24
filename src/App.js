import Dashboard from "./dashboard/Dashboard";
import { Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
