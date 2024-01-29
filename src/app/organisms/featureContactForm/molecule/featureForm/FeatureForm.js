import React from "react";
import { useRef } from "react";
import { Typography } from "@material-tailwind/react";
import Form from "app/libs/components/forms/components/Form";
import FormProvider from "app/libs/components/forms/components/FormProvider";
import Field from "app/libs/components/forms/components/Field";
import ErrorMessage from "app/libs/components/forms/components/ErrorMessage";
import { BODY, EMAIL } from "./constants/formFields";

function FeatureForm() {
  const emailRef = useRef(null);

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      // TODO: Integrate mailing API
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 3000);
  };

  const validate = (values) => {
    const errors = {};

    if (
      !values.email ||
      !values.email.trim() ||
      !emailRef.current.checkValidity()
    )
      errors.email = "Please provide a valid email address";
    if (!values.body || !values.body.trim())
      errors.body = "Please describe your requirements";

    return errors;
  };

  const labelProps = {
    className: "before:content-none after:content-none",
  };

  const inputStyles =
    "!border-t-blue-gray-200 focus:!border-t-gray-900 text-slate-950 bg-white border-none";

  return (
    <FormProvider onSubmit={handleSubmit} validate={validate}>
      {(submitting) => {
        return (
          <Form>
            <div className="flex flex-col mx-auto pt-12 space-y-4 lg:max-w-lg">
              <div>
                <Typography variant="h6">Your e-mail address</Typography>
                <Field
                  type="email"
                  placeholder="name@mail.com"
                  className={inputStyles}
                  labelProps={labelProps}
                  name={EMAIL}
                  inputRef={emailRef}
                  disabled={submitting}
                />
                <ErrorMessage name={EMAIL} />
              </div>
              <div>
                <Typography variant="h6">Describe your requirements</Typography>
                <Field
                  placeholder="What do you need?"
                  type="textarea"
                  rows="8"
                  className={inputStyles}
                  labelProps={labelProps}
                  name={BODY}
                  disabled={submitting}
                />
                <ErrorMessage name={BODY} />
              </div>
              <button
                className={`bg-white text-black p-2 rounded-md w-40 mx-auto ${submitting ? "bg-slate-400 cursor-progress" : ""}`}
                disabled={submitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </FormProvider>
  );
}

export default FeatureForm;
