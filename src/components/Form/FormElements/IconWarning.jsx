import React from "react";
import warning from '../../../assets/icon-error.svg'
const IconWarning = () => {
  return (
    <>
      <img
        src={warning}
        alt="required-field"
        className="error__img"
      />
    </>
  );
};
export default IconWarning