import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up data:", {
      firstName,
      lastName,
      email,
      password,
      isChecked,
    });
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950">
      {/* Left Section - Form */}
      <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
        <div className="w-full max-w-md mx-auto mb-5 sm:pt-6 pt-4 px-4"></div>

        <div className="flex flex-col justify-center flex-1 w-full max-w-[37em] px-4 mx-auto">
          <div>
            {/* Logo */}
            <div className="mb-[5em]">
              <div className="h-12 flex items-center text-xl font-bold text-[#1C3F3A] dark:hidden">
                <img
                  src="https://complyblock.betaserver.host/wp-content/uploads/2025/09/Comply-Block-01-e1759346885138.png"
                  alt="ComplyBlock"
                  className="h-20"
                />
              </div>
              <div className="h-12 flex items-center text-xl font-bold text-[#1C3F3A] dark:block hidden">
                <img
                  src="https://complyblock.betaserver.host/wp-content/uploads/2025/09/Comply-Block-04-e1759264476301.jpg"
                  alt="ComplyBlock"
                  className="h-20"
                />
              </div>
            </div>

            {/* Header */}
            <div className="mb-5 sm:mb-8">
              <h1 className="mb-2 font-bold text-2xl sm:text-3xl text-[#1C3F3A] dark:text-white">
                Sign Up
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enter your details to create your account
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* First Name */}
                  <div className="sm:col-span-1">
                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1C3F3A] focus:border-transparent dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="sm:col-span-1">
                    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1C3F3A] focus:border-transparent dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1C3F3A] focus:border-transparent dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm border rounded-lg border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1C3F3A] focus:border-transparent dark:bg-gray-900 dark:border-gray-700 dark:text-white"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <svg
                          className="size-5 fill-gray-500 dark:fill-gray-400"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="size-5 fill-gray-500 dark:fill-gray-400"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                            clipRule="evenodd"
                          />
                          <path d="M15.171 13.576l1.414 1.414A10.025 10.025 0 0019.542 10c-1.274-4.057-5.064-7-9.542-7a9.971 9.971 0 00-1.514.12l1.414 1.414a4 4 0 015.642 5.642zM6.702 6.702l2.83 2.83a2 2 0 002.83 2.83l2.83 2.828A10.025 10.025 0 016.702 6.702z" />
                        </svg>
                      )}
                    </span>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-[#1C3F3A] focus:ring-[#1C3F3A]"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <p className="inline-block font-normal text-gray-500 dark:text-gray-400 text-sm">
                    By creating an account you agree to the{" "}
                    <span className="text-gray-800 dark:text-white/90">
                      Terms and Conditions
                    </span>{" "}
                    and our{" "}
                    <span className="text-gray-800 dark:text-white">Privacy Policy</span>.
                  </p>
                </div>

                {/* Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 mt-2 text-sm font-semibold text-white bg-[#1C3F3A] rounded-lg hover:bg-opacity-90 transition-all duration-200 hover:shadow-lg active:scale-95"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>

            {/* Already have account */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <a
                  href="/signin"
                  className="font-semibold text-[#1C3F3A] hover:underline dark:text-[#E3F488]"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div
        className="hidden lg:flex flex-1 w-1/2 relative overflow-hidden"
        style={{ backgroundColor: "#1C3F3A" }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#E3F488" }}
        ></div>

        <div className="relative w-full h-full flex items-center justify-center p-8">
          <img
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4KkSHWH0r1Ie1CoNaxoG4y/0bd8f14f8957ba4a6d71647131a87391/GettyImages-1453843862__1_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000"
            alt="Team discussion"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1C3F3A] via-transparent to-transparent rounded-xl flex items-end p-[4em]">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-2">Secure Compliance Management</h2>
              <p className="text-sm opacity-90">
                Streamline your compliance workflow with our intelligent platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
