import React, { FC } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { Formik, Form, FormikProps, FormikHelpers } from "formik";

import { initialValues, IValues } from "./initialValues";
import { radioOptions, checkboxOptions, selectOptions } from "./constants";
import { validationSchema } from "./validationSchema";
import Input from "../Formik/Input";
import TextArea from "../Formik/TextArea";
import RadioButtons from "../Formik/RadioButtons";
import Select from "../Formik/Select";
import Checkbox from "../Formik/Checkbox";

import styles from "./index.module.scss";

const FormContact: FC = () => {
  const service = process.env.REACT_APP_EMAIL_SERVICE_ID as string;
  const template = process.env.REACT_APP_EMAIL_TEMPLATE_ID as string;
  const user = process.env.REACT_APP_EMAIL_USER_ID as string;

  function SendEmail(object: any) {
    emailjs.send(service, template, object, user).then(
      (result: EmailJSResponseStatus) => {
        console.log(result);
      },
      (error: EmailJSResponseStatus) => {
        console.log(error.text);
      }
    );
  }

  const onSubmit = (values: IValues, actions: FormikHelpers<IValues>) => {
    console.log(values);
    SendEmail(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, isSubmitting }: FormikProps<IValues>) => (
        <Form className={styles.form}>
          {/* <button type="reset">clear form</button> */}
          <Input type="text" label="firstName" name="firstName" />
          <Input type="text" label="lastName" name="lastName" />
          <Input type="email" label="Email" name="email" />
          <TextArea label="Message" name="message" />
          <RadioButtons
            label="Select a Choice Radio"
            name="radioOption"
            options={radioOptions}
          />
          <Checkbox
            label="Check All That Apply"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <Select
            label="Select a options"
            name="selectOption"
            options={selectOptions}
          />
          <button
            className={styles.button}
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
