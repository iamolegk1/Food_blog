import React, { FC, Fragment } from "react";
import { Field, ErrorMessage, FieldProps } from "formik";

import { TOptions } from "../typed";

import styles from "./index.module.scss";

interface ICheckboxProps {
  name: string;
  label: string;
  options: TOptions[];
}

const Checkbox: FC<ICheckboxProps> = ({ label, name, options }) => (
  <div className={styles.wrapper}>
    <label>{label}</label>

    <Field name={name}>
      {(formikProps: FieldProps) => {
        return options.map((option) => {
          return (
            <Fragment key={option.key}>
              <input
                type="checkbox"
                id={option.value}
                {...formikProps.field}
                value={option.value}
                checked={formikProps.field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </Fragment>
          );
        });
      }}
    </Field>

    <ErrorMessage name={name}>
      {(errorMsg) => <div className={styles.error}>{errorMsg}</div>}
    </ErrorMessage>
  </div>
);

export default Checkbox;
