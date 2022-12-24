import React, { FC, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectRecipe } from "../../redux/slices/detailedRecipe/selectors";
import { getDetailedRecipe } from "../../redux/api";
import Loader from "../../components/UI/Loader";
import FullRecipe from "../../components/FullRecipe";
import NotFound from "../NotFound";
// import { ReactComponent as Recipe1 } from "../../assets/image/detRecipePage/Recipebookamico.svg";
// import { ReactComponent as Recipe2 } from "../../assets/image/aboutPage/rafiki.svg";
// import { ReactComponent as Recipe3 } from "../../assets/image/aboutPage/bro.svg";
// import { ReactComponent as Recipe4 } from "../../assets/image/aboutPage/pana.svg";

import styles from "./index.module.scss";

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

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <Link to="/recipes">
          <button>
            <span>Назад</span>
          </button>
        </Link>
      </div>
      {status === "failed" && (
        <NotFound title={"Такого рецепта не существует"} />
      )}
      {status === "succeeded" ? <FullRecipe {...recipe} /> : <Loader />}
    </div>
  );
};

export default DetailedRecipePage;
