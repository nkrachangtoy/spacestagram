import { useEffect, useState, useCallback } from "react";

import PostsList from "./components/PostsList";
import "./App.css";
import axios from "./API/axios";
import requests from "./API/requests";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(requests.mrpFHAZImages);
      const data = response.data.photos;
      console.log(data);
      const transformedPostData = data.map((postData) => {
        return {
          id: postData.id,
          rover: `${postData.rover.name} Rover`,
          title: postData.camera.full_name,
          url: postData.img_src,
          date: postData.earth_date,
        };
      });
      setPosts(transformedPostData);
    } catch (error) {
      setError("Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no posts.</p>;

  if (posts) {
    content = <PostsList posts={posts} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">{content}</header>
    </div>
  );
};

export default App;
