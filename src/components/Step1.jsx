import React, { useState } from "react";

const Step1 = ({ setStep, data, setData }) => {
  const [errors, setErrors] = useState({});
  const handleNext = () => {
    const nextErrors = {};

    if (!data.username.trim()) nextErrors.username = "Enter a username.";
    if (!data.firstname.trim()) {
      nextErrors.firstname = "Enter your first name.";
    } else if (/\d/.test(data.firstname)) {
      nextErrors.firstname = "Name cannot contain numbers!";
    }
    if (!data.lastname.trim()) {
      nextErrors.lastname = "Enter your last name.";
    } else if (/\d/.test(data.lastname)) {
      nextErrors.lastname = "Name cannot contain numbers!";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStep((prev) => prev + 1);
    }
  };
  return (
    <>
      <h1 className="main-heading">Multi-Step Form</h1>
      <div className="form-wrapper">
        <div className="form-container">
          <h1 className="inner-heading">Step 1</h1>
          <label htmlFor="username">Username:</label>
          <input
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            placeholder="John_Doe"
            id="username"
            type="text"
          />
          {errors.username && (
            <p style={{ color: "rgba(125, 111, 252, 1)" }} role="alert">
              {errors.username}
            </p>
          )}
          <br />
          <label htmlFor="firstname">First Name:</label>
          <input
            value={data.firstname}
            onChange={(e) => setData({ ...data, firstname: e.target.value })}
            placeholder="John"
            id="firstname"
            type="text"
          />
          {errors.firstname && (
            <p style={{ color: "rgba(125, 111, 252, 1)" }} role="alert">
              {errors.firstname}
            </p>
          )}
          <br />
          <label htmlFor="lastname">Last Name:</label>
          <input
            value={data.lastname}
            onChange={(e) => setData({ ...data, lastname: e.target.value })}
            placeholder="Doe"
            id="lastname"
            type="text"
          />
          {errors.lastname && (
            <p style={{ color: "rgba(125, 111, 252, 1)" }} role="alert">
              {errors.lastname}
            </p>
          )}
          <br />
          <button type="button" className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Step1;
