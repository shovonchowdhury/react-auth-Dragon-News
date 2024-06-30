import React from "react";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import LeftNav from "../Shared/LeftNav/LeftNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="border">
          <LeftNav></LeftNav>
        </div>
        <div className="lg:col-span-2 border">
          <p className="text-3xl">Home Inner Content</p>
        </div>
        <div className="border">
          <LeftNav></LeftNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
