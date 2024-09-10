import React from "react";
import useNewsData from "../Hooks/useNewsData";
import NewsCard from "../components/NewsCard";
import Shimmer from "../components/Shimmer";
import Search from "../components/Search";
import { news_api } from "../constants";

const Home = () => {
  const [allNews] = useNewsData(news_api);
  if (!allNews || allNews.length === 0) {
    return (
      <>
        <Search />
        <Shimmer />
      </>
    );
  }
  return (
    <div className="md:p-10 dark:bg-black">
      <h1 className="text-3xl font-bold text-black dark:text-white uppercase">
        news articles
      </h1>
      <Search />
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

export default Home;
