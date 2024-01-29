import React from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import FormContext from "../context/FormContext";
import { Typography } from "@material-tailwind/react";

function ErrorMessage({ name }) {
  const { errors } = useContext(FormContext);
  if (!errors || !errors[name]) return <></>;

  return <Typography variant="small" className="text-red-200">{errors[name]}</Typography>;
}

ErrorMessage.propTypes = {
  name: PropTypes.string,
};

export default ErrorMessage;
