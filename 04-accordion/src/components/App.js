import React, { useState } from "react";
import data from "./data";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {questions.map((item) => {
            return <Question key={item.id} {...item}></Question>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
