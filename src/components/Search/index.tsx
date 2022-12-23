import React, { useState, useRef, forwardRef } from "react";
import { motion } from "framer-motion";
import debounce from "lodash.debounce";

import { useAppDispatch } from "../../redux/hooks";
import { setSearchValue } from "../../redux/slices/search";

import styles from "./index.module.scss";

const Search = forwardRef<HTMLElement>((_, ref) => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClearInput = () => {
    setValue("");
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const string = event.target.value.toLowerCase();
    setValue(string);
    inputDebounce(string);
  };

  const inputDebounce = useRef(
    debounce((string: string) => {
      dispatch(setSearchValue(string));
    }, 500)
  ).current;

  return (
    <section ref={ref} className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        type="text"
        placeholder="Найти блюдо..."
        onChange={(event) => onChangeInput(event)}
      />
      {value ? (
        <svg
          onClick={() => onClickClearInput()}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 512 512"
        >
          <path
            d="M437.5 386.6 306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"
            fill="#457b9d"
          ></path>
        </svg>
      ) : null}
    </section>
  );
});

export const MSearch = motion(Search);
