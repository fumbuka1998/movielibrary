// 

import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import '../Banner.css';
import "bootstrap/dist/css/bootstrap.min.css";



function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backdropPosition: "center center",
      }}
    >
      {/* Background image */}
      <div className="banner_contents">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button"><i className="bi bi-play"></i>Play</button>
          <button className="banner_button">More Info </button>
        </div>

        
        
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
