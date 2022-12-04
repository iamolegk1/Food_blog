import React, { FC } from "react";

import { Ingredient } from "../../types/templateData";

interface IRecipeProps {
  title: string;
  description: string;
  cookTime: number;
  ingredients: Ingredient[];
  steps: string[];
  image: string;
  video: string;
}

const Recipe: FC<IRecipeProps> = ({
  title,
  description,
  cookTime,
  image,
  // ingredients,
  // steps,
  // video,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{description}</div>
      <div>{cookTime}</div>
      <img width="600" height="500" src={image} alt={title} />
      {/* {steps.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}
      {ingredients.map((item, index) => (
        <ul key={index}>
          <li>{item.name}</li>
          <li>{item.qty}</li>
        </ul>
      ))} */}
      {/* <iframe
        width="300"
        height="300"
        src={video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
    </div>
  );
};

export default Recipe;
