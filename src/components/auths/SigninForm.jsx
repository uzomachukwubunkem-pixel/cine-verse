import { Link } from "react-router-dom";

const SigninForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#08142b] to-[#2b0d4f] p-6">
      <div className="w-full max-w-md bg-[#0f1a2e] border border-slate-700 rounded-3xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          Signin to your Account
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Join and start discovering amazing movies 🎬
        </p>

        <form className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-xl bg-[#08142b] border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-[#08142b] border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:opacity-90 transition"
          >
            Sign in
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-gray-400 text-center mt-6">
          Don't have an account?
          <Link
            to="/get-started/auth/sign-up"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;
