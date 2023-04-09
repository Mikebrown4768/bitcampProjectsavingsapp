import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import OnBoarding from "./pages/OnBoarding";
import LeftNav from "./components/LeftNav";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import useUser from "./hooks/useUser";

function App() {
  const { user, isLoading } = useUser();

  if (isLoading) return null;

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="flex">
          <LeftNav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/onboarding" element={<OnBoarding />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
