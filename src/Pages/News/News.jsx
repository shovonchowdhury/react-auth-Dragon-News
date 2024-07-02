import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import Rightnav from "../Shared/RightNav/Rightnav";
import { IoArrowBack } from "react-icons/io5";

const News = () => {
  const { id } = useParams();
  //const [allNews, setAllNews] = useState([]);
  const allNews = useLoaderData();

  // useEffect(() => {
  //   fetch("/news.json")
  //     .then((res) => res.json())
  //     .then((data) => setAllNews(data));
  // }, []);

  const currentNews = allNews.filter((anews) => anews._id === id);

  const { _id, image_url, title, details } = currentNews[0];
  return (
    <div>
      <Header></Header>
      <br />
      <Navbar></Navbar>
      <div className="grid grid-cols-4 gap-6 mt-8">
        <div className="col-span-3">
          <h2 className="text-xl font-semibold mb-4">Dragon News</h2>
          <div className="content p-8 space-y-5 border rounded-md">
            <img className="w-[789px] h-[411px]" src={image_url} alt="" />
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-[#706F6F] font-normal">{details}</p>
            <button className="flex items-center bg-[#D72050] text-white py-2 px-7 gap-1">
              <IoArrowBack />
              <span>All news in this category</span>
            </button>
          </div>
        </div>
        <Rightnav></Rightnav>
      </div>
    </div>
  );
};

export default News;
