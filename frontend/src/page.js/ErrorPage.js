import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center mt-10">
      <h1 className="">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-red-600">
        ⚠️ {error.status} {error.statusText}
      </p>
    </div>
  );
};

export default ErrorPage;
