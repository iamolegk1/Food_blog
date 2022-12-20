import React, { FC } from "react";
import { Field, ErrorMessage } from "formik";

import { TOptions } from "../typed";

import styles from "./index.module.scss";

interface ISelectProps {
  name: string;
  label: string;
  options: TOptions[];
}

const Select: FC<ISelectProps> = ({ label, name, options }) => (
  <div className={styles.wrapper}>
    <label htmlFor={name}>{label}</label>
    <Field as="select" id={name} name={name}>
      {options.map((option, id) => (
        <option key={id} value={option.value}>
          {option.key}
        </option>
      ))}
    </Field>
    <ErrorMessage name={name}>
      {(errorMsg) => <div className={styles.error}>{errorMsg}</div>}
    </ErrorMessage>
  </div>
);

export default Select;
