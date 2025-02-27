import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import iconGithub from "../assets/icon github.png";
import iconGuitar from "../assets/icon guitar.png";
import { p2Api } from "../helpers/http-client";


export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("jon@mail.com");
  const [password, setPassword] = useState("12345");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await p2Api.post("/login", { email, password });
      toast.success("login successful");
      localStorage.setItem("access_token", data.access_token);
      setTimeout(() => {
        navigate("/");
      }, 300);
    } catch (error) {
      console.log("handleLogin error:", error);
      const errorMessage = error.response.data.message 
      toast.error(errorMessage);
    } 
      setLoading(false);
  };

  async function handleGoogleLogin(response) {
    setLoading(true);
    try {
      const { data } = await p2Api.post("/googleLogin", { googleToken: response.credential });
      toast.success("login successful");
      localStorage.setItem("access_token", data.access_token);
      setTimeout(() => {
        navigate("/");
      }, 700);
    } catch (error) {
      console.log("Google login error:", error.response.data);
      const errorMessage = error.response.data.message 
      toast.error(errorMessage);
    } 
      setLoading(false);
  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleGoogleLogin,
    });
    google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  const handleGitHubLogin = () => {
    setLoading(true);
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      const getGitHubToken = async () => {
        try {
          const { data } = await p2Api.post("/githubLogin", { code });
          toast.success("login successful");
          localStorage.setItem("access_token", data.access_token);
          setTimeout(() => {
            navigate("/");
          }, 400);
        } catch (error) {
          console.log("GitHub login error:", error);
          const errorMessage = error.response.data.message 
          toast.error(errorMessage);
        } 
      setLoading(false);
      };
      getGitHubToken();
    } else {
      window.location.href = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&scope=user:email`;
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin h-10 w-10 border-4 border-sky-300 border-t-transparent rounded-full"></div>
        </div>
      )}
      <div className="flex min-h-screen">
        <div className="hidden lg:flex items-center justify-center w-1/2 bg-orange-200">
          <h2 className="absolute top-12 text-center text-4xl font-bold text-black">Your Guitar</h2>
          <img src={iconGuitar} alt="Guitar Illustration" className="mr-16 " />
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 bg-slate-50">
          <div className="max-w-md w-full px-8 py-10 bg-orange-200 shadow-lg rounded-md">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Guitar</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full py-2 pl-3 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full py-2 pl-3 rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 mb-4"
                disabled={loading}
              >
                Login
              </button>
            </form>
            <div className="flex items-center my-3">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-sm text-gray-500">Or login with</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div className="flex flex-col space-y-2">
              <div id="buttonDiv" className="flex items-center justify-center w-auto py-1.5"></div>
              <button
                onClick={handleGitHubLogin}
                className="flex items-center justify-center w-full py-2 px-4 bg-black text-white border border-black rounded-md shadow-sm hover:bg-gray-900"
                disabled={loading}
              >
                <img
                  src={iconGithub}
                  alt="GitHub Icon"
                  className="w-5 h-5 mr-3 rounded-sm"
                />
                <span>Login with GitHub</span>
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don&apos;t you have an account yet?
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