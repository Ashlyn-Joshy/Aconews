import React from "react";
import { Link } from "react-router-dom";

import useNewsData from "../Hooks/useNewsData";
import Shimmer from "../components/Shimmer";
import NewsCard from "../components/NewsCard";
import { science_news } from "../constants";

const ScienceNews = () => {
  const [allNews] = useNewsData(science_news);
  if (!allNews || allNews.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="p-10 dark:bg-black">
      <h1 className="text-3xl font-bold text-black dark:text-white uppercase">
        Science News
      </h1>
      <div>
        {allNews.map((news) => (
          <div
            key={news.title}
            className="border-b-2 border-blue-200 mx-5 my-7 dark:text-white p-2"
          >
            <NewsCard news={news} />
          </div>
        ))}
      </div>
      <div className="flex py-3 justify-center">
        <button className="text-white bg-blue-400 rounded py-2 px-4">
          <Link to={"/technology"}>Previous page</Link>
        </button>
        <button className="text-white bg-blue-400 rounded py-2 px-4 ml-2">
          <Link to={"/health"}>Next Page</Link>
        </button>
      </div>
    </div>
  );
};

export default ScienceNews;
