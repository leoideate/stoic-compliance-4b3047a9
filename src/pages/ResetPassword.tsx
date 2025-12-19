import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password requested for:", email);
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950">
      {/* Left Section - Form */}
      <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
        {/* Main form box */}
        <div className="flex flex-col justify-center flex-1 w-full max-w-[37em] px-4 mx-auto">
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <Link to="/signin">
                  <IoMdArrowRoundBack size={30} color="#1C3F3A" />
                </Link>
                <h1 className="mb-2 font-bold text-2xl sm:text-3xl text-[#1C3F3A] dark:text-white">
                  Reset Password
                </h1>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enter your email address and we&apos;ll send you a link to reset your
                password.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 mt-1 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C3F3A] focus:border-transparent dark:bg-gray-900 dark:border-gray-800 dark:text-white transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-2 text-sm font-semibold text-white bg-[#1C3F3A] rounded-lg hover:bg-opacity-90 transition-all duration-200 hover:shadow-lg active:scale-95"
              >
                Send Reset Link
              </button>
            </form>

            {/* Footer link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Remember your password?{" "}
                <a
                  href="/signin"
                  className="font-semibold text-[#1C3F3A] hover:underline dark:text-[#E3F488]"
                >
                  Back to Sign In
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
