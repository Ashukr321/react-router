import React from "react";
import { useNavigate } from "react-router-dom";
const Service = () => {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/",{replace:true});
  };
  return (
    <div>
      <button className="btn" onClick={homeHandler}>
        go to home
      </button>
    </div>
  );
};

export default Service;
