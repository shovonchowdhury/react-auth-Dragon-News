import React from "react";
import { HiOutlineBookmark } from "react-icons/hi2";
import { CiShare2 } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const { author, thumbnail_url, image_url, details, title } = news;
  const { published_date } = author;
  const details2 = details.slice(0, 200);
  const shortDate = published_date && published_date.slice(0, 10);
  return (
    <div>
      <div className="flex justify-between items-center bg-[#F3F3F3] px-5 py-5">
        <div className="flex gap-4 items-center">
          <img
            src={author.img}
            alt=""
            className="w-[40px] h-[40px] rounded-full"
          />
          <div>
            <h4>{author.name}</h4>
            <p>{shortDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-xl">
          <HiOutlineBookmark />
          <CiShare2 />
        </div>
      </div>
      <div className="main-content ">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default NewsCard;
