import React, { FC } from "react";
import { Formik, Form, FormikProps, FormikValues } from "formik";

import { initialValues, IValues } from "./initialValues";
import { selectOptions, radioOptions, checkboxOptions } from "./constants";
import { validationSchema } from "./validationSchema";
import Input from "../Formik/Input";
import TextArea from "../Formik/TextArea";
import Select from "../Formik/Select";
import RadioButtons from "../Formik/RadioButtons";
import Checkbox from "../Formik/Checkbox";

import styles from "./index.module.scss";

const FormContact: FC = () => {
  const onSubmit = (values: IValues, formikValues: FormikValues) => {
    console.log("Form data", values);
    formikValues.setSubmitting(false);
    formikValues.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, isSubmitting }: FormikProps<IValues>) => (
        <Form className={styles.form}>
          <button type="reset">clear form</button>
          <Input type="email" label="Email" name="email" />
          <TextArea label="Description" name="description" />
          <Select
            label="select a options"
            name="selectOption"
            options={selectOptions}
          />
          <RadioButtons
            label="Choise Options"
            name="radioOption"
            options={radioOptions}
          />
          <Checkbox
            label="Checkbox Options"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <button type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
