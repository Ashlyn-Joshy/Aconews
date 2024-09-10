import { useEffect, useState } from "react";

const useNewsData = (news_api) => {
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
  }, [news_api]);
  return [allNews];
};

export default useNewsData;
