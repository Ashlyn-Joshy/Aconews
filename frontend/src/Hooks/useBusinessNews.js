import { useEffect, useState } from "react";
import { business_news } from "../constants";

const useBusinessNews = () => {
  const [allNews, setAllNews] = useState([]);
  const newsInfo = async () => {
    try {
      const data = await fetch(business_news);
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

export default useBusinessNews;
