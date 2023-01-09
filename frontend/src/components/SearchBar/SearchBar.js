import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = ({search, setSearch,fetchVideos}) => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <div className="searchbar">
        <div className="searchmessage"> Search For Videos</div>
        <div className="searchbarform">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          ></input>
          <div>
            <button onClick={() => fetchVideos()}>
              Click To Search
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;