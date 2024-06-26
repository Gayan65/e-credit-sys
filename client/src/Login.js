import React, { useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const msgData = useActionData();
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-600">
      <Form method="POST" action="/">
        <div className=" w-96 p-6 shadow-lg bg-white rounded-md">
          <h1 className=" text-3xl block text-center font-semibold">Login</h1>
          <hr className="mt-3"></hr>
          <div className="mt-3">
            <label className=" block text-base mb-2">Username</label>
            <input
              type="text"
              className=" border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter username"
              name="username"
              required
            />
          </div>
          <div className="mt-3">
            <label className=" block text-base mb-2">Password</label>
            <input
              type="password"
              className=" border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              required
            />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div>
              <input type="checkbox" />
              <label>Remember Me?</label>
            </div>
            <div>
              <a className=" text-indigo-800 font-semibold" href="/">
                Forgot password?
              </a>
            </div>
          </div>
          <div className=" mt-5">
            <button
              type="submit"
              className=" border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
            >
              Login
            </button>
          </div>
        </div>
        {msgData && msgData.error && (
          <p
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            {msgData.error}
          </p>
        )}
      </Form>
    </div>
  );
};

export const loginAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    username: data.get("username"),
    password: data.get("password"),
  };

  console.log(submission);

  // send API
  const loginSuccess = await axios
    .get("http://localhost:4000/")
    .then((response) => {
      return response.data.success;
    })
    .catch((err) => console.log(err));
  console.log(loginSuccess);

  if (!loginSuccess) {
    return { error: "Invalid credentials !" };
  }

  // redirect
  return redirect("/home");
};
