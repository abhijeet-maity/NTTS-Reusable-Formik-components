import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../App.css";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "Select a city", value: "" },
    { key: "Kolkata", value: "Kolkata" },
    { key: "Mumbai", value: "Mumbai" },
    { key: "Manali", value: "Manali" },
  ];

  const radioOptions = [
    {key: "male", value: "Male"},
    {key: "female", value: "Female"},
    {key: "others", value: "Others"},
  ]

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    // radioOption : Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form values", values);
  };
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="textarea"
              label="Description"
              name="description"
            />
            <FormikControl
              control="select"
              label="Select a city"
              name="selectOption"
              options={dropdownOptions}
            />
            <FormikControl 
              control="radio"
              label="Select Gender"
              name="radioOption"
              options={radioOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
