import { useState } from "react";
import { forgotPsswdAction } from "../../utils/api";
import toast from "react-hot-toast";

import OtpInput from "react-otp-input";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ForgotPassword = () => {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email) {
      const res = await forgotPsswdAction({
        email: email,
      })
        .then((res) => {
        
          toast.success("OTP sent to your email");
          setStep(1);
        })
        .catch((err) => {
          toast.error("Invalid email");
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 ">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-10 w-auto"
                src="/images/logo.svg"
                alt="Your Company"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
                Forgot your password
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form
                  action="#"
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  {step == 0 && (
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                        />
                      </div>
                    </div>
                  )}

                  {step == 1 && (
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        OTP
                      </label>
                      <div className="mt-2">
                        <OtpInput
                          value={otp}
                          onChange={setOtp}
                          numInputs={4}
                          renderSeparator={<span>-</span>}
                          renderInput={(props) => <input {...props} />}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="new-password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          New password
                        </label>
                        <div className="mt-2 flex items-center ">
                          <input
                            type={showPassword ? "password" : "text"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                          />
                          <div
                            className=" -ml-8 cursor-pointer "
                            onClick={() =>
                              setShowPassword(!showPassword)
                            }
                          >
                            {!showPassword ? (
                              <>
                                {" "}
                                <AiFillEyeInvisible />{" "}
                              </>
                            ) : (
                              <>
                                {" "}
                                <AiFillEye />{" "}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="confirm-password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Confirm Password
                        </label>
                        <div className="mt-2 flex items-center ">
                          <input
                            type={showConfirmPassword ? "password" : "text"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                          />
                          <div
                            className=" -ml-8 cursor-pointer "
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {!showConfirmPassword ? (
                              <>
                                {" "}
                                <AiFillEyeInvisible />{" "}
                              </>
                            ) : (
                              <>
                                {" "}
                                <AiFillEye />{" "}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/register_big.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
