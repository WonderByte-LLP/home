import React, { useCallback, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { EMPTY_OBJECT } from "app/constants/app.general";
import FormContext from "../context/FormContext";

/**
 * Generic form for all screens
 */
function FormProvider({ initialValues, validate, onSubmit, children }) {
  const [values, setValues] = useState(initialValues || EMPTY_OBJECT);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState(EMPTY_OBJECT);

  const runValidation = useCallback(() => {
    const e = validate(values);
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [JSON.stringify(values)]);

  useEffect(() => {
    // console.log("In form provider effect", values);
    if (values !== EMPTY_OBJECT) runValidation();
  }, [JSON.stringify(values)]);

  const context = useMemo(
    () => ({
      initialValues,
      validate,
      handleSubmit: onSubmit,
      values,
      setValues,
      submitting,
      setSubmitting,
      errors,
      runValidation,
    }),
    [
      initialValues,
      validate,
      onSubmit,
      values,
      setValues,
      submitting,
      setSubmitting,
      errors,
      runValidation,
    ]
  );

  return (
    <FormContext.Provider value={context}>
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
