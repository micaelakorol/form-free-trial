import React from "react";
import { initialForm } from "../../initialValues/initialForm";
import { validationsForm } from "../../hook/validations";
import {useForm} from "../../hook/useForm";
import BtnTop from "./FormElements/BtnTop";
import { data } from "./DataFields/dataForm";
import Terms from "./FormElements/Terms";
import BtnSend from "./FormElements/BtnSend";
import Input from "../../reusable/Input";
import ShowError from "./FormElements/ShowError";

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
              <ShowError errors={errors} field={field}/>
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
