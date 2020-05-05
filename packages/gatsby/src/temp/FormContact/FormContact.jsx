import React from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const FormContact = () => {
  return (
    <div>
      <h3>Ecrivez nous</h3>
      <Formik
        initialValues={{ email: "", message: "", sujet: "" }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              email
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </label>
            <label>
              sujet
              <Field as="select" name="sujet" placeholder="Sujet">
                <option value="image">Image</option>
                <option value="usage">Usage</option>
                <option value="espace">Espace</option>
                <option value="atelier">Atelier</option>
              </Field>
              <ErrorMessage name="sujet" component="div" />
            </label>

            <label>
              message
              <Field as="textarea" name="message" />
              <ErrorMessage name="message" component="div" />
            </label>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
