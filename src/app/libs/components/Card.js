import { Typography } from "@material-tailwind/react";
import React from "react";

const Card = ({ imgSrc, title, imgClass, children }) => {
  return (
    <div
      className={`flex flex-col shadow-md rounded-lg bg-slate-50 overflow-hidden h-full lg:flex-row`}
    >
      <div className="lg:basis-2/5 shrink-0">
        <div className="flex justify-center items-center h-full">
          <img src={imgSrc} className={imgClass}></img>
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
};

Card.propTypes = {};

export default Card;
