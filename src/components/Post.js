import React from "react";

const Post = (props) => {
  return (
    <li>
      <div>
        <img src={props.url} alt={props.title} />
        <h3>
          {props.rover} - {props.title}
        </h3>
        <p>{props.date}</p>
      </div>
    </li>
  );
};

export default Post;
