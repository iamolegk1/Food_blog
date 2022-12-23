import React, { FC } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, FormikProps, FormikHelpers } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const onSubmit = (values: IValues, actions: FormikHelpers<IValues>) => {
    try {
      actions.setSubmitting(true);
      emailjs
        .send(
          service,
          template,
          {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            message: values.message,
            radioOption: values.radioOption,
            checkboxOption: values.checkboxOption,
            selectOption: values.selectOption,
          },
          user
        )
        .then(() => {
          notifySuccess();
          actions.resetForm();
          actions.setSubmitting(false);
        });
    } catch {
      notifyError();
      actions.resetForm();
      actions.setSubmitting(false);
    }
  };

  const notifySuccess = () =>
    toast.success("Message delivered!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyError = () =>
    toast.error("Message not delivered!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <>
      <div className={styles.formWrapper}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isValid, isSubmitting }: FormikProps<IValues>) => (
            <Form className={styles.form}>
              <button className={styles.buttonReset} type="reset">
                clear form
              </button>
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
                className={styles.buttonSubmit}
                type="submit"
                disabled={!isValid}
              >
                {isSubmitting ? "loading..." : "submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </>
  );
};

export default FormContact;
