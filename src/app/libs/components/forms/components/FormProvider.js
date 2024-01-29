import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import FormContext from "../context/FormContext";
import { EMPTY_OBJECT } from "app/constants/app.general";

/**
 * Generic form for all screens
 */
function FormProvider({ initialValues, validate, onSubmit, children }) {
  const [values, setValues] = useState(initialValues || EMPTY_OBJECT);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState(EMPTY_OBJECT);

  const runValidation = useCallback(() => {
    const errors = validate(values);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }, [JSON.stringify(values)]);

  useEffect(() => {
    // console.log("In form provider effect", values);
    if (values != EMPTY_OBJECT) runValidation();
  }, [JSON.stringify(values)]);

  return (
    <FormContext.Provider
      value={{
        initialValues,
        validate,
        handleSubmit: onSubmit,
        values,
        setValues,
        submitting,
        setSubmitting,
        errors,
        runValidation,
      }}
    >
      {children(submitting)}
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  initialValues: PropTypes.object,
  validate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default FormProvider;
