import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { database } from "../firebase";
import { ref, get, set } from "firebase/database";

const QuizA = () => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [user] = useState(null); // Removed setUser to avoid warning
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const quizRef = ref(database, "quizzes");
        const snapshot = await get(quizRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const formattedQuestions = Object.keys(data).map((key) => ({
            id: key,
            question: data[key].question,
            options: Object.values(data[key].options),
            correctAnswer: data[key].correctAnswer,
          }));
          setQuestions(formattedQuestions);
        } else {
          setQuestions([]);
        }
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerSelect = (questionId, answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctCount += 1;
      }
    });

    setScore(correctCount);

    if (user) {
      saveScoreToFirebase(user.uid, correctCount);
    }
  };

  const saveScoreToFirebase = async (uid, score) => {
    try {
      await set(ref(database, `user_scores/${uid}`), { score });
      console.log("Score saved successfully!");
    } catch (error) {
      console.error("Error saving score:", error);
    }
  };

  return (
    <div className="container mt-5">
      <Navbar />
      <h1 className="text-center mb-4">Phishing Quiz</h1>

      <div style={{ maxHeight: "70vh", overflowY: "auto", paddingRight: "10px" }}>
        {loading && <p className="text-center">Loading questions...</p>}

        {!loading && questions.length === 0 && (
          <p className="text-center text-danger">No quiz questions found. Please check your database.</p>
        )}

        {!loading &&
          questions.length > 0 &&
          questions.map((question, index) => (
            <div key={question.id} className="card mb-3 p-3">
              <h5>{index + 1}. {question.question}</h5>
              {question.options.map((option, idx) => (
                <div key={idx} className="form-check">
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={userAnswers[question.id] === option}
                    onChange={() => handleAnswerSelect(question.id, option)}
                    className="form-check-input"
                  />
                  <label className="form-check-label">{option}</label>
                </div>
              ))}
            </div>
          ))}
      </div>

      {!loading && questions.length > 0 && (
        <button onClick={handleSubmit} className="btn btn-primary mt-3">
          Submit Quiz
        </button>
      )}

      {score !== null && (
        <div className="alert alert-info mt-4 text-center">
          🎉 You scored {score} out of {questions.length}!
        </div>
      )}
    </div>
  );
};

export default QuizA;
