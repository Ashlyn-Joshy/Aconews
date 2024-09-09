import { useEffect, useState } from "react";
import { general_news } from "../constants";

const useGeneralNews = () => {
  const [allNews, setAllNews] = useState([]);
  const newsInfo = async () => {
    try {
      const data = await fetch(general_news);
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

export default useGeneralNews;
