import { useState } from "react";
import { forgotPsswdAction } from "../../utils/api";

const ForgotPassword = () => {

  const [email,setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email) {
      const res = await forgotPsswdAction({
        email: email
      });
  
      console.log("User registered successfully!", res.data);
    }
    } catch (error) {
      console.error("Error registering:", error);
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
                      <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
    
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
    
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                              Remember me
                            </label>
                          </div>
                          
                        </div>
    
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
    