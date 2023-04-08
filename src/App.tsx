import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import OnBoarding from "./pages/OnBoarding";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<OnBoarding />} />
      </Routes>
    </Router>
  );
}

export default App;
