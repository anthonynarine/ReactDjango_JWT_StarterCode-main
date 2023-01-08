import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

let formValues = {
  text: "",
  video_id: "",
};

const AddCommentPage = () => {
  const [user, token] = useAuth();
  const navigate = useNavigate;
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    formValues,
    postNewComment
  );

  async function postNewComment() {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/comments/",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Comment:{" "}
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
};

export default AddCommentPage;
