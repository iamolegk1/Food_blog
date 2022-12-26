import React, { FC, useEffect, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectRecipes } from "../../redux/slices/recipes/selectors";
import { selectFilter } from "../../redux/slices/filter/selectors";
import { selectPage } from "../../redux/slices/pagination/selectors";
import { selectSearch } from "../../redux/slices/search/selectors";
import { getRecipes } from "../../redux/api";
import Recipe from "../Recipe";
import Pagination from "../Pagination";
import Loader from "../UI/Loader";
import NotFound from "../../pages/NotFound";

import styles from "./index.module.scss";

const ListRecipes: FC = () => {
  const dispatch = useAppDispatch();

  const { entities: recipes, status } = useAppSelector(selectRecipes);
  const { activeFilter } = useAppSelector(selectFilter);
  const { currentPage } = useAppSelector(selectPage);
  const { searchValue } = useAppSelector(selectSearch);

  const search = searchValue ? `&title=${searchValue}` : "";
  const filter = activeFilter !== "all" ? `&tags=${activeFilter}` : "";

  const fetchRecipes = useCallback(async () => {
    dispatch(
      getRecipes({
        filter,
        currentPage,
        search,
      })
    );
  }, [filter, currentPage, search, dispatch]);

  useEffect(() => {
    fetchRecipes();
  }, [currentPage, fetchRecipes, searchValue]);

  if (status === "pending") {
    return <Loader />;
  }

  if (status === "failed") {
    return <NotFound title={"Failed to load pizzas"} />;
  }

  return (
    <>
      {recipes && recipes.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>
          Не удалось найти рецепты по такому названию &#128532;
        </h1>
      ) : null}
      <div className={styles.container}>
        {recipes && recipes.length > 0
          ? recipes.map((item) => <Recipe key={item.id} {...item} />)
          : null}
      </div>
      {status === "succeeded" && recipes.length > 0 && <Pagination />}
    </>
  );
};

export default ListRecipes;
