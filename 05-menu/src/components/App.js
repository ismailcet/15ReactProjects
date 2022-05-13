import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "all") {
      setMenuItem(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItem(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterCategory={filterCategory}
        ></Categories>
        <Menu menu={menuItem} />
      </section>
    </main>
  );
}

export default App;
