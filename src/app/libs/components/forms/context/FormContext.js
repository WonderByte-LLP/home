import { EMPTY_OBJECT } from "app/constants/app.general";
import { createContext } from "react";

const FormContext = createContext({
  initialValues: undefined,
  validate: undefined,
  handleSubmit: undefined,
  values: undefined,
  setValues: undefined,
  submitting: undefined,
  setSubmitting: undefined,
  errors: undefined,
});

export default FormContext;
