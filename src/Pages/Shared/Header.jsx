import { useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  //const { name } = useContext(AuthContext);
  return (
    <div className="text-center">
      <img className="mx-auto mt-9 mb-4" src={logo} alt="" />
      <p>Journalism Without Fear or Favour </p>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
