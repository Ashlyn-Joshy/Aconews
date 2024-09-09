import { useEffect, useState } from "react";
import { news_api } from "../constants";

const useNewsData = () => {
  const [allNews, setAllNews] = useState([]);
  const newsInfo = async () => {
    try {
      const data = await fetch(news_api);
      const result = await data.json();
      setAllNews(result?.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };
  useEffect(() => {
    newsInfo();
  }, []);
  return [allNews];
};

export default useNewsData;
