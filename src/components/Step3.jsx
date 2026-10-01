import React, { useState } from "react";

const Step3 = ({ setStep, data, setData }) => {
  const [errors, setErrors] = useState({});
  const handleNext = () => {
    const nextErrors = {};

    if (!data.contact.trim()) nextErrors.contact = "Enter your contact no.";
    if (!data.gender.trim()) {
      nextErrors.gender = "Enter your gender.";
    } else if (
      data.gender.trim() &&
      !["male", "female"].includes(data.gender.trim().toLowerCase())
    ) {
      nextErrors.gender = "Enter Male or Female.";
    }
    if (!data.age.trim()) {
      nextErrors.age = "Enter your age.";
    } else if (data.age.trim() && !/^[1-9]\d?$/.test(data.age.trim())) {
      nextErrors.age = "Enter an age from 1 to 99.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStep((prev) => prev + 1);
    }
  };
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1 className="inner-heading">Step 3</h1>
        <label htmlFor="contact">Contact No.</label>
        <input
          type="number"
          value={data.contact}
          placeholder="6573657966"
          id="contact"
          onChange={(e) => setData({ ...data, contact: e.target.value })}
        />
        {errors.contact && (
          <p style={{ color: "rgba(125, 111, 252, 1)" }} role="alert">
            {errors.contact}
          </p>
        )}
        <br />
        <label htmlFor="">Gender:</label>
        <input
          type="text"
          value={data.gender}
          placeholder="Male/Female"
          id="gender"
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        />
        {errors.gender && (
          <p style={{ color: "rgba(125, 111, 252, 1)" }} role="alert">
            {errors.gender}
          </p>
        )}
        <br />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          value={data.age}
          id="age"
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />
        {errors.age && (
          <p style={{ color: "rgba(125, 111, 252, 1)" }} role="alert">
            {errors.age}
          </p>
        )}
        <div className="btns">
          <button
            type="button"
            className="btn"
            onClick={() => setStep((prev) => prev - 1)}
          >
            Prev
          </button>
          <button type="button" className="btn" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
