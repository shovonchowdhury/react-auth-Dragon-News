import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { loginUser, user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((res) => {
        location?.state ? navigate(location.state) : navigate("/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-base-100 w-1/2 mx-auto  shadow-2xl py-8">
        <h2 className="text-center text-4xl font-semibold">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-[#403F3F] text-xl">
              Login
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Dont’t Have An Account ?{" "}
          <Link to="/register" className="text-[#D72050]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
