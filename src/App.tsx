import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import OnBoarding from "./pages/OnBoarding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>
    </Router>
  );
}

export default App;
