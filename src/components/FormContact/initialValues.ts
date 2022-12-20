export interface IValues {
  email: string;
  description: string;
  selectOption: string;
  radioOption: string;
  checkboxOption: [];
}

export const initialValues: IValues = {
  email: "",
  description: "",
  selectOption: "",
  radioOption: "",
  checkboxOption: [],
};
