import React, { useState } from "react";

const step2 = ({ setStep, data, setData }) => {
  const [errors, setErrors] = useState({});
  const handleNext = () => {
    const nextErrors = {};

    if (!data.email.trim()) {
      nextErrors.email = "Enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      nextErrors.email = "Enter a valid email address!";
    }
    if (!data.password.trim()) nextErrors.password = "Enter a password.";
    if (!data.country.trim()) nextErrors.country = "Enter a country name.";
    if (!data.city.trim()) nextErrors.city = "Enter a city name.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setStep((prev) => prev + 1);
    }
  };
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1 className="inner-heading">Step 2</h1>
        <label htmlFor="username">Email:</label>
        <input
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          placeholder="johndoe@gmail.com"
          id="email"
          type="email"
        />
        {errors.email && (
          <p style={{ color: "rgba(125, 111, 252, 1)" }} role="alert">
            {errors.email}
          </p>
        )}
        <br />
        <label htmlFor="firstname">Password:</label>
        <input
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          placeholder="12345678"
          id="password"
          type="password"
        />
        {errors.password && (
          <p style={{ color: "rgba(125, 111, 252, 1)" }} role="alert">
            {errors.password}
          </p>
        )}
        <br />
        <label htmlFor="lastname">Country:</label>
        <input
          value={data.country}
          onChange={(e) => setData({ ...data, country: e.target.value })}
          placeholder="Pakistan"
          id="country"
          type="text"
        />
        {errors.country && (
          <p style={{ color: "rgba(125, 111, 252, 1)" }} role="alert">
            {errors.country}
          </p>
        )}
        <br />
        <label htmlFor="city">City:</label>
        <input
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
          placeholder="Karachi"
          id="city"
          type="text"
        />
        {errors.city && (
          <p style={{ color: "rgba(125, 111, 252, 1)" }} role="alert">
            {errors.city}
          </p>
        )}
        <br />
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

export default step2;
