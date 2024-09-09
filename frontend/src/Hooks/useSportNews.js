import { useEffect, useState } from "react";
import { sports_news } from "../constants";

const useSportNews = () => {
  const [allNews, setAllNews] = useState([]);
  const newsInfo = async () => {
    try {
      const data = await fetch(sports_news);
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

export default useSportNews;
