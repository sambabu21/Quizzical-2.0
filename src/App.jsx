import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { useEffect, useState } from "react";
import Quiz from "./Components/Quiz/Quiz";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [questionData, setQuestionData] = useState({});

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  
  useEffect(() => {
    if(startGame===true){
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        setQuestionData(data.results);
      });
    }
  }, [startGame]);
  console.log(questionData)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} setStartGame={setStartGame}/>}
        />
        <Route path="/quiz" element={<Quiz questionData={questionData} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
