import React from "react";

const Aboutus = () => {
  return (
    <div className="p-10 dark:bg-black dark:text-white">
      <h1 className="text-2xl font-bold text-center pb-5 text-blue-400 uppercase">
        About Us
      </h1>
      <h4 className="text-xl font-semibold text-center text-blue-400 pb-5">
        Welcome to Aconew—the pulse of breaking news and fresh perspectives! 🌟
      </h4>

      <p className="m-5 pb-5">
        At Aconew, we believe that staying informed shouldn’t be a chore; it
        should be an exhilarating journey. Our mission? To empower you with the
        latest happenings, trends, and stories from around the globe—all neatly
        curated and delivered to your fingertips.
      </p>
      <h2 className="text-xl font-bold text-blue-400 pb-5">
        What Sets Us Apart ?
      </h2>
      <ol className="list-decimal m-5">
        <li>
          <p>
            <span className="font-semibold">Speed:</span> We’re faster than a
            caffeine-fueled journalist chasing a scoop. When news breaks, we’re
            already on it, serving up headlines before your morning coffee
            cools.
          </p>
        </li>
        <li>
          <p>
            <span className="font-semibold">Diversity:</span> Aconew isn’t just
            about headlines; it’s about diverse voices. From politics to pop
            culture, tech to travel, we’ve got it all. Our team of passionate
            writers ensures you get a balanced diet of information.
          </p>
        </li>
        <li>
          <p>
            <span className="font-semibold">User-Centric Design:</span> Our
            website is as sleek as a well-pressed suit. Clean layouts, intuitive
            navigation, and a commitment to user experience—that’s our promise.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Aboutus;
