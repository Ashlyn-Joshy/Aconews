import React, { useState } from "react";
import { Link } from "react-router-dom";

import useNewsData from "../Hooks/useNewsData";
import NewsCard from "../components/NewsCard";
import Shimmer from "../components/Shimmer";
import Search from "../components/Search";
import { news_api } from "../constants";

const Home = () => {
  const [allNews] = useNewsData(news_api);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = allNews.filter((news) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!allNews || allNews.length === 0) {
    return (
      <>
        <Search onSearch={setSearchQuery} />
        <Shimmer />
      </>
    );
  }
  return (
    <div className="md:p-10 dark:bg-black">
      <h1 className="text-3xl font-bold text-black dark:text-white uppercase">
        news articles
      </h1>
      <Search onSearch={setSearchQuery} />
      <div>
        {filteredNews.length === 0 ? (
          <p className="text-red-500">No news found for "{searchQuery}"</p>
        ) : (
          filteredNews.map((news) => (
            <div
              key={news.title}
              className="border-b-2 border-blue-200 mx-5 my-7 dark:text-white p-2"
            >
              <NewsCard news={news} />
            </div>
          ))
        )}
      </div>
      <div className="py-3 text-center">
        <button className="text-white bg-blue-400 rounded py-2 px-4">
          <Link to={"/general"}>Next Page</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
