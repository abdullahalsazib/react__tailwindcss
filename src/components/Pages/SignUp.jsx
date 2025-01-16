import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiEnvelope, BiLock, BiShow, BiHide, BiUser } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center p-4 bg-[#FF4D6D]">
        <Link to="/">
          <img
            src="https://wpocean.com/html/tf/pengu/assets/images/logo-2.svg"
            alt="Logo"
            className="h-6"
          />
        </Link>
        <Link
          to="/"
          className="px-4 py-1.5 border border-white text-white rounded-lg text-sm hover:bg-white hover:text-[#FF4D6D] transition-colors"
        >
          Home
        </Link>
      </div>

      {/* Left Section */}
      <div className="hidden lg:flex flex-col lg:w-1/2 bg-[#FF4D6D] items-center justify-center p-6 xl:p-12 relative">
        <div className="absolute top-10 w-full px-20 flex items-center justify-between">
          <Link to="/" className="top-8 left-8">
            <img
              src="https://wpocean.com/html/tf/pengu/assets/images/logo-2.svg"
              alt="Logo"
              className="h-8"
            />
          </Link>
          <Link
            to="/login"
            className="top-8 left-8 bg-[#fff] text-[#ff3357] py-2.5 px-6 sm:py-3 rounded-lg hover:bg-slate-200 transition-colors text-sm sm:text-base"
          >
            <h1>Login to Account</h1>
          </Link>
        </div>

        <div className="max-w-md w-full">
          <img
            src="https://wpocean.com/html/tf/pengu/assets/images/login.png"
            alt="Sign Up"
            className="w-full max-w-[400px] mx-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 xl:p-12">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Create an Account
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Sign up for your account today
            </p>
          </div>

          <form className="space-y-4 sm:space-y-6">
            <div className="space-y-1 sm:space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF4D6D] focus:border-transparent text-sm sm:text-base"
                />
                <BiUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg sm:text-xl" />
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="demo@gmail.com"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF4D6D] focus:border-transparent text-sm sm:text-base"
                />
                <BiEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg sm:text-xl" />
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF4D6D] focus:border-transparent text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <BiHide className="text-lg sm:text-xl" />
                  ) : (
                    <BiShow className="text-lg sm:text-xl" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-1 sm:space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••"
                  className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF4D6D] focus:border-transparent text-sm sm:text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <BiHide className="text-lg sm:text-xl" />
                  ) : (
                    <BiShow className="text-lg sm:text-xl" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-gray-300 text-[#FF4D6D] focus:ring-[#FF4D6D]"
              />
              <span className="ml-2 text-xs sm:text-sm text-gray-600">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="text-[#FF4D6D] hover:text-[#ff3357]"
                >
                  Terms & Conditions
                </Link>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF4D6D] text-white py-2.5 sm:py-3 rounded-lg hover:bg-[#ff3357] transition-colors text-sm sm:text-base"
            >
              Create Account
            </button>

            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-600">OR</p>
              <div className="mt-3 sm:mt-4 flex justify-center space-x-3 sm:space-x-4">
                <button className="p-1.5 sm:p-2 bg-[#3b5998] text-white rounded-md hover:bg-opacity-90">
                  <FaFacebookF className="text-lg sm:text-xl" />
                </button>
                <button className="p-1.5 sm:p-2 bg-[#1DA1F2] text-white rounded-md hover:bg-opacity-90">
                  <FaTwitter className="text-lg sm:text-xl" />
                </button>
                <button className="p-1.5 sm:p-2 bg-[#0077B5] text-white rounded-md hover:bg-opacity-90">
                  <FaLinkedinIn className="text-lg sm:text-xl" />
                </button>
              </div>
            </div>

            <p className="text-center text-xs sm:text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#FF4D6D] hover:text-[#ff3357] font-medium"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
