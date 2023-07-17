import React from "react";
import { initialForm } from "../InitialValues/initialForm";
import { validationsForm } from "../Validations/Validations";
import useForm from "../../hook/useForm";
import { ImgWarning } from "../Validations/ImgWarning";
import BtnTop from "./ElementsForm/BtnTop";
import { data } from "./DataFields/dataForm";
import Terms from "./ElementsForm/Terms";
import BtnSend from "./ElementsForm/BtnSend";
import Input from "./ElementsForm/Input";

const Form2 = () => {
  const { form, errors, handleBlur, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );
  let fields = data.item;
  return (
    <section className="container-form">
      <BtnTop />
      {/* Form */}
      <form action="" onSubmit={handleSubmit}>
        <section className="padding-form">
          {fields.map((field) => (
            <React.Fragment key={field.name}>
              <Input
                field={field}
                handleBlur={handleBlur}
                handleChange={handleChange}
                form={form}
                errors={errors}
              />
              {/* show errors */}
              {errors[field.name] && (
                <p className="error__message">*{errors[field.name]}</p>
              )}
              {errors[field.name] && <ImgWarning />}
            </React.Fragment>
          ))}

          <BtnSend />
          {/** Terms and conditions */}
          <Terms />
        </section>
      </form>
    </section>
  );
};

export default Form2;
