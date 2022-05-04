import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

// exportをつけることで，他モジュールから利用可能になる
// リファクタ前
// export default function Recipe({ name, ingredients, steps }) {
//   return (
//     <section id="baked-salmon">
//       <h1>{name}</h1>
//       <ul className="ingredients">
//         {ingredients.map((ingredient, i) => (
//           <li key={i}>{ingredient.name}</li>
//         ))}
//       </ul>
//       <section className="instructions">
//         <h2>Cooking Instructions</h2>{" "}
//         {steps.map((step, i) => (
//           <p key={i}>{step}</p>
//         ))}
//       </section>
//     </section>
//   );
// }

function Recipe({ name, ingredients=[], steps=[] }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <IngredientsList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
}

// export defaultは後から記述してもよい
export default Recipe;
