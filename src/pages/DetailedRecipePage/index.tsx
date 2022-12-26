import React, { FC, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectRecipe } from "../../redux/slices/detailedRecipe/selectors";
import { getDetailedRecipe } from "../../redux/api";
import Loader from "../../components/UI/Loader";
import FullRecipe from "../../components/FullRecipe";
import NotFound from "../NotFound";

import styles from "./index.module.scss";
import ButtonBackToTop from "../../components/ButtonBackToTop";

const DetailedRecipePage: FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { recipe, status } = useAppSelector(selectRecipe);

  const fetchRecipe = useCallback(async () => {
    dispatch(getDetailedRecipe(id));
  }, [id, dispatch]);

  useEffect(() => {
    fetchRecipe();
  }, [id, fetchRecipe]);

  if (status === "pending") {
    return <Loader />;
  }

  if (status === "failed") {
    return <NotFound title={"Такого рецепта не существует"} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className={styles.recipeWrapper}>
        <div className={styles.buttonWrapper}>
          <Link to="/recipes">
            <button>
              <span>Назад</span>
            </button>
          </Link>
        </div>
        <FullRecipe {...recipe} />
      </div>
      <ButtonBackToTop />
    </motion.div>
  );
};

export default DetailedRecipePage;
