import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import LeftNav from "../Shared/LeftNav/LeftNav";
import BreakingNews from "./BreakingNews";
import Rightnav from "../Shared/RightNav/Rightnav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-4 gap-6 mt-10">
        <div className="">
          <LeftNav></LeftNav>
        </div>
        <div className="lg:col-span-2 border">
          <p className="text-3xl">Home Inner Content</p>
        </div>
        <div className="">
          <Rightnav></Rightnav>
        </div>
      </div>
    </div>
  );
};

export default Home;
