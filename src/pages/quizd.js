import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { database } from "../firebase"; // Import Firebase
import { ref, get, set } from "firebase/database";

const QuizD = () => {
  const [questions, setQuestions] = useState([]); // Ensure it starts as an empty array
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [user] = useState(null);
  const [loading, setLoading] = useState(true);

  // // Fetch authenticated user
  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       const quizRef = ref(database, "quizzes");
  //       const snapshot = await get(quizRef);
  
  //       if (snapshot.exists()) {
  //         const data = snapshot.val();
  //         console.log("Fetched Quiz Data:", data); // Debugging: Print fetched data
  
  //         const formattedQuestions = Object.keys(data).map((key) => ({
  //           id: key,
  //           question: data[key].question,
  //           options: data[key].options || [], 
  //           correctAnswer: data[key].correctAnswer,
  //         }));
  
  //         setQuestions(formattedQuestions);
  //       } else {
  //         console.log("No questions found in Firebase.");
  //         setQuestions([]);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching quiz questions:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchQuestions();
  // }, []);
  

  // Fetch Quiz Questions from Firebase Realtime Database
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const quizRef = ref(database, "quizzesf");
        const snapshot = await get(quizRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const formattedQuestions = Object.keys(data).map((key) => ({
            id: key,
            question: data[key].question, // Correctly access the question
            options: Object.values(data[key].options), // Convert options object to an array
            correctAnswer: data[key].correctAnswer,
          }));
          setQuestions(formattedQuestions);
        } else {
          setQuestions([]); // Ensure questions is at least an empty array
        }
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  // Handle Answer Selection
  const handleAnswerSelect = (questionId, answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  // Submit Answers and Calculate Score
  const handleSubmit = () => {
    let correctCount = 0;

    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctCount += 1;
      }
    });

    setScore(correctCount);

    // Save user score to Firebase (if logged in)
    if (user) {
      saveScoreToFirebase(user.uid, correctCount);
    }
  };

  // Save Score to Firebase Realtime Database
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
      <h1 className="text-center mb-4">Cybersecurity Governence Quiz</h1>
  
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

export default QuizD;
