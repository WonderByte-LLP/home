import React from "react";
import { useContext } from "react";
import PropTypes from 'prop-types';
import FormContext from "../context/FormContext";

function Form({ children }) {
  const { handleSubmit, values, submitting, setSubmitting, runValidation } =
    useContext(FormContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (submitting) {
      console.log("Form already submitting. Ignoring event.");
      return;
    }
    if (!runValidation()) {
      console.log("Invalid form. Not submitting.");
      return;
    }
    setSubmitting(true);
    handleSubmit(values, { setSubmitting });
  };

  return (
    <form onSubmit={handleFormSubmit} action="">
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.element,
};

export default Form;
