import React from "react";
import "./RegistrationField.css";

const RegistrationField = ({
  label,
  name,
  placeholder,
  type,
  errors,
  handleChange,
  values,
}) => {
  return (
    <>
      <div className="registration-field">
        <label className="registration-field__label">{label}</label>
        <input
          className="registration-field__form-field"
          name={name}
          type={type}
          placeholder={placeholder}
          minLength="2"
          maxLength="40"
          required
          onChange={handleChange}
          value={values[name] || ""}
        />
        {errors && (
          <span className="registration-field__input-error">
            {errors[name]}
          </span>
        )}
      </div>
    </>
  );
};

export default RegistrationField;
