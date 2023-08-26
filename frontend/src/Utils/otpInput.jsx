import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Layout from "../component/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function OtpInputField() {
  const [otp, setOtp] = useState("");
  const { state } = useLocation(); //useId
  const navigate = useNavigate();

  const onChnage = (value) => {
    setOtp(value);
  };
  const handleSubmit = async () => {
    // Perform actions with the submitted OTP, such as sending it to the server
    console.log("Submitting OTP:", otp);
    const { data } = await axios.post(
      `http://localhost:8000/api/auth/verify-otp`,
      {
        userId: state,
        otp,
      }
    );
    if (data.status) {
      toast.success(data.message);
      navigate("/login");
    }
    // Add your logic here to handle the submitted OTP
  };
  return (
    <Layout>
      <div className="h-[60vh] flex gap-y-5 flex-col justify-center items-center otp_container ">
        <p>Verify Your email</p>
        <OtpInput
          className="otp_div"
          value={otp}
          onChange={onChnage}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </Layout>
  );
}
