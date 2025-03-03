import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "../App.css";

function RadioButton(props) {
  const { label, name, options, ...rest } = props;
  console.log(options);
  console.log(name);

  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field?.value === option?.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default RadioButton;

// {/* <input
//   type="radio"
//   id={option.value}
//   value={option.value}
//   checked={field?.value === option?.value}
//   {...field}
//   {...rest}
// /> */}


  /* <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field?.value === option?.value}
                /> */

