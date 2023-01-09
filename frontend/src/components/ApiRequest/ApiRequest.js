import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { DATA } from "../LocalData/LocalData";


import { KEY } from "../../localKey";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoMapper from "../../components/VideoMapper/VideoMapper";

const ApiRequest = (props) => {
  const [videoSearch, setVideoSearch] = useState(DATA[0]["items"]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      //fetchVideos()
    }
    return () => (mounted = false);
  }, []);

  const fetchVideos = async () => {
    try {
        console.log(search)
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY}&type=video&part=snippet&maxResults=5`
      );
      
      console.log(response.data.items)
      setVideoSearch(response.data.items);
     
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div>
      <div>
      <SearchBar fetchVideos={fetchVideos} search={search} setSearch={setSearch}/>
        <div>
        <VideoMapper videos={videoSearch} />
        </div>
      </div>
    </div>
  );
};

export default ApiRequest;