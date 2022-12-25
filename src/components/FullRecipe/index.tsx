import React, { FC } from "react";

import { Ingredient } from "../../types/templateData";

import styles from "./index.module.scss";

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
  image,
  description,
  cookTime,
  ingredients,
  steps,
  video,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.blurWrapper}>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{description}</p>
        <div className={styles.timeBLock}>
          <p>Cooking Time: {cookTime} minutes</p>
          <p>Ingredients: {ingredients?.length}</p>
        </div>
      </div>
      <div className={styles.ingredientsWrapper}>
        <h2>Ingredients:</h2>
        <div className={styles.ingredients}>
          <ul>
            {ingredients?.map((item, i) => (
              <li key={i}>
                <span> {Object.values(item).join(": ")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.instructionsWrapper}>
        <h2>Instructions:</h2>
        <div className={styles.instructions}>
          <ol>
            {steps?.map((item, i) => (
              <li key={i}>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className={styles.video}>
        <iframe
          width="300"
          height="300"
          src={video}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default FullRecipe;
