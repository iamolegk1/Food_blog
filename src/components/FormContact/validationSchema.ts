import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string().required("FirstName is required"),

  lastName: Yup.string().required("LastName is required"),

  // email: Yup.string()
  //   .email("Must be a valid email")
  //   .required("Email is required"),

  message: Yup.string()
    .min(5, "Message minimum 5 letter")
    .required("Message is required"),

  // radioOption: Yup.string().required("Required radioOption"),

  // selectOption: Yup.string().required("Select the desired option"),

  // checkboxOption: Yup.array().min(1, "Choose min 1"),
});
