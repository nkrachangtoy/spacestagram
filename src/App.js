import { useEffect, useState } from "react";
import "./App.css";
import axios from "./API/axios";
import requests from "./API/requests";

const App = () => {
  const [images, setImages] = useState();

  const fetchData = async () => {
    const request = await axios.get(requests.apodImages);
    setImages(request.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spacestagram</h1>
        <h2>{images.title}</h2>
        <h3>{images.date}</h3>
        <img src={images.url} alt={images.title} />
        <p>{images.explanation}</p>
      </header>
    </div>
  );
};

export default App;
