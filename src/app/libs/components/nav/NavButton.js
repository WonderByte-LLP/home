import React from "react";
import { Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const NavButton = ({ children, ...props }) => {
  return (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="flex items-center gap-x-2 p-1 font-medium font-monospace uppercase tracking-wider mx-auto underline-offset-4 hover:underline"
      {...props}
    >
      {children}
    </Typography>
  );
};

NavButton.propTypes = {
  props: PropTypes.shape(Typography.propTypes),
  test: PropTypes.string.isRequired,
};

export default NavButton;
