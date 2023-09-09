import React from "react";
import "./RegistrationField.css";

const RegistrationField = ({ label, name, placeholder, type, error }) => {
  return (
    <>
      <div className="registration-field__container">
        <label className="registration-field__label">{label}</label>
        <input
          className="registration-field__form-field"
          name={name}
          type={type}
          placeholder={placeholder}
          minLength="2"
          maxLength="40"
          required
          pattern="^\S+@\S+\.\S+$"
        />
        <span className="registration-field__input-error">{error}</span>
      </div>
    </>
  );
};

export default RegistrationField;
