import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex gap-5 p-4 bg-[#F3F3F3] my-8">
      <button className="bg-[#D72050] px-6 py-2  text-white">Latest</button>
      <Marquee className="space-x-6">
        <Link to="/" className="mr-8 text-black font-semibold">
          The European Football Championship has entered its knockout phase,
          with several exciting matches lined up.
        </Link>
        <Link to="/" className="mr-8 text-black font-semibold">
          Israel has conducted airstrikes near Rafah, resulting in at least 25
          deaths and 50 injuries as tensions escalate in the region.
        </Link>
        <Link to="/" className="mr-8 text-black font-semibold">
          The US Supreme Court has ruled against affirmative action in college
          admissions, sparking widespread reactions and debates across the
          country.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
