import { functionContext } from "../hooks/context";
import { Formik, Form, Field } from "formik";
import { FaLink } from "react-icons/fa";
import { useContext } from "react";

function FormUrl({ setRes, setUrl }) {
  const { handleSubmit } = useContext(functionContext);

  return (
    <Formik
      initialValues={{ data: "" }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(setRes, setUrl, values, resetForm);
      }}
    >
      {() => (
        <Form className="form">
          <div className="form__container">
            <FaLink className="form__http" />
            <Field
              type="text"
              name="data"
              autoComplete="off"
              placeholder="Insert link..."
            />
            <button type="submit" className="form__btn">
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormUrl;
