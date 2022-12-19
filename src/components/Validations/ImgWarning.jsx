import React from 'react'
import warning from '../../images/icon-error.svg'

export const ImgWarning = () => {
  return (
    <>
              <img
              src={warning}
              alt="Advertencia, campo requerido"
              className="error__img"
            />
    </>
  )
}
