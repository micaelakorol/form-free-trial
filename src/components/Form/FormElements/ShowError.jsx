import React from 'react'
import IconWarning from './IconWarning'

const ShowError = ({errors, field}) => {
  return (
    <>
     {errors[field.name] && (
                <p className="error__message">*{errors[field.name]}</p>
              )}
              {errors[field.name] && <IconWarning />}
    </>
  )
}

export default ShowError