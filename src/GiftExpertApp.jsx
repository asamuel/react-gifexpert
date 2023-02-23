import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setcategories] = useState(["One Punch"]);

  const addCategory = (newCategory) => {
    setcategories((cat) => [newCategory, ...cat]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={addCategory} />

      {categories.map((cat) => (
        <GiftGrid key={cat} category={cat} />
      ))}
    </>
  );
};
