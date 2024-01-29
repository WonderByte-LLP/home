import React from "react";
import { useCallback, useContext } from "react";
import debounce from "lodash/debounce";
import PropType from "prop-types";
import { Input, Textarea } from "@material-tailwind/react";
import FormContext from "../context/FormContext";
import { EMPTY_OBJECT } from "app/constants/app.general";

function Field({ name, ...props }) {
  const { values, setValues } = useContext(FormContext);

  const handleChange = useCallback(
    debounce((e) => {
      setValues({
        ...(values || EMPTY_OBJECT),
        [name]: e.target.value,
      });
    }, 400),
    [JSON.stringify(values)]
  );

  if (props.type === "textarea")
    return (
      <Textarea name={name} onChange={handleChange} {...props} />
    );
  return (
    <Input name={name} onChange={handleChange} {...props} />
  );
}

Field.propTypes = {
  type: PropType.string.isRequired,
  name: PropType.string.isRequired,
};

export default Field;
