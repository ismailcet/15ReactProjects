import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";
function App() {
  return (
    <main>
      <h1>App Component</h1>
      <Categories></Categories>
      <Menu></Menu>
    </main>
  );
}

export default App;
