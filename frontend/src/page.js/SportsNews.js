import React from "react";

import useNewsData from "../Hooks/useNewsData";
import Shimmer from "../components/Shimmer";
import NewsCard from "../components/NewsCard";
import { sports_news } from "../constants";

const SportsNews = () => {
  const [allNews] = useNewsData(sports_news);
  if (!allNews || allNews.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="p-10 dark:bg-black">
      <h1 className="text-3xl font-bold text-black dark:text-white uppercase">
        Sports News
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
    </div>
  );
};

export default SportsNews;
