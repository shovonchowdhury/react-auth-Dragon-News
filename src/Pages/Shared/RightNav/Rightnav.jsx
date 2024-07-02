import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import img1 from "../../../assets/qZone1.png";
import img2 from "../../../assets/qZone2.png";
import img3 from "../../../assets/qZone3.png";
import bgImg from "../../../assets/bg1.png";
import { AuthContext } from "../../../Provider/AuthProvider";

const Rightnav = () => {
  const { loginWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        console.log("Google log in successful", res.user);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-xl font-bold">Login With</h2>
        <button
          onClick={handleGoogleLogin}
          className="btn bg-white border w-full border-2"
        >
          <FaGoogle /> Login With Google
        </button>
        <button className="btn bg-white border w-full border-2">
          <FaGithub /> Login With Github
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-5">Find Us On</h2>
        <a className="flex items-center gap-3 border rounded-t-md p-4" href="">
          <SiFacebook /> <span>Facebook</span>
        </a>
        <a className="flex items-center gap-3 border-x  p-4" href="">
          <FaXTwitter /> <span>Twitter</span>
        </a>
        <a className="flex items-center gap-3 border rounded-b-md p-4" href="">
          <FaInstagram /> <span>Instagram</span>
        </a>
      </div>

      <div className="bg-[#F3F3F3] p-4">
        <h2 className="text-xl font-bold mb-5">Q Zone</h2>
        <div className="space-y-5">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="py-16 px-10 text-center space-y-6 bg-[url(/src/assets/bg.png)] text-white">
        <h2 className="text-3xl font-bold ">Create an Amazing Newspaper</h2>
        <h3 className="font-normal">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </h3>
        <button className="bg-[#D72050] text-xl font-semibold p-4">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Rightnav;
