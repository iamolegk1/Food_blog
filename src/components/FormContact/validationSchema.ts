import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),

  description: Yup.string()
    .min(5, "minimum 5 letter")
    .required("Description is required"),

  selectOption: Yup.string().required("Select the desired option"),

  radioOption: Yup.string().required("Required radioOption"),

  checkboxOption: Yup.array().min(1, "Choose min 1"),
});
