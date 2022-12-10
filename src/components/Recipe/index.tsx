import React, { FC } from "react";
import { FaYoutube } from "react-icons/fa";

import { Ingredient } from "../../types/templateData";
import { getNoun } from "../../utils";

import styles from "./index.module.scss";

interface IRecipeProps {
  title: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  video: string;
  tags: string;
}

const Recipe: FC<IRecipeProps> = ({
  title,
  image,
  ingredients,
  description,
  tags,
  video,
}) => {
  const currentWidth = window.innerWidth;

  const descriptionArray: string[] = description.split(" ");

  const shortDescription: string | void =
    descriptionArray.length > 28
      ? `${descriptionArray.slice(0, 28).join(" ")}...`
      : description;

  const longDescription: string | void =
    descriptionArray.length > 42
      ? `${descriptionArray.slice(0, 42).join(" ")}...`
      : description;

  const declensionVariant: [string, string, string] = [
    "Ингридиент",
    "Ингридиента",
    "Ингридиентов",
  ];

  const ingredientsField =
    `${ingredients.length} ` +
    getNoun(ingredients.length, ...declensionVariant);

  return (
    <aside className={styles.card}>
      <figure>
        <div>
          <img src={image} alt={title} />
        </div>
        <h1>{title}</h1>
        <h2>{ingredientsField}</h2>
      </figure>
      <div className={styles.bodyCard}>
        <p>
          {currentWidth >= 575 && currentWidth <= 767
            ? longDescription
            : shortDescription}
        </p>
      </div>
      <ul className={styles.tagsLink}>
        <li>{tags}</li>
        <li>
          <a href={video} target="_blank" rel="noopener noreferrer">
            <FaYoutube size={29} />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Recipe;
