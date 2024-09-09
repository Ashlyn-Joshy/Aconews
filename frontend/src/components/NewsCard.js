import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="lg:flex">
      <div>
        <img
          src={news.image}
          alt="news"
          className="w-full h-48 object-cover md:w-64 md:h-64 lg:w-96 lg:h-64"
        />
      </div>
      <div className="md:px-5">
        <h2 className="font-bold text-lg md:text-2xl">{news.title}</h2>
        <p className="font-semibold text-lg text-blue-400">
          <span>{news.source.name}</span>
        </p>
        <p>{news.description}</p>
        <button className="rounded text-white bg-blue-400 py-2 px-4">
          <Link to={news.url}>Read More</Link>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
