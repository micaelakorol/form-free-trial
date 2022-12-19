import React from "react";
import { initialForm } from "../InitialValues/initialForm";
import { validationsForm } from "../Validations/Validations";
import useForm from "../../hook/useForm";
import { ImgWarning } from "../Validations/ImgWarning";
import BtnTop from "./BtnTop";

const Form2 = () => {
  const { form, errors, handleBlur, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );
  
  return (
    <section className="container-form">
 <BtnTop />
      {/* Form */}
      <form action="" onSubmit={handleSubmit}>
        <section className="padding-form">
          <input
            type="text"
            name="name"
            placeholder="Juan"
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.name}
            className={errors.name && "input"}
            required
          />
          {/* display errors */}
          {errors.name && <p className="error__message">*{errors.name}</p>}
          {errors.name && <ImgWarning />}

          <input
            type="text"
            name="lastname"
            placeholder="Perez"
            autoComplete="off"
            value={form.lastname}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.lastname && "input"}
            required
          />
          {/* display errors */}
          {errors.lastname && (
            <p className="error__message">*{errors.lastname}</p>
          )}
          {errors.lastname && <ImgWarning />}

          <input
            type="email"
            placeholder="email@example.com"
            name="email"
            autoComplete="off"
            value={form.email}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.email && "input"}
            required
          />
          {/* display errors */}
          {errors.email && <p className="error__message">*{errors.email}</p>}
          {errors.email && <ImgWarning />}

          <input
            type="password"
            name="password"
            placeholder="******"
            autoComplete="off"
            minLength={6}
            value={form.password}
            onBlur={handleBlur}
            onChange={handleChange}
            className={errors.password && "input"}
            required
          />
          {/* display errors */}
          {errors.password && (
            <p className="error__message">*{errors.password}</p>
          )}
          {errors.password && <ImgWarning />}

          <button type="submit" className="btn-top btn-submit">
            CLAIM YOUR FREE TRIAL
          </button>

          <p className="terms-and-conditions">
            By clocking the button, you are agreeing to out
            <a href="/"> Terms and Services</a>
          </p>
        </section>
      </form>
    </section>
  );
};

export default Form2;
