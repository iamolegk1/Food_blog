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

  return (
    <>
      {status === "pending" && <Loader />}
      {status === "failed" && <h1>Something went wrong</h1>}
      <div className={styles.container}>
        {recipes.map((item) => (
          <Recipe key={item.id} {...item} />
        ))}
      </div>
      {status === "succeeded" && <Pagination />}
    </>
  );
};

export default ListRecipes;
