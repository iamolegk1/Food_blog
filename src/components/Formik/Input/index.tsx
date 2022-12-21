import React, { FC } from "react";
import { Field, ErrorMessage } from "formik";

import styles from "./index.module.scss";

interface IInputProps {
  name: string;
  label: string;
  type: string;
}

const Input: FC<IInputProps> = ({ label, name, type }) => (
  <div className={styles.field}>
    <label htmlFor={name}>{label}</label>
    <Field type={type} id={name} name={name} placeholder={name} />
    <ErrorMessage name={name}>
      {(errorMsg) => <div className={styles.error}>{errorMsg}</div>}
    </ErrorMessage>
  </div>
);

export default Input;
