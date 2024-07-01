import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    createUser(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-base-100 w-1/2 mx-auto  shadow-2xl py-8">
        <h2 className="text-center text-4xl font-semibold">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="URL"
              name="url"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div>
            <input type="checkbox" name="terms" id="tearms" />
            <label htmlFor="terms" className="ml-3">
              Accept terms & conditions
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary bg-[#403F3F] text-xl">
              Register
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account ?{" "}
          <Link to="/login" className="text-[#D72050]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
