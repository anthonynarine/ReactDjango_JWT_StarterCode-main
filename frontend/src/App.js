import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import "./App.css";

// Pages Imports
// import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ApiRequest from "./components/ApiRequest/ApiRequest";
import VideoPage from "./pages/AddComment.js/VideoPage/VideoPage";



// Component Imports
import Navbar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  // const [videoId, setVideoId] = useState("Ke90Tje7VS0");
  // const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   let mounted = true;
  //   if (mounted) {
  //     // getComments();
  //   }
  //   return () => (mounted = false);
  // }, [videoId]);

  // const getComments = async () => {
  //   try {
  //     let response = await axios.get(
  //       `http://127.0.0.1:8000/api/comments?video_id=${videoId}`
  //     );
  //     setComments(response.data);
  //     console.log(response)
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path ="/" element={<ApiRequest />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:videoId" element={<VideoPage />} />
        {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />  */}
      </Routes>
      {/* <div>
        <div>
          div holing video player
          <div>
            <iframe
              id="ytplayer"
              type="text/html"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
              frameborder="0"
            ></iframe>
          </div>
          div w/ comment form
          <div>
            <AddComment videoId={videoId} />
          </div>
          <CommentMapper data={getAllCommentsById} />
          <div></div>
        </div>
        <div></div>
      </div>
      <Footer /> */}
    </div>
  );
}

export default App;
