import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Review from "./Review";
import "../App.css";

const Form = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
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

  return (
    <form>
      {step === 1 && <Step1 data={data} setData={setData} setStep={setStep} />}
      {step === 2 && <Step2 data={data} setData={setData} setStep={setStep} />}
      {step === 3 && <Step3 data={data} setData={setData} setStep={setStep} />}
      {step === 4 && <Review data={data} setData={setData} setStep={setStep} />}
    </form>
  );
};

export default Form;
