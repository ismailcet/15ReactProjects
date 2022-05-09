import React from "react";
import Reviews from "./Reviews";
function App() {
  return (
    <main>
      <container className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <Reviews></Reviews>
      </container>
    </main>
  );
}

export default App;
