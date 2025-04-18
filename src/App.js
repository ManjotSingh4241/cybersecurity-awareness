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
import Cloudsecurity from "./pages/module6";
import Socialengineering from "./pages/module7"
import DigitalSupplyChainSecurity from "./pages/module8";

import ITNewsPage from "./pages/news"
import Feedback from "./pages/feedback";


import QuizA from "./pages/quiza";
import QuizB from "./pages/quizb";
import QuizC from "./pages/quizc";
import QuizD from "./pages/quizd";
import QuizE from "./pages/quize";
import QuizF from "./pages/quizf";
import QuizG from "./pages/quizg";
import QuizH from "./pages/quizh";


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
        <Route path="/Cloudsecurity" element={<Cloudsecurity />} />
        <Route path="/Socialengineering" element={<Socialengineering />} />
        <Route path="/DigitalSupplyChainSecurity" element={<DigitalSupplyChainSecurity/>} />

        <Route path="/ITNewsPage" element={<ITNewsPage/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>



        <Route path="/QuizA" element={<QuizA />} />
        <Route path="/QuizB" element={<QuizB />} />
        <Route path="/QuizC" element={<QuizC />} />
        <Route path="/QuizD" element={<QuizD />} />
        <Route path="/QuizE" element={<QuizE />} />
        <Route path="/QuizF" element={<QuizF />} />
        <Route path="/QuizG" element={<QuizG />} />
        <Route path="/QuizH" element={<QuizH />} />

      </Routes>
    </Router>
  );
}

export default App;
