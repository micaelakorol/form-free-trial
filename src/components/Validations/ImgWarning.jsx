import React from "react";
import warning from "../../images/icon-error.svg";

export const ImgWarning = () => {
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
