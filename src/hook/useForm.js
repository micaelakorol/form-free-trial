import { useState } from "react";
import swal from "sweetalert";

export default function useForm(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form)); //capture error.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    setForm(initialForm);
    if (errors) {
      return swal("very Good", "Check out your email!", "success");
    }
  };

  return {
    form,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  };
}
