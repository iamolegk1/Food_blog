import React, { FC, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectRecipe } from "../../redux/slices/detailedRecipe/selectors";
import { getDetailedRecipe } from "../../redux/api";
import Loader from "../../components/UI/Loader";
import FullRecipe from "../../components/FullRecipe";
import NotFound from "../NotFound";

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
    <>
      {status === "pending" && <Loader />}
      {status === "failed" && (
        <NotFound title={"Такого рецепта не существует"} />
      )}
      <Link to="/recipes">
        <button>
          <span>Назад</span>
        </button>
      </Link>
      <FullRecipe {...recipe} />
    </>
  );
};

export default DetailedRecipePage;
