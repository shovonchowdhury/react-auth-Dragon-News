import React from "react";
import { HiOutlineBookmark } from "react-icons/hi2";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

const NewsCard = ({ news }) => {
  const {
    author,
    thumbnail_url,
    image_url,
    details,
    title,
    _id,
    rating,
    total_view,
  } = news;
  const { published_date } = author;
  const details2 = details.slice(0, 200);
  const shortDate = published_date && published_date.slice(0, 10);
  return (
    <div className="border rounded-sm">
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
      <div className="main-content my-4 mx-6 border-b space-y-8">
        <h2 className="text-xl font-bold">{title}</h2>
        <img src={image_url} alt="" />
        {details.length > 200 ? (
          <p className="pb-5">
            {details.slice(0, 200)}...
            <Link to={`/news/${_id}}`} className="text-[#FF8C47]">
              Read More
            </Link>
          </p>
        ) : (
          <p className="pb-5">{details}</p>
        )}
      </div>
      <div className="mx-5 mb-5 flex justify-between items-center ">
        <div className="flex text-[#FF8C47] text-xl gap-1 items-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <span className="text-[#706F6F] ml-1 font-medium">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center text-xl gap-3 text-[#706F6F]">
          <AiFillEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
