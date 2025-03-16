import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Phishing from "./pages/module1";
import ArtficialIntelligence from "./pages/module2"
import IOT from "./pages/module3"
import CSG from "./pages/module4"
import Keyloggers from "./pages/module5";
import QuizA from "./pages/quiza";
import QuizB from "./pages/quizb";
import QuizC from "./pages/quizc";
import QuizD from "./pages/quizd";
import QuizE from "./pages/quize";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Phishing" element={<Phishing />} />
        <Route path="/ArtficialIntelligence" element={<ArtficialIntelligence />} />
        <Route path="/IOT" element={<IOT />} />
        <Route path="/CyberSecurityAwareness" element={<CSG />} />
        <Route path="/Keyloggers" element={<Keyloggers />} />


        <Route path="/QuizA" element={<QuizA />} />
        <Route path="/QuizB" element={<QuizB />} />
        <Route path="/QuizC" element={<QuizC />} />
        <Route path="/QuizD" element={<QuizD />} />
        <Route path="/QuizE" element={<QuizE />} />

      </Routes>
    </Router>
  );
}

export default App;
