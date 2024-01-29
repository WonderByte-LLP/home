import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import FormContext from "../context/FormContext";

function ErrorMessage({ name }) {
  const { errors } = useContext(FormContext);
  if (!errors || !errors[name]) return <></>;

  return <Typography variant="small" className="text-red-200">{errors[name]}</Typography>;
}

ErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ErrorMessage;
