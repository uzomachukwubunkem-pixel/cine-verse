import { Link } from "react-router-dom";

const VerificationForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#08142b] to-[#2b0d4f] p-6">
      <div className="w-full max-w-md bg-[#0f1a2e] border border-slate-700 rounded-3xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          Verify Account
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Enter the verification code sent to your email address.
        </p>

        <form className="space-y-4">
          {/* First Name */}
          <input
            type="text"
            placeholder="123456"
            className="w-full p-3 rounded-xl bg-[#08142b] border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:opacity-90 transition"
          >
            Verify Account
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/get-started/auth/sign-in"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerificationForm;
