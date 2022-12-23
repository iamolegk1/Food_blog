import React, { FC } from "react";
import { Field, ErrorMessage } from "formik";

import styles from "./index.module.scss";

interface ITextAreaProps {
  name: string;
  label: string;
}

const TextArea: FC<ITextAreaProps> = ({ label, name }) => (
  <div className={styles.area}>
    <label htmlFor={name}>{label}</label>
    <div className={styles.textAreaWrapper}>
      <Field
        as="textarea"
        id={name}
        name={name}
        placeholder="write your message"
      />
    </div>
    <ErrorMessage name={name}>
      {(errorMsg) => <div className={styles.error}>{errorMsg}</div>}
    </ErrorMessage>
  </div>
);

export default TextArea;
