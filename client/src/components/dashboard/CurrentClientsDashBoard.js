import React from "react";
import { useParams } from "react-router-dom";

const CurrentClientsDashBoard = () => {
  const params = useParams();
  console.log(params.view);
  return <div>CurrentClientsDashBoard : {params.view}</div>;
};

export default CurrentClientsDashBoard;
