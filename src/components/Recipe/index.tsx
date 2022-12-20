import React, { FC } from "react";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";

import { Ingredient } from "../../types/templateData";
import { getNoun } from "../../utils";

import styles from "./index.module.scss";

interface IRecipeProps {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  tags: string;
}

const Recipe: FC<IRecipeProps> = ({
  id,
  title,
  image,
  ingredients,
  description,
  tags,
}) => {
  const declensionVariant: [string, string, string] = [
    "Ингридиент",
    "Ингридиента",
    "Ингридиентов",
  ];

  const ingredientsField =
    `${ingredients.length} ` +
    getNoun(ingredients.length, ...declensionVariant);

  const capitalizeTitle = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <Link to={`/recipes/${id}`} style={{ textDecoration: "none" }}>
      <aside className={styles.card}>
        <figure>
          <img src={image} alt={title} />
          <h1>{capitalizeTitle}</h1>
          <h2>{ingredientsField}</h2>
        </figure>
        <div className={styles.bodyCard}>
          <p>{description}</p>
        </div>
        <div className={styles.tagsLink}>
          <div>{tags}</div>
          <div>
            <span>
              <FaYoutube size={30} />
            </span>
          </div>
        </div>
      </aside>
    </Link>
  );
};

export default Recipe;
