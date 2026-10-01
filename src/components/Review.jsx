import React from "react";

const Review = ({ setStep, data, setData }) => {
  const handleSubmit = () => {
    console.log(data);

    setStep(1);
    setData({
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      country: "",
      city: "",
      contact: "",
      gender: "",
      age: "",
    });
  };
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1 className="inner-heading">Form Review</h1>
        <li>Username: {data.username}</li>
        <li>First Name: {data.firstname}</li>
        <li>Last Name: {data.lastname}</li>
        <li>Email: {data.email}</li>
        <li>Password: {data.password}</li>
        <li>Country: {data.country}</li>
        <li>City: {data.city}</li>
        <li>Contact: {data.contact}</li>
        <li>Gender: {data.gender}</li>
        <li>Age: {data.age}</li>

        <div className="btns">
          <button
            type="button"
            className="btn"
            onClick={() => setStep((prev) => prev - 1)}
          >
            Prev
          </button>
          <button type="button" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
