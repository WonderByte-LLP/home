import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

function FeatureCard(
  props = {
    children: undefined,
    imageClassName: undefined,
    imageSource: undefined,
    title: undefined,
  }
) {
  const { imageSource, title, imageClassName, children } = props;
  return (
    <div className="flex flex-col shadow-md rounded-lg bg-slate-50 overflow-hidden h-full lg:flex-row">
      <div className="lg:basis-2/5 shrink-0">
        <div className="flex justify-center items-center h-full">
          <img src={imageSource} className={imageClassName} alt=""></img>
        </div>
      </div>
      <div className="py-6 px-3">
        <Typography variant="h3" className="p-2">
          {title}
        </Typography>
        <Typography variant="p" className="p-2">
          {children}
        </Typography>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  imageClassName: PropTypes.string,
  imageSource: PropTypes.string,
  title: PropTypes.string,
};

export default FeatureCard;
