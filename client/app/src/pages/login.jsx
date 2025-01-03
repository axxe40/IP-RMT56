import iconGuitar from "../assets/icon guitar.png"
import iconGoogle from "../assets/icon google.png"
import iconGithub from "../assets/icon github.png"
import { NavLink, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/"); // Arahkan ke halaman beranda ("/")
  };
  return (
    <>
      <div className="flex min-h-screen">
        {/* Left Section (Image and Illustration) */}
        <div className="hidden lg:flex items-center justify-center w-1/2 bg-orange-200">
          <h2 className="absolute top-12  text-center text-4xl font-bold text-black">
            Your Guitar
          </h2>
          <img
            src={iconGuitar}
            alt="Guitar Illustration"
            className="mr-16 "
          />
        </div>
        {/* Right Section (Form) */}
        <div className="flex items-center justify-center w-full lg:w-1/2 bg-slate-50">
          <div className="max-w-md w-full px-8 py-10 bg-orange-200 shadow-lg rounded-md">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Your Guitar
            </h2>
            <form>
              {/* Email Input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full py-2 pl-3 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500  focus:outline-none"
                />
              </div>
              {/* Password Input */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full py-2 pl-3 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500  focus:outline-none"
                />
              </div>
              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 mb-4"
              >
                Login
              </button>
            </form>
            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-sm text-gray-500">Or login with</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            {/* Social Login Buttons */}
            <div className="flex flex-col space-y-2">
              <button className="flex items-center justify-center w-full py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
                <img
                  src={iconGoogle}
                  alt="Google Icon"
                  className="w-5 h-5 mr-3"
                />
                <span className="text-gray-700">Login with Google</span>
              </button>
              <button className="flex items-center justify-center w-full py-2 px-4 bg-black text-white border border-black rounded-md shadow-sm hover:bg-gray-900">
                <img
                  src={iconGithub}
                  alt="GitHub Icon"
                  className="w-5 h-5 mr-3 rounded-sm"
                />
                <span>Login with GitHub</span>
              </button>
            </div>
            {/* Register Link */}
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't you have an account yet?
              <NavLink to="/register" className="text-blue-500 hover:underline ml-1">
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
