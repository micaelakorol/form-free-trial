import React from "react";
import { initialForm } from "../InitialValues/initialForm";
import { validationsForm } from "../Validations/Validations";
import useForm from "../../hook/useForm";
import { ImgWarning } from "../Validations/ImgWarning";
import BtnTop from "./ElementsForm/BtnTop";
import { data } from "./DataFields/dataForm";
import Terms from "./ElementsForm/Terms";
import BtnSend from "./ElementsForm/BtnSend";


const Form2 = () => {
  const { form, errors, handleBlur, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );

  let fields = data.item;

  return (
    <section className="container-form">
      <BtnT />
      {/* Form */}
      <form action="" onSubmit={handleSubmit}>
        <section className="padding-form">
          {fields.map((field) => (
            <React.Fragment key={field.name}>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                value={form[field.name]}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors[field.name]}
                required={field.required}
              />
              {/* show errors */}
              {errors[field.name] && (
                <p className="error__message">{errors[field.name]}</p>
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
