import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import PrivacyPolicyDreamTeam from "./pages/projects/dreamTeam/privacyPolicy/privacyPolicy";
import TermAndConditionDreamTeam from "./pages/projects/dreamTeam/termAndCondition/term";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dream-team/privacy-policy" element={<PrivacyPolicyDreamTeam />} />
        <Route path="/dream-team/term-and-condition" element={<TermAndConditionDreamTeam />} />
      </Routes>
    </div>
  );
}

export default App;
