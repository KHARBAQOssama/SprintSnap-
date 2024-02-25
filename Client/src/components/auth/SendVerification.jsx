import { useDispatch, useSelector } from "react-redux";
import { demandVerification, reset } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SendVerification = ({ className }) => {
  const dispatch = useDispatch();
  const now = new Date();
  const { isSuccess, user } = useSelector((state) => state.auth);
  const [verificationSent, setVerificationSent] = useState(false);
  const handleDemand = () => {
    dispatch(demandVerification({ email: user.email }));
  };
  useEffect(() => {
    const checkIfSentExpired = () => {
      const item = JSON.parse(localStorage.getItem("verificationSent"));
      if (item?.expiry < now.getTime())
        localStorage.removeItem("verificationSent");
    };
    checkIfSentExpired();
    setVerificationSent(
      localStorage.getItem("verificationSent") ? true : false
    );
    if (isSuccess) {
      localStorage.setItem(
        "verificationSent",
        JSON.stringify({
          expiry: now.getTime() + 540000,
        })
      );
    }

    dispatch(reset());
  }, [isSuccess]);
  return (
    <>
      {!verificationSent &&
        <button className={className} onClick={handleDemand}>
          Send Verification Email
        </button>
      }
      {
        verificationSent && <p>we have sent a validation link to your email</p>
      }
    </>
  );
};

export default SendVerification;
