import React from "react";

function RecipeCard({title, instructions, totalCost}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{instructions}</p>
        <p className="card-text">Total Cost: {totalCost}</p>
      </div>
    </div>
  );
}

export default RecipeCard;