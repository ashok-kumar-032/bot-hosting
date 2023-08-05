import React, { useEffect, useState } from "react";
import loader from "../../assets/img/gif/loader.gif";
const Loading = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.style.overflow="unset";
  }, 4000);
  return (
    <div
      id="none"
      className="bg-black min-vh-100 w-100 position-fixed z_50 top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg_effect">
        <span className="preloaderAni mation d-flex align-items-center pointer justify-content-center justify-content-sm-start">
          <img src={loader} alt="loader" />
        </span>
      </div>
    </div>
  );
};
export default Loading;
