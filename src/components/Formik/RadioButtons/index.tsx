import React, { FC } from "react";
import { Field, ErrorMessage, FieldProps } from "formik";

import { TOptions } from "../typed";

import styles from "./index.module.scss";

interface IRadioButtonsProps {
  name: string;
  label: string;
  options: TOptions[];
}

const RadioButtons: FC<IRadioButtonsProps> = ({ label, name, options }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>
      <div className={styles.radioWrapper}>
        <Field name={name}>
          {(formikProps: FieldProps) => {
            return options.map((option) => {
              return (
                <div className={styles.radio} key={option.key}>
                  <input
                    type="radio"
                    id={option.value}
                    {...formikProps.field}
                    value={option.value}
                    checked={formikProps.field.value === option.value}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage name={name}>
        {(errorMsg) => <div className={styles.error}>{errorMsg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default RadioButtons;
