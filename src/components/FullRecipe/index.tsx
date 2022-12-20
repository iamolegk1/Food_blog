import React, { FC } from "react";

import { Ingredient } from "../../types/templateData";

interface IFullRecipe {
  id?: string;
  title?: string;
  tags?: string;
  description?: string;
  cookTime?: number;
  ingredients?: Ingredient[];
  steps?: string[];
  image?: string;
  video?: string;
}

const FullRecipe: FC<IFullRecipe> = ({
  title,
  description,
  cookTime,
  ingredients,
  steps,
  image,
  video,
}) => {
  return (
    <>
      <div>{title}</div>
      <div>{description}</div>
      <div>{cookTime}</div>
      <div>{steps}</div>
      <div>{title}</div>
      <img src={image} alt={title} />
      <div>{video}</div>
      <ul>
        {ingredients?.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
      <ul>
        {ingredients?.map((item, i) => (
          <li key={i}>{item.qty}</li>
        ))}
      </ul>
    </>
  );
};

export default FullRecipe;
