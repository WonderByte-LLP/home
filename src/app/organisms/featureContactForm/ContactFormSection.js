import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureForm from "./molecule/featureForm";

function ContactFormSection() {
  return (
    <div className="flex flex-col p-12 bg-sky-800 text-slate-200">
      <Typography variant="h2" className="block mx-auto">
        Get In Touch
      </Typography>
      <Typography variant="paragraph" className="text-center">
        Let's get in touch! Let us know your requirements and get a free quote!
      </Typography>
      <FeatureForm />
    </div>
  );
}

export default ContactFormSection;
