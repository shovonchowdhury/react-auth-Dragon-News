import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCalendarClearOutline } from "react-icons/io5";

const LeftNav = () => {
  const [newsCategories, setNewsCategories] = useState([]);
  const [navNews, setNavNews] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setNewsCategories(data));
  }, []);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNavNews(data));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold mb-5">All Categories</h2>
        {newsCategories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            className="block px-16 py-4 text-[#9F9F9F] text-xl font-medium hover:bg-[#E7E7E7] hover:text-black"
          >
            {category.name}
          </Link>
        ))}

        <div className="space-y-5">
          {navNews.slice(0, 4).map((news) => (
            <div key={news.id} className="hover:bg-[#E7E7E7] p-3">
              <Link className="space-y-5">
                <img className="rounded-md" src={news.image_url} alt="" />
                <h2 className="font-semibold text-xl">{news.title}</h2>
                <div className="flex gap-7">
                  <span className="font-medium">International</span>
                  <div className="flex items-center gap-2 text-[#9F9F9F]">
                    <IoCalendarClearOutline />
                    <span>Jan 4, 2024</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
