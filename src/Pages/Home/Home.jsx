import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import LeftNav from "../Shared/LeftNav/LeftNav";
import BreakingNews from "./BreakingNews";
import Rightnav from "../Shared/RightNav/Rightnav";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-4 gap-6 mt-10">
        <div className="">
          <LeftNav></LeftNav>
        </div>
        <div className="lg:col-span-2 ">
          <p className="text-xl font-semibold mb-5">Dragon News Home</p>
          <div className="space-y-5">
            {news.map((anews) => (
              <NewsCard key={anews.id} news={anews}></NewsCard>
            ))}
          </div>
        </div>
        <div className="">
          <Rightnav></Rightnav>
        </div>
      </div>
    </div>
  );
};

export default Home;
