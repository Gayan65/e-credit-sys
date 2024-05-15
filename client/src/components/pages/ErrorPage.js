import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <div className=" w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 className=" text-3xl block text-center font-semibold">
          Page Not found
        </h1>
        <hr className="mt-3"></hr>
        <div className="mt-3">
          <label className=" block text-center mb-2">
            This page cannot be found. Check the url that you are trying to
            reach.
          </label>
          <div className=" mt-5">
            <Link
              to={"/home"}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
