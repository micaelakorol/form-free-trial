import React from 'react'
const Input = ({field, handleBlur,handleChange,errors,form}) => {
  return (
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
  )
}

export default Input