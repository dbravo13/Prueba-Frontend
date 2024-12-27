"use client";
import { useState } from "react";

import { FiArrowLeftCircle } from "react-icons/fi";

interface ModalLoginProps {
  onClose: () => void;
}

function ModalLogin({ onClose }: ModalLoginProps): React.JSX.Element | null {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleTabChange = (view) => {
    setIsSignUp(view === "signUp");
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const closeModal = (): void => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="relative flex rounded-lg shadow-lg overflow-hidden w-[1320px] h-[720px] bg-black/30 backdrop-blur-sm">
        <button
          onClick={closeModal}
          className="absolute top-2 left-2 text-white hover:text-gray-900 text-2xl font-semibold  w-[66px] h-[40px] flex items-center justify-center space-x-2"
          aria-label="Close modal"
        >
          <FiArrowLeftCircle />
          <span>Back</span>
        </button>

        <div className="w-full md:w-1/2 p-6 flex flex-col items-center justify-center text-center text-white">
          <div className="flex mb-6 justify-center">
            <button
              onClick={() => handleTabChange("signUp")}
              className={`text-white w-32 h-12 rounded-md transition duration-300 ${isSignUp ? "bg-yellow-500" : "bg-secondary-dark hover:bg-secondary-dark/80"}`}
            >
              Sign Up
            </button>
            <button
              onClick={() => handleTabChange("logIn")}
              className={`text-white w-32 h-12 rounded-md transition duration-300 ${!isSignUp ? "bg-yellow-500" : "bg-secondary-extraLight hover:bg-secondary-extraLight/80"}`}
            >
              Log In
            </button>
          </div>

          {isSignUp ? (
            <form
              action=""
              className="flex flex-col items-center w-full max-w-md"
            >
              <input
                type="submit"
                value="Register with your Email"
                className="bg-secondary-extraLight text-black w-full py-2 px-4 rounded-md hover:bg-secondary-extraLight/80 transition duration-300"
                style={{ width: "424px", height: "46px" }}
              />
            </form>
          ) : (
            <form className="flex flex-col items-center w-full max-w-md">
              <h2 className="text-lg font-semibold mb-4">
                We love having you back
              </h2>
              <div className="mb-4 flex justify-center w-full">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-black sm:text-sm"
                  style={{ width: "424px", height: "46px" }}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="mb-4 flex justify-center w-full">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="form-control mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none text-black sm:text-sm"
                  style={{ width: "424px", height: "46px" }}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <input
                type="submit"
                value="Continue"
                className="bg-secondary-extraLight text-black w-full py-2 px-4 rounded-md hover:bg-secondary-extraLight/80 transition duration-300"
                style={{ width: "424px", height: "46px" }}
              />
              <div className="mt-4 text-center">
                <a href="/" className="text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
            </form>
          )}
        </div>

        <div className="hidden md:block w-1/2 bg-cover bg-center bg-secondary-first relative ">
          <div className="flex flex-col items-center justify-start h-full text-white text-center p-8">
            <div className="mb-4">
              <h2 className="text-3xl font-bold mb-4  w-[418px] h-[72px]">
                {isSignUp
                  ? "Welcome to Quickbet Movies!"
                  : "Welcome back to Quickbet Movies!"}
              </h2>
              <p className="text-lg">
                {isSignUp
                  ? "🎬 Ready to unlock a universe of cinematic delights? Sign up now and start your journey with us!"
                  : "🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!"}
              </p>
            </div>
            <img
              src={isSignUp ? "/signin.svg" : "/login.svg"}
              alt="Decorative SVG"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
