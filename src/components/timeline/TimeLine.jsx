import React, { useState } from "react";
import { useEffect } from "react";
import { Post } from "../post/Post";
import { Share } from "../share/Share";
import axios from "axios";

import "./TimeLine.css";

export const TimeLine = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/63087631c591bf15eff8a0a0");
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};
