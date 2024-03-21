import { Link, useNavigate } from "react-router-dom";
import AuthImage from "../images/auth-image.jpg";
import logo from "../images/logo.svg";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { authenticate, completeAuth } from "../slices/auth";
import LoadingButton from "../components/LoadingButton";

function Signin() {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [challengeID, setChallengeID] = useState("");
  const [feedback, setFeedback] = useState({ type: "", message: "" });
  const dispatch = useDispatch();

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (challengeID) {
      dispatch(completeAuth({ code, challengeID, phone }))
        .then((action) => {
          setLoading(false);
          if (action.meta.requestStatus === "fulfilled") {
            setFeedback({ type: "success", message: "Login successful." });
            console.log("Login successful", action.payload);

            navigate("/dashboard"); // Navigate to dashboard route
          } else {
            setFeedback({ type: "error", message: "Failed." });
            console.error("Login failed", action.error);
          }
        })
        .catch((error) => {
          setLoading(false);
          console.error("An unexpected error occurred", error);
        });
    } else {
      dispatch(authenticate({ phone, countryCode: "NG" }))
        .then((action) => {
          setLoading(false);
          if (action.meta.requestStatus === "fulfilled") {
            setChallengeID(action.payload.challengeID);
            setFeedback({ type: "success", message: "Login code sent." });
            console.log("Code sent", action.payload);
          } else {
            console.error("Login failed", action.error);
          }
        })
        .catch((error) => {
          setLoading(false);
          setFeedback({ type: "error", message: "Failed." });
          console.error("An unexpected error occurred", error);
        });
    }
  };

  return (
    <main className="bg-white">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-screen h-full flex flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block" to="/">
                  <img src={logo} alt="cart.africa" className="h-6" />
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-3/4 mx-auto px-4 py-8">
              <h1 className="text-3xl text-gray-800 font-bold mb-6">
                Welcome back! ✨
              </h1>
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      className="form-input w-full"
                      type="phone"
                      value={phone}
                      disabled={challengeID}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  {challengeID && (
                    <div>
                      <label
                        className="block text-sm font-medium mb-1"
                        htmlFor="code"
                      >
                        Code
                      </label>
                      <input
                        id="code"
                        className="form-input w-full"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        type="password"
                      />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-6">
                  {loading ? (
                    <LoadingButton />
                  ) : (
                    <button
                      className="btn bg-black hover:bg-black text-white"
                      type="submit"
                    >
                      Continue
                    </button>
                  )}
                </div>
              </form>
              {/* Footer */}
              {feedback.type && (
                <div className="pt-5 mt-6 border-t border-gray-200">
                  {/* Feedback */}
                  <div className="mt-5">
                    <div
                      className={`${
                        feedback.type === "success" &&
                        "bg-green-100 text-green-600"
                      } ${
                        feedback.type === "error" && "bg-red-100 text-red-600"
                      } px-3 py-2 rounded`}
                    >
                      <svg
                        className="inline w-3 h-3 shrink-0 fill-current mr-2"
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <span className="text-sm">{feedback.message}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full"
            src={AuthImage}
            width="760"
            height="1024"
            alt="Authentication"
          />
        </div>
      </div>
    </main>
  );
}

export default Signin;
