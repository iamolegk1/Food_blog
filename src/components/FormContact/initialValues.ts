export interface IValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  radioOption: string;
  checkboxOption: [];
  selectOption: string;
}

export const initialValues: IValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  radioOption: "",
  checkboxOption: [],
  selectOption: "",
};
