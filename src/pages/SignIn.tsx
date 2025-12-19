import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserTie, FaHome, FaTools } from "react-icons/fa";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleDashboardSelect = (type: string) => {
    if (type === "client") navigate("/client-dashboard");
    if (type === "resident") navigate("/resident-dashboard");
    if (type === "contractor") navigate("/contractor-dashboard");
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950">
      {/* --- Popup Modal --- */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl w-[42rem] shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden animate-scaleIn">
            {/* Glow Accent */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1C3F3A]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#1C3F3A]/20 rounded-full blur-3xl"></div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-[#1C3F3A] dark:text-white text-center mb-8 tracking-wide">
              Select Dashboard
            </h2>

            {/* Options Grid */}
            <div className="grid grid-cols-3 gap-6">
              {/* CLIENT */}
              <button
                onClick={() => handleDashboardSelect("client")}
                className="group p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center gap-3"
              >
                <span className="text-4xl text-[#1C3F3A] group-hover:scale-110 transition-transform">
                  <FaUserTie />
                </span>
                <span className="text-xs font-bold text-gray-700 dark:text-gray-200 tracking-wide">
                  CLIENT DASHBOARD
                </span>
              </button>

              {/* RESIDENT */}
              <button
                onClick={() => handleDashboardSelect("resident")}
                className="group p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center gap-3"
              >
                <span className="text-4xl text-[#1C3F3A] group-hover:scale-110 transition-transform">
                  <FaHome />
                </span>
                <span className="text-xs font-bold text-gray-700 dark:text-gray-200 tracking-wide">
                  RESIDENT DASHBOARD
                </span>
              </button>

              {/* CONTRACTOR */}
              <button
                onClick={() => handleDashboardSelect("contractor")}
                className="group p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center gap-3"
              >
                <span className="text-4xl text-[#1C3F3A] group-hover:scale-110 transition-transform">
                  <FaTools />
                </span>
                <span className="text-xs font-bold text-gray-700 dark:text-gray-200 tracking-wide">
                  CONTRACTOR DASHBOARD
                </span>
              </button>
            </div>

            {/* Cancel Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 w-full text-sm text-gray-600 dark:text-gray-300 hover:underline text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1 w-full lg:w-1/2">
        <div className="w-full max-w-md sm:pt-6 pt-4 px-4 mx-auto mb-5"></div>

        <div className="flex flex-col justify-center flex-1 w-full max-w-[37em] px-0 mx-auto">
          <div>
            {/* Logo */}
            <div className="mb-[5em]">
              <div className="h-12 flex items-center text-xl font-bold text-[#1C3F3A] dark:hidden">
                <img
                  src="https://complyblock.betaserver.host/wp-content/uploads/2025/09/Comply-Block-01-e1759346885138.png"
                  alt=""
                  className="h-20"
                />
              </div>
              <div className="h-12 flex items-center text-xl font-bold text-[#1C3F3A] dark:block md:hidden">
                <img
                  src="https://complyblock.betaserver.host/wp-content/uploads/2025/09/Comply-Block-04-e1759264476301.jpg"
                  alt=""
                  className="h-20"
                />
              </div>
            </div>

            {/* Header */}
            <div className="mb-8">
              <h1 className="mb-2 font-bold text-2xl sm:text-3xl text-[#1C3F3A] dark:text-white">
                Sign In
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enter your email and password to access your account
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 mt-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C3F3A] focus:border-transparent dark:bg-gray-900 dark:border-gray-800 dark:text-white transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C3F3A] focus:border-transparent dark:bg-gray-900 dark:border-gray-800 dark:text-white transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute z-30 -translate-y-1/2 right-4 top-1/2 text-gray-500 hover:text-[#1C3F3A] transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                          clipRule="evenodd"
                        />
                        <path d="M15.171 13.576l1.414 1.414A10.025 10.025 0 0019.542 10c-1.274-4.057-5.064-7-9.542-7a9.971 9.971 0 00-1.514.12l1.414 1.414a4 4 0 015.642 5.642zM6.702 6.702l2.83 2.83a2 2 0 002.83 2.83l2.83 2.828A10.025 10.025 0 016.702 6.702z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="w-4 h-4 text-[#1C3F3A] border-gray-300 rounded cursor-pointer accent-[#1C3F3A]"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-700 cursor-pointer dark:text-gray-400"
                  >
                    Keep me logged in
                  </label>
                </div>
                <a
                  href="/reset-password"
                  className="text-sm text-[#1C3F3A] hover:underline dark:text-[#E3F488] font-medium"
                >
                  Forgot password?
                </a>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-3 mt-6 text-sm font-semibold text-white bg-[#1C3F3A] rounded-lg hover:bg-opacity-90 transition-all duration-200 hover:shadow-lg active:scale-95"
              >
                Sign In
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don&apos;t have an account?{" "}
                <a
                  href="/signup"
                  className="font-semibold text-[#1C3F3A] hover:underline dark:text-[#E3F488]"
                >
                  Sign Up
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
        {/* Background accent */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#E3F488" }}
        ></div>

        {/* Image */}
        <div className="relative w-full h-full flex items-center justify-center p-8">
          <img
            src="https://complyblock.betaserver.host/wp-content/uploads/2025/09/employees-discussing-business-strategy-plan-analyzing-financial-report-statistics.jpg"
            alt="Team discussion"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />

          {/* Overlay content */}
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
