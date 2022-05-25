import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    fetchAdvice();
  }, []);
  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then(({ data }) => setAdvice(data.slip.advice));
  };

  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={fetchAdvice}> getAdvice</button>
    </div>
  );
}

export default App;
