import React from "react";

import Post from "./Post";

const PostList = (props) => {
  return (
    <ul>
      {props.posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          rover={post.rover}
          date={post.date}
          url={post.url}
        />
      ))}
    </ul>
  );
};

export default PostList;
