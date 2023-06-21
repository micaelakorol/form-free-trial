export const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  //validations:

  if (!form.name.trim()) {
    errors.name = "Name cannot be empty";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Name  only accepts letters and spaces";
  }

  if (!form.lastname.trim()) {
    errors.lastname = "Last Name cannot be empty";
  } else if (!regexName.test(form.lastname.trim())) {
    errors.lastname = "Last Name only accepts letters and spaces";
  }
  if (!form.email.trim()) {
    errors.email = "Looks like this is not an email";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Write a valid format email";
  }

  if (!form.password) {
    errors.password = "Password cannot be empty";
  } else if (form.password.length <= 5) {
    errors.password = "Minimum 6 characters";
  }
  return errors;
};
